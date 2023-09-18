import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

const IngredientsList = ({ children, title }: Props) => {
  return (
    <ul
      className={`relative max-w-screen-md mx-auto mt-12 mb-12 list-disc text-lowercase ${title ? 'pt-16' : ''}`}
    >
      {title && (
        <li className="list-none absolute top-0 left-0">
          <h1 className="text-6xl capitalize">{title}</h1>
        </li>
      )}
      {children}
    </ul>
  )
}

export default IngredientsList;
