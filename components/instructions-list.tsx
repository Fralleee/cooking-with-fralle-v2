import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const InstructionsList = ({ children }: Props) => {
  return (
    <ol className="list-decimal pl-8 mt-12 mb-12 text-xl">
      {children}
    </ol>
  )
}

export default InstructionsList;
