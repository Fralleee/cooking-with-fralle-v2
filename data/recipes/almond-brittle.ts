import { bakingKeywords } from "@/data/keywords";
import type { Recipe } from "@/types/recipe";

const AlmondBrittle: Recipe = {
	slug: "almond-brittle",
	color: "oklch(0.901 0.076 70.697)",
	image: "brittle",
	keywords: ["krokant", "almond", "brittle", ...bakingKeywords],
	defaultServings: 4,
	ingredients: [
		{
			label: "",
			data: [
				{ label: "sweet-almonds", amount: 100, measurement: "weight" },
				{ label: "butter", amount: 100, measurement: "weight" },
				{ label: "sugar", amount: 100, measurement: "volume" },
				{ label: "flour", amount: 30, measurement: "volume" },
				{ label: "milk", amount: 30, measurement: "volume" },
				{ label: "syrup", amount: 30, measurement: "volume" },
				{ label: "vanilla-sugar", amount: 15, measurement: "volume" },
				{ label: "salt", amount: 2.5, measurement: "volume" },
			],
		},
	],
	instructions: {
		en: [
			"Preheat the oven to 175°C.",
			"Finely chop the sweet almonds.",
			"Mix butter, sugar, flour, milk, and syrup in a saucepan. Melt and heat until the first bubbles appear. Remove from the heat and add the almonds.",
			"Line a baking sheet with parchment paper. Spread about 1 dl of the mixture on the sheet.",
			"Bake in the middle of the oven for about 5 minutes.",
			"Let cool/harden and then remove.",
		],
		sv: [
			"Sätt på ugnen på 175 grader.",
			"Finhacka sötmandeln. ",
			"Blanda smör, socker, mjöl, mjölk och sirap i en kastrull. Smält ihop och värm tills första bubblorna dyker upp. Dra av från plattan och tillsätt mandeln.",
			"Klä en plåt med bakplåtspapper. Sprid över ca 1 dl smet på plåten.",
			"Grädda mitt i ugnen i ca 5 minuter.",
			"Låt svalna/stelna och ta av.",
		],
	},
};

export default AlmondBrittle;
