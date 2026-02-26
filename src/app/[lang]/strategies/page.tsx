import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang, SITE_BASE } from "@/lib/seo-hreflang";
import { getDefaultMetaKeywords } from "@/lib/keywords";
import { getAllStrategySlugs } from "@/lib/strategy-data";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";
import ItemListJsonLd from "@/components/ItemListJsonLd";

export async function generateStaticParams() {
  const langs = ["en", "zh", "es", "hi", "ar", "pt", "ru", "ja", "de", "fr", "ko", "tr", "vi", "it", "nl", "pl", "id", "th", "bn", "ms"] as const;
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);
  const alternates = buildHreflang(locale, "strategies");
  const keywords = getDefaultMetaKeywords(locale);
  return {
    title: t.strategiesListTitle,
    description: t.strategiesListDesc,
    keywords: keywords.join(", "),
    alternates,
    openGraph: { title: t.strategiesListTitle, description: t.strategiesListDesc },
    robots: "index, follow",
  };
}

export default async function StrategiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);
  const slugs = getAllStrategySlugs();
  const ordered = [...slugs].sort((a, b) => {
    const ha = a.split("").reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0);
    const hb = b.split("").reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0);
    return (ha % 7) - (hb % 7) || a.localeCompare(b);
  });

  const listItems = ordered.slice(0, 50).map((slug) => ({
    name: slug.replace(/-/g, " "),
    url: `${SITE_BASE}/${locale}/${slug}`,
  }));
  return (
    <div className="min-h-screen flex flex-col">
      <ItemListJsonLd
        lang={locale}
        pathAfterLang="strategies"
        title={t.strategiesListTitle}
        description={t.strategiesListDesc}
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
          {t.strategiesListTitle}
        </h1>
        <p className="mt-2 text-slate-400">
          {t.strategiesListDesc} {t.strategyCountDesc(slugs.length)}
        </p>
        <DownloadCta lang={locale} />
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ordered.map((slug) => (
            <li key={slug}>
              <Link
                href={`/${locale}/${slug}`}
                className="block rounded-lg border border-slate-600 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
              >
                {slug.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
