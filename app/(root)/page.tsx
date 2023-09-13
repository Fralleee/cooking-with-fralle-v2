import recipes from "@/data/recipes"
import RecipeLink from '@/components/recipe-link'

export default function Home() {
  return (
    <div className="relative max-w-5xl mx-auto flex flex-wrap gap-7 justify-center">
      {recipes.map(({ url, title, color }) => (
        <RecipeLink key={title} url={url} name={title} color={color} />
      ))}
    </div>
  )
}
