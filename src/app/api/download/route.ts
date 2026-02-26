import { getDownloadUrl } from "@/lib/download-store";

/** Redirects to the current download file (admin-uploaded .zip). Used by all Download buttons. */
export async function GET() {
  const url = await getDownloadUrl();
  return new Response(null, {
    status: 302,
    headers: { Location: url },
  });
}
