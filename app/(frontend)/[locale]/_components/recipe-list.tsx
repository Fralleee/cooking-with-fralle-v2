import RecipeLink from "./recipe-link";
import type { Recipe } from "@/types/payload-types";
import type { Locale } from "@/i18n-config";

interface Props {
	recipes: Recipe[];
	locale: Locale;
}

export default function RecipeList({ recipes, locale }: Props) {
	return (
		<div className="mx-auto flex w-full max-w-5xl flex-col justify-center gap-8 py-8">
			<div className="flex flex-1 flex-wrap justify-center gap-7">
				{recipes.map((recipe) => (
					<RecipeLink key={recipe.slug} recipe={recipe} locale={locale} />
				))}
			</div>
		</div>
	);
}
