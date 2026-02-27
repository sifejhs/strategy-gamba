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

  const buffer = Buffer.from(await file.arrayBuffer());

  if (token) {
    try {
      const { put, del, list } = await import("@vercel/blob");

      // Delete existing file first to avoid conflicts
      try {
        const { blobs } = await list({ prefix: "downloads/" });
        const existing = blobs.find((b) => b.pathname === ZIP_PATH);
        if (existing) {
          await del(existing.url);
        }
      } catch {
        // ignore delete errors
      }

      const blob = await put(ZIP_PATH, buffer, {
        access: "public",
        addRandomSuffix: false,
        contentType: "application/zip",
      });
      await setDownloadUrl(blob.url);
      return new Response(
        JSON.stringify({ ok: true, url: blob.url, message: "Uploaded. All download buttons now use this file." }),
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("Blob upload error:", message);
      return new Response(
        JSON.stringify({ error: `Upload failed: ${message}` }),
        { status: 500 }
      );
    }
  }

  // Local dev fallback: write to public/downloads/tools.zip
  try {
    const dir = path.join(process.cwd(), "public", "downloads");
    await mkdir(dir, { recursive: true });
    const filePath = path.join(dir, "tools.zip");
    await writeFile(filePath, buffer);
    return new Response(
      JSON.stringify({
        ok: true,
        url: "/downloads/tools.zip",
        message: "Uploaded. All download buttons now use this file.",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("File write error:", message);
    return new Response(JSON.stringify({ error: `Failed to save file: ${message}` }), { status: 500 });
  }
}
