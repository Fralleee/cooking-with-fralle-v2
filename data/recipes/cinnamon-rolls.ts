import { bakingKeywords } from "@/data/keywords";
import type { Recipe } from "@/types/recipe";

const CinnamonRolls: Recipe = {
	slug: "cinnamon-rolls",
	color: "orange",
	image: "bun",
	keywords: ["kanel", "bullar", ...bakingKeywords],
	defaultServings: 12,
	ingredients: [
		{
			label: "pre-dough",
			data: [
				{ label: "flour", amount: 480, measurement: "weight" },
				{ label: "milk", amount: 400, measurement: "volume" },
				{ label: "yeast", amount: 40, measurement: "weight" },
			],
		},
		{
			label: "add-to-pre-dough",
			data: [
				{ label: "flour", amount: 400, measurement: "weight" },
				{ label: "eggs", amount: 1, measurement: "pieces" },
				{ label: "salt", amount: 2.5, measurement: "volume" },
				{ label: "cardamom", amount: 7.5, measurement: "volume" },
				{ label: "sugar", amount: 160, measurement: "weight" },
				{ label: "butter", amount: 160, measurement: "weight" },
			],
		},
		{
			label: "filling",
			data: [
				{ label: "butter", amount: 400, measurement: "weight" },
				{ label: "sugar", amount: 200, measurement: "volume" },
				{ label: "cinnamon", amount: 30, measurement: "volume" },
				{ label: "cardamom", amount: 5, measurement: "volume" },
			],
		},
		{
			label: "syrup",
			data: [
				{ label: "sugar", amount: 100, measurement: "volume" },
				{ label: "water", amount: 100, measurement: "volume" },
			],
		},
	],
	instructions: {
		en: [
			"With the dough hook on your kitchen assistant, mix the pre-dough at low speed for 4 minutes. Let rise for 20 minutes.",
			"Then add the rest and mix for 13 minutes. Perform the gluten test.",
			"Refrigerate for 30 minutes.",
			"Make the cinnamon butter with an electric whisk, whisk until fluffy.",
			"Roll out the dough, spread on the cinnamon filling, and roll up. (If the dough is too large, divide it into two and roll them out separately.)",
			"Cut the roll with a knife, you should get between 25-30 buns in total.",
			"Place the buns you want to bake on parchment paper, cover with a towel, and let rise for 30-50 minutes. Freeze the rest as shown in the video.",
			"Brush the risen buns with egg wash and sprinkle with pearl sugar. Bake in the oven at 200°C for 6-7 minutes. Take them out and brush with sugar syrup.",
			"Serve and enjoy the king of the coffee table!",
		],
		sv: [
			"Med degkrok på din köksasistent blanda fördegen på låg hastighet i 4min. Låt jäsa 20 min.",
			"Tillsätt sedan resterande och blanda i 13min. Gör glutentest.",
			"Ställ in i kyl  i 30 min.",
			"Gör bullsmör med elvisp, vispa till luftig.",
			"Kavla sen ut, bre på bullsmet och rulla ihop. (om smeten är för stor dela den i två och kavla ut dom i omgångar)",
			"Dela rullen med kniv, totalt ska du få ut mellan 25-30bullar",
			"Lägg på bakplåtspapper dom du vill grädda, ha på handuk och låt jäsa 30-50min. Frys in dom andra som i videon.",
			"Pensla dom jästa bullaran med äggvisp och ha på pärlsocker, grädda i ugnen på 200°c i 6-7 min. Ta ut och pensla på sockerlag.",
			"Servera sen och njut av fikabordets konung!",
		],
	},
};

export default CinnamonRolls;
