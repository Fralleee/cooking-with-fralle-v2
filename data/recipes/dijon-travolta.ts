import { drinkKeywords } from "@/data/keywords";
import type { Recipe } from "@/types/recipe";

const DijonTravolta: Recipe = {
	slug: "dijon-travolta",
	color: "oklch(0.901 0.076 70.697)",
	image: "cocktail",
	keywords: ["dijon", "travolta", "tequila", "citron", ...drinkKeywords],
	defaultServings: 2,
	ingredients: [
		{
			label: "",
			data: [
				{ label: "tequila", amount: 160, measurement: "drinkvolume" },
				{ label: "cointreau", amount: 80, measurement: "drinkvolume" },
				{ label: "agave-syrup", amount: 40, measurement: "drinkvolume" },
				{ label: "tonic", amount: 400, measurement: "drinkvolume" },
				{ label: "lemons", amount: 2, measurement: "pieces" },
				{ label: "ice" },
			],
		},
	],
	instructions: {
		en: [
			"Mix all the ingredients except tonic and ice in a shaker.",
			"Shake well with a large ice cube.",
			"Fill the glass with ice and pour in the mixture.",
			"Top with tonic.",
		],
		sv: [
			"Blanda alla ingredienser utom tonic och is i en shaker.",
			"Skaka väl ihop med en stor isbit.",
			"Fyll drinkglas med is och häll i blandningen.",
			"Toppa med tonic.",
		],
	},
};

export default DijonTravolta;
