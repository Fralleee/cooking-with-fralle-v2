import { notFound } from "next/navigation";
import recipes from "@/data/recipe";
import { slugToTitle } from "@/helpers/slugToTitle";
import RecipeTitle from "./(components)/recipe-title";
import InstructionsList from "./(components)/instructions-list";
import { cn } from "@/lib/utils";
import { themes } from "@/helpers/tailwindUtils";
import RecipeDynamic from "./(components)/recipe-dynamic";
import BackButton from "./(components)/back-button";
import { recipeImages } from "@/data/images";
import { BackgroundChanger } from "../components/background-changer";
import { getTranslations, getLocale } from "next-intl/server";
import { RecipeImage } from "./(components)/recipe-image";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { RecipeData } from "@/types/recipe";
import type { Media } from "@/types/payload-types";

interface RouteProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RouteProps) {
	const { slug } = await params;
	return { title: `${slugToTitle(slug)} | Cooking with Fralle` };
}

export async function generateStaticParams() {
	const payload = await getPayload({ config });
	const recipesResult = await payload.find({
		collection: "recipes",
	});

	return recipesResult.docs.map((recipe) => ({
		slug: recipe.id,
	}));
}

export default async function Page({ params }: RouteProps) {
	const { slug } = await params;
	const localeRaw = await getLocale();
	const locale = localeRaw === "en" || localeRaw === "sv" ? localeRaw : "en";
	const t = await getTranslations("recipe-names");
	const payloadConfig = await config;
	const payload = await getPayload({ config: payloadConfig });
	const recipe = await payload.findByID({
		collection: "recipes",
		id: slug,
		locale,
	});

	if (!recipe) {
		notFound();
	}

	const image = recipe.image as Media;

	return (
		<>
			<BackButton />
			<BackgroundChanger color={recipe.color} />
			<div className="flex-auto" style={{ backgroundColor: recipe.color }}>
				<div className="flex min-h-screen flex-col bg-header">
					<RecipeTitle title={t(recipe.id)} />
					<main className="relative mx-auto flex w-full max-w-2xl flex-auto flex-col rounded-3xl rounded-b-none bg-stone-100 px-2 py-6 pb-12 text-stone-700 transition-all sm:px-8">
						<div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between">
							<RecipeDynamic
								// defaultServings={recipe?.defaultServings ?? 2}
								defaultServings={2}
								ingredientsGroups={recipe.ingredientGroups}
							/>
							{image.url ? (
								<RecipeImage alt={image.alt} slug={recipe.id} src={image.url} />
							) : null}
						</div>
						<InstructionsList>
							{recipe.instructions.split("\n").map((instruction, i) => (
								<li key={i} className="flex gap-4">
									<div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold">
										{i + 1}
									</div>
									{instruction}
								</li>
							))}
						</InstructionsList>
					</main>
				</div>
			</div>
		</>
	);
}
