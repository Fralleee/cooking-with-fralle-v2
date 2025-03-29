import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
	return (
		<div className="p-14">
			<Link href="/">Back</Link>
			<h1>PageTitle</h1>
			<ViewTransition name="title">
				<h1>Title</h1>
			</ViewTransition>
		</div>
	);
}
