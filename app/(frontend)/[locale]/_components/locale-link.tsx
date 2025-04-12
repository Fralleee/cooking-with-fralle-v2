"use client";

import { locales, type Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

interface Props {
	locale: Locale;
}

export default function LocaleLink({
	locale,
	children,
}: PropsWithChildren<Props>) {
	const pathname = usePathname() || "/";
	const segments = pathname.split("/").filter(Boolean);

	if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
		segments[0] = locale;
	} else {
		segments.unshift(locale);
	}

	const newPath = `/${segments.join("/")}`;

	return (
		<Link className="p-2" href={newPath}>
			{children}
		</Link>
	);
}
