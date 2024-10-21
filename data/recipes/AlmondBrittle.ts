import { bakingKeywords } from "@/data/keywords";
import { Recipe } from "@/types/recipe";

const AlmondBrittle: Recipe = {
  title: "Krokant",
  slug: "almond-brittle",
  color: "orange",
  image: "brittle",
  keywords: ["krokant", "almond", "brittle", ...bakingKeywords],
  defaultServings: 4,
  ingredients: [
    {
      label: "",
      data: [
        { label: "Sötmandel", amount: 100, measurement: "weight" },
        { label: "Smör", amount: 100, measurement: "weight" },
        { label: "Strösocker", amount: 100, measurement: "volume" },
        { label: "Vetemjöl", amount: 30, measurement: "volume" },
        { label: "Mjölk", amount: 30, measurement: "volume" },
        { label: "Sirap", amount: 30, measurement: "volume" },
        { label: "Vaniljsocker", amount: 15, measurement: "volume" },
        { label: "Salt", amount: 2.5, measurement: "volume" },
      ],
    },
  ],
  instructions: [
    "Sätt på ugnen på 175 grader.",
    "Finhacka sötmandeln. ",
    "Blanda smör, socker, mjöl, mjölk och sirap i en kastrull. Smält ihop och värm tills första bubblorna dyker upp. Dra av från plattan och tillsätt mandeln.",
    "Klä en plåt med bakplåtspapper. Sprid över ca 1 dl smet på plåten.",
    "Grädda mitt i ugnen i ca 5 minuter.",
    "Låt svalna/stelna och ta av.",
  ],
};

export default AlmondBrittle;
