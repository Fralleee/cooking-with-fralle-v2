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
			name: "slug",
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
			name: "color",
			type: "text",
			required: true,
			admin: {
				components: {
					Field: "./app/(payload)/_components/color-picker",
				},
			},
			defaultValue: "oklch(92.9% 0.013 255.508)",
		},
		{
			name: "defaultServings",
			type: "number",
			required: true,
			defaultValue: 2,
		},
		{
			name: "cookingTime",
			type: "number",
			defaultValue: 10,
		},
		{
			name: "ingredientGroups",
			type: "relationship",
			relationTo: "ingredient-groups",
			hasMany: true,
			required: true,
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
