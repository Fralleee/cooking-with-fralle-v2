import { foodKeywords } from "@/data/keywords";
import type { Recipe } from "@/types/recipe";

const BurgerSauce: Recipe = {
	slug: "burger-sauce",
	color: "teal",
	image: "sauce2",
	keywords: [
		"hamburgare",
		"burgare",
		"sås",
		"dressing",
		"dip",
		...foodKeywords,
	],
	defaultServings: 8,
	ingredients: [
		{
			label: "",
			data: [
				{ label: "onion", measurement: "pieces", amount: 2 },
				{ label: "pickles", measurement: "pieces", amount: 2 },
				{ label: "butter", measurement: "volume", amount: 30 },
				{ label: "mayonnaise", measurement: "volume", amount: 175 },
				{ label: "ketchup", measurement: "volume", amount: 125 },
				{ label: "chives", measurement: "volume", amount: 15 },
				{ label: "worcestershire-sauce", measurement: "volume", amount: 30 },
				{ label: "salt" },
				{ label: "sugar" },
				{ label: "pepper" },
			],
		},
	],
	instructions: {
		en: [
			"Chop the onion and start frying the butter over medium heat.",
			"Add the onion to the pan when the butter starts to bubble along with some sugar and salt.",
			"Fry over medium heat for about 30 minutes until fully caramelized.",
			"In a bowl, mix mayonnaise, ketchup, chives, Worcestershire sauce with salt and pepper.",
			"Finely chop the pickles and add them to the bowl along with the onion.",
		],
		sv: [
			"Hacka löken och börjar steka smöret på medelvärme.",
			"Släng in löken i stekpannan när smöret börjat bubbla ihop med lite socker och salt.",
			"Stek på medelvärme i ca 30 minuter tills fullständigt karamelliserade",
			"I en skål, blanda ihop majonnäs, ketchup, gräslök, worcestershiresås med salt och peppar.",
			"Finhacka saltgurkan och lägg i skålen ihop med löken.",
		],
	},
};

export default BurgerSauce;
