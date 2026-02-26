import type { Metadata } from "next";
import "./globals.css";
import { getMetadataBase } from "@/lib/seo-hreflang";
import StatsTracker from "@/components/StatsTracker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const ROOT_KEYWORDS = [
  "Stake mines strategy",
  "Stake crash predictor",
  "Roobet strategy",
  "1xbet strategy",
  "crypto casino strategy",
  "sports betting tips",
  "match prediction",
  "download betting tools",
  "mines predictor",
  "blackjack strategy",
  "Strategy Gamba",
].join(", ");

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: { default: "Strategy Gamba", template: "%s | Strategy Gamba" },
  description:
    "Stake mines strategy, Roobet crash predictor, blackjack tips. Free strategy & predictor tools for 30+ crypto casinos. 20 languages. Sports betting & match prediction. No strategy is 100%.",
  keywords: ROOT_KEYWORDS,
  openGraph: { type: "website" },
  twitter: { card: "summary_large_image" },
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: { "theme-color": "#0f172a" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="preconnect" href="https://strategy-gamba.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.bing.com" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <StatsTracker />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
