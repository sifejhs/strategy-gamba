import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllStrategySlugs,
  getDisplayNames,
  parseStrategySlug,
  isTier1Casino,
} from "@/lib/strategy-data";
import {
  getStrategyTitleForLocale,
  getStrategyDescriptionForLocale,
  getTranslations,
} from "@/lib/translations";
import { buildHreflang, SITE_BASE, getMetadataBase } from "@/lib/seo-hreflang";
import { getMetaKeywords } from "@/lib/keywords";
import { isLocale, type Locale } from "@/lib/locales";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import DownloadCta from "@/components/DownloadCta";

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** Dynamic so Vercel build stays under 75MB; pages are server-rendered on demand and edge-cached. */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const names = getDisplayNames(slug);
  if (!names) return { title: "Strategy Gamba" };
  const title = getStrategyTitleForLocale(
    locale,
    names.casino,
    names.game,
    names.variant,
    slug
  );
  const description = getStrategyDescriptionForLocale(
    locale,
    names.casino,
    names.game,
    slug
  );
  const alternates = buildHreflang(locale, slug);
  const keywords = getMetaKeywords(locale, {
    casino: names.casino,
    game: names.game,
    includeTypos: true,
  });
  const base = getMetadataBase();
  const ogImage = new URL("/images/og-default.svg", base);
  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates,
    openGraph: { title, description, images: [{ url: ogImage, width: 1200, height: 630, alt: `${names.casino} ${names.game} ${names.variant}` }], type: "article" },
    twitter: { card: "summary_large_image", title, description },
    robots: "index, follow",
  };
}

/** Article JSON-LD for peak Google rich results */
function ArticleJsonLd({
  lang,
  slug,
  title,
  description,
  casino,
  game,
  variant,
}: {
  lang: Locale;
  slug: string;
  title: string;
  description: string;
  casino: string;
  game: string;
  variant: string;
}) {
  const url = `${SITE_BASE}/${lang}/${slug}`;
  const imageUrl = `${SITE_BASE}/images/og-default.svg`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: imageUrl,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    author: { "@type": "Organization", name: "Strategy Gamba" },
    publisher: { "@type": "Organization", name: "Strategy Gamba" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [casino, game, variant, "strategy", "predictor", "tips", "crypto casino"].join(", "),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** FAQ JSON-LD for rich snippets – heavy rank */
function FAQJsonLd({ casino, game }: { casino: string; game: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the best ${game} strategy for ${casino}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our ${casino} ${game} strategy and predictor tools help you make informed bets. Download our software for full features. No strategy is 100%; the house always has an edge.`,
        },
      },
      {
        "@type": "Question",
        name: "Where can I download the betting tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the Download our tools button at the top of this page. Works with Stake, Roobet, 1xbet and 30+ crypto casinos.",
        },
      },
      {
        "@type": "Question",
        name: "Is any strategy 100% guaranteed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The house always has an edge. Our site provides tips and tools for entertainment and education only. Gamble responsibly.",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function StrategyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const parsed = parseStrategySlug(slug);
  if (!parsed) notFound();
  const names = getDisplayNames(slug);
  if (!names) notFound();

  const t = getTranslations(locale);
  const introIdx = hashSlug(slug + "intro") % t.intros.length;
  const intro = t.intros[introIdx](names.casino, names.game, names.variant);
  const tier1 = isTier1Casino(parsed.casino);
  const title = getStrategyTitleForLocale(
    locale,
    names.casino,
    names.game,
    names.variant,
    slug
  );
  const description = getStrategyDescriptionForLocale(
    locale,
    names.casino,
    names.game,
    slug
  );

  return (
    <div className="min-h-screen flex flex-col">
      <ArticleJsonLd
        lang={locale}
        slug={slug}
        title={title}
        description={description}
        casino={names.casino}
        game={names.game}
        variant={names.variant}
      />
      <FAQJsonLd casino={names.casino} game={names.game} />
      {(() => {
        const steps = t.strategySteps.map((fn) => fn(names.casino, names.game));
        const howToSchema = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: `How to use our strategy tools for ${names.casino} ${names.game}`,
          description: `Step-by-step guide to using our predictor and strategy tools for ${names.game} on ${names.casino}.`,
          step: steps.map((text, i) => ({ "@type": "HowToStep", position: i + 1, text })),
        };
        return (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        );
      })()}
      <BreadcrumbJsonLd
        lang={locale}
        items={[
          { name: "Home", path: locale },
          { name: `${names.casino} ${names.game} ${names.variant}`, path: `${locale}/${slug}` },
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
        <Link href={`/${locale}`} className="text-slate-400 hover:text-slate-200">
          {t.backHome}
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">
          {names.casino} {names.game} {names.variant}
        </h1>
        <p className="mt-2 text-slate-400">{intro}</p>

        {(() => {
          const intro2Arr = t.strategyIntro2;
          const idx2 = hashSlug(slug + "intro2") % intro2Arr.length;
          const intro2 = intro2Arr[idx2](names.casino, names.game, names.variant);
          return <p className="mt-4 text-slate-300">{intro2}</p>;
        })()}

        {(() => {
          const points = t.strategyKeyPoints(names.casino, names.game);
          const start = hashSlug(slug + "points") % points.length;
          const count = 8;
          const selected = Array.from({ length: count }, (_, i) => points[(start + i) % points.length]);
          return (
            <div className="mt-6 rounded-lg border border-slate-600 bg-slate-800/50 p-4">
              <h2 className="text-lg font-semibold text-slate-200">{t.strategyKeyPointsHeading}</h2>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-300">
                {selected.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          );
        })()}

        <div className="mt-6 rounded-lg border border-emerald-600/50 bg-slate-800/50 p-4">
          <p className="text-slate-200">{t.strategyDownloadCtaStrong}</p>
          <div className="mt-3">
            <DownloadButton lang={locale} />
          </div>
        </div>

        <section className="mt-10 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{t.strategyWhyMattersHeading}</h2>
          {(() => {
            const bodyArr = t.strategyWhyMattersBody;
            const idx = hashSlug(slug + "why") % bodyArr.length;
            return <p>{bodyArr[idx](names.casino, names.game)}</p>;
          })()}
        </section>

        <section className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{t.strategyCommonMistakesHeading}</h2>
          <ul className="list-inside list-disc space-y-2">
            {(() => {
              const items = t.strategyCommonMistakesItems;
              const start = hashSlug(slug + "mistakes") % items.length;
              const take = 5;
              return Array.from({ length: take }, (_, i) => items[(start + i) % items.length](names.casino, names.game)).map((text, i) => (
                <li key={i}>{text}</li>
              ));
            })()}
          </ul>
        </section>

        <section className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{t.strategyStepsHeading}</h2>
          <ol className="list-inside list-decimal space-y-2">
            {t.strategySteps.map((fn, i) => (
              <li key={i}>{fn(names.casino, names.game)}</li>
            ))}
          </ol>
        </section>

        <section className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{t.strategyWhenToUseHeading}</h2>
          {(() => {
            const bodyArr = t.strategyWhenToUseBody;
            const idx = hashSlug(slug + "when") % bodyArr.length;
            return <p>{bodyArr[idx](names.casino, names.game)}</p>;
          })()}
        </section>

        <section className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-3">
          <h2 className="text-xl font-semibold text-slate-200">{t.strategyGlossaryHeading}</h2>
          <dl className="space-y-2">
            {(() => {
              const entries = t.strategyGlossaryEntries;
              const start = hashSlug(slug + "glossary") % entries.length;
              const take = 3;
              return Array.from({ length: take }, (_, i) => entries[(start + i) % entries.length](names.casino, names.game)).map((e, i) => (
                <div key={i}>
                  <dt className="font-medium text-slate-200">{e.term}</dt>
                  <dd className="ml-4 text-slate-400">{e.definition}</dd>
                </div>
              ));
            })()}
          </dl>
        </section>

        <section className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{t.strategySummaryHeading}</h2>
          {(() => {
            const bodyArr = t.strategySummaryBody;
            const idx = hashSlug(slug + "summary") % bodyArr.length;
            return <p>{bodyArr[idx](names.casino, names.game)}</p>;
          })()}
        </section>

        <section className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-4">
          <h2 className="text-xl font-semibold text-slate-200">{t.strategyFaqHeading}</h2>
          <ul className="space-y-3">
            {t.strategyFaqVisible.map((fn, i) => {
              const qa = fn(names.casino, names.game);
              return (
                <li key={i}>
                  <p className="font-medium text-slate-200">{qa.question}</p>
                  <p className="mt-1 text-slate-400">{qa.answer}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <DownloadCta lang={locale} />

        <div className="mt-10 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300 space-y-6">
          <h2 className="text-lg font-semibold text-slate-200">How our prediction tool helps with {names.game} on {names.casino}</h2>
          <p>
            Our prediction and strategy tools analyse patterns and help you make better decisions when you follow them. Use the software you downloaded above: it includes the full predictor and strategy features for {names.casino} {names.game}. The more you follow the tools, the better your chances can improve.
          </p>
          <h2 className="text-lg font-semibold text-slate-200">Using our strategy tools for {names.game}</h2>
          <p>
            Bet sizing, risk levels and when to cash out – our strategy tools guide you step by step. Download our software if you haven’t yet; then follow the strategy recommendations for {names.game} on {names.casino}. Combining our prediction and strategy tools gives you the best chance to improve your results.
          </p>
          <h2 className="text-lg font-semibold text-slate-200">Get the full toolset</h2>
          <p>
            {tier1
              ? `${names.casino} is one of the top crypto casinos. Our software supports Stake, Roobet, 1xbet, Rollbit, BC.Game and more. Download our software above and follow the prediction and strategy tools to improve your win chance.`
              : t.bodyParagraph}
          </p>
          <p className="text-slate-400">{t.bodyDisclaimer}</p>
        </div>

        <DownloadCta lang={locale} />

        <RelatedLinks
          lang={locale}
          casinoSlug={parsed.casino}
          gameSlug={parsed.game}
          currentSlug={slug}
        />
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}
