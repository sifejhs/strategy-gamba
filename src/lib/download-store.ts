/**
 * Current download file URL for all "Download" buttons.
 * - Local/dev: public/downloads/archive.zip or .rar; current.json stores which file.
 * - Vercel (with BLOB_READ_WRITE_TOKEN): .zip or .rar blob URL stored in config.
 */

const FALLBACK_URL = "/downloads/archive.zip";
const CONFIG_PATH = "config/download-url.txt";

export async function getDownloadUrl(): Promise<string> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { list } = await import("@vercel/blob");
      const { blobs } = await list({ prefix: "config/" });
      const configBlob = blobs.find((b) => b.pathname === CONFIG_PATH);
      if (configBlob?.url) {
        const res = await fetch(configBlob.url);
        if (res.ok) {
          const url = await res.text();
          if (url?.startsWith("http")) return url.trim();
        }
      }
    } catch {
      // fall through to fallback
    }
  }
  try {
    const { readFile } = await import("fs/promises");
    const { join } = await import("path");
    const currentPath = join(process.cwd(), "public", "downloads", "current.json");
    const data = await readFile(currentPath, "utf-8");
    const parsed = JSON.parse(data) as { file?: string };
    if (parsed?.file && typeof parsed.file === "string") {
      return `/downloads/${parsed.file}`;
    }
  } catch {
    // no current.json or invalid
  }
  return FALLBACK_URL;
}

export async function setDownloadUrl(url: string): Promise<void> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return;
  const { put, del, list } = await import("@vercel/blob");

  // Delete existing config first to avoid conflicts
  try {
    const { blobs } = await list({ prefix: "config/" });
    const existing = blobs.find((b) => b.pathname === CONFIG_PATH);
    if (existing) {
      await del(existing.url);
    }
  } catch {
    // ignore
  }

  await put(CONFIG_PATH, url, {
    access: "public",
    addRandomSuffix: false,
  });
}
