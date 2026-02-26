import Link from "next/link";
import type { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";
import DownloadButton from "@/components/DownloadButton";

function slugToName(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const name = slugToName(slug);
  return {
    title: `${name} Strategy & Tips – Crypto Casino Guide`,
    description: `Strategy and tips for ${name}. Mines, Dice, Keno, Roulette, Blackjack, HiLo, Plinko. No strategy is 100%.`,
  };
}

export default async function CasinoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = slugToName(slug);

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
        <Link href="/casinos" className="text-slate-400 hover:text-slate-200">← All casinos</Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-100">{name}</h1>
        <p className="mt-2 text-slate-400">
          Strategy guides and tips for {name}. Use our tools to improve your approach — no strategy is 100%.
        </p>
        <div className="mt-8 rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-slate-300">
          Casino-specific strategy content for {name} will go here. We cover Mines, Dice, Keno, Roulette, Poker, Blackjack, HiLo, Plinko and more. The house always has an edge; our tools are for informed play only.
        </div>
      </main>

      <Disclaimer />
    </div>
  );
}
