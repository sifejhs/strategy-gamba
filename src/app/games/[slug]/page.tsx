import Link from "next/link";
import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";

const GAMES: Record<string, { name: string; description: string }> = {
  mines: { name: "Mines", description: "Mines strategy and tips for crypto casinos." },
  dice: { name: "Dice", description: "Dice game strategy and multiplier tips." },
  keno: { name: "Keno", description: "Keno number selection and strategy guides." },
  roulette: { name: "Roulette", description: "Roulette betting strategies and tips." },
  poker: { name: "Poker", description: "Poker strategy for casino and crypto sites." },
  blackjack: { name: "Blackjack", description: "Blackjack basic strategy and tips." },
  hilo: { name: "HiLo", description: "HiLo card prediction strategy and tips." },
  plinko: { name: "Plinko", description: "Plinko risk levels and betting tips." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES[slug] || { name: slug, description: "Strategy guide." };
  return {
    title: `${game.name} Strategy – Tips for Stake, Roobet & Crypto Casinos | Strategy Gamba`,
    description: game.description + " Stake, Roobet, 1xbet, Aviator, Bustabit. No strategy is 100%.",
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = GAMES[slug] || { name: slug, description: "Strategy guide." };

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

      <main className="mx-auto max-w-3xl flex-1 px-4 py-12">
        <Link href="/" className="text-slate-400 hover:text-slate-200">← Home</Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">{game.name} strategy</h1>
        <p className="mt-2 text-slate-400">{game.description}</p>
        <div className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300">
          Strategy content and tips for {game.name} will go here. Our tools are designed to help you make informed bets on Stake, Roobet, Shuffle, Wolf.bet, 1xbet, Aviator, Bustabit and other crypto casinos. Remember: no strategy is 100% — the house always has an edge.
        </div>
      </main>

      <Disclaimer />
    </div>
  );
}
