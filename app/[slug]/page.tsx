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
import { useTranslations, useLocale } from "next-intl";
import { BackgroundChanger } from "./(components)/background-changer";
import { getTranslations } from "next-intl/server";

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
	const t = await getTranslations("ProfilePage");
	const locale = useLocale();
	const { slug } = await params;
	const recipe = recipes.find(async (recipe) => recipe.slug === slug);

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
							<Image
								src={recipeImages[recipe.image]}
								alt={`Image of ${t(recipe.slug)}`}
								width={256}
								height={256}
								priority
								style={{
									viewTransitionName: `image-${recipe.slug}`,
								}}
							/>
						</div>
						<InstructionsList>
							{recipe.instructions[locale].map((instruction, i) => (
								<li key={i}>{instruction}</li>
							))}
						</InstructionsList>
					</main>
				</div>
			</div>
		</>
	);
}
