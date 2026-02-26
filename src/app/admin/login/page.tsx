"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(data.error || "Login failed");
      return;
    }
    if (data.redirect) router.push(data.redirect);
    else router.push("/admin/stats");
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-lg border border-slate-700 bg-slate-900 p-6">
        <h1 className="text-xl font-bold text-slate-100 mb-4">Admin login</h1>
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <label className="block text-sm text-slate-400 mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 mb-4"
          required
        />
        <label className="block text-sm text-slate-400 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 mb-4"
          required
        />
        <button type="submit" className="w-full rounded bg-emerald-600 py-2 text-white font-medium hover:bg-emerald-500">
          Log in
        </button>
      </form>
    </div>
  );
}
