import { bakingKeywords } from "@/data/keywords";
import { Recipe } from "@/types/recipe";

const MudCake: Recipe = {
  title: "Kladdkaka",
  slug: "mud-cake",
  color: "purple",
  image: "mudcake",
  keywords: ["kladdkaka", "mudcake", ...bakingKeywords],
  defaultServings: 8,
  ingredients: [
    {
      label: "",
      data: [
        { label: "Smör", amount: 200, measurement: "weight" },
        { label: "Mörk choklad", amount: 100, measurement: "weight" },
        { label: "Ägg", amount: 4, measurement: "pieces" },
        { label: "Strösocker", amount: 350, measurement: "volume" },
        { label: "Vetemjöl", amount: 200, measurement: "volume" },
        { label: "Ljus sirap", amount: 100, measurement: "volume" },
        { label: "Vaniljpulver", amount: 10, measurement: "volume" },
        { label: "Bakpulver", amount: 7.5, measurement: "volume" },
        { label: "Starkt kaffe", amount: 30, measurement: "volume" },
        { label: "Soja", amount: 2.5, measurement: "volume" },
      ],
    },
  ],
  instructions: [
    "Sätt på ugnen på 175 grader.",
    "Smält smör och choklad under omrörning i en kastrull. ",
    "Tillsätt övriga ingredienser till kakan och rör till en jämn smet.", 
    "Smörj och bröa en form med löstagbar kant.",
    "Häll smeten i formen och grädda i mitten av ugnen ca 25 min.",
    "Låt svalna helt innan du frossar.",
  ],
};

export default MudCake;
