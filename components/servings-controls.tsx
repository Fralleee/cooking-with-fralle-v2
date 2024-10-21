import { Button } from "@/components/ui/button";
import { FaPlus, FaMinus } from "react-icons/fa";

interface Props {
  servings: number;
  handleServings: any;
}
const ServingsCalculator = ({ servings, handleServings }: Props) => {
  return (
    <div className="my-4 flex min-w-[300px] max-w-md items-center justify-between">
      <Button
        variant={"outline"}
        className="group border-stone-300 bg-stone-50 transition-all ease-out hover:scale-110 hover:border-sky-600 active:scale-90"
        onClick={() => handleServings(servings - 2)}
      >
        <FaMinus />
      </Button>

      <h2
        key={servings}
        className="ease-outBack animate-scale text-center text-3xl duration-200"
      >{`${servings} portioner`}</h2>

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
