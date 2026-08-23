import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. i18n: redirect to default locale if no locale in URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // 2. Pass current pathname in headers so Server Components can inspect it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
