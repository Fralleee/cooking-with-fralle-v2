import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const InstructionsList = ({ children }: Props) => {
	return (
		<ol className="mb-12 mt-12 pl-8 text-xl list-none space-y-4">{children}</ol>
	);
};

export default InstructionsList;
