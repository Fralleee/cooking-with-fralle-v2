type Func = (...args: any[]) => any;

export function debounce(func: Func, wait: number) {
	let timeout: NodeJS.Timeout | null;

	return function executedFunction(...args: any[]) {
		const later = () => {
			clearTimeout(timeout!);
			func(...args);
		};

		clearTimeout(timeout!);
		timeout = setTimeout(later, wait);
	};
}
