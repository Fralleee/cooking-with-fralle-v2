import { notFound } from "next/navigation";
import config from "@/payload.config";
import RecipeTitle from "./_components/recipe-title";
import RecipeDynamic from "./_components/recipe-dynamic";
import BackButton from "./_components/back-button";
import { BackgroundChanger } from "./_components/background-changer";
import { RecipeImage } from "./_components/recipe-image";
import InstructionsList from "./_components/instructions-list";
import { getPayload } from "payload";

interface RouteProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RouteProps) {
	const { slug } = await params;
	const payloadInstance = await getPayload({ config });
	const result = await payloadInstance.find({
		collection: "recipes",
		where: { slug: { equals: slug } },
		limit: 1,
	});
	const recipe = result?.docs[0];

	if (!recipe) {
		notFound();
	}

	return { title: `${recipe.name} | Cooking with Fralle` };
}

export async function generateStaticParams() {
	const payloadInstance = await getPayload({ config });
	const { docs: recipes } = await payloadInstance.find({
		collection: "recipes",
	});

	return recipes.map((recipe: { slug: string }) => ({
		slug: recipe.slug,
	}));
}

export default async function Page({ params }: RouteProps) {
	const { slug } = await params;
	const payloadInstance = await getPayload({ config });
	const result = await payloadInstance.find({
		collection: "recipes",
		where: { slug: { equals: slug } },
		limit: 1,
		depth: 2,
	});
	const recipe = result?.docs[0];

	if (!recipe) {
		notFound();
	}

	return (
		<>
			<BackButton />
			<BackgroundChanger color={recipe.color} />
			<div className="flex-auto" style={{ backgroundColor: recipe.color }}>
				<div className="flex min-h-screen flex-col bg-header">
					<RecipeTitle title={recipe.slug} />
					<main className="relative mx-auto flex w-full max-w-2xl flex-auto flex-col rounded-3xl rounded-b-none bg-stone-100 px-2 py-6 pb-12 text-stone-700 transition-all sm:px-8">
						<div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between">
							<RecipeDynamic
								defaultServings={recipe.defaultServings}
								ingredientsGroups={recipe.ingredientGroups}
							/>
							<RecipeImage
								alt={`Image of ${recipe.name}`}
								slug={recipe.slug}
								src={
									typeof recipe.image === "string"
										? recipe.image
										: recipe.image?.url || "/placeholder-image.jpg"
								}
							/>
						</div>
						<InstructionsList>
							{recipe.instructions.split("\n").map((instruction, i) => (
								<li key={i} className="flex gap-4">
									<div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold">
										{i + 1}
									</div>
									{instruction}
								</li>
							))}
						</InstructionsList>
					</main>
				</div>
			</div>
		</>
	);
}
