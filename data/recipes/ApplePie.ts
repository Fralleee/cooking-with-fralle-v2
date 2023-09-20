import { bakingKeywords } from "@/data/keywords";
import { Recipe } from "@/types/recipe";

const ApplePie: Recipe = {
  title: "Äppelpaj",
  slug: "apple-pie",
  image: "pie",
  color: "yellow",
  keywords: ["äpple", "äppel", "apple", "paj", "pie", ...bakingKeywords],
  defaultServings: 8,
  ingredients: [
    {
      label: "Fyllning",
      data: [
        { label: "Äpplen", amount: 5, measurement: "pieces" },
        { label: "Strösocker", amount: 75, measurement: "volume" },
        { label: "Farinsocker", amount: 30, measurement: "volume" },
        { label: "Kanel", amount: 15, measurement: "volume" },
        { label: "Kardemumma", amount: 10, measurement: "volume" },
        { label: "Potatismjöl", amount: 60, measurement: "volume" },
      ],
    },
    {
      label: "Deg",
      data: [
        { label: "Smör", amount: 175, measurement: "weight" },
        { label: "Strösocker", amount: 200, measurement: "volume" },
        { label: "Havregryn", amount: 300, measurement: "volume" },
        { label: "Vetemjöl", amount: 150, measurement: "volume" },
        { label: "Bakpulver", amount: 5, measurement: "volume" },
        { label: "Vaniljsocker", amount: 10, measurement: "volume" },
        { label: "Ljus sirap", amount: 50, measurement: "volume" },
        { label: "Salt", amount: 2.5, measurement: "volume" },
      ],
    },
  ],
  instructions: [
    "Sätt ugnen på 175 grader.",
    "Blanda ihop alla ingredienserna till fyllningen i en bunke och sprid ut i pajformen.",
    "I en annan bunke blandar du ihop strösocker, salt, havregryn, vetemjöl, bakpulver och vaniljsocker.",
    "Smält smöret i en kastrull och häll sedan ner det i bunken tillsammans med sirap. ",
    "Rör ihop till en jämn smet och klicka ut den på äppelfyllningen. Bre försiktigt ut i ett jämnt lager över äpplena.",
    "Grädda pajen i mitten av ugnen i ca 30-40 minuter eller tills den fått en fin gyllenbrun färg och inte längre är glansig.",
  ],
};

export default ApplePie;
