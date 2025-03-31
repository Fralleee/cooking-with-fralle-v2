import type { Recipe } from "@/types/recipe";
import Image from "next/image";
import { recipeImages } from "@/data/images";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { unstable_ViewTransition as ViewTransition } from "react";
import Link from "next/link";

type Props = {
	recipe: Recipe;
};

const RecipeLink = ({ recipe }: Props) => {
	const t = useTranslations("recipe-names");
	return (
		<div>
			<Link prefetch href={`/${encodeURIComponent(recipe.slug)}`}>
				<div
					className={cn(
						"group relative grid h-64 w-64 transform-none place-items-center rounded-3xl p-8 shadow-none transition-all duration-200 ease-OutBackLarge",
						"sm:hover:rotate-3 sm:hover:scale-105 sm:hover:shadow-plain",
						"focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
						"active:scale-95! sm:active:rotate-3 sm:active:shadow-plain",
					)}
					style={{ backgroundColor: recipe.color }}
				>
					<ViewTransition name={`recipe-image-${recipe.slug}`}>
						<Image
							src={recipeImages[recipe.image]}
							alt={`Image of ${t(recipe.slug)}`}
							width={160}
							height={160}
							draggable={false}
							className="-mt-6 h-auto w-full scale-90 opacity-70 transition-all duration-200 ease-OutBackLarge group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100"
						/>
					</ViewTransition>

					<h2 className="header-stroke absolute bottom-3 z-10 text-center text-3xl text-stone-100 drop-shadow-md">
						{t(recipe.slug)}
					</h2>
				</div>
			</Link>
		</div>
	);
};

export default RecipeLink;
