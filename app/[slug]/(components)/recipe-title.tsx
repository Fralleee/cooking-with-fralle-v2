interface Props {
	title: string;
}

export default function RecipeTitle({ title }: Props) {
	return (
		<header className="relative w-full py-10 text-center font-bold capitalize lg:py-20">
			<h1
				className="w-full animate-title bg-linear-to-r from-cozy-start to-cozy-end bg-full bg-clip-text py-4 text-6xl ease-in-out md:text-7xl lg:text-9xl"
				style={{
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					WebkitTextStrokeWidth: "2px",
					WebkitTextStrokeColor: "rgba(0, 0, 0, 0.3)",
				}}
			>
				{title}
			</h1>
		</header>
	);
}
