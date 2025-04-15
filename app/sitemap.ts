import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@/payload.config";
import { locales } from "@/i18n-config";

const baseUrl = "https://cooking.fralle.net";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const payloadInstance = await getPayload({ config });
	const { docs: recipes } = await payloadInstance.find({
		collection: "recipes",
	});

	const sitemap: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];

	for (const locale of locales) {
		for (const recipe of recipes) {
			const path = `${locale}/recipe/${recipe.slug}`;
			sitemap.push({
				url: `${baseUrl}/${path}`,
				lastModified: new Date(),
				changeFrequency: "yearly",
				priority: 0.8,
			});
		}
	}

	return sitemap;
}
