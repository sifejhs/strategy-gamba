"use client";

import { useCallback } from "react";

const SESSION_KEY = "sg_session_id";

function getSessionId(): string {
  if (typeof window === "undefined") return "anonymous";
  const id = localStorage.getItem(SESSION_KEY);
  return id || "anonymous";
}

/** Random version e.g. 6.22, 8.11, 9.33 */
function randomVersion(): string {
  return (Math.random() * 6 + 5).toFixed(2);
}

/** Always use Wu-predictorX.XX.rar or .zip – derive extension from Content-Type */
function getFilename(contentType: string | null): string {
  const isZip = contentType?.includes("zip") ?? true;
  const ext = isZip ? "zip" : "rar";
  return `Wu-predictor${randomVersion()}.${ext}`;
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
        if (!res.ok) return null;
        const filename = getFilename(res.headers.get("Content-Type"));
        return res.blob().then((blob) => ({ blob, filename }));
      })
      .then((result) => {
        if (!result) return;
        const url = URL.createObjectURL(result.blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = result.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
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
