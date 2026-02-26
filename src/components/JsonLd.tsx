import { LOCALES } from "@/lib/locales";
import { SITE_BASE } from "@/lib/seo-hreflang";
import type { Locale } from "@/lib/locales";

/** WebSite + Organization JSON-LD – Google & all engines rich results */
export default function JsonLd({ lang }: { lang: Locale }) {
  const base = SITE_BASE;
  const sameAs = LOCALES.map((l) => `${base}/${l}`);
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Strategy Gamba",
    url: `${base}/${lang}`,
    inLanguage: lang,
    description: "Strategy and predictor tools for Stake, Roobet, 1xbet and 30+ crypto casinos. Mines, crash, blackjack, sports betting. 20 languages.",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${base}/${lang}/strategies` },
      "query-input": "required name=keyword",
    },
    publisher: { "@id": `${base}/#organization` },
    sameAs,
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: "Strategy Gamba",
    url: base,
    description: "Strategy and predictor tools for crypto casino games. Educational content and software for Stake, Roobet, 1xbet and 30+ casinos.",
    foundingDate: "2024",
    sameAs,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </>
  );
}
