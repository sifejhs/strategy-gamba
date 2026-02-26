import { SITE_BASE } from "@/lib/seo-hreflang";
import type { Locale } from "@/lib/locales";

/** ItemList JSON-LD for list pages – helps Google understand and rank list/catalog pages. */
export default function ItemListJsonLd({
  lang,
  pathAfterLang,
  title,
  description,
  items,
}: {
  lang: Locale;
  pathAfterLang: string;
  title: string;
  description: string;
  items: { name: string; url: string }[];
}) {
  const listUrl = `${SITE_BASE}/${lang}/${pathAfterLang}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    url: listUrl,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 50).map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
