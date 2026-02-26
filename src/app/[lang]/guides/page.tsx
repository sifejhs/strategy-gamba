import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang, getMetadataBase } from "@/lib/seo-hreflang";
import { getMetaKeywords } from "@/lib/keywords";
import { GUIDES } from "@/lib/strategy-data";
import Disclaimer from "@/components/Disclaimer";
import FaqJsonLd from "@/components/FaqJsonLd";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";

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
  const alternates = buildHreflang(locale, "guides");
  const keywords = getMetaKeywords(locale, { includeTypos: true });
  const base = getMetadataBase();
  const ogImage = new URL("/images/og-default.svg", base);
  return {
    title: t.guidesTitle,
    description: t.guidesDesc,
    keywords: keywords.join(", "),
    alternates,
    openGraph: {
      title: t.guidesTitle,
      description: t.guidesDesc,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: t.guidesTitle }],
      locale,
    },
    twitter: { card: "summary_large_image", title: t.guidesTitle, description: t.guidesDesc },
    robots: "index, follow",
  };
}

export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);
  const faqs = [
    { question: "What is RTP in casino games?", answer: "RTP (Return to Player) is the percentage of wagered money a game pays back to players over time. For example, 96% RTP means the game returns 96% and keeps 4% as house edge. It is a long-term average, not a guarantee per session." },
    { question: "What does provably fair mean?", answer: "Provably fair means the casino lets you verify that game outcomes (e.g. crash, dice) were generated fairly and were not manipulated. You can check the random seed and algorithm. Many crypto casinos offer this." },
    { question: "How do I gamble responsibly?", answer: "Set limits on time and money, never chase losses, and only play with money you can afford to lose. Use tools from BeGambleAware and GamCare. Our strategy tools are for education only; no strategy guarantees wins." },
    { question: "Which casinos does Strategy Gamba support?", answer: "We cover Stake, Roobet, 1xbet, Rollbit, BC.Game, and 30+ crypto casinos. Our strategy and predictor tools work across these platforms. Download our software for the full toolset." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <FaqJsonLd lang={locale} pathAfterLang="guides" items={faqs} />
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
          {t.guidesTitle}
        </h1>
        <p className="mt-2 text-slate-400">
          {t.guidesDesc}
        </p>
        <DownloadCta lang={locale} />
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/${locale}/guide/${g.slug}`}
                className="block rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
              >
                {g.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
