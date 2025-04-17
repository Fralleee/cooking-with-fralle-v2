import { useEffect } from "react";

export function useScroll(onScroll: () => void) {
	useEffect(() => {
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [onScroll]);
}
