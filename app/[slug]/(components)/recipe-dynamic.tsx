"use client";
import ServingsCalculator from "@/app/[slug]/(components)/servings-controls";
import IngredientsList from "@/app/[slug]/(components)/ingredients-list";
import { getIngredient } from "@/helpers/recipeUtils";
import { Ingredients } from "@/types/recipe";
import { useState } from "react";

interface Props {
  defaultServings: number;
  ingredients: Ingredients[];
}

export default function RecipeDynamic({ defaultServings, ingredients }: Props) {
  const [servings, setServings] = useState(defaultServings);

  const handleServings = (input: number) => {
    setServings(Math.max(input, 2));
  };

  return (
    <div className="flex flex-col">
      <ServingsCalculator servings={servings} handleServings={handleServings} />
      {ingredients.map((ingredientsType) => (
        <IngredientsList key={ingredientsType.label} title={ingredientsType.label}>
          {ingredientsType.data.map((ingredient, i) => {
            const { amount, label } = getIngredient(ingredient, defaultServings, servings);
            return (
              <li key={i}>
                {amount && <strong>{amount}</strong>} {label}
              </li>
            );
          })}
        </IngredientsList>
      ))}
    </div>
  );
}
