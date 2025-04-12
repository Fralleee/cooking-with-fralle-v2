import type { CollectionConfig } from "payload";

export const Ingredients: CollectionConfig = {
	slug: "ingredients",
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "namePlural",
			type: "text",
			localized: true,
		},
	],
};

export default Ingredients;
