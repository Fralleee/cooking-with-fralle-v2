import type { CollectionConfig } from "payload";

const measurementMapping: Record<string, string> = {
	weight: "Weight - grams",
	volume: "Volume - milliliters",
	pieces: "Pieces",
	"drink-volume": "Drink volume - milliliters",
};

export const IngredientGroups: CollectionConfig = {
	slug: "ingredient-groups",
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			label: "Name",
		},
		{
			name: "ingredients",
			type: "array",
			label: "Ingredients",
			fields: [
				{
					name: "ingredient",
					type: "relationship",
					relationTo: "ingredients",
					required: true,
					label: "Ingredient",
				},
				{
					name: "measurement",
					type: "select",
					required: true,
					label: "Measurement",
					options: [
						{ label: measurementMapping.weight, value: "weight" },
						{ label: measurementMapping.volume, value: "volume" },
						{ label: measurementMapping.pieces, value: "pieces" },
						{
							label: measurementMapping["drink-volume"],
							value: "drink-volume",
						},
					],
				},
				{
					name: "amount",
					type: "number",
					required: true,
					label: "Amount",
				},
			],
		},
	],
};

export default IngredientGroups;
