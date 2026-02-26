import { NextRequest } from "next/server";
import { getAdminCredentials, setAdminCookie } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  const { user, pass } = getAdminCredentials();
  let username = "";
  let password = "";
  try {
    const body = await request.json();
    username = body?.username ?? "";
    password = body?.password ?? "";
  } catch {
    return new Response(JSON.stringify({ error: "Invalid body" }), { status: 400 });
  }
  if (username !== user || password !== pass) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }
  await setAdminCookie();
  return new Response(JSON.stringify({ redirect: "/admin/stats" }), {
    headers: { "Content-Type": "application/json" },
  });
}
