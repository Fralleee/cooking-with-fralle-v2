type Recipe = {
  title: string;
  url: string;
  color: string;
  defaultPortions: number;
  keywords: string[];
  ingredients: {
    label: string;
    data: IngredientType[];
  }[];
  instructions: string[];
};
