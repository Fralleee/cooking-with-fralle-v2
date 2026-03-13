import { cache } from "react";
import { notFound } from "next/navigation";
import config from "@/payload.config";
import RecipeTitle from "./_components/recipe-title";
import RecipeDynamic from "./_components/recipe-dynamic";
import { RecipeImage } from "./_components/recipe-image";
import InstructionsList from "./_components/instructions-list";
import { getPayload } from "payload";
import { type Locale, isSupportedLocale, defaultLocale } from "@/i18n-config";
import { translations } from "@/app/i18n/translations";
import { RecipeMeta } from "./_components/recipe-meta";
import { ViewTransition } from "react";

export const dynamic = "error";
export const revalidate = 3600;

const getRecipeBySlug = cache(async (slug: string, locale?: Locale) => {
	const payloadInstance = await getPayload({ config });
	return payloadInstance.find({
		collection: "recipes",
		where: { slug: { equals: slug } },
		limit: 1,
		depth: 2,
		locale: locale ?? "en",
		fallbackLocale: "en",
	});
});

interface RouteProps {
	params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: RouteProps) {
	const { slug } = await params;
	const result = await getRecipeBySlug(slug);
	const recipe = result?.docs[0];

	if (!recipe) {
		notFound();
	}

	return { title: `${recipe.name} | Cooking with Fralle` };
}

export async function generateStaticParams() {
	const payloadInstance = await getPayload({ config });
	const { docs: recipes } = await payloadInstance.find({
		collection: "recipes",
	});

	return recipes.map((recipe: { slug: string }) => ({
		slug: recipe.slug,
	}));
}

export default async function Page({ params }: RouteProps) {
	const { slug, locale: rawLocale } = await params;
	const locale: Locale = isSupportedLocale(rawLocale) ? rawLocale : defaultLocale;
	const result = await getRecipeBySlug(slug, locale);
	const recipe = result?.docs[0];

	if (!recipe) {
		notFound();
	}

	return (
		<ViewTransition name="background">
			<div className="flex-auto" style={{ backgroundColor: recipe.color }}>
				<div className="flex min-h-screen flex-col bg-header">
					<RecipeTitle title={recipe.name} />
					<main className="relative mx-auto flex w-full max-w-2xl flex-auto flex-col rounded-3xl rounded-b-none bg-stone-100 px-2 py-6 pb-12 text-stone-700 transition-all sm:px-8">
						<RecipeMeta recipe={recipe} locale={locale} t={translations[locale]} />
						<div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between">
							<RecipeDynamic
								defaultServings={recipe.defaultServings}
								ingredientsGroups={recipe.ingredientGroups}
							/>
							<RecipeImage
								slug={recipe.slug}
								src={
									typeof recipe.image === "string"
										? recipe.image
										: recipe.image.url || "/images/notfound.webp"
								}
								alt={
									typeof recipe.image === "string"
										? recipe.slug
										: recipe.image.alt
								}
							/>
						</div>
						<InstructionsList>
							{recipe.instructions.split("\n").map((instruction, i) => (
								<li key={i} className="flex gap-4">
									<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 font-bold text-white">
										{i + 1}
									</div>
									{instruction}
								</li>
							))}
						</InstructionsList>
					</main>
				</div>
			</div>
		</ViewTransition>
	);
}
