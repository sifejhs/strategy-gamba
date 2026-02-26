import { getSitemapSegment } from "@/lib/sitemap-entries";
import { getSitemapSegmentCount } from "@/lib/sitemap-entries";

/** One sitemap segment (~5k URLs) for crawl budget efficiency. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const segmentIndex = parseInt(id, 10);
  if (Number.isNaN(segmentIndex) || segmentIndex < 0) {
    return new Response("Not found", { status: 404 });
  }
  const count = getSitemapSegmentCount();
  if (segmentIndex >= count) {
    return new Response("Not found", { status: 404 });
  }

  const entries = getSitemapSegment(segmentIndex);
  const urlset = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastModified.toISOString().split("T")[0]}</lastmod>
    <changefreq>${e.changeFrequency}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
