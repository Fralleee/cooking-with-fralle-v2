import type { recipeImages } from "@/data/images";
import type { themes } from "@/helpers/tailwindUtils";

export type IngredientType = {
	label: string;
	amount?: number;
	measurement?: "weight" | "volume" | "pieces" | "drinkvolume";
};

export type Ingredients = {
	label: string;
	data: IngredientType[];
};

type Instructions = Record<string, string[]>;

export type Recipe = {
	slug: string;
	image: keyof typeof recipeImages;
	color: keyof typeof themes;
	defaultServings: number;
	keywords: string[];
	ingredients: Ingredients[];
	instructions: Instructions;
};
