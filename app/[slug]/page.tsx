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
import Image from "next/image";
import { BackgroundChanger } from "./(components)/background-changer";
import { getTranslations, getLocale } from "next-intl/server";
import { unstable_ViewTransition as ViewTransition } from "react";

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
	const t = await getTranslations("recipe-names");
	const locale = await getLocale();
	const { slug } = await params;
	const recipe = recipes.find((recipe) => recipe.slug === slug);

	if (!recipe) {
		notFound();
	}

	return (
		<>
			<BackButton />
			<BackgroundChanger color={themes[recipe.color].background} />
			<div className={cn("flex-auto", themes[recipe.color].background)}>
				<div className="flex min-h-screen flex-col bg-header">
					<RecipeTitle title={t(recipe.slug)} />
					<main className="relative mx-auto flex w-full max-w-2xl flex-auto flex-col rounded-3xl rounded-b-none bg-stone-100 px-2 py-6 pb-12 text-stone-700 transition-all sm:px-8">
						<div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between">
							<RecipeDynamic
								defaultServings={recipe.defaultServings}
								ingredients={recipe.ingredients}
							/>
							<ViewTransition name={`recipe-image-${recipe.slug}`}>
								<Image
									src={recipeImages[recipe.image]}
									alt={`Image of ${t(recipe.slug)}`}
									width={256}
									height={256}
									priority
								/>
							</ViewTransition>
						</div>
						<InstructionsList>
							{recipe.instructions[locale].map((instruction, i) => (
								<li key={i} className="flex gap-4">
									<div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold">
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
