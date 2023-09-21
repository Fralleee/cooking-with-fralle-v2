"use client";
import { notFound } from "next/navigation";
import recipes from "@/data/recipe";
import { slugToTitle } from "@/helpers/stringUtils";
import ServingsCalculator from "@/components/servings-controls";
import IngredientsList from "@/components/ingredients-list";
import {
    getIngredient,
    getServingsFromSearchParams,
} from "@/helpers/recipeUtils";
import RecipeTitle from "@/components/recipe-title";
import InstructionsList from "@/components/instructions-list";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { themes } from "@/helpers/tailwindUtils";
import { Recipe } from "@/types/recipe";
import { RecipeImages } from "@/data/images";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    return {
        title: slugToTitle(params.slug),
    };
}

export async function generateStaticParams() {
    return recipes.map((recipe) => ({
        slug: recipe.slug,
    }));
}

interface Props {
    params: { slug: string };
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

export default function Page({ params, searchParams }: Props) {
    const recipe = recipes.find(
        (recipe) => recipe.slug === params.slug,
    ) as Recipe;

    if (!recipe) {
        notFound();
    }

    const servings = getServingsFromSearchParams(
        searchParams,
        recipe.defaultServings,
    );

    return (
        <div className={cn("flex-auto", themes[recipe.color].background)}>
            <div className="flex min-h-screen flex-col bg-header">
                <RecipeTitle title={recipe.title} />
                <main className="mx-auto flex w-full max-w-2xl flex-auto flex-col rounded-3xl rounded-b-none bg-stone-100 px-2 py-6 text-stone-700 transition-all sm:px-8">
                    <div className="relative flex flex-col items-center md:flex-row">
                        <Image
                            src={RecipeImages[recipe.image]}
                            alt={recipe.title}
                            width={256}
                            height={256}
                            className="relative right-0 top-0 h-auto w-64 md:absolute"
                            priority
                        />
                        <ServingsCalculator servings={servings} />
                    </div>
                    {recipe.ingredients.map((ingredientsType) => (
                        <IngredientsList
                            key={ingredientsType.label}
                            title={ingredientsType.label}
                        >
                            {ingredientsType.data.map((ingredient, i) => {
                                const { amount, label } = getIngredient(
                                    ingredient,
                                    recipe.defaultServings,
                                    servings,
                                );
                                return (
                                    <li key={i}>
                                        {amount && <strong>{amount}</strong>}{" "}
                                        {label}
                                    </li>
                                );
                            })}
                        </IngredientsList>
                    ))}
                    <InstructionsList>
                        {recipe.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>
                        ))}
                    </InstructionsList>
                </main>
            </div>
        </div>
    );
}
