import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";

const BackButton = () => (
    <Link
        href="/"
        className="fixed bottom-2 right-2 z-50 text-6xl text-red-500 transition-all duration-150 ease-out hover:text-red-500 sm:bottom-auto sm:left-2 sm:right-auto sm:top-2"
    >
        <TiArrowBack className="stroke-stone-500 stroke-1" />
    </Link>
);

export default BackButton;
