import { getDownloadUrl } from "@/lib/download-store";
import { readFile } from "fs/promises";
import { join } from "path";

/** Random version for download filename: e.g. 6.22, 8.11, 9.33 */
function randomVersion(): string {
  return (Math.random() * 6 + 5).toFixed(2);
}

/** Serves the current download file with filename Wu-predictorX.XX.zip (or .rar). Version is random each time. */
export async function GET() {
  const url = await getDownloadUrl();
  const isRar = url.toLowerCase().includes(".rar");
  const ext = isRar ? "rar" : "zip";
  const version = randomVersion();
  const filename = `Wu-predictor${version}.${ext}`;
  const contentType = isRar ? "application/vnd.rar" : "application/zip";

  let buffer: Buffer;
  if (url.startsWith("http")) {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return new Response("Download unavailable", { status: 502 });
    }
    const arr = await res.arrayBuffer();
    buffer = Buffer.from(arr);
  } else {
    const pathname = url.replace(/^\//, "");
    const filePath = join(process.cwd(), "public", pathname);
    try {
      buffer = await readFile(filePath);
    } catch {
      return new Response("File not found", { status: 404 });
    }
  }

  return new Response(buffer, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
      "Content-Length": String(buffer.length),
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
