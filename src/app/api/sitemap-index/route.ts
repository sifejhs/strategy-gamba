import { getSitemapSegmentCount } from "@/lib/sitemap-entries";
import { SITE_BASE } from "@/lib/seo-hreflang";

/** Sitemap index – points to segment files (~5k URLs each) for reliable crawl budget. */
export function GET() {
  const count = getSitemapSegmentCount();
  const base = SITE_BASE;
  const now = new Date().toISOString().split("T")[0];

  const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from({ length: count }, (_, i) => `  <sitemap>
    <loc>${base}/sitemap/${i}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(index, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
