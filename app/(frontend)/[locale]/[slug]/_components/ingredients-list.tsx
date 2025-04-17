import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	title?: string;
}

const IngredientsList = ({ children, title }: Props) => {
	return (
		<ul
			className={`relative mt-8 list-[circle] pl-8 text-lowercase text-xl ${title ? "pt-14" : ""}`}
		>
			{title && (
				<li className="absolute top-0 left-0 list-none">
					<h1 className="text-4xl capitalize">{title}</h1>
				</li>
			)}
			{children}
		</ul>
	);
};

export default IngredientsList;
