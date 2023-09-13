import { FC } from "react";
import Link from "next/link";

type Props = {
  url: string;
  name: string;
  color: string;
};

const RecipeLink = ({ url, name, color }: Props) => {
  return (
    <Link href={url} className="
    w-full shadow-none transform-none
    lg:w-64 lg:hover:shadow-plain lg:hover:rotate-3 lg:hover:scale-105
    ease-OutBackLarge
    flex justify-center items-center h-64  bg-red-500 rounded-lg transition-all duration-250">
      <h2 className="text-center text-white z-10">{name}</h2>
    </Link>
  );
};

export default RecipeLink;
