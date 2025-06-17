"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { useEscape } from "@/app/hooks/use-escape";
import { useScroll } from "@/app/hooks/use-scroll";
import { type Locale, locales } from "@/i18n-config";

const flagMap: Record<Locale, string> = {
	en: "/images/en.svg",
	sv: "/images/sv.svg",
};

interface Props {
	currentLocale: Locale;
}

export default function LocaleSelector({ currentLocale }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname() || "/";

	useEscape(() => setIsOpen(false));
	useScroll(() => setIsOpen(false));

	const handleValueChanged = (value: Locale) => {
		const segments = pathname.split("/").filter(Boolean);
		if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
			segments[0] = value;
		} else {
			segments.unshift(value);
		}
		const newPath = `/${segments.join("/")}`;
		Cookies.set("NEXT_LOCALE", value, { path: "/" });
		window.location.replace(newPath);
	};

	return (
		<div className="relative" ref={containerRef}>
			{!isOpen && (
				<Button
					className="animate-locale-button"
					onClick={() => setIsOpen(true)}
					variant="outline"
				>
					<Image
						alt={currentLocale}
						className="h-8 w-8"
						height={32}
						src={flagMap[currentLocale]}
						width={32}
					/>
				</Button>
			)}

			{isOpen && (
				<>
					{/** biome-ignore lint/a11y/noStaticElementInteractions: overlay */}
					<div
						className="fixed inset-0 bg-stone-950/30 blur-sm"
						onClick={() => setIsOpen(false)}
						onKeyDown={(e) => {
							if (e.key === "Escape") {
								setIsOpen(false);
							}
						}}
					/>
					<div className="flex gap-2">
						{locales.map((locale) => (
							<Button
								className="animate-locale-button"
								key={locale}
								onClick={() => handleValueChanged(locale)}
								variant="outline"
							>
								<Image
									alt={locale}
									className="h-8 w-8"
									height={32}
									src={flagMap[locale]}
									width={32}
								/>
							</Button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
