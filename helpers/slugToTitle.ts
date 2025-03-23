export function slugToTitle(slug: string): string {
	let title = slug.replace(/-/g, " ");
	title = title.replace(/\b\w/g, (char) => char.toUpperCase());

	return title;
}
