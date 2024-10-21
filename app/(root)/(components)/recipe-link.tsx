import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { recipeImages } from "@/data/images";
import { cn } from "@/lib/utils";
import { themes } from "@/helpers/tailwindUtils";
import { Link } from "next-view-transitions";

type Props = {
  recipe: Recipe;
  delay: number;
};

const RecipeLink = ({ recipe, delay }: Props) => {
  return (
    <div className="origin-top transform-gpu" style={{ animationDelay: `${delay}ms` }}>
      <Link href={`/${encodeURIComponent(recipe.slug)}`}>
        <div
          className={cn(
            "group relative grid h-64 w-64 transform-none place-items-center rounded-3xl p-8 shadow-none transition-all duration-200 ease-OutBackLarge",
            "sm:hover:rotate-3 sm:hover:scale-105 sm:hover:shadow-plain",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "active:!scale-95 sm:active:rotate-3 sm:active:shadow-plain",
            themes[recipe.color].background,
          )}
        >
          <Image
            src={recipeImages[recipe.image]}
            data-view-transition={`recipe-image-${recipe.slug}`}
            alt={recipe.title}
            width={160}
            height={160}
            draggable={false}
            style={{
              viewTransitionName: `image-${recipe.slug}`,
            }}
            className="-mt-6 h-auto w-full scale-90 opacity-80 transition-transform duration-200 ease-OutBackLarge group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100"
          />

          <h2 className="header-stroke absolute bottom-3 z-10 text-center text-3xl text-stone-100 drop-shadow-md">{recipe.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default RecipeLink;
