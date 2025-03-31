import { bakingKeywords } from "@/data/keywords";
import type { Recipe } from "@/types/recipe";

const Pancakes: Recipe = {
	slug: "pancakes",
	color: "oklch(0.917 0.08 205.041)",
	image: "pancakes",
	keywords: ["pannkakor", "pancakes", ...bakingKeywords],
	defaultServings: 6,
	ingredients: [
		{
			label: "",
			data: [
				{ label: "eggs", amount: 2, measurement: "pieces" },
				{ label: "flour", amount: 200, measurement: "volume" },
				{ label: "milk", amount: 200, measurement: "volume" },
				{ label: "melted-butter", amount: 30, measurement: "volume" },
				{ label: "sugar", amount: 30, measurement: "volume" },
				{ label: "salt", amount: 2, measurement: "volume" },
			],
		},
	],
	instructions: {
		en: [
			"Mix the dry ingredients.",
			"Add the melted butter.",
			"Add the eggs.",
			"Slowly whisk in the milk to prevent lumps.",
			"Fry them!",
		],
		sv: [
			"Mixa de torra ingredienserna",
			"Lägg in det smälta smöret",
			"Lägg till äggen",
			"Rör i mjölken försiktigt för att förhindra klumpar",
			"Stek dem baby!",
		],
	},
};

export default Pancakes;
