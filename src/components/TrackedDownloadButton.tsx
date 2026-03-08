"use client";

import { useCallback } from "react";

const SESSION_KEY = "sg_session_id";

function getSessionId(): string {
  if (typeof window === "undefined") return "anonymous";
  const id = localStorage.getItem(SESSION_KEY);
  return id || "anonymous";
}

function getFilenameFromResponse(res: Response): string {
  const disp = res.headers.get("Content-Disposition");
  if (disp) {
    const utf8 = disp.match(/filename\*=UTF-8''([^;]+)/);
    if (utf8?.[1]) return decodeURIComponent(utf8[1].trim());
    const plain = disp.match(/filename="?([^";]+)"?/);
    if (plain?.[1]) return plain[1].trim();
  }
  return "Wu-predictor-download.rar";
}

export default function TrackedDownloadButton({ label }: { label: string }) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "download_click", sessionId: getSessionId() }),
    }).catch(() => {});

    fetch("/api/download", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) return;
        const filename = getFilenameFromResponse(res);
        return res.blob().then((blob) => ({ blob, filename }));
      })
      .then((result) => {
        if (!result) return;
        const url = URL.createObjectURL(result.blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = result.filename;
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch(() => {});
  }, []);

  return (
    <a
      href="/api/download"
      aria-label="Download our software – prediction and strategy tools"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
    >
      <span aria-hidden>⬇</span> {label}
    </a>
  );
}
