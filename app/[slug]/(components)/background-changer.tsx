"use client";

import { useEffect } from "react";

interface BackgroundChangerProps {
	color?: string;
}

export const BackgroundChanger = ({ color }: BackgroundChangerProps) => {
	useEffect(() => {
		document.body.classList.forEach((className) => {
			if (className.startsWith("bg-")) {
				document.body.classList.remove(className);
			}
		});

		if (color) {
			document.body.classList.add(color);
		} else {
			document.body.classList.add("bg-stone-100");
		}
	}, [color]);

	return null;
};
