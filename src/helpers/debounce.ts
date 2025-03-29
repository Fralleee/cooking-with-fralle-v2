type Func<T extends unknown[], R> = (...args: T) => R;

export function debounce<T extends unknown[], R>(
	func: Func<T, R>,
	wait: number,
) {
	let timeout: NodeJS.Timeout | null = null;

	return function executedFunction(...args: T) {
		const later = () => {
			if (timeout) clearTimeout(timeout);
			func(...args);
		};

		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}
