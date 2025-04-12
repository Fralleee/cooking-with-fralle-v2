import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { buildConfig } from "payload";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Recipes } from "./collections/Recipes";
import Ingredients from "./collections/Ingredients";
import Instructions from "./collections/Instructions";
import IngredientGroups from "./collections/IngredientGroup";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [
		Users,
		Media,
		Recipes,
		Ingredients,
		IngredientGroups,
		Instructions,
	],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "types", "payload-types.ts"),
	},
	localization: {
		locales: ["en", "sv"],
		defaultLocale: "en",
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || "",
	}),
	sharp,
});
