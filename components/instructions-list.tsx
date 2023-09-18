import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const InstructionsList = ({ children }: Props) => {
  return (
    <ol className="max-w-screen-md mx-auto mt-12 mb-12">
      {children}
    </ol>
  )
}

export default InstructionsList;
