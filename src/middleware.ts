import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;

  const isLogin = pathname === "/login";

  const isStaticFile =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname === "/favicon.ico";

  const isAPI = pathname.startsWith("/api");

  if (isLogin || isStaticFile || isAPI || token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
export const config = {
  matcher: ["/((?!api|_next|assets|favicon.ico).*)"],
};
