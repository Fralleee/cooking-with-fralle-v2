import { drinkKeywords } from "@/data/keywords";

const DijonTravolta: Recipe = {
  title: "Dijon Travolta",
  slug: "dijon-travolta",
  color: "red",
  keywords: ["dijon", "travolta", "tequila", "citron", ...drinkKeywords],
  defaultServings: 2,
  ingredients: [
    {
      label: "",
      data: [
        { label: "Tequila", amount: 160, measurement: "drinkvolume" },
        { label: "Cointreau", amount: 80, measurement: "drinkvolume" },
        { label: "Agavesirap", amount: 40, measurement: "drinkvolume" },
        { label: "Tonic", amount: 400, measurement: "drinkvolume" },
        { label: "Citroner", amount: 2, measurement: "pieces" },
        { label: "Is" },
      ],
    },
  ],
  instructions: [
    "Blanda alla ingredienser utom tonic och is i en shaker.",
    "Skaka väl ihop med en stor isbit.",
    "Fyll drinkglas med is och häll i blandningen.",
    "Toppa med tonic.",
  ],
};

export default DijonTravolta;
