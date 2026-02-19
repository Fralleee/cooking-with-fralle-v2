import { useEffect, useRef } from "react";

export function useEscape(onEscape: () => void) {
	const callbackRef = useRef(onEscape);
	callbackRef.current = onEscape;

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && callbackRef.current();
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, []);
}
