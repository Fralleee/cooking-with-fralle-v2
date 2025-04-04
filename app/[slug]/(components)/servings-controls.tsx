import { FaPlus, FaMinus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import NumberFlow from "@number-flow/react";

interface Props {
	servings: number;
	handleServings: (input: number) => void;
}

const ServingsCalculator = ({ servings, handleServings }: Props) => {
	const t = useTranslations("base");
	return (
		<div className="my-4 flex min-w-[300px] max-w-md items-center justify-between">
			<Button
				variant={"outline"}
				className="group border-stone-300 bg-stone-50 transition-all ease-out hover:scale-110 hover:border-sky-600 active:scale-90"
				onClick={() => handleServings(servings - 2)}
			>
				<FaMinus />
			</Button>

			<div className="flex flex-col items-center pt-6">
				<h2 className="m-0 p-0 text-center text-3xl">
					<NumberFlow value={servings} />
				</h2>
				<em>{t("servings")}</em>
			</div>

			<Button
				variant={"outline"}
				className="group border-stone-300 bg-stone-50 transition-all ease-out hover:scale-110 hover:border-sky-600 active:scale-90"
				onClick={() => handleServings(servings + 2)}
			>
				<FaPlus />
			</Button>
		</div>
	);
};

export default ServingsCalculator;
