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

interface RouteProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RouteProps) {
	const { slug } = await params;
	return { title: `${slugToTitle(slug)} | Cooking with Fralle` };
}

export async function generateStaticParams() {
	return recipes.map((recipe) => ({
		slug: recipe.slug,
	}));
}

export default async function Page({ params }: RouteProps) {
	const { slug } = await params;
	const locale = await getLocale();
	const t = await getTranslations("recipe-names");
	const payloadConfig = await config;
	const payload = await getPayload({ config: payloadConfig });
	const recipe = await payload.findByID({
		collection: "recipes",
		id: slug,
		locale: "all",
	});
	// const recipe = recipes.find((recipe) => recipe.slug === slug);

	if (!recipe) {
		notFound();
	}

	return (
		<>
			<BackButton />
			<BackgroundChanger color={recipe.color} />
			<div className={cn("flex-auto", recipe.color)}>
				<div className="flex min-h-screen flex-col bg-header">
					<RecipeTitle title={t(recipe.id)} />
					<main className="relative mx-auto flex w-full max-w-2xl flex-auto flex-col rounded-3xl rounded-b-none bg-stone-100 px-2 py-6 pb-12 text-stone-700 transition-all sm:px-8">
						<div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between">
							<RecipeDynamic
								defaultServings={recipe.defaultServings}
								ingredients={recipe.ingredients}
							/>
							<RecipeImage
								alt={recipe.image.alt}
								slug={recipe.id}
								src={recipe.image.url}
							/>
						</div>
						<InstructionsList>
							{recipe.instructions["English"].map((instruction, i) => (
								<li key={instruction.id} className="flex gap-4">
									<div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold">
										{i + 1}
									</div>
									{instruction.instruction}
								</li>
							))}
						</InstructionsList>
					</main>
				</div>
			</div>
		</>
	);
}
