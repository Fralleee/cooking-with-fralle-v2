import type { CollectionConfig } from "payload";

const measurementMapping: Record<string, string> = {
	weight: "Weight - grams",
	volume: "Volume - milliliters",
	pieces: "Pieces",
	"drink-volume": "Drink volume - milliliters",
};

export const Ingredients: CollectionConfig = {
	slug: "ingredients",
	admin: {
		useAsTitle: "displayName",
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
			admin: {
				condition: (_, siblingData) => siblingData?.measurement === "pieces",
			},
		},
		{
			name: "measurement",
			type: "select",
			required: true,
			options: [
				{ label: measurementMapping.weight, value: "weight" },
				{ label: measurementMapping.volume, value: "volume" },
				{ label: measurementMapping.pieces, value: "pieces" },
				{ label: measurementMapping["drink-volume"], value: "drink-volume" },
			],
		},
		{
			name: "displayName",
			type: "text",
			admin: {
				readOnly: true,
				position: "sidebar",
			},
		},
	],
	hooks: {
		afterChange: [
			({ doc }) => {
				if (doc.name && doc.measurement) {
					doc.displayName = `${doc.name} (${measurementMapping[doc.measurement] || doc.measurement})`;
				}
				return doc;
			},
		],
		afterRead: [
			({ doc }) => {
				if (doc.name && doc.measurement) {
					doc.displayName = `${doc.name} (${measurementMapping[doc.measurement] || doc.measurement})`;
				}
				return doc;
			},
		],
	},
};

export default Ingredients;
