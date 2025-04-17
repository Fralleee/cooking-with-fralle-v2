import Image from "next/image";

export default function Header() {
	return (
		<header className="relative grid min-h-0 w-full place-items-center bg-header pt-8 pb-4 text-center font-bold capitalize sm:min-h-[440px] lg:pt-16 lg:pb-8">
			<div className="animate-hero">
				<div className="rounded-full bg-sky-100">
					<Image
						src={"/images/logo.webp"}
						alt={"Cooking with Fralle"}
						width={320}
						height={320}
						priority
						className="h-auto w-full"
					/>
				</div>
			</div>
		</header>
	);
}
