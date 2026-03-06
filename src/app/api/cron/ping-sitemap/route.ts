import { NextResponse } from "next/server";
import { SITE_BASE } from "@/lib/seo-hreflang";

/** Vercel Cron: ping Google with sitemap URL for reliable indexing (daily). */
export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const sitemapUrl = `${SITE_BASE}/sitemap.xml`;
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  try {
    await fetch(pingUrl, { method: "GET", cache: "no-store" });
  } catch {
    // non-fatal
  }
  return NextResponse.json({ ok: true, sitemap: sitemapUrl });
}
