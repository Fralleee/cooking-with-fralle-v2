import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const BackButton = () => (
    <Link
        href="/"
        className={cn(
            buttonVariants({ variant: "link" }),
            "fixed bottom-2 right-2 z-50 h-16 w-16 p-0 text-6xl text-red-500 transition-all duration-150 ease-out hover:text-red-500 sm:bottom-auto sm:left-2 sm:right-auto sm:top-2",
        )}
    >
        <TiArrowBack className="stroke-stone-500 stroke-1" />
    </Link>
);

export default BackButton;
