import type { Recipe } from "@/types/recipe";

const requireModule = (require as any).context(
	"data/recipes",
	false,
	/^data\/recipes\/.*\.ts$/,
);
const modules: Recipe[] = [];

for (const filename of requireModule.keys()) {
	modules.push(requireModule(filename).default);
}

export default modules;
