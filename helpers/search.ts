import Fuse from "fuse.js";
import { Recipe } from "@/types/recipe";
import allRecipes from "@/data/recipe";

const fuse = new Fuse(allRecipes, {
  includeScore: true,
  threshold: 0.4,
  keys: ["title", "slug", "keywords"],
});

export function search(input: string): Recipe[] {
  if (!input) return allRecipes;

  return fuse.search(input).map((result) => result.item);
}
