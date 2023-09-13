import { bakingKeywords } from "@/data/keywords";

const MudCake: Recipe = {
  title: "Kladdkaka",
  url: "/mud-cake",
  color: "midnight",
  keywords: ["kladdkaka", "mudcake", ...bakingKeywords],
  defaultPortions: 8,
  ingredients: [
    {
      label: "",
      data: [
        { label: "Smör", amount: 150, measurement: "weight" },
        { label: "Ägg", amount: 3, measurement: "pieces" },
        { label: "Strösocker", amount: 250, measurement: "volume" },
        { label: "Kakao", amount: 150, measurement: "volume" },
        { label: "Vetemjöl", amount: 250, measurement: "volume" },
        { label: "Ljus sirap", amount: 100, measurement: "volume" },
        { label: "Vaniljpulver", amount: 10, measurement: "volume" },
        { label: "Starkt kaffe", amount: 30, measurement: "volume" },
        { label: "Soja", amount: 2.5, measurement: "volume" },
      ],
    },
  ],
  instructions: [
    "Sätt på ugnen på 180 grader.",
    "Blanda torra ingredienser i en liten skål.",
    "Avvakta tills smöret har kallnat innan det blandas med annat",
    "Blanda våta ingredienser i en större skål.",
    "Häll i torra till de våta och blanda med slickepott.",
    "Häll i smeten i formen.",
    "Grädda i ca 15-20 minuter.",
    "Låt svalna helt innan du frossar.",
  ],
};

export default MudCake;
