import { bakingKeywords } from "@/data/keywords";
import type { Recipe } from "@/types/recipe";

const ApplePie: Recipe = {
	slug: "apple-pie",
	image: "pie",
	color: "yellow",
	keywords: ["äpple", "äppel", "apple", "paj", "pie", ...bakingKeywords],
	defaultServings: 8,
	ingredients: [
		{
			label: "filling",
			data: [
				{ label: "apples", amount: 5, measurement: "pieces" },
				{ label: "sugar", amount: 75, measurement: "volume" },
				{ label: "brown-sugar", amount: 30, measurement: "volume" },
				{ label: "cinnamon", amount: 15, measurement: "volume" },
				{ label: "cardamom", amount: 10, measurement: "volume" },
				{ label: "potato-flour", amount: 60, measurement: "volume" },
			],
		},
		{
			label: "dough",
			data: [
				{ label: "butter", amount: 175, measurement: "weight" },
				{ label: "sugar", amount: 200, measurement: "volume" },
				{ label: "oats", amount: 300, measurement: "volume" },
				{ label: "flour", amount: 150, measurement: "volume" },
				{ label: "baking-powder", amount: 5, measurement: "volume" },
				{ label: "vanilla-sugar", amount: 10, measurement: "volume" },
				{ label: "light-syrup", amount: 50, measurement: "volume" },
				{ label: "salt", amount: 2.5, measurement: "volume" },
			],
		},
	],
	instructions: {
		en: [
			"Preheat the oven to 175°C.",
			"Mix all the filling ingredients in a bowl and spread them out in the pie dish.",
			"In another bowl, mix the sugar, salt, oats, flour, baking powder, and vanilla sugar.",
			"Melt the butter in a saucepan and pour it into the bowl along with the syrup.",
			"Stir into a smooth batter and dollop it onto the apple filling. Carefully spread it into an even layer over the apples.",
			"Bake the pie in the middle of the oven for about 30-40 minutes until golden brown and no longer glossy.",
		],
		sv: [
			"Sätt ugnen på 175 grader.",
			"Blanda ihop alla ingredienserna till fyllningen i en bunke och sprid ut i pajformen.",
			"I en annan bunke blandar du ihop strösocker, salt, havregryn, vetemjöl, bakpulver och vaniljsocker.",
			"Smält smöret i en kastrull och häll sedan ner det i bunken tillsammans med sirap.",
			"Rör ihop till en jämn smet och klicka ut den på äppelfyllningen. Bre försiktigt ut i ett jämnt lager över äpplena.",
			"Grädda pajen i mitten av ugnen i ca 30-40 minuter eller tills den fått en fin gyllenbrun färg och inte längre är glansig.",
		],
	},
};

export default ApplePie;
