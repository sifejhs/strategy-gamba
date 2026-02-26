import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLocaleFromRequest } from "@/lib/geo-locale";

const ADMIN_COOKIE = "admin_session";
const ADMIN_COOKIE_VALUE = "authenticated";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Google Search Console verification file — serve directly from middleware
  if (path === "/google28a1bb12c03039aa.html") {
    return new NextResponse(
      "google-site-verification: google28a1bb12c03039aa.html",
      { status: 200, headers: { "content-type": "text/html" } }
    );
  }

  // Geo-based language redirect: / → /{locale} from IP country or Accept-Language
  if (path === "/") {
    const country = request.headers.get("x-vercel-ip-country") ?? undefined;
    const acceptLanguage = request.headers.get("accept-language") ?? undefined;
    const locale = getLocaleFromRequest(country, acceptLanguage);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  if (!path.startsWith("/admin")) return NextResponse.next();
  if (path === "/admin/login") return NextResponse.next();

  const cookie = request.cookies.get(ADMIN_COOKIE)?.value;
  if (path === "/admin") {
    return NextResponse.redirect(new URL(cookie === ADMIN_COOKIE_VALUE ? "/admin/stats" : "/admin/login", request.url));
  }
  if (cookie !== ADMIN_COOKIE_VALUE) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/admin/:path*", "/google28a1bb12c03039aa.html"],
};
