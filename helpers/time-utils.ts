import type { Translations } from "@/i18n/translation-context";

export const formatCookingTime = (totalMins: number, t: Translations) => {
	const hours = Math.floor(totalMins / 60);
	const mins = totalMins % 60;
	const parts: string[] = [];

	if (hours > 0) {
		parts.push(`${hours} ${hours > 1 ? t.hour.plural : t.hour.singular}`);
	}
	if (mins > 0) {
		parts.push(`${mins} ${mins > 1 ? t.minute.plural : t.minute.singular}`);
	}
	return parts.join(" ");
};
