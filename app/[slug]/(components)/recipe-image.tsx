"use client";

import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";

interface Props {
	alt: string;
	slug: string;
	src: string;
}

export const RecipeImage = ({ alt, slug, src }: Props) => {
	return (
		<ViewTransition name={`recipe-image-${slug}`}>
			<Image src={src} alt={alt} width={256} height={256} priority />
		</ViewTransition>
	);
};
