import { notFound } from "next/navigation";
import recipes from "@/data/recipe";
import { slugToTitle } from "@/helpers/slugToTitle";
import RecipeTitle from "@/app/[slug]/(components)/recipe-title";
import InstructionsList from "@/app/[slug]/(components)/instructions-list";
import { cn } from "@/lib/utils";
import { themes } from "@/helpers/tailwindUtils";
import RecipeDynamic from "@/app/[slug]/(components)/recipe-dynamic";
import BackButton from "@/app/[slug]/(components)/back-button";
import { recipeImages } from "@/data/images";
import Image from "next/image";

interface RouteProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: RouteProps) {
  return { title: `${slugToTitle(params.slug)} | Cooking with Fralle` };
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default function Page({ params }: RouteProps) {
  const recipe = recipes.find((recipe) => recipe.slug === params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <BackButton />
      <div className={cn("flex-auto", themes[recipe.color].background)}>
        <div className="flex min-h-screen flex-col bg-header">
          <RecipeTitle title={recipe.title} />
          <main className="relative mx-auto flex w-full max-w-2xl flex-auto flex-col rounded-3xl rounded-b-none bg-stone-100 px-2 py-6 pb-12 text-stone-700 transition-all sm:px-8">
            <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between">
              <RecipeDynamic defaultServings={recipe.defaultServings} ingredients={recipe.ingredients} />
              <Image
                src={recipeImages[recipe.image]}
                alt={recipe.title}
                width={256}
                height={256}
                priority
                style={{
                  viewTransitionName: `image-${recipe.slug}`,
                }}
              />
            </div>
            <InstructionsList>
              {recipe.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </InstructionsList>
          </main>
        </div>
      </div>
    </>
  );
}
