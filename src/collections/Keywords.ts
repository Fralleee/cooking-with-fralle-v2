import type { CollectionConfig } from "payload";

export const Keywords: CollectionConfig = {
	slug: "keywords",
	admin: {
		useAsTitle: "keyword",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "keyword",
			type: "text",
			required: true,
		},
	],
};
