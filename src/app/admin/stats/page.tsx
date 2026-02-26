"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Stats = {
  liveVisitors: number;
  downloadClicksTotal: number;
  downloadClicksLastMin: number;
  downloadClicksLastHour: number;
  downloadClicksLastDay: number;
  downloadClicksLastWeek: number;
  pageviewsLastMin: number;
  pageviewsLastHour: number;
  pageviewsLastDay: number;
  pageviewsLastWeek: number;
};

export default function AdminStatsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploadStatus, setUploadStatus] = useState<{ type: "ok" | "error"; message: string } | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function fetchStats() {
      fetch("/api/stats")
        .then((r) => r.json())
        .then(setStats)
        .catch(() => setStats(null))
        .finally(() => setLoading(false));
    }
    fetchStats();
    const interval = setInterval(fetchStats, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  if (loading && !stats) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        Loading stats…
      </div>
    );
  }

  const s = stats ?? {
    liveVisitors: 0,
    downloadClicksTotal: 0,
    downloadClicksLastMin: 0,
    downloadClicksLastHour: 0,
    downloadClicksLastDay: 0,
    downloadClicksLastWeek: 0,
    pageviewsLastMin: 0,
    pageviewsLastHour: 0,
    pageviewsLastDay: 0,
    pageviewsLastWeek: 0,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Live stats</h1>
          <Link href="/admin/login" className="text-sm text-slate-400 hover:text-slate-200">
            Re-login
          </Link>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Live visitors (last 5 min)</p>
            <p className="text-3xl font-bold text-emerald-400">{s.liveVisitors}</p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Download button clicks – total</p>
            <p className="text-3xl font-bold">{s.downloadClicksTotal}</p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Download clicks – last minute</p>
            <p className="text-3xl font-bold">{s.downloadClicksLastMin}</p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Download clicks – last hour</p>
            <p className="text-3xl font-bold">{s.downloadClicksLastHour}</p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Download clicks – last 24h</p>
            <p className="text-3xl font-bold">{s.downloadClicksLastDay}</p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
            <p className="text-slate-400 text-sm">Download clicks – last 7 days</p>
            <p className="text-3xl font-bold">{s.downloadClicksLastWeek}</p>
          </div>
        </section>

        <section className="rounded-lg border border-slate-700 bg-slate-900 p-4 mb-8">
          <h2 className="text-lg font-semibold text-slate-200 mb-3">Download file (all Download buttons)</h2>
          <p className="text-slate-400 text-sm mb-3">
            Upload a .zip file. It will be used for every &quot;Download our software&quot; button across the site. Change it anytime.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".zip"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              setUploading(true);
              setUploadStatus(null);
              const form = new FormData();
              form.append("file", file);
              try {
                const res = await fetch("/api/admin/upload-download", { method: "POST", body: form });
                const data = await res.json().catch(() => ({}));
                if (res.ok && data.ok) {
                  setUploadStatus({ type: "ok", message: data.message ?? "Uploaded. All download buttons now use this file." });
                } else {
                  setUploadStatus({ type: "error", message: data.error ?? "Upload failed" });
                }
              } catch {
                setUploadStatus({ type: "error", message: "Upload failed" });
              } finally {
                setUploading(false);
                e.target.value = "";
              }
            }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 disabled:opacity-50"
          >
            {uploading ? "Uploading…" : "Upload .zip"}
          </button>
          {uploadStatus && (
            <p className={`mt-2 text-sm ${uploadStatus.type === "ok" ? "text-emerald-400" : "text-red-400"}`}>
              {uploadStatus.message}
            </p>
          )}
        </section>

        <section className="rounded-lg border border-slate-700 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold text-slate-200 mb-3">Page views</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <p className="text-slate-400 text-sm">Last minute</p>
              <p className="text-xl font-bold">{s.pageviewsLastMin}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Last hour</p>
              <p className="text-xl font-bold">{s.pageviewsLastHour}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Last 24h</p>
              <p className="text-xl font-bold">{s.pageviewsLastDay}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Last 7 days</p>
              <p className="text-xl font-bold">{s.pageviewsLastWeek}</p>
            </div>
          </div>
        </section>

        <p className="mt-6 text-xs text-slate-500">
          Stats refresh every 5 seconds. Data is stored in memory; for production use Vercel KV or Redis (see docs).
        </p>
      </div>
    </div>
  );
}
