import { foodKeywords } from "@/data/keywords";
import type { Recipe } from "@/types/recipe";

const SaldDressing: Recipe = {
	slug: "salad-dressing",
	color: "green",
	image: "saladdressing",
	keywords: ["sallad", "dressing", ...foodKeywords],
	defaultServings: 2,
	ingredients: [
		{
			label: "",
			data: [
				{ label: "oil", amount: 15, measurement: "volume" },
				{ label: "mayonnaise", amount: 15, measurement: "volume" },
				{ label: "mustard", amount: 30, measurement: "volume" },
				{ label: "vinegar", amount: 30, measurement: "volume" },
				{ label: "knorr-greek-dressing", amount: 1, measurement: "pieces" },
				{ label: "black-pepper" },
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

export default SaldDressing;
