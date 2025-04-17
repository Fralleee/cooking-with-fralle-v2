import { Minus, Plus } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import NumberFlow from "@number-flow/react";
import { useTranslation } from "@/app/i18n/translation-context";

interface Props {
	servings: number;
	handleServings: (input: number) => void;
}

const ServingsCalculator = ({ servings, handleServings }: Props) => {
	const { t } = useTranslation();
	return (
		<div className="my-2 flex w-[300px] max-w-md items-center justify-between">
			<Button
				variant={"outline"}
				disabled={servings <= 2}
				className="group border-stone-300 bg-stone-50 transition-all ease-out hover:scale-110 hover:border-sky-600 active:scale-90"
				onClick={() => handleServings(servings - 2)}
			>
				<Minus />
			</Button>

			<div className="flex flex-col items-center pt-6">
				<h2 className="m-0 p-0 text-center text-3xl">
					<NumberFlow value={servings} />
				</h2>
				<em>{t.servings}</em>
			</div>

			<Button
				variant={"outline"}
				className="group border-stone-300 bg-stone-50 transition-all ease-out hover:scale-110 hover:border-sky-600 active:scale-90"
				onClick={() => handleServings(servings + 2)}
			>
				<Plus />
			</Button>
		</div>
	);
};

export default ServingsCalculator;
