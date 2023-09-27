import { MetadataRoute } from "next";
import recipes from "@/data/recipe";

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemap: MetadataRoute.Sitemap = [
        {
            url: "https://cooking.fralle.net",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
    ];

    const paths = recipes.map((recipe) => `recipe/${recipe.slug}`);
    paths.forEach((path) => {
        sitemap.push({
            url: `https://cooking.fralle.net/${path}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        });
    });

    return sitemap;
}
