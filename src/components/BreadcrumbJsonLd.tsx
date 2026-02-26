import { SITE_BASE } from "@/lib/seo-hreflang";
import type { Locale } from "@/lib/locales";

type Crumb = { name: string; path: string };

/** BreadcrumbList JSON-LD – Google rich breadcrumbs, all search engines */
export default function BreadcrumbJsonLd({
  lang,
  items,
}: {
  lang: Locale;
  items: Crumb[];
}) {
  const base = SITE_BASE;
  const list = items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${base}/${item.path}`,
  }));
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
