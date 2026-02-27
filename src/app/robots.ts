import type { MetadataRoute } from "next";
import { SITE_BASE } from "@/lib/seo-hreflang";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/admin/"] },
    sitemap: `${SITE_BASE}/sitemap.xml`,
  };
}
