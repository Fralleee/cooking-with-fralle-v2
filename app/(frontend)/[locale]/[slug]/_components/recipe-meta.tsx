"use client";
import type { Recipe } from "@/types/payload-types";
import { useTranslation } from "@/i18n/translation-context";
import { Timer } from "lucide-react";
import BackButton from "./back-button";
import { formatCookingTime } from "@/helpers/time-utils";

interface Props {
	recipe: Recipe;
}

export function RecipeMeta({ recipe }: Props) {
	const { t } = useTranslation();
	const { cookingTime = 0 } = recipe;
	return (
		<section className="flex flex-col items-center gap-2 pb-2 md:flex-row md:justify-between">
			<BackButton className="md:self-start" />
			{cookingTime ? (
				<div className="flex gap-2 text-lg text-stone-700">
					<Timer />
					<span>{formatCookingTime(cookingTime, t)}</span>
				</div>
			) : null}
		</section>
	);
}
