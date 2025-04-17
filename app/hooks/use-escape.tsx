import { useEffect } from "react";

export function useEscape(onEscape: () => void) {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && onEscape();
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [onEscape]);
}
