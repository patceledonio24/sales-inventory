import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const ADMIN_ONLY_PREFIXES = ["/reports", "/admin", "/audit"];
const INPUT_PREFIXES = ["/input"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow NextAuth endpoints and public assets
  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthed = !!token;
  const role = (token as any)?.role as "ADMIN" | "STAFF" | undefined;

  const isProtected =
    ADMIN_ONLY_PREFIXES.some((p) => pathname.startsWith(p)) ||
    INPUT_PREFIXES.some((p) => pathname.startsWith(p));

  // Require login for protected pages
  if (isProtected && !isAuthed) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Admin-only enforcement
  if (ADMIN_ONLY_PREFIXES.some((p) => pathname.startsWith(p))) {
    if (role !== "ADMIN") {
      const url = req.nextUrl.clone();
      url.pathname = "/input";
      return NextResponse.redirect(url);
    }
  }

  // Input pages are allowed for ADMIN + STAFF
  return NextResponse.next();
}

export const config = {
  matcher: ["/reports/:path*", "/admin/:path*", "/audit/:path*", "/input/:path*"],
};
