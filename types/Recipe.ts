type Recipe = {
  title: string;
  slug: string;
  color: string;
  defaultServings: number;
  keywords: string[];
  ingredients: {
    label: string;
    data: IngredientType[];
  }[];
  instructions: string[];
};
