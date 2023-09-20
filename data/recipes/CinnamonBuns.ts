import { bakingKeywords } from "@/data/keywords";
import { Recipe } from "@/types/recipe";

const CinnamonRolls: Recipe = {
  title: "Kanelbullar",
  slug: "cinnamon-rolls",
  color: "orange",
  image: "bun",
  keywords: ["kanel", "bullar", ...bakingKeywords],
  defaultServings: 12,
  ingredients: [
    {
      label: "Pre dough",
      data: [
        { label: "Vetemjöl", amount: 480, measurement: "weight" },
        { label: "Mjölk", amount: 400, measurement: "volume" },
        { label: "Jäst", amount: 40, measurement: "weight" },
      ],
    },
    {
      label: "Add to pre dough",
      data: [
        { label: "Vetemjöl", amount: 400, measurement: "weight" },
        { label: "Ägg", amount: 1, measurement: "pieces" },
        { label: "Salt", amount: 2.5, measurement: "volume" },
        { label: "Kardemumma", amount: 7.5, measurement: "volume" },
        { label: "Socker", amount: 160, measurement: "weight" },
        { label: "Kallt smör", amount: 160, measurement: "weight" },
      ],
    },
    {
      label: "Filling",
      data: [
        { label: "Smör", amount: 400, measurement: "weight" },
        { label: "Socker", amount: 200, measurement: "volume" },
        { label: "Kanel", amount: 30, measurement: "volume" },
        { label: "Kardemumma", amount: 5, measurement: "volume" },
      ],
    },
    {
      label: "Sockerlag",
      data: [
        { label: "Socker", amount: 100, measurement: "volume" },
        { label: "Vatten", amount: 100, measurement: "volume" },
      ],
    },
  ],
  instructions: [
    "Med degkrok på din köksasistent blanda fördegen på låg hastighet i 4min. Låt jäsa 20 min.",
    "Tillsätt sedan resterande och blanda i 13min. Gör glutentest.",
    "Ställ in i kyl  i 30 min.",
    "Gör bullsmör med elvisp, vispa till luftig.",
    "Kavla sen ut, bre på bullsmet och rulla ihop. (om smeten är för stor dela den i två och kavla ut dom i omgångar)",
    "Dela rullen med kniv, totalt ska du få ut mellan 25-30bullar",
    "Lägg på bakplåtspapper dom du vill grädda, ha på handuk och låt jäsa 30-50min. Frys in dom andra som i videon.",
    "Pensla dom jästa bullaran med äggvisp och ha på pärlsocker, grädda i ugnen på 200°c i 6-7 min. Ta ut och pensla på sockerlag.",
    "Servera sen och njut av fikabordets konung!",
  ],
};

export default CinnamonRolls;
