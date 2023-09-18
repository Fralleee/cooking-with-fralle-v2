import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getServingsFromSearchParams } from "@/helpers/recipeUtils";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { IconType } from "react-icons";

interface ButtonProps {
  href: string
  Icon: IconType
}

const Button = ({ href, Icon }: ButtonProps) => {
  return (
    <Link href={href} className={cn(buttonVariants({ variant: "outline" }), "group hover:scale-110 active:scale-90 hover:border-sky-600 transition-all ease-out")}>
      <Icon className="transition-all group-hover:text-sky-600" />
    </Link>
  )
}

interface Props {
  servings: number
}
const ServingsCalculator = ({ servings }: Props) => {

  return (
    <div className="flex justify-between items-center mx-auto my-4 max-w-md min-w-[320px]">
      <Button href={`?${new URLSearchParams({ servings: (servings - 2).toString() })}`} Icon={FaMinus} />

      <h2 key={servings} className="text-4xl text-center animate-scale duration-200 ease-outBack">{`${servings} portioner`}</h2>

      <Button href={`?${new URLSearchParams({ servings: (servings + 2).toString() })}`} Icon={FaPlus} />
    </div>
  );
};

export default ServingsCalculator;
