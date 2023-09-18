import { notFound } from "next/navigation"
import recipes from "@/data/recipes"
import { slugToTitle } from "@/helpers/stringUtils";
import ServingsCalculator from "@/components/servings-controls";
import IngredientsList from "@/components/ingredients-list";
import { getIngredient, getServingsFromSearchParams } from "@/helpers/recipeUtils";
import RecipeTitle from "@/components/recipe-title";
import InstructionsList from "@/components/instructions-list";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: slugToTitle(params.slug),
  }
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

interface Props {
  params: { slug: string }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default function Page({ params, searchParams }: Props) {
  const recipe = recipes.find(recipe => recipe.slug === params.slug)

  if (!recipe) {
    notFound()
  }

  const servings = getServingsFromSearchParams(searchParams, recipe.defaultServings)

  return (
    <>
      <RecipeTitle title={recipe.title} />
      <main className="flex flex-col items-center justify-between p-7">
        <ServingsCalculator servings={servings} />
        {recipe.ingredients.map(ingredientsType => (
          <IngredientsList key={ingredientsType.label} title={ingredientsType.label}>
            {ingredientsType.data.map((ingredient, i) => {
              const { amount, label } = getIngredient(ingredient, recipe.defaultServings, servings)
              return (
                <li key={i}>
                  {amount && <strong>{amount}</strong>} {label}
                </li>
              )
            })}
          </IngredientsList>
        ))}
        <InstructionsList>
          {recipe.instructions.map((instruction, i) => (
            <li key={i}>{instruction}</li>
          ))}
        </InstructionsList>
      </main>
    </>
  )
}