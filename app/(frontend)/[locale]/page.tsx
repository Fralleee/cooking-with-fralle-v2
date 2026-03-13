import { cache } from "react";
import { getPayload } from "payload";
import config from "@/payload.config";
import RecipeList from "./_components/recipe-list";
import Header from "./_components/header";
import { type Locale, isSupportedLocale, defaultLocale, locales } from "@/i18n-config";
import { ViewTransition } from "react";

export const dynamic = "error";
export const revalidate = 3600;

const getRecipes = cache(async (locale: Locale) => {
	const payloadInstance = await getPayload({ config });
	return payloadInstance.find({
		collection: "recipes",
		locale,
		fallbackLocale: "en",
	});
});

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
	const { locale: rawLocale } = await params;
	const locale: Locale = isSupportedLocale(rawLocale) ? rawLocale : defaultLocale;
	const recipes = await getRecipes(locale);

	return (
		<ViewTransition name="background">
			<div className="bg-sky-300">
				<Header />
				<main className="flex bg-stone-100">
					<RecipeList recipes={recipes.docs} locale={locale} />
				</main>
			</div>
		</ViewTransition>
	);
}
