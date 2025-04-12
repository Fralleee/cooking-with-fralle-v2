import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
	return (
		<main className="flex h-full w-full flex-col items-center gap-8 bg-header py-14 text-center lg:py-24">
			<h1
				className="bg-300 animate-title bg-linear-to-r from-cozy-start to-cozy-end bg-clip-text text-6xl ease-in-out md:text-7xl lg:text-8xl"
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
				width={384}
				height={384}
				priority
			/>
			<Link
				href="/"
				className={cn(
					buttonVariants({ variant: "outline" }),
					"w-64 border-stone-300 bg-stone-50 transition-all ease-out hover:scale-110 hover:border-sky-600 active:scale-90",
				)}
			>
				<FaArrowLeft className="mr-3" /> Browse recipes
			</Link>
		</main>
	);
}
