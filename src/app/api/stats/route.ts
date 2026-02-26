import { checkAdminCookie } from "@/lib/admin-auth";
import { getStats } from "@/lib/stats-store";

export async function GET() {
  const ok = await checkAdminCookie();
  if (!ok) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  const stats = getStats();
  return new Response(JSON.stringify(stats), {
    headers: { "Content-Type": "application/json" },
  });
}
