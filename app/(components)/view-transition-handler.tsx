"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ViewTransitionHandler() {
	const pathname = usePathname();

	useEffect(() => {
		console.log("Route changed to:", pathname);
		const pathIsRoot = pathname === "/";

		if (pathIsRoot && document.startViewTransition) {
			document.startViewTransition(() => {
				console.log("View transition started on route change");
			});
		}
	}, [pathname]);

	return null;
}
