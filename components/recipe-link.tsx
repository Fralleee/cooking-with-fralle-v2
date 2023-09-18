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
    sm:w-64 sm:hover:shadow-plain sm:hover:rotate-3 sm:hover:scale-105
    ease-OutBackLarge
    flex justify-center items-center h-64 bg-red-400 rounded-3xl transition-link duration-250">
      <h2 className="text-center text-white header-stroke text-3xl z-10">{name}</h2>
    </Link>
  );
};

export default RecipeLink;
