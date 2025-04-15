"use client";

import { useSelect } from "downshift";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n-config";

const flagMap: Record<Locale, string> = {
	en: "/images/en.svg",
	sv: "/images/sv.svg",
};

export default function LocaleSelect({
	currentLocale,
}: {
	currentLocale: Locale;
}) {
	const pathname = usePathname() || "/";
	const items: Locale[] = [...locales];

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

	const {
		isOpen,
		selectedItem,
		getToggleButtonProps,
		getMenuProps,
		highlightedIndex,
		getItemProps,
	} = useSelect<Locale>({
		items,
		initialSelectedItem: currentLocale,
		onSelectedItemChange: ({ selectedItem }) => {
			if (selectedItem) {
				handleValueChanged(selectedItem);
			}
		},
		itemToString: (item) => (item ? item : ""),
	});

	return (
		<div className="relative inline-block">
			<button
				type="button"
				{...getToggleButtonProps()}
				className="w-24 flex items-center justify-center p-2"
			>
				<img
					src={selectedItem ? flagMap[selectedItem] : flagMap[currentLocale]}
					alt={selectedItem || currentLocale}
					width={32}
					height={32}
					className="w-[32px]"
				/>
			</button>
			<ul
				{...getMenuProps()}
				className="absolute z-10 mt-1 w-24 rounded shadow bg-white"
			>
				{isOpen &&
					items.map((item, index) => (
						<li
							key={item}
							{...getItemProps({ item, index })}
							className={`cursor-pointer flex items-center px-2 py-1 ${
								highlightedIndex === index ? "bg-blue-100" : ""
							} ${selectedItem === item ? "font-bold" : ""}`}
						>
							<img
								src={flagMap[item]}
								alt={item}
								width={32}
								height={32}
								className="w-[32px] inline-block mr-2"
							/>
							<span>{item.toUpperCase()}</span>
						</li>
					))}
			</ul>
		</div>
	);
}
