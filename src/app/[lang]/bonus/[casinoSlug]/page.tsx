import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang, getMetadataBase } from "@/lib/seo-hreflang";
import { getMetaKeywords } from "@/lib/keywords";
import { CASINOS } from "@/lib/strategy-data";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";
import CasinoLogo from "@/components/CasinoLogo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";

export async function generateStaticParams() {
  const langs = ["en", "zh", "es", "hi", "ar", "pt", "ru", "ja", "de", "fr", "ko", "tr", "vi", "it", "nl", "pl", "id", "th", "bn", "ms"] as const;
  const params: { lang: string; casinoSlug: string }[] = [];
  for (const lang of langs) {
    for (const c of CASINOS) {
      params.push({ lang, casinoSlug: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; casinoSlug: string }>;
}): Promise<Metadata> {
  const { lang, casinoSlug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const casino = CASINOS.find((c) => c.slug === casinoSlug);
  if (!casino) return {};
  const t = getTranslations(locale);
  const title = t.bonusCasinoTitle(casino.name);
  const description = t.bonusCasinoDesc(casino.name);
  const alternates = buildHreflang(locale, `bonus/${casinoSlug}`);
  const keywords = getMetaKeywords(locale, { casino: casino.name, includeTypos: true });
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${casino.name} bonus – Strategy Gamba` }],
      locale,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: "index, follow",
  };
}

export default async function BonusPage({
  params,
}: {
  params: Promise<{ lang: string; casinoSlug: string }>;
}) {
  const { lang, casinoSlug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const casino = CASINOS.find((c) => c.slug === casinoSlug);
  if (!casino) notFound();
  const t = getTranslations(locale);
  const bonusFaqs = [
    { question: `Does ${casino.name} offer a welcome bonus?`, answer: `${casino.name} and most crypto casinos offer welcome bonuses, promo codes and sometimes no deposit offers. Check the casino’s official promo page for current terms. We cover bonus info for Stake, Roobet, 1xbet, Rollbit, BC.Game and 30+ sites.` },
    { question: "Where can I get strategy tools for this casino?", answer: "Download our software from the button on this page. Our predictor and strategy tools work with Stake, Roobet, 1xbet, Rollbit, BC.Game and 30+ crypto casinos. One download, all supported sites." },
    { question: "Are bonus codes safe to use?", answer: "Use only official promo and bonus codes from the casino’s website or verified partners. Read wagering requirements and terms. We link to responsible gambling resources; gamble only with money you can afford to lose." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <FaqJsonLd lang={locale} pathAfterLang={`bonus/${casinoSlug}`} items={bonusFaqs} />
      <BreadcrumbJsonLd
        lang={locale}
        items={[
          { name: "Home", path: locale },
          { name: t.bonusCodesLabel, path: `${locale}/bonus` },
          { name: `${casino.name} bonus`, path: `${locale}/bonus/${casinoSlug}` },
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
        <Link href={`/${locale}/bonus`} className="text-slate-400 hover:text-slate-200">
          ← {t.bonusCodesLabel}
        </Link>
        <div className="mt-4 flex items-center gap-4">
          <CasinoLogo name={casino.name} alt={t.casinoLogoAlt(casino.name)} size={56} />
          <div>
            <h1 className="text-3xl font-bold text-slate-100">
              {t.bonusCasinoTitle(casino.name)}
            </h1>
            <p className="mt-2 text-slate-400">
              {t.bonusCasinoDesc(casino.name)}
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-4">
          <p>
            We cover {casino.name} bonus codes, welcome bonus and no deposit bonus where available. Crypto casinos often offer reload bonuses, free spins and VIP rewards. Always check the casino’s promo page for current codes. Follow our prediction and strategy tools to improve your win chance – download our software from the section below. No bonus is guaranteed; terms apply. Gamble responsibly.
          </p>
          <h2 className="text-lg font-semibold text-slate-200">Strategy and predictor tools for {casino.name}</h2>
          <p>
            Our software works with {casino.name}, Stake, Roobet, 1xbet, Rollbit, BC.Game and 30+ crypto casinos. Download once to get the full predictor and strategy toolset. Use it alongside your bonus play – we do not guarantee wins; we help you play with better structure and limits.
          </p>
        </div>
        <DownloadCta lang={locale} />
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
