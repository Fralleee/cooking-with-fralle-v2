import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IconType } from "react-icons";

interface ButtonProps {
    href: string;
    Icon: IconType;
}

const Button = ({ href, Icon }: ButtonProps) => {
    return (
        <Link
            href={href}
            replace
            scroll={false}
            className={cn(
                buttonVariants({ variant: "outline" }),
                "group border-stone-300 bg-stone-50 transition-all ease-out hover:scale-110 hover:border-sky-600 active:scale-90",
            )}
        >
            <Icon className="transition-all group-hover:text-sky-600" />
        </Link>
    );
};

interface Props {
    servings: number;
}
const ServingsCalculator = ({ servings }: Props) => {
    return (
        <div className="my-4 flex min-w-[300px] max-w-md items-center justify-between">
            <Button
                href={`?${new URLSearchParams({
                    servings: (servings - 2).toString(),
                })}`}
                Icon={FaMinus}
            />

            <h2
                key={servings}
                className="ease-outBack animate-scale text-center text-3xl duration-200"
            >{`${servings} portioner`}</h2>

            <Button
                href={`?${new URLSearchParams({
                    servings: (servings + 2).toString(),
                })}`}
                Icon={FaPlus}
            />
        </div>
    );
};

export default ServingsCalculator;
