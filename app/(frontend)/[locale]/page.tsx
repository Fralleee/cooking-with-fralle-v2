import { getPayload } from "payload";
import config from "@/payload.config";
import RecipeList from "./_components/recipe-list";
import Header from "./_components/header";
import { type Locale, locales } from "@/i18n-config";
import { unstable_ViewTransition as ViewTransition } from "react";

export const dynamic = "error";
export const revalidate = 3600;

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: Props) {
	const payloadInstance = await getPayload({ config });
	const { locale } = await params;

	const recipes = await payloadInstance.find({
		collection: "recipes",
		locale,
		fallbackLocale: "en",
	});

	return (
		<ViewTransition name="background">
			<div className="bg-sky-300">
				<Header />
				<main className="flex bg-stone-100">
					<RecipeList recipes={recipes.docs} />
				</main>
			</div>
		</ViewTransition>
	);
}
