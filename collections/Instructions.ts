import type { CollectionConfig } from "payload";

export const Instructions: CollectionConfig = {
	slug: "instructions",
	admin: {
		useAsTitle: "content",
	},
	fields: [
		{
			name: "content",
			type: "textarea",
			required: true,
		},
	],
};

export default Instructions;
