import type { Recipe } from "@/types/recipe";

const requireModule = require.context("./recipes", false, /^\.\/.*\.ts$/);

const modules: Recipe[] = [];
for (const filename of requireModule.keys()) {
	modules.push(requireModule(filename).default);
}

export default modules;
