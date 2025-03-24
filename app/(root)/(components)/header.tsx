"use client";
import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";

export default function Header() {
	const headerRef = useRef<HTMLDivElement>(null);
	const [scrollY, setScrollY] = useState(0);
	const [maxScroll, setMaxScroll] = useState(400);

	useLayoutEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		const handleResize = () => {
			if (headerRef.current) {
				setMaxScroll(Math.max(366, headerRef.current.clientHeight));
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const scale = Math.max(0.6, 1 - (scrollY / maxScroll) * 0.25);
	const opacity = Math.max(0.5, 1 - (scrollY / maxScroll) * 0.5);
	const translateY = scrollY * 0.75;

	return (
		<header
			ref={headerRef}
			className="relative grid min-h-0 w-full place-items-center bg-header py-4 text-center font-bold capitalize sm:min-h-[440px] lg:py-8"
		>
			<div className="relative max-w-fit scale-0 animate-title">
				<div
					className="relative max-w-fit rounded-full bg-stone-100"
					style={{
						transform: `translateY(${translateY}px) scale(${scale})`,
						scale,
						opacity,
					}}
				>
					<Image
						src={"/images/logo.webp"}
						alt={"Cooking with Fralle"}
						width={320}
						height={320}
						priority
						className="h-[320px] w-[320px]"
					/>
				</div>
			</div>
			<h1 className="text-2xl z-50 bg-white">
				{scrollY} and {maxScroll}
			</h1>
		</header>
	);
}
