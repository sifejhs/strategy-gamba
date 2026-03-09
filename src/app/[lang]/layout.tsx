import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, type Locale, isLocale } from "@/lib/locales";
import { buildHreflang, getCanonicalUrl, getMetadataBase, IS_PRODUCTION } from "@/lib/seo-hreflang";
import { getTranslations } from "@/lib/translations";
import { getDefaultMetaKeywords } from "@/lib/keywords";
import SetLang from "@/components/SetLang";
import JsonLd from "@/components/JsonLd";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getTranslations(lang as Locale);
  const alternates = buildHreflang(lang as Locale, "");
  const canonicalUrl = getCanonicalUrl(lang as Locale, "");
  const keywords = getDefaultMetaKeywords(lang as Locale);
  const base = getMetadataBase();
  const ogImage = new URL("/images/og-default.svg", base);
  return {
    metadataBase: base,
    title: { default: t.homeTitle, template: `%s | ${t.siteName}` },
    description: t.homeDesc,
    keywords: keywords.join(", "),
    alternates,
    openGraph: {
      url: canonicalUrl,
      type: "website",
      locale: lang,
      images: [{ url: ogImage, width: 1200, height: 630, alt: t.siteName }],
    },
    twitter: { card: "summary_large_image", title: t.homeTitle, description: t.homeDesc },
    robots: IS_PRODUCTION ? "index, follow" : "noindex, nofollow",
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <>
      <SetLang lang={lang} />
      <JsonLd lang={lang as Locale} />
      {children}
    </>
  );
}
