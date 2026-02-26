import { cookies } from "next/headers";

const ADMIN_USER = "Admin";
const ADMIN_PASS = process.env.ADMIN_PASSWORD ?? "Az123z28z1d1x2vcv1r1";
const COOKIE_NAME = "admin_session";
const COOKIE_VALUE = "authenticated"; // In production use a signed token

export function getAdminCredentials() {
  return { user: ADMIN_USER, pass: ADMIN_PASS };
}

export async function setAdminCookie() {
  const c = await cookies();
  c.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

export async function checkAdminCookie(): Promise<boolean> {
  const c = await cookies();
  return c.get(COOKIE_NAME)?.value === COOKIE_VALUE;
}

export async function clearAdminCookie() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
}
