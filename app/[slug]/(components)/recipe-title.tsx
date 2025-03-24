interface Props {
	title: string;
}

export default function RecipeTitle({ title }: Props) {
	return (
		<header className="relative w-full py-10 text-center font-bold capitalize lg:py-20">
			<h1
				className="inline-block animate-title bg-gradient-to-r from-rose-500 to-fuchsia-500 bg-(length:--title-size) bg-no-repeat bg-clip-text px-12 py-4 text-6xl md:text-7xl lg:text-9xl text-transparent"
				style={{
					WebkitTextStrokeWidth: "2px",
					WebkitTextStrokeColor: "rgba(0, 0, 0, 0.3)",
				}}
			>
				{title}
			</h1>
		</header>
	);
}
