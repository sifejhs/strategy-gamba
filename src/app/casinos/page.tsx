import Link from "next/link";
import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";

const CASINOS = [
  "stake", "roobet", "shuffle", "wolf-bet", "1xbet", "aviator", "bustabit",
  "rollbit", "bc-game", "stake-us", "metaspins", "duelbits", "clash", "csgoempire",
  "gamdom", "lucky-blocks", "vave", "wild-io", "crypto-games", "trust-dice",
  "bitstarz", "mbit", "nitrogen-sports", "sportsbet-io", "thunderpick", "ggbet",
  "betfury", "duelbits-casino", "roobet-casino", "stake-casino",
];

export const metadata: Metadata = {
  title: "Crypto Casinos – Stake, Roobet, 1xbet, Aviator & 30+ Sites",
  description: "Strategy guides and tips for 30+ crypto casinos: Stake, Roobet, Shuffle, Wolf.bet, 1xbet, Aviator, Bustabit, Rollbit, BC.Game and more.",
};

export default function CasinosIndex() {
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
        <Link href="/" className="text-slate-400 hover:text-slate-200">← Home</Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">Crypto casinos we cover</h1>
        <p className="mt-2 text-slate-400">
          Strategy and tips for Stake, Roobet, 1xbet, Aviator, Bustabit and 30+ crypto casinos.
        </p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
          {CASINOS.map((slug) => (
            <li key={slug}>
              <Link
                href={`/casinos/${slug}`}
                className="block rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-200 capitalize hover:border-emerald-500 hover:bg-slate-800"
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
