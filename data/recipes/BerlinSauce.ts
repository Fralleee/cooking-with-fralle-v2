import { foodKeywords } from "@/data/keywords";

const BerlinSauce: Recipe = {
  title: "Berlinsås",
  url: "/berlin-sauce",
  color: "red",
  keywords: ["berlin", "sauce", "kebab", ...foodKeywords],
  defaultPortions: 2,
  ingredients: [
    {
      label: "",
      data: [
        { label: "Majonnäs", amount: 100, measurement: "volume" },
        { label: "Sweet chilisås", amount: 10, measurement: "volume" },
        { label: "Oystersås", amount: 15, measurement: "volume" },
        { label: "Paprika", amount: 5, measurement: "volume" },
        { label: "Gurkmeja", amount: 5, measurement: "volume" },
        { label: "Dill", amount: 2.5, measurement: "volume" },
        { label: "Vitpeppar", amount: 2.5, measurement: "volume" },
        { label: "Svartpeppar", amount: 2.5, measurement: "volume" },
      ],
    },
  ],
  instructions: ["Blanda ihop alla ingredienser och rör om väl.", "Låta gärna stå 30-60 minuter."],
};

export default BerlinSauce;
