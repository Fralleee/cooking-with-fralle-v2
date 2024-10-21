import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BackButton = () => (
  <Link
    href="/"
    className={cn(
      buttonVariants({ variant: "link" }),
      "z-50 h-16 w-16 p-0 text-6xl",
      "fixed bottom-2 right-2 sm:bottom-auto sm:left-2 sm:right-auto sm:top-2",
      "bg-transparent text-red-500 hover:text-red-500",
      "transition-all duration-150 ease-out active:scale-90 sm:hover:scale-125",
    )}
  >
    <TiArrowBack className="stroke-stone-950/30 stroke-1" />
  </Link>
);

export default BackButton;
