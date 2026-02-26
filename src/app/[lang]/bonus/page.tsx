import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang, getMetadataBase } from "@/lib/seo-hreflang";
import { getMetaKeywords } from "@/lib/keywords";
import { CASINOS } from "@/lib/strategy-data";
import { SITE_BASE } from "@/lib/seo-hreflang";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";
import ItemListJsonLd from "@/components/ItemListJsonLd";
import CasinoLogo from "@/components/CasinoLogo";
import FaqJsonLd from "@/components/FaqJsonLd";

export async function generateStaticParams() {
  return ["en", "zh", "es", "hi", "ar", "pt", "ru", "ja", "de", "fr", "ko", "tr", "vi", "it", "nl", "pl", "id", "th", "bn", "ms"].map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);
  const alternates = buildHreflang(locale, "bonus");
  const keywords = getMetaKeywords(locale, { includeTypos: true });
  const base = getMetadataBase();
  const ogImage = new URL("/images/og-default.svg", base);
  return {
    title: t.bonusTitle,
    description: t.bonusDesc,
    keywords: keywords.join(", "),
    alternates,
    openGraph: {
      title: t.bonusTitle,
      description: t.bonusDesc,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: t.bonusTitle }],
      locale,
    },
    twitter: { card: "summary_large_image", title: t.bonusTitle, description: t.bonusDesc },
    robots: "index, follow",
  };
}

export default async function BonusIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);
  const listItems = CASINOS.map((c) => ({
    name: `${c.name} bonus`,
    url: `${SITE_BASE}/${locale}/bonus/${c.slug}`,
  }));
  const faqs = [
    { question: "What is a no deposit bonus?", answer: "A no deposit bonus is a free bonus given by a casino without requiring you to deposit first. It is often small and comes with wagering requirements. Always read the terms before claiming." },
    { question: "Where can I find Stake bonus codes?", answer: "Stake and other crypto casinos list current promo and bonus codes on their site and in our bonus pages. We compare bonuses for Stake, Roobet, Rollbit, BC.Game and 30+ casinos." },
    { question: "Do bonus codes work on crypto casinos?", answer: "Yes. Many crypto casinos offer welcome bonuses, reload bonuses, and promo codes. Enter the code at checkout or in the bonus section. Terms and wagering requirements apply." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ItemListJsonLd
        lang={locale}
        pathAfterLang="bonus"
        title={t.bonusTitle}
        description={t.bonusDesc}
        items={listItems}
      />
      <FaqJsonLd lang={locale} pathAfterLang="bonus" items={faqs} />
      <header className="border-b border-slate-700 px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href={`/${locale}`} className="text-xl font-bold text-emerald-400">
            {t.siteName}
          </Link>
          <DownloadButton lang={locale} />
        </div>
      </header>

      <main className="mx-auto max-w-6xl flex-1 px-4 py-12">
        <Link href={`/${locale}`} className="text-slate-400 hover:text-slate-200">
          {t.backHome}
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">
          {t.bonusTitle}
        </h1>
        <p className="mt-2 text-slate-400">
          {t.bonusDesc}
        </p>
        <DownloadCta lang={locale} />
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
          {CASINOS.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/${locale}/bonus/${c.slug}`}
                className="flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
              >
                <CasinoLogo name={c.name} alt={t.casinoLogoAlt(c.name)} size={40} />
                <span>{t.bonusLinkLabel(c.name)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
