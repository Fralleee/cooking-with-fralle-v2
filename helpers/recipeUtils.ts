import Fraction from "fraction.js";

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

const convertVolume = (milliliters: number): string => {
    if (milliliters >= 1000)
        return `${convertToMeasurement(milliliters, 1000)} l`;
    if (milliliters >= 100)
        return `${convertToMeasurement(milliliters, 100)} dl`;
    if (milliliters === 50)
        return `${convertToMeasurement(milliliters, 100)} dl`;
    if (milliliters >= 15)
        return `${convertToMeasurement(milliliters, 15)} msk`;
    if (milliliters >= 1) return `${convertToMeasurement(milliliters, 5)} tsk`;
    return `${convertToMeasurement(milliliters, 1)} ml`;
};

const convertDrinkVolume = (milliliters: number): string => {
    if (milliliters >= 15) return `${convertToMeasurement(milliliters, 10)} cl`;
    return `${convertToMeasurement(milliliters, 1)} ml`;
};

const convertWeight = (grams: number): string => {
    if (grams >= 1000) return `${Math.round((grams / 1000) * 100) / 100} kg`;
    return `${Math.round(grams)} g`;
};

export const getIngredient = (
    { label, amount, measurement }: IngredientType,
    base: number,
    servings: number,
): { amount?: string; label: string } => {
    if (amount === undefined) return { label };

    if (base !== servings) {
        amount = (amount / base) * servings;
    }

    if (measurement === "pieces")
        return { amount: convertToMeasurement(amount, 1), label };
    if (measurement === "weight")
        return { amount: convertWeight(amount), label };
    if (measurement === "drinkvolume")
        return { amount: convertDrinkVolume(amount), label };
    return { amount: convertVolume(amount), label };
};
