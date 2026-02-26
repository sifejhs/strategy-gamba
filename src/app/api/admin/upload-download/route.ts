import { NextRequest } from "next/server";
import { checkAdminCookie } from "@/lib/admin-auth";
import { setDownloadUrl } from "@/lib/download-store";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const ZIP_PATH = "downloads/tools.zip";
const MAX_SIZE = 4.5 * 1024 * 1024; // 4.5 MB (Vercel server body limit)

export async function POST(request: NextRequest) {
  const ok = await checkAdminCookie();
  if (!ok) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  let file: File;
  try {
    const formData = await request.formData();
    const f = formData.get("file");
    if (!f || !(f instanceof File)) {
      return new Response(JSON.stringify({ error: "Missing file" }), { status: 400 });
    }
    file = f;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid form" }), { status: 400 });
  }

  const name = (file.name || "").toLowerCase();
  if (!name.endsWith(".zip")) {
    return new Response(JSON.stringify({ error: "Only .zip files are allowed" }), { status: 400 });
  }

  if (file.size > MAX_SIZE) {
    return new Response(
      JSON.stringify({
        error: `File too large (max ${Math.round(MAX_SIZE / 1024 / 1024)} MB). Use Vercel Blob for larger files.`,
      }),
      { status: 400 }
    );
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (token) {
    try {
      const { put } = await import("@vercel/blob");
      const buffer = Buffer.from(await file.arrayBuffer());
      const blob = await put(ZIP_PATH, buffer, {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/zip",
      });
      await setDownloadUrl(blob.url);
      return new Response(
        JSON.stringify({ ok: true, url: blob.url, message: "Uploaded. All download buttons now use this file." }),
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (err) {
      console.error("Blob upload error:", err);
      return new Response(
        JSON.stringify({ error: "Upload failed. Check BLOB_READ_WRITE_TOKEN." }),
        { status: 500 }
      );
    }
  }

  // Local dev: write to public/downloads/tools.zip
  try {
    const dir = path.join(process.cwd(), "public", "downloads");
    await mkdir(dir, { recursive: true });
    const filePath = path.join(dir, "tools.zip");
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer);
    return new Response(
      JSON.stringify({
        ok: true,
        url: "/downloads/tools.zip",
        message: "Uploaded. All download buttons now use this file.",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("File write error:", err);
    return new Response(JSON.stringify({ error: "Failed to save file" }), { status: 500 });
  }
}
