import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

const IngredientsList = ({ children, title }: Props) => {
  return (
    <ul
      className={`relative pl-8 mt-8 list-[circle] text-lowercase text-xl ${title ? 'pt-14' : ''}`}
    >
      {title && (
        <li className="list-none absolute top-0 left-0">
          <h1 className="text-4xl capitalize">{title}</h1>
        </li>
      )}
      {children}
    </ul>
  )
}

export default IngredientsList;
