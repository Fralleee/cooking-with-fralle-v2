import type { Recipe } from "@/types/payload-types";
import { Timer } from "lucide-react";
import BackButton from "./back-button";
import { formatCookingTime } from "@/app/helpers/time-utils";
import type { Locale } from "@/i18n-config";
import type { Translations } from "@/app/i18n/translation-context";

interface Props {
	recipe: Recipe;
	locale: Locale;
	t: Translations;
}

export function RecipeMeta({ recipe, locale, t }: Props) {
	const { cookingTime = 0 } = recipe;
	return (
		<section className="flex flex-col items-center gap-2 pb-2 md:flex-row md:justify-between">
			<BackButton className="md:self-start" locale={locale} t={t} />
			{cookingTime ? (
				<div className="flex gap-2 text-lg text-stone-700">
					<Timer />
					<span>{formatCookingTime(cookingTime, t)}</span>
				</div>
			) : null}
		</section>
	);
}
