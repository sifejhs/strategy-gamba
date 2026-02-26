import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang, getMetadataBase } from "@/lib/seo-hreflang";
import { getMetaKeywords } from "@/lib/keywords";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";
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
  const alternates = buildHreflang(locale, "payments");
  const keywords = getMetaKeywords(locale, { includeTypos: true });
  const base = getMetadataBase();
  const ogImage = new URL("/images/og-default.svg", base);
  return {
    title: t.paymentsTitle,
    description: t.paymentsDesc,
    keywords: keywords.join(", "),
    alternates,
    openGraph: {
      title: t.paymentsTitle,
      description: t.paymentsDesc,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: t.paymentsTitle }],
      locale,
    },
    twitter: { card: "summary_large_image", title: t.paymentsTitle, description: t.paymentsDesc },
    robots: "index, follow",
  };
}

export default async function PaymentsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);
  const faqs = [
    { question: "What payment methods do crypto casinos accept?", answer: "Most crypto casinos accept Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and stablecoins like USDT. Withdrawals are usually fast. Check each site for minimum deposit and withdrawal limits and fees." },
    { question: "How fast are crypto casino withdrawals?", answer: "Crypto withdrawals are often processed within minutes to a few hours, depending on the casino and network. This is typically faster than traditional casino withdrawals." },
    { question: "Is it safe to deposit Bitcoin at online casinos?", answer: "Reputable crypto casinos use secure wallets and protocols. Always use licensed or well-reviewed sites. We cover Stake, Roobet, 1xbet, Rollbit and others; check each site's security and terms." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <FaqJsonLd lang={locale} pathAfterLang="payments" items={faqs} />
      <header className="border-b border-slate-700 px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href={`/${locale}`} className="text-xl font-bold text-emerald-400">
            {t.siteName}
          </Link>
          <DownloadButton lang={locale} />
        </div>
      </header>

      <main className="mx-auto max-w-3xl flex-1 px-4 py-12">
        <Link href={`/${locale}`} className="text-slate-400 hover:text-slate-200">
          {t.backHome}
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">
          Crypto casino payments – Bitcoin, withdrawal, deposit
        </h1>
        <p className="mt-2 text-slate-400">
          How crypto casinos handle deposits and withdrawals: Bitcoin, Ethereum, USDT, and other coins. Stake, Roobet, 1xbet, Rollbit and top sites. Download our tools for strategy.
        </p>
        <div className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300">
          <p>
            Most crypto casinos accept Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and stablecoins like USDT. Withdrawals are usually fast compared to traditional casinos. Always check minimum deposit and withdrawal limits and fees on each site. We cover Stake, Roobet, 1xbet, Rollbit, BC.Game and 30+ casinos. Download our software below and follow our prediction and strategy tools to improve your win chance. Gamble responsibly.
          </p>
        </div>
        <DownloadCta lang={locale} />
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
