/**
 * Current download file URL for all "Download" buttons.
 * - Local/dev: we write to public/downloads/tools.zip → URL is /downloads/tools.zip
 * - Vercel (with BLOB_READ_WRITE_TOKEN): zip and config URL stored in Vercel Blob
 */

const FALLBACK_URL = "/downloads/tools.zip";
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
  return FALLBACK_URL;
}

export async function setDownloadUrl(url: string): Promise<void> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return;
  const { put } = await import("@vercel/blob");
  await put(CONFIG_PATH, url, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}
