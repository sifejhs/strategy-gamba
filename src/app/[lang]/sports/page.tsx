import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang } from "@/lib/seo-hreflang";
import { getDefaultMetaKeywords } from "@/lib/keywords";
import { SPORTS } from "@/lib/strategy-data";
import { SITE_BASE } from "@/lib/seo-hreflang";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";
import ItemListJsonLd from "@/components/ItemListJsonLd";

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
  const alternates = buildHreflang(locale, "sports");
  const keywords = getDefaultMetaKeywords(locale);
  return {
    title: t.sportsTitle,
    description: t.sportsDesc,
    keywords: keywords.join(", "),
    alternates,
    openGraph: { title: t.sportsTitle, description: t.sportsDesc },
    robots: "index, follow",
  };
}

export default async function SportsIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);
  const listItems = SPORTS.map((s) => ({
    name: s.name,
    url: `${SITE_BASE}/${locale}/sport/${s.slug}`,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <ItemListJsonLd
        lang={locale}
        pathAfterLang="sports"
        title={t.sportsTitle}
        description={t.sportsDesc}
        items={listItems}
      />
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
          {t.sportsTitle}
        </h1>
        <p className="mt-2 text-slate-400">
          {t.sportsDesc}
        </p>
        <section className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300">
          <p>
            Football, soccer, basketball, tennis, cricket, eSports, UFC, boxing, horse racing and more. Download our software below and follow our prediction and strategy tools to improve your win chance. Every page links to our download – full toolset for match prediction and strategy. No strategy is 100%; gamble responsibly.
          </p>
        </section>
        <DownloadCta lang={locale} />
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SPORTS.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${locale}/sport/${s.slug}`}
                className="block rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
