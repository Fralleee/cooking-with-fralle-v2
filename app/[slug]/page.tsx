import { notFound } from "next/navigation"
import recipes from "@/data/recipes"
import { slugToTitle } from "@/helpers/stringUtils";
import ServingsCalculator from "@/components/servings-controls";
import IngredientsList from "@/components/ingredients-list";
import { getIngredient, getServingsFromSearchParams } from "@/helpers/recipeUtils";
import RecipeTitle from "@/components/recipe-title";
import InstructionsList from "@/components/instructions-list";
import Image from "next/image";

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
      <main className="flex flex-col transition-all py-6 px-2 sm:px-8 text-stone-700 max-w-2xl mx-auto flex-auto w-full bg-white rounded-3xl rounded-b-none">


        <div className="border-4 border-pink-300 rounded-full mx-auto relative -top-28 -mb-24 w-48 h-48 p-2 bg-pink-100 grid place-items-center">
          <Image src="/cupcake.webp" alt="cupcake" width={128} height={128} />
        </div>
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