import { RecipeImages } from "@/data/images";
import { themes } from "@/helpers/tailwindUtils";

export type Recipe = {
  title: string;
  slug: string;
  image: keyof typeof RecipeImages;
  color: keyof typeof themes;
  defaultServings: number;
  keywords: string[];
  ingredients: {
    label: string;
    data: IngredientType[];
  }[];
  instructions: string[];
};
