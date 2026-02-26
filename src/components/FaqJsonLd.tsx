import { SITE_BASE } from "@/lib/seo-hreflang";
import type { Locale } from "@/lib/locales";

/** FAQPage schema for AI search & People Also Ask – direct Q&A format. */
export default function FaqJsonLd({
  lang,
  pathAfterLang,
  items,
}: {
  lang: Locale;
  pathAfterLang: string;
  items: { question: string; answer: string }[];
}) {
  const url = `${SITE_BASE}/${lang}/${pathAfterLang}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
