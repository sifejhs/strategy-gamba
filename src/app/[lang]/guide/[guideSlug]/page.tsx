import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang, getMetadataBase } from "@/lib/seo-hreflang";
import { getMetaKeywords } from "@/lib/keywords";
import { GUIDES } from "@/lib/strategy-data";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

/** Dynamic so Vercel build stays under 75MB; pages server-rendered on demand. */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; guideSlug: string }>;
}): Promise<Metadata> {
  const { lang, guideSlug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const guide = GUIDES.find((g) => g.slug === guideSlug);
  if (!guide) return {};
  const t = getTranslations(locale);
  const title = t.guidePageTitle(guide.name);
  const description = t.guidePageDesc(guide.name);
  const alternates = buildHreflang(locale, `guide/${guideSlug}`);
  const keywords = getMetaKeywords(locale, { includeTypos: true });
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
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${guide.name} – Strategy Gamba` }],
      locale,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: "index, follow",
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ lang: string; guideSlug: string }>;
}) {
  const { lang, guideSlug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const guide = GUIDES.find((g) => g.slug === guideSlug);
  if (!guide) notFound();
  const t = getTranslations(locale);
  const guideFaqs = [
    { question: `What is ${guide.name}?`, answer: `${guide.name} is a key concept for crypto casino players. Our guide explains how it applies to Stake, Roobet, 1xbet, Rollbit and other sites. Use our download tools alongside this guide for strategy and prediction.` },
    { question: "Where can I use these guides?", answer: "Our guides apply to 30+ crypto casinos including Stake, Roobet, 1xbet, Rollbit, BC.Game. Download our software for the full predictor and strategy toolset that works with these guides." },
    { question: "Are your strategy tools free?", answer: "Yes. Download our software from the button on this page. It includes prediction and strategy features for mines, crash, blackjack, sports and more. No strategy is 100%; gamble responsibly." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <FaqJsonLd lang={locale} pathAfterLang={`guide/${guideSlug}`} items={guideFaqs} />
      <BreadcrumbJsonLd
        lang={locale}
        items={[
          { name: "Home", path: locale },
          { name: t.guidesLabel, path: `${locale}/guides` },
          { name: guide.name, path: `${locale}/guide/${guideSlug}` },
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
        <Link href={`/${locale}/guides`} className="text-slate-400 hover:text-slate-200">
          ← All guides
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">
          {guide.name}
        </h1>
        <p className="mt-2 text-slate-400">
          Everything related to casino: {guide.name.toLowerCase()} for Stake, Roobet, 1xbet and crypto casinos. Download our software below and follow our prediction and strategy tools to improve your win chance.
        </p>
        <DownloadCta lang={locale} />
        <div className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-6">
          <h2 className="text-lg font-semibold text-slate-200">What you need to know</h2>
          <p>
            This guide covers {guide.name.toLowerCase()} in the context of crypto casinos. We explain how it applies to Stake, Roobet, Rollbit, BC.Game and other top sites. No strategy is 100%; the house always has an edge.
          </p>
          <h2 className="text-lg font-semibold text-slate-200">Use our prediction and strategy tools</h2>
          <p>
            Our software includes prediction and strategy tools that can improve your win chance when you follow them. Download our software from the section above and use it alongside this guide. Combine the guide with our tools for the best results.
          </p>
          <h2 className="text-lg font-semibold text-slate-200">Summary</h2>
          <p>
            This guide covered {guide.name.toLowerCase()} in the context of crypto casinos. We support Stake, Roobet, 1xbet, Rollbit, BC.Game and 30+ sites. Download our tools for predictor and strategy features. The house always has an edge; play responsibly.
          </p>
          <p className="text-slate-400">Gamble responsibly.</p>
        </div>
        <DownloadCta lang={locale} />
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
