"use client";
import allRecipes from "@/data/recipe";
import RecipeLink from "./recipe-link";
import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { search } from "@/helpers/search";
import { Recipe } from "@/types/recipe";
import { debounce } from "@/helpers/debounce";
import { changeBodyBackground } from "@/helpers/changeBodyBackground";
import { useTranslations } from "next-intl";

export default function RecipeList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>(allRecipes);
  const t = useTranslations("base");

  useEffect(() => {
    changeBodyBackground();
  }, []);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        const recipes = search(value);
        setRecipes(recipes);
      }, 200),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setRecipes(allRecipes);
      setSearchTerm("");
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col justify-center gap-8 py-8">
      <div className="group relative mx-auto w-full max-w-[300px]">
        <Input
          name="search"
          type="text"
          className="pl-10 text-lg"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={t("search-placeholder")}
          value={searchTerm}
        />
        <FcSearch className="absolute left-2 top-2 h-6 w-6 opacity-75 transition-opacity group-focus-within:opacity-100" />
      </div>
      <div className="flex flex-1 flex-wrap justify-center gap-7">
        {recipes.map((recipe) => (
          <RecipeLink key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
