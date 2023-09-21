import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const InstructionsList = ({ children }: Props) => {
    return (
        <ol className="mb-12 mt-12 list-decimal pl-8 text-xl">{children}</ol>
    );
};

export default InstructionsList;
