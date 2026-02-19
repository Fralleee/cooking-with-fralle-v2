import { useEffect, useRef } from "react";

export function useScroll(onScroll: () => void) {
	const callbackRef = useRef(onScroll);
	callbackRef.current = onScroll;

	useEffect(() => {
		const handler = () => callbackRef.current();
		window.addEventListener("scroll", handler, { passive: true });
		return () => window.removeEventListener("scroll", handler);
	}, []);
}
