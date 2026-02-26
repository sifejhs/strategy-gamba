import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang, getMetadataBase } from "@/lib/seo-hreflang";
import { getSportKeywords } from "@/lib/keywords";
import { SPORTS, TIER1_CASINO_SLUGS, CASINOS } from "@/lib/strategy-data";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export async function generateStaticParams() {
  const langs = ["en", "zh", "es", "hi", "ar", "pt", "ru", "ja", "de", "fr", "ko", "tr", "vi", "it", "nl", "pl", "id", "th", "bn", "ms"] as const;
  const params: { lang: string; sportSlug: string }[] = [];
  for (const lang of langs) {
    for (const s of SPORTS) {
      params.push({ lang, sportSlug: s.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; sportSlug: string }>;
}): Promise<Metadata> {
  const { lang, sportSlug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const sport = SPORTS.find((s) => s.slug === sportSlug);
  if (!sport) return {};
  const t = getTranslations(locale);
  const title = t.sportPageTitle(sport.name);
  const description = t.sportPageDesc(sport.name);
  const alternates = buildHreflang(locale, `sport/${sportSlug}`);
  const keywords = getSportKeywords(sportSlug, locale);
  const base = getMetadataBase();
  const ogImage = new URL("/images/og-default.svg", base);
  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${sport.name} betting – Strategy Gamba` }],
      locale,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: "index, follow",
  };
}

export default async function SportPage({
  params,
}: {
  params: Promise<{ lang: string; sportSlug: string }>;
}) {
  const { lang, sportSlug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const sport = SPORTS.find((s) => s.slug === sportSlug);
  if (!sport) notFound();
  const t = getTranslations(locale);
  const tier1 = CASINOS.filter((c) => TIER1_CASINO_SLUGS.has(c.slug));
  const sportFaqs = [
    { question: `What is the best ${sport.name} betting strategy?`, answer: `Our ${sport.name} betting tools and match prediction work with Stake, Roobet, 1xbet, Rollbit and 30+ crypto casinos. Download our software for the full toolset. No strategy is 100%; gamble responsibly.` },
    { question: "Where can I download sports betting tools?", answer: "Use the Download button on this page. Our software supports Stake, Roobet, 1xbet, Rollbit, BC.Game and 30+ casinos. Works for match prediction and strategy across sports." },
    { question: "Do your tools work for crypto casino sports betting?", answer: "Yes. Our prediction and strategy tools work with Stake sports, Roobet sports, 1xbet and other crypto casinos. Download once and use across supported sites." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <FaqJsonLd lang={locale} pathAfterLang={`sport/${sportSlug}`} items={sportFaqs} />
      <BreadcrumbJsonLd
        lang={locale}
        items={[
          { name: "Home", path: locale },
          { name: "Sports", path: `${locale}/sports` },
          { name: `${sport.name} betting`, path: `${locale}/sport/${sportSlug}` },
        ]}
      />
      <header className="border-b border-slate-700 px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href={`/${locale}`} className="text-xl font-bold text-emerald-400">
            {t.siteName}
          </Link>
          <DownloadButton lang={locale} />
        </div>
      </header>

      <main className="mx-auto max-w-3xl flex-1 px-4 py-12">
        <Link href={`/${locale}/sports`} className="text-slate-400 hover:text-slate-200">
          {t.backHome} – Sports
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">
          {sport.name} betting tips & match prediction
        </h1>
        <p className="mt-2 text-slate-400">
          {sport.name} strategy and match prediction for Stake, Roobet, 1xbet, Rollbit, BC.Game and top crypto casinos. Download our software below and follow our prediction and strategy tools to improve your win chance.
        </p>
        <div className="mt-8 space-y-6 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300">
          <p>
            Our {sport.name.toLowerCase()} betting tools help you with match prediction and odds. Use them on Stake, Roobet, 1xbet, Rollbit, Bustabit and other high-ranking casinos. <strong>Download our software from the section below</strong> – follow our prediction and strategy tools to improve your win chance. All sport types supported. No strategy is 100%; gamble responsibly.
          </p>
          <p>
            Top casinos we support: {tier1.map((c) => c.name).join(", ")}. Every sport – football, soccer, basketball, tennis, cricket, eSports, UFC, boxing, horse racing, CSGO, Dota, League of Legends – all refer to our download. Get the full toolset for peak results.
          </p>
          <h2 className="text-lg font-semibold text-slate-200">Why use our tools for {sport.name}?</h2>
          <p>
            Thousands of players use our software for match prediction and strategy on {sport.name.toLowerCase()}. The same toolset works across football, basketball, tennis, eSports and more. Download above to get pattern insights, risk guidance and step-by-step tips. We do not promise wins – we help you play with more structure and control.
          </p>
          <p className="text-slate-400">
            Disclaimer: the house always has an edge. Past results do not predict future outcomes. This page and our tools are for entertainment and education only. Strategy Gamba is not a casino.
          </p>
        </div>
        <DownloadCta lang={locale} />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/sports`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
          >
            All sports
          </Link>
        </div>
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
