interface Props {
	title: string;
}

export default function RecipeTitle({ title }: Props) {
	return (
		<header className="relative w-full pt-20 pb-4 text-center font-bold capitalize">
			<h1
				className="bg-(length:--title-size) inline-block animate-title bg-gradient-to-r from-rose-500 to-fuchsia-500 bg-clip-text bg-no-repeat px-12 py-4 text-5xl text-transparent md:text-6xl lg:text-8xl"
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
