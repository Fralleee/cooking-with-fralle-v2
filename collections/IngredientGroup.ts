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
			localized: true,
			label: "Name",
		},
		{
			name: "ingredients",
			type: "array",
			label: "Ingredients",
			admin: {
				className: "ingredient-definitions",
			},
			minRows: 1,
			fields: [
				{
					name: "ingredient",
					type: "relationship",
					relationTo: "ingredients",
					required: true,
					label: "Ingredient",
					admin: {
						className: "ingredient-select",
					},
				},
				{
					name: "measurement",
					type: "select",
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
					admin: {
						className: "measurement-select",
					},
					defaultValue: "volume",
				},
				{
					name: "amount",
					type: "number",
					label: "Amount",
					admin: {
						className: "amount-input",
					},
					defaultValue: 0,
				},
			],
		},
	],
};

export default IngredientGroups;
