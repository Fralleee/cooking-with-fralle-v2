export type Measurement =
	| "tbsp"
	| "tsp"
	| "l"
	| "dl"
	| "ml"
	| "cl"
	| "kg"
	| "g";

export const translations = {
	en: {
		"back-to-recipes": "Back to recipes",
		servings: "servings",
		tbsp: "tbsp",
		tsp: "tsp",
		l: "l",
		dl: "dl",
		cl: "cl",
		ml: "ml",
		kg: "kg",
		g: "g",
	},
	sv: {
		"back-to-recipes": "Tillbaka till recepten",
		servings: "portioner",
		tbsp: "msk",
		tsp: "tsk",
		l: "l",
		dl: "dl",
		cl: "cl",
		ml: "ml",
		kg: "kg",
		g: "g",
	},
} as const;
