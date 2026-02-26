import { NextRequest } from "next/server";
import { addEvent } from "@/lib/stats-store";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const type = body?.type === "download_click" ? "download_click" : "pageview";
    const sessionId = typeof body?.sessionId === "string" ? body.sessionId : "anonymous";
    addEvent(type, sessionId);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 400 });
  }
}
