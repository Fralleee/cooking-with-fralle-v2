import { Recipe } from "@/types/Recipe";
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
    <Link href={`/${recipe.slug}`} className={cn("relative group w-full shadow-none transform-none sm:w-64 sm:hover:shadow-plain sm:hover:rotate-3 sm:hover:scale-105 ease-OutBackLarge grid place-items-center h-64 bg-red-400 rounded-3xl transition-link duration-250", themes[recipe.color].background)}>

      <Image src={RecipeImages[recipe.image]} alt={recipe.title} width={192} height={192} className="-mt-6 transition-transform scale-75 opacity-80 group-hover:opacity-100 group-hover:scale-90 ease-OutBackLarge" />

      <h2 className="absolute bottom-3 drop-shadow-md text-center text-white header-stroke text-3xl z-10">{recipe.title}</h2>
    </Link>
  );
};

export default RecipeLink;
