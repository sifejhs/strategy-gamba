import Link from "next/link";
import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";
import { getAllStrategySlugs } from "@/lib/strategy-data";

export const metadata: Metadata = {
  title: "All Strategy Pages – Stake, Roobet, Crash, Mines & Every Casino",
  description:
    "Full list of strategy and predictor pages: Stake mines strategy, Roobet crash predictor, blackjack tips and more for 30+ casinos and 14 games. Strategy Gamba.",
};

export default function StrategiesPage() {
  const slugs = getAllStrategySlugs();
  const ordered = [...slugs].sort((a, b) => {
    const ha = a.split("").reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0);
    const hb = b.split("").reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0);
    return (ha % 7) - (hb % 7) || a.localeCompare(b);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-700 px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-400">
            Strategy Gamba
          </Link>
          <DownloadButton />
        </div>
      </header>

      <main className="mx-auto max-w-6xl flex-1 px-4 py-12">
        <Link href="/" className="text-slate-400 hover:text-slate-200">
          ← Home
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">
          All strategy pages
        </h1>
        <p className="mt-2 text-slate-400">
          Each link is its own SEO-optimized page: Stake mines strategy, Roobet crash predictor, and {slugs.length} more. Independent title and description per page.
        </p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ordered.map((slug) => (
            <li key={slug}>
              <Link
                href={`/${slug}`}
                className="block rounded-lg border border-slate-600 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 hover:border-emerald-500 hover:bg-slate-800"
              >
                {slug.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Disclaimer />
    </div>
  );
}
