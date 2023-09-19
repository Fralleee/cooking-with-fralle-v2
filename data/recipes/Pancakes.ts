import { bakingKeywords } from "@/data/keywords";
import { Recipe } from "@/types/Recipe";

const Pancakes: Recipe = {
  title: "Pannkakor",
  slug: "pancakes",
  color: "yellow",
  image: "pancakes",
  keywords: ["pannkakor", "pancakes", ...bakingKeywords],
  defaultServings: 6,
  ingredients: [
    {
      label: "",
      data: [
        { label: "ägg", amount: 2, measurement: "pieces" },
        { label: "vetemjöl", amount: 200, measurement: "volume" },
        { label: "mjölk", amount: 200, measurement: "volume" },
        { label: "smält smör", amount: 30, measurement: "volume" },
        { label: "socker", amount: 30, measurement: "volume" },
        { label: "salt", amount: 2, measurement: "volume" },
      ],
    },
  ],
  instructions: ["Mix dry ingredients", "Add in melted butter", "Add in eggs", "Slowly whisk in the milk to prevent clumps", "Fry it baby!"],
};

export default Pancakes;
