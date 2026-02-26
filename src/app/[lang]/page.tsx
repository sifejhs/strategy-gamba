import Link from "next/link";
import { LOCALES, type Locale, isLocale } from "@/lib/locales";
import { getTranslations } from "@/lib/translations";
import { CASINOS, GAMES, buildStrategySlug } from "@/lib/strategy-data";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import DownloadCta from "@/components/DownloadCta";
import CasinoLogo from "@/components/CasinoLogo";

const sampleStrategySlugs = [
  buildStrategySlug("stake", "mines", "strategy"),
  buildStrategySlug("stake", "mines", "predictor"),
  buildStrategySlug("stake", "crash", "strategy"),
  buildStrategySlug("stake", "crash", "predictor"),
  buildStrategySlug("roobet", "blackjack", "strategy"),
  buildStrategySlug("roobet", "crash", "strategy"),
  buildStrategySlug("roobet", "mines", "predictor"),
  buildStrategySlug("1xbet", "dice", "tips"),
  buildStrategySlug("rollbit", "plinko", "guide"),
  buildStrategySlug("bc-game", "limbo", "strategy"),
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const t = getTranslations(locale);
  const games = GAMES.slice(0, 10);
  const casinos = CASINOS.slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-700 px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between flex-wrap gap-2">
          <Link href={`/${locale}`} className="text-xl font-bold text-emerald-400">
            {t.siteName}
          </Link>
          <div className="flex items-center gap-3">
            <LocaleSwitcher current={locale} />
            <DownloadButton lang={locale} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl flex-1 px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-100 md:text-4xl">
          {t.homeTitle}
        </h1>
        <p className="mt-2 text-slate-400">{t.homeDesc}</p>

        <DownloadCta lang={locale} />

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-200">
            {t.examplePages}
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sampleStrategySlugs.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/${locale}/${slug}`}
                  className="block rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
                >
                  {slug.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}/strategies`}
            className="mt-4 inline-block text-emerald-400 hover:underline"
          >
            {t.allStrategies}
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-200">{t.byGame}</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {games.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/${locale}/${buildStrategySlug("stake", g.slug, "strategy")}`}
                  className="block rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
                >
                  {t.gameStrategyLabel(g.name)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-200">
            {t.byCasino}
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {casinos.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${locale}/${buildStrategySlug(c.slug, "mines", "strategy")}`}
                  className="flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
                >
                  <CasinoLogo name={c.name} alt={t.casinoLogoAlt(c.name)} size={40} />
                  <span>{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}/strategies`}
            className="mt-4 inline-block text-emerald-400 hover:underline"
          >
            {t.viewAll}
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-200">
            {t.sportsTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            {t.sportsDesc}
          </p>
          <Link
            href={`/${locale}/sports`}
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
          >
            {t.homeSportsCta}
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-200">{t.homeBonusSectionTitle}</h2>
          <p className="mt-1 text-sm text-slate-400">
            {t.homeBonusSectionDesc}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href={`/${locale}/bonus`}
              className="rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
            >
              {t.bonusTitle.split("|")[0].trim()}
            </Link>
            <Link
              href={`/${locale}/payments`}
              className="rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
            >
              {t.paymentsTitle.split("|")[0].trim()}
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-200">{t.homeGuidesSectionTitle}</h2>
          <p className="mt-1 text-sm text-slate-400">
            {t.homeGuidesSectionDesc}
          </p>
          <Link
            href={`/${locale}/guides`}
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
          >
            {t.homeGuidesCta}
          </Link>
        </section>
      </main>

      <Disclaimer lang={locale} />
    </div>
  );
}

function LocaleSwitcher({ current }: { current: Locale }) {
  return (
    <nav className="flex flex-wrap gap-1 text-xs" aria-label="Language">
      {LOCALES.map((loc) => (
        <Link
          key={loc}
          href={loc === current ? `/${loc}` : `/${loc}`}
          className={`rounded px-2 py-1 ${
            loc === current
              ? "bg-emerald-600 text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          {loc}
        </Link>
      ))}
    </nav>
  );
}
