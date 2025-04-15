import { type NextRequest, NextResponse } from "next/server";
import {
	defaultLocale,
	type Locale,
	isSupportedLocale,
	locales,
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

	const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value as Locale;
	const preferredLocale = isSupportedLocale(cookieLocale)
		? cookieLocale
		: getLocale(request);

	if (pathnameHasLocale) {
		const currentLocale = pathname.split("/")[1] as Locale;
		if (currentLocale !== preferredLocale) {
			const newPathname = pathname.replace(
				`/${currentLocale}`,
				`/${preferredLocale}`,
			);
			request.nextUrl.pathname = newPathname;
			return NextResponse.redirect(request.nextUrl);
		}

		return NextResponse.next();
	}

	request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: "/((?!api|trpc|_next|_vercel|admin|favicon|.*\\..*).*)",
};
