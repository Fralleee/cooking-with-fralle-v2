import { locales } from "@/i18n-config";
import type { Ingredient } from "@/types/payload-types";
import type { CollectionConfig, FieldHook } from "payload";

const populateOtherLocales: FieldHook<Ingredient> = async ({
	siblingDocWithLocales,
	value,
}) => {
	const existingLocalized =
		(siblingDocWithLocales?.name as Record<string, string>) ?? {};
	const newLocalizedValue: Record<string, string> = {};

	for (const locale of locales) {
		if (
			existingLocalized[locale] &&
			existingLocalized[locale].trim().length > 0
		) {
			newLocalizedValue[locale] = existingLocalized[locale];
		} else {
			newLocalizedValue[locale] = value;
		}
	}

	if (siblingDocWithLocales?.name) {
		siblingDocWithLocales.name = newLocalizedValue;
	} else if (siblingDocWithLocales) {
		siblingDocWithLocales.name = newLocalizedValue;
	}
};

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
			hooks: {
				beforeChange: [populateOtherLocales],
			},
			admin: {
				description: {},
			},
		},
		{
			name: "namePlural",
			type: "text",
			localized: true,
		},
	],
};

export default Ingredients;
