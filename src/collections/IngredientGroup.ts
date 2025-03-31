import type { CollectionConfig } from "payload";

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
