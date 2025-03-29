import type { CollectionConfig } from "payload";

export const Recipes: CollectionConfig = {
	slug: "recipes",
	labels: {
		singular: "Recipe",
		plural: "Recipes",
	},
	admin: {
		useAsTitle: "id",
	},
	fields: [
		{
			name: "id",
			type: "text",
			required: true,
			unique: true,
		},
		{
			name: "name",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "keywords",
			type: "relationship",
			relationTo: "keywords",
			required: true,
			hasMany: true,
			admin: {
				allowCreate: true,
			},
		},
		{
			name: "color",
			type: "text",
			required: true,
			admin: {
				components: {
					Field: "./app/(payload)/_components/color-picker",
				},
			},
		},
		{
			name: "ingredients",
			type: "array",
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
				},
			],
		},
		{
			name: "instructions",
			type: "textarea",
			required: true,
			localized: true,
		},
	],
};

export default Recipes;
