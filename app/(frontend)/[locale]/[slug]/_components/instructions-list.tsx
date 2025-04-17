import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const InstructionsList = ({ children }: Props) => {
	return (
		<ol className="mt-12 mb-12 list-none space-y-4 pl-8 text-xl">{children}</ol>
	);
};

export default InstructionsList;
