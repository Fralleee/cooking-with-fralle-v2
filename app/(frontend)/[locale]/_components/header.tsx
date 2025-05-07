import Image from "next/image";

export default function Header() {
	return (
		<header className="relative grid min-h-0 w-full place-items-center bg-header pt-24 pb-8 sm:min-h-[440px]">
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
