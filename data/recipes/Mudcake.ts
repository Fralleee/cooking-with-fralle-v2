import { bakingKeywords } from "@/data/keywords";
import { Recipe } from "@/types/recipe";

const MudCake: Recipe = {
  slug: "mudcake",
  color: "purple",
  image: "mudcake",
  keywords: ["kladdkaka", "mudcake", ...bakingKeywords],
  defaultServings: 8,
  ingredients: [
    {
      label: "",
      data: [
        { label: "butter", amount: 200, measurement: "weight" },
        { label: "dark-chocolate", amount: 100, measurement: "weight" },
        { label: "sugar", amount: 450, measurement: "volume" },
        { label: "flour", amount: 200, measurement: "volume" },
        { label: "eggs", amount: 4, measurement: "pieces" },
        { label: "vanilla-sugar", amount: 10, measurement: "volume" },
        { label: "baking-powder", amount: 7.5, measurement: "volume" },
        { label: "salt", amount: 1.5, measurement: "volume" },
      ],
    },
  ],
  instructions: {
    en: [
      "Preheat the oven to 175°C.",
      "Melt butter and chocolate while stirring in a saucepan.",
      "Add the remaining ingredients for the cake and stir into a smooth batter.",
      "Grease and flour a springform pan.",
      "Pour the batter into the pan and bake in the middle of the oven for about 25 minutes.",
      "Let cool completely before indulging.",
    ],
    sv: [
      "Sätt på ugnen på 175 grader.",
      "Smält smör och choklad under omrörning i en kastrull. ",
      "Tillsätt övriga ingredienser till kakan och rör till en jämn smet.",
      "Smörj och bröa en form med löstagbar kant.",
      "Häll smeten i formen och grädda i mitten av ugnen ca 25 min.",
      "Låt svalna helt innan du frossar.",
    ],
  },
};

export default MudCake;
