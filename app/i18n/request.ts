import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

const allowedLocales = ["en", "sv"] as const;
type AllowedLocale = (typeof allowedLocales)[number];

export default getRequestConfig(async () => {
	const headersList = headers();
	const acceptLanguage = headersList.get("accept-language");

	let locale: AllowedLocale = "en"; // Default locale

	if (acceptLanguage) {
		const languages = acceptLanguage
			.split(",")
			.map((lang) => lang.split(";")[0].trim());

		for (const lang of languages) {
			if (allowedLocales.includes(lang as AllowedLocale)) {
				locale = lang as AllowedLocale;
				break;
			}
		}
	}

	return {
		locale,
		messages: (await import(`../locales/${locale}.json`)).default,
	};
});
