import recipes from "@/data/recipes"
import RecipeLink from '@/components/recipe-link'

export default function Page() {
  return (
    <div className="relative max-w-5xl mx-auto flex flex-wrap gap-7 justify-center">
      {recipes.map(({ slug, title, color }) => (
        <RecipeLink key={title} url={`/${slug}`} name={title} color={color} />
      ))}
    </div>
  )
}
