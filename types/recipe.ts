import { RecipeImages } from "@/data/images";
import { themes } from "@/helpers/tailwindUtils";

export type IngredientType = {
  label: string;
  amount?: number;
  measurement?: "weight" | "volume" | "pieces" | "drinkvolume";
};

export type Ingredients = {
  label: string;
  data: IngredientType[];
};

export type Recipe = {
  title: string;
  slug: string;
  image: keyof typeof RecipeImages;
  color: keyof typeof themes;
  defaultServings: number;
  keywords: string[];
  ingredients: Ingredients[];
  instructions: string[];
};
