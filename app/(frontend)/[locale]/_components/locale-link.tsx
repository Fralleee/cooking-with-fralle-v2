"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { locales, type Locale } from "@/i18n-config";
import Image from "next/image";
import { usePathname } from "next/navigation";

const flagMap: Record<Locale, string> = {
	en: "/images/en.svg",
	sv: "/images/sv.svg",
};

export default function LocaleLink({
	currentLocale,
}: { currentLocale: Locale }) {
	const pathname = usePathname() || "/";

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
		<Select defaultValue={currentLocale} onValueChange={handleValueChanged}>
			<SelectTrigger className="w-[40px]">
				<Image
					src={flagMap[currentLocale]}
					alt={currentLocale}
					width={32}
					height={32}
					className="w-[32px]"
				/>
			</SelectTrigger>
			<SelectContent>
				{locales.map((l) => (
					<SelectItem key={l} value={l}>
						<Image
							src={flagMap[l]}
							alt={l}
							width={32}
							height={32}
							className="w-[32px]"
						/>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
