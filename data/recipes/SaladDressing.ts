import { foodKeywords } from "@/data/keywords";
import { Recipe } from "@/types/Recipe";

const SaldDressing: Recipe = {
  title: "Salladsdressing",
  slug: "salad-dressing",
  color: "red",
  image: "saladdressing",
  keywords: ["sallad", "dressing", ...foodKeywords],
  defaultServings: 2,
  ingredients: [
    {
      label: "",
      data: [
        { label: "Olja", amount: 15, measurement: "volume" },
        { label: "Majonnäs", amount: 15, measurement: "volume" },
        { label: "Senap", amount: 30, measurement: "volume" },
        { label: "Vinäger", amount: 30, measurement: "volume" },
        { label: "Knorr vitlöksdressing/grekisk dressing", amount: 1, measurement: "pieces" },
        { label: "Svartpeppar" },
      ],
    },
  ],
  instructions: ["Blanda ihop alla ingredienser och rör om väl.", "Låta gärna stå 30-60 minuter."],
};

export default SaldDressing;
