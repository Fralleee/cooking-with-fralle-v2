"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n-config";
import { Button } from "@/app/components/ui/button";
import { useRef, useState } from "react";
import { useEscape } from "@/app/hooks/use-escape";
import { useScroll } from "@/app/hooks/use-scroll";

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
		document.cookie = `NEXT_LOCALE=${value}; path=/`;
		window.location.replace(newPath);
	};

	return (
		<div ref={containerRef} className="relative">
			{!isOpen && (
				<Button
					className="animate-locale-button"
					variant="outline"
					onClick={() => setIsOpen(true)}
				>
					<img
						src={flagMap[currentLocale]}
						alt={currentLocale}
						width={32}
						height={32}
						className="w-[32px]"
					/>
				</Button>
			)}

			{isOpen && (
				<>
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
								key={locale}
								className="animate-locale-button"
								variant="outline"
								onClick={() => handleValueChanged(locale)}
							>
								<img
									src={flagMap[locale]}
									alt={locale}
									width={32}
									height={32}
									className="w-[32px]"
								/>
							</Button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
