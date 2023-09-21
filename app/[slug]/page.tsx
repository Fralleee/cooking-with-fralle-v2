import { notFound } from "next/navigation";
import recipes from "@/data/recipe";
import { slugToTitle } from "@/helpers/stringUtils";
import RecipeTitle from "@/components/recipe-title";
import InstructionsList from "@/components/instructions-list";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { themes } from "@/helpers/tailwindUtils";
import { Recipe } from "@/types/recipe";
import { RecipeImages } from "@/data/images";
import RecipeDynamic from "@/components/recipe-dynamic";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    return {
        title: `${slugToTitle(params.slug)} | Cooking with Fralle`,
    };
}

interface Props {
    params: { slug: string };
}

export default function Page({ params }: Props) {
    const recipe = recipes.find(
        (recipe) => recipe.slug === params.slug,
    ) as Recipe;

    if (!recipe) {
        notFound();
    }

    return (
        <div className={cn("flex-auto", themes[recipe.color].background)}>
            <div className="flex min-h-screen flex-col bg-header">
                <RecipeTitle title={recipe.title} />
                <main className="relative mx-auto flex w-full max-w-2xl flex-auto flex-col rounded-3xl rounded-b-none bg-stone-100 px-2 py-6 text-stone-700 transition-all sm:px-8">
                    <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between">
                        <RecipeDynamic
                            defaultServings={recipe.defaultServings}
                            ingredients={recipe.ingredients}
                        />
                        <Image
                            src={RecipeImages[recipe.image]}
                            alt={recipe.title}
                            width={256}
                            height={256}
                            priority
                        />
                    </div>
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
