import recipes from "@/data/recipe"
import RecipeLink from '@/components/recipe-link'

export default function Page() {
  return (
    <div className="relative max-w-5xl mx-auto flex flex-wrap gap-7 justify-center py-14">
      {recipes.map((recipe) => (
        <RecipeLink key={recipe.title} recipe={recipe} />
      ))}
    </div>
  )
}
