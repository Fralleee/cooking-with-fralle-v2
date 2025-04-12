"use client";
import ServingsCalculator from "./servings-controls";
import IngredientsList from "./ingredients-list";
import { getIngredient } from "@/helpers/recipe-utils";
import { useState } from "react";
import type { IngredientGroup } from "@/types/payload-types";
import { useTranslation } from "@/i18n/translation-context";

interface Props {
	defaultServings: number;
	ingredientsGroups: (string | IngredientGroup)[];
}

export default function RecipeDynamic({
	defaultServings,
	ingredientsGroups,
}: Props) {
	const { t } = useTranslation();
	const [servings, setServings] = useState(defaultServings);

	const handleServings = (input: number) => {
		setServings(Math.max(input, 2));
	};

	const shouldShowGroupTitle = ingredientsGroups.length > 1;

	return (
		<div className="flex flex-col">
			<ServingsCalculator servings={servings} handleServings={handleServings} />
			{Array.isArray(ingredientsGroups) &&
				(ingredientsGroups as IngredientGroup[]).map((group) => (
					<IngredientsList
						key={group.name}
						title={shouldShowGroupTitle ? group.name : ""}
					>
						{group.ingredients?.map((ingredient, i) => {
							const { amount, label } = getIngredient(
								ingredient.ingredient,
								ingredient.measurement,
								ingredient.amount,
								defaultServings,
								servings,
							);
							const [count, unit] = amount || [];
							return (
								<li key={i} className="flex items-center gap-2">
									<div className="h-3 w-3 rounded-full bg-rose-500" />
									{count && (
										<strong>
											{count && count} {unit && t[unit]}{" "}
										</strong>
									)}
									{label}
								</li>
							);
						})}
					</IngredientsList>
				))}
		</div>
	);
}
