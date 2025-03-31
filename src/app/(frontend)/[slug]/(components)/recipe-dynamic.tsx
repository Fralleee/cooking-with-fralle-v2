"use client";
import ServingsCalculator from "./servings-controls";
import IngredientsList from "./ingredients-list";
import { getIngredient } from "@/helpers/recipeUtils";
import type { Ingredients } from "@/types/recipe";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { IngredientGroup, Recipe } from "@/types/payload-types";

interface Props {
	defaultServings: number;
	ingredientsGroups: Recipe["ingredientGroups"];
}

function isIngredientGroup(
	item: number | IngredientGroup,
): item is IngredientGroup {
	return typeof item !== "number";
}

export default function RecipeDynamic({
	defaultServings,
	ingredientsGroups,
}: Props) {
	const [servings, setServings] = useState(defaultServings);
	const t = useTranslations("ingredients");
	const tm = useTranslations("measurements");

	const handleServings = (input: number) => {
		setServings(Math.max(input, 2));
	};

	const validIngredientGroups = ingredientsGroups.filter(isIngredientGroup);
	if (
		!validIngredientGroups.every(
			(group) => group.ingredients && group.ingredients.length > 0,
		)
	) {
		return (
			<div className="text-red-500">
				Ingredient groups have not been setup correctly for this recipe.
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<ServingsCalculator servings={servings} handleServings={handleServings} />
			{(ingredientsGroups as IngredientGroup[]).map((group) => {
				return (
					<IngredientsList
						key={group.id}
						title={ingredientsGroups.length > 1 ? group.name : undefined}
					>
						{group.ingredients?.map((ingredient, i) => {
							const { amount, label } = getIngredient(
								ingredient.ingredient,
								ingredient.amount,
								defaultServings,
								servings,
							);
							const [count = 1, unit] = amount || [];
							return (
								<li key={i} className="flex items-center gap-2">
									<div className="h-3 w-3 rounded-full bg-rose-500" />
									<strong>
										{count} {unit && tm(unit)}
									</strong>{" "}
									{label}
								</li>
							);
						})}
					</IngredientsList>
				);
			})}
		</div>
	);
}
