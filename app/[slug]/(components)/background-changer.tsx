"use client";

import { useEffect } from "react";

interface BackgroundChangerProps {
	color?: string;
}

export const BackgroundChanger = ({ color }: BackgroundChangerProps) => {
	useEffect(() => {
		document.body.style.backgroundColor = color || "#F5F5F5";
	}, [color]);

	return null;
};
