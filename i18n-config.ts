export const locales = ["en", "sv"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export function isSupportedLocale(locale: string): locale is Locale {
	return locales.includes(locale as Locale);
}
