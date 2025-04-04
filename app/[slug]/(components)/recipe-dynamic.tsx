"use client";
import ServingsCalculator from "./servings-controls";
import IngredientsList from "./ingredients-list";
import { getIngredient } from "@/helpers/recipe-utils";
import type { Ingredients } from "@/types/recipe";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface Props {
	defaultServings: number;
	ingredients: Ingredients[];
}

export default function RecipeDynamic({ defaultServings, ingredients }: Props) {
	const [servings, setServings] = useState(defaultServings);
	const t = useTranslations("ingredients");
	const tm = useTranslations("measurements");

	const handleServings = (input: number) => {
		setServings(Math.max(input, 2));
	};

	return (
		<div className="flex flex-col">
			<ServingsCalculator servings={servings} handleServings={handleServings} />
			{ingredients.map((ingredientsType) => (
				<IngredientsList
					key={ingredientsType.label}
					title={ingredientsType.label}
				>
					{ingredientsType.data.map((ingredient, i) => {
						const { amount, label } = getIngredient(
							ingredient,
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
								{t(label, { count })}
							</li>
						);
					})}
				</IngredientsList>
			))}
		</div>
	);
}
