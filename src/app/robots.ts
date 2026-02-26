import type { MetadataRoute } from "next";
import { SITE_BASE } from "@/lib/seo-hreflang";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: ["/", "/api/sitemap-index", "/api/sitemap-segment/"], disallow: ["/admin", "/admin/", "/api/"] },
    sitemap: `${SITE_BASE}/sitemap.xml`,
  };
}
