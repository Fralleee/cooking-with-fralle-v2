import { foodKeywords } from "@/data/keywords";
import type { Recipe } from "@/types/recipe";

const BerlinSauce: Recipe = {
	slug: "berlin-sauce",
	color: "oklch(0.882 0.059 254.128)",
	image: "sauce",
	keywords: ["berlin", "sauce", "kebab", ...foodKeywords],
	defaultServings: 2,
	ingredients: [
		{
			label: "",
			data: [
				{ label: "mayonnaise", amount: 100, measurement: "volume" },
				{ label: "sweet-chili-sauce", amount: 10, measurement: "volume" },
				{ label: "oyster-sauce", amount: 15, measurement: "volume" },
				{ label: "paprika", amount: 5, measurement: "volume" },
				{ label: "turmeric", amount: 5, measurement: "volume" },
				{ label: "dill", amount: 2.5, measurement: "volume" },
				{ label: "white-pepper", amount: 2.5, measurement: "volume" },
				{ label: "black-pepper", amount: 2.5, measurement: "volume" },
			],
		},
	],
	instructions: {
		en: ["Mix all ingredients and stir well.", "Let stand for 30-60 minutes."],
		sv: [
			"Blanda ihop alla ingredienser och rör om väl.",
			"Låta gärna stå 30-60 minuter.",
		],
	},
};

export default BerlinSauce;
