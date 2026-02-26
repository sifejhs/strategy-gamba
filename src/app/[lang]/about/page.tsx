import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { buildHreflang } from "@/lib/seo-hreflang";
import { getDefaultMetaKeywords } from "@/lib/keywords";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";

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
  const alternates = buildHreflang(locale, "about");
  const keywords = getDefaultMetaKeywords(locale);
  return {
    title: t.aboutTitle,
    description: t.aboutDesc,
    keywords: keywords.join(", "),
    alternates,
    openGraph: { title: t.aboutTitle, description: t.aboutDesc },
    robots: "index, follow",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen flex flex-col">
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
          {t.aboutHeading}
        </h1>
        <p className="mt-4 text-slate-300">
          {t.aboutBody1}
        </p>
        <p className="mt-4 text-slate-300">
          {t.aboutBody2}
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-200">
          {t.aboutTrustHeading}
        </h2>
        <p className="mt-2 text-slate-300">
          {t.aboutTrustBody}
        </p>
        <p className="mt-4 text-slate-400 text-sm">
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            BeGambleAware.org
          </a>
          {" · "}
          <a
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            GamCare.org.uk
          </a>
        </p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-block text-emerald-400 hover:underline"
        >
          {t.backHome}
        </Link>
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
