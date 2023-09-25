import { Recipe } from "@/types/recipe";
import Link from "next/link";
import Image from "next/image";
import { RecipeImages } from "@/data/images";
import { cn } from "@/lib/utils";
import { themes } from "@/helpers/tailwindUtils";

type Props = {
    recipe: Recipe;
};

const RecipeLink = ({ recipe }: Props) => {
    return (
        <Link
            href={`/${encodeURIComponent(recipe.slug)}`}
            prefetch
            draggable={false}
            className={cn(
                "group relative grid h-64 w-64 transform-none place-items-center rounded-3xl bg-red-400 p-8 shadow-none transition-link duration-200 ease-OutBackLarge sm:hover:rotate-3 sm:hover:scale-105 sm:hover:shadow-plain",
                "outline-offset-0 outline-stone-400 focus-visible:outline-2 focus-visible:outline-offset-4",
                "active:!scale-95",
                themes[recipe.color].background,
            )}
        >
            <Image
                src={RecipeImages[recipe.image]}
                alt={recipe.title}
                width={160}
                height={160}
                draggable={false}
                className="-mt-6 h-auto w-full scale-90 opacity-80 transition-transform duration-200 ease-OutBackLarge group-hover:scale-100 group-hover:opacity-100"
            />

            <h2 className="header-stroke absolute bottom-3 z-10 text-center text-3xl text-stone-100 drop-shadow-md">
                {recipe.title}
            </h2>
        </Link>
    );
};

export default RecipeLink;
