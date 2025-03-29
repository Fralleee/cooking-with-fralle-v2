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
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "color",
			type: "text",
			required: true,
		},
		{
			name: "defaultServings",
			type: "number",
			required: true,
		},
		{
			name: "keywords",
			type: "array",
			fields: [
				{
					name: "value",
					type: "text",
					required: true,
				},
			],
		},
		{
			name: "ingredients",
			type: "array",
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
				},
				{
					name: "amount",
					type: "number",
				},
				{
					name: "measurement",
					type: "select",
					options: [
						{ label: "Weight", value: "weight" },
						{ label: "Volume", value: "volume" },
						{ label: "Pieces", value: "pieces" },
						{ label: "Drink Volume", value: "drinkvolume" },
					],
				},
			],
		},
		{
			name: "instructions",
			type: "group",
			fields: [
				{
					name: "English",
					type: "array",
					fields: [
						{
							name: "instruction",
							type: "textarea",
							required: true,
						},
					],
				},
				{
					name: "Swedish",
					type: "array",
					fields: [
						{
							name: "instruction",
							type: "textarea",
							required: true,
						},
					],
				},
			],
		},
	],
};

export default Recipes;
