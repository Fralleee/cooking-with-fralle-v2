import Image from "next/image";
import BackButton from "./_components/back-button";

export default function NotFound() {
	return (
		<main className="flex h-screen flex-col items-center gap-8 bg-header py-14 text-center lg:py-24">
			<h1
				className="animate-title bg-300 bg-linear-to-r from-cozy-start to-cozy-end bg-clip-text text-6xl ease-in-out md:text-7xl lg:text-8xl"
				style={{
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					WebkitTextStrokeWidth: "2px",
					WebkitTextStrokeColor: "rgba(0, 0, 0, 0.3)",
				}}
			>
				Muffin to see here!
			</h1>
			<Image
				src={"/images/notfound.webp"}
				alt={"Recipe not found"}
				className="w-sm"
				width={384}
				height={384}
				priority
			/>
			<BackButton />
		</main>
	);
}
