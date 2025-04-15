"use client";

import { locales, type Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";

interface Props {
	locale: Locale;
}

export default function LocaleLink({
	locale,
	children,
}: PropsWithChildren<Props>) {
	const pathname = usePathname() || "/";
	const router = useRouter();
	const segments = pathname.split("/").filter(Boolean);

	if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
		segments[0] = locale;
	} else {
		segments.unshift(locale);
	}

	const newPath = `/${segments.join("/")}`;

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		document.cookie = `NEXT_LOCALE=${locale}; path=/`;
		router.replace(newPath);
	};

	return (
		<Link className="p-2" href={newPath} onClick={handleClick}>
			{children}
		</Link>
	);
}
