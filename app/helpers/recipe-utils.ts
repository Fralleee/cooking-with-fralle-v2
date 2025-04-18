import type { Ingredient } from "@/types/payload-types";
import Fraction from "fraction.js";
import type { Measurement } from "../i18n/translations";

const convertToMeasurement = (volume: number, measurement: number): string => {
	const fullSizedParts = Math.floor(volume / measurement);
	if (volume % measurement !== 0) {
		const fractions = new Fraction(
			(volume % measurement) / measurement,
		).toFraction(true);
		if (fullSizedParts > 0) return `${fullSizedParts} ${fractions}`;
		return fractions;
	}
	return fullSizedParts.toString();
};

const convertVolume = (milliliters: number): [string, Measurement] => {
	if (milliliters >= 1000)
		return [convertToMeasurement(milliliters, 1000), "l"];
	if (milliliters >= 100) return [convertToMeasurement(milliliters, 100), "dl"];
	if (milliliters === 50) return [convertToMeasurement(milliliters, 100), "dl"];
	if (milliliters >= 15) return [convertToMeasurement(milliliters, 15), "tbsp"];
	if (milliliters >= 1) return [convertToMeasurement(milliliters, 5), "tsp"];
	return [convertToMeasurement(milliliters, 1), "ml"];
};

const convertDrinkVolume = (milliliters: number): [string, Measurement] => {
	if (milliliters >= 15) return [convertToMeasurement(milliliters, 10), "cl"];
	return [convertToMeasurement(milliliters, 1), "ml"];
};

const convertWeight = (grams: number): [string, Measurement] => {
	if (grams >= 1000)
		return [(Math.round((grams / 1000) * 100) / 100).toString(), "kg"];
	return [Math.round(grams).toString(), "g"];
};

export const getIngredient = (
	ingredient: Ingredient | string,
	measurement:
		| "weight"
		| "volume"
		| "pieces"
		| "drink-volume"
		| null
		| undefined,
	amountRaw: number | null | undefined,
	base: number,
	servings: number,
): { amount?: [string, Measurement | undefined]; label: string } => {
	const { name, namePlural } = ingredient as Ingredient;

	const label = name ?? "Unknown";
	if (amountRaw == null) return { label };

	let amount = amountRaw;
	if (base !== servings) {
		amount = (amountRaw / base) * servings;
	}

	if (measurement === "pieces") {
		const label = amount > 1 && namePlural ? namePlural : (name ?? "Unknown");
		return { amount: [convertToMeasurement(amount, 1), undefined], label };
	}

	if (measurement === "weight") return { amount: convertWeight(amount), label };

	if (measurement === "drink-volume") {
		return { amount: convertDrinkVolume(amount), label };
	}

	return { amount: convertVolume(amount), label };
};
