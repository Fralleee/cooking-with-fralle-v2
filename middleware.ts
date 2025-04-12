import { type NextRequest, NextResponse } from "next/server";
import {
	locales,
	defaultLocale,
	type Locale,
	isSupportedLocale,
} from "./i18n-config";

function getLocale(request: NextRequest): string {
	const acceptLang = request.headers.get("accept-language");
	if (!acceptLang) return defaultLocale;

	const preferred = acceptLang.split(",").map((l) => l.split(";")[0]);

	for (const lang of preferred) {
		const baseLang = lang.split("-")[0] as Locale;
		if (isSupportedLocale(baseLang)) {
			return baseLang;
		}
	}

	return defaultLocale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: "/((?!api|trpc|_next|_vercel|admin|.*\\..*).*)",
};
