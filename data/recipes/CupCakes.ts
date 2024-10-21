import { bakingKeywords } from "@/data/keywords";
import { Recipe } from "@/types/recipe";

const Cupcakes: Recipe = {
  slug: "cupcakes",
  color: "rose",
  image: "cupcake",
  keywords: ["muffins", "cupcakes", ...bakingKeywords],
  defaultServings: 12,
  ingredients: [
    {
      label: "",
      data: [
        { label: "flour", amount: 213, measurement: "weight" },
        { label: "sugar", amount: 150, measurement: "weight" },
        { label: "baking-powder", amount: 10, measurement: "volume" },
        { label: "salt", amount: 5, measurement: "volume" },
        { label: "milk", amount: 180, measurement: "volume" },
        { label: "melted-butter-and-oil", amount: 170, measurement: "weight" },
        { label: "eggs", amount: 2, measurement: "pieces" },
        { label: "lemon-zest" },
      ],
    },
  ],
  instructions: {
    en: [
      "Preheat the oven to 180°C.",
      "Mix the dry ingredients in a small bowl.",
      "Mix the wet ingredients in a larger bowl.",
      "Pour the dry ingredients into the wet ones and mix with a spatula.",
      "Pour the batter into the cupcake liners.",
      "Bake for 15-20 minutes. Check with a toothpick.",
      "Let the cupcakes cool completely before eating.",
    ],
    sv: [
      "Sätt på ugnen på 180 grader.",
      "Blanda torra ingredienser i en liten skål.",
      "Blanda våta ingredienser i en större skål.",
      "Häll i torra till de våta och blanda med slickepott.",
      "Häll i smeten i formerna.",
      "Baka i 15-20 minuter. Kolla med tandpetare.",
      "Låt muffinsen svalna helt innan du äter dem.",
    ],
  },
};

export default Cupcakes;
