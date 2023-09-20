import { Recipe } from "@/types/recipe";

const requireModule = (require as any).context("data/recipes", false, /^data\/recipes\/.*\.ts$/);
const modules: Recipe[] = [];

requireModule.keys().forEach((filename: string) => {
  modules.push(requireModule(filename).default);
});

export default modules;
