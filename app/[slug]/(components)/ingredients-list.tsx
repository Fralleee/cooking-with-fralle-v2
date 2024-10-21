import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

const IngredientsList = ({ children, title }: Props) => {
  return (
    <ul className={`text-lowercase relative mt-8 list-[circle] pl-8 text-xl ${title ? "pt-14" : ""}`}>
      {title && (
        <li className="absolute left-0 top-0 list-none">
          <h1 className="text-4xl capitalize">{title}</h1>
        </li>
      )}
      {children}
    </ul>
  );
};

export default IngredientsList;
