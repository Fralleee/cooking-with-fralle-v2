import Image from "next/image";
import { cn } from "@/lib/utils";
import { unstable_ViewTransition as ViewTransition } from "react";
import Link from "next/link";
import type { Recipe } from "@/types/payload-types";
import { useTranslation } from "@/i18n/translation-context";

type Props = {
	recipe: Recipe;
};

const RecipeLink = ({ recipe }: Props) => {
	const { locale } = useTranslation();
	const href = `/${locale}/${encodeURIComponent(recipe.slug)}`;
	return (
		<div>
			<Link prefetch href={href}>
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
							src={
								typeof recipe.image === "string"
									? recipe.image
									: recipe.image.url || "/placeholder-image.jpg"
							}
							alt={
								typeof recipe.image === "string"
									? recipe.slug
									: recipe.image.alt
							}
							width={160}
							height={160}
							draggable={false}
							className="-mt-6 h-auto w-full scale-90 opacity-70 transition-all duration-200 ease-OutBackLarge group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100"
						/>
					</ViewTransition>

					<h2 className="header-stroke absolute bottom-3 z-10 text-center text-3xl text-stone-100 drop-shadow-md">
						{recipe.name}
					</h2>
				</div>
			</Link>
		</div>
	);
};

export default RecipeLink;
