import Header from "./(components)/header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-sky-300">
			<Header />
			<main className="relative z-10 flex bg-stone-100">{children}</main>
		</div>
	);
}
