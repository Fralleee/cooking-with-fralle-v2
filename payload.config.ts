import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { buildConfig } from "payload";
import { fileURLToPath } from "node:url";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Recipes } from "./collections/Recipes";
import Ingredients from "./collections/Ingredients";
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
	collections: [Users, Media, Recipes, Ingredients, IngredientGroups],
	plugins: [
		vercelBlobStorage({
			collections: {
				media: true,
			},
			token: process.env.BLOB_READ_WRITE_TOKEN,
		}),
	],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "types", "payload-types.ts"),
	},
	localization: {
		locales: ["en", "sv"],
		defaultLocale: "en",
		fallback: true,
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || "",
	}),
});
