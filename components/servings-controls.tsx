import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getServingsFromSearchParams } from "@/helpers/recipeUtils";

interface Props {
  servings: number
}

const ServingsCalculator = ({ servings }: Props) => {

  return (
    <div className="flex justify-between items-center mx-auto my-4 p-4 max-w-md">
      <Link
        href={`?${new URLSearchParams({ servings: (servings - 2).toString() })}`}
        className={cn("w-12 h-12 text-4xl", buttonVariants({ variant: "default" }))}
      >-</Link>

      <h2 className="text-center animate-scale duration-200 ease-outBack">{`${servings} portioner`}</h2>

      <Link
        href={`?${new URLSearchParams({ servings: (servings + 2).toString() })}`}
        className={cn("w-12 h-12 text-4xl", buttonVariants({ variant: "default" }))}
      >+</Link>
    </div>
  );
};

export default ServingsCalculator;
