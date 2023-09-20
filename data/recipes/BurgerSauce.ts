import { foodKeywords } from "@/data/keywords";
import { Recipe } from "@/types/recipe";

const BurgerSauce: Recipe = {
  title: "Hamburgersås",
  slug: "burger-sauce",
  color: "teal",
  image: "sauce2",
  keywords: ["hamburgare", "burgare", "sås", "dressing", "dip", ...foodKeywords],
  defaultServings: 8,
  ingredients: [
    {
      label: "",
      data: [
        { label: "Gullök", measurement: "pieces", amount: 2 },
        { label: "Saltgurka", measurement: "pieces", amount: 2 },
        { label: "Smör", measurement: "volume", amount: 30 },
        { label: "Majonnäs", measurement: "volume", amount: 175 },
        { label: "Ketchup", measurement: "volume", amount: 125 },
        { label: "Gräslök", measurement: "volume", amount: 15 },
        { label: "worcestershiresås", measurement: "volume", amount: 30 },
        { label: "Salt, socker och peppar" },
      ],
    },
  ],
  instructions: [
    "Hacka löken och börjar steka smöret på medelvärme.",
    "Släng in löken i stekpannan när smöret börjat bubbla ihop med lite socker och salt.",
    "Stek på medelvärme i ca 30 minuter tills fullständigt karamelliserade",
    "I en skål, blanda ihop majonnäs, ketchup, gräslök, worcestershiresås med salt och peppar.",
    "Finhacka saltgurkan och lägg i skålen ihop med löken.",
  ],
};

export default BurgerSauce;
