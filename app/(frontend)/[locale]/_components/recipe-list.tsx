"use client";

import RecipeLink from "./recipe-link";
import type { Recipe } from "@/types/payload-types";

interface Props {
	recipes: Recipe[];
}

export default function RecipeList({ recipes }: Props) {
	return (
		<div className="mx-auto flex w-full max-w-5xl flex-col justify-center gap-8 py-8">
			<div className="flex flex-1 flex-wrap justify-center gap-7">
				{recipes.map((recipe) => (
					<RecipeLink key={recipe.slug} recipe={recipe} />
				))}
			</div>
		</div>
	);
}
