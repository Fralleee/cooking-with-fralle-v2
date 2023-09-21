import recipes from "@/data/recipe";
import RecipeLink from "@/components/recipe-link";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="relative mx-auto flex max-w-5xl flex-wrap justify-center gap-7 py-14">
                <Link href={"/apple-pie"}>Apple pie</Link>
                <Link href={"/berlin-sauce"}>Apple pie</Link>
                <Link href={"/burger-sauce"}>Apple pie</Link>
            </div>

            <div className="relative mx-auto flex max-w-5xl flex-wrap justify-center gap-7 py-14">
                {recipes.map((recipe) => (
                    <RecipeLink key={recipe.title} recipe={recipe} />
                ))}
            </div>
        </>
    );
}
