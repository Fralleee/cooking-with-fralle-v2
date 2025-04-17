"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/translation-context";

const BackButton = ({ className }: { className?: string }) => {
	const { locale, t } = useTranslation();
	return (
		<Link
			href={`/${locale}`}
			className={cn(
				buttonVariants({ variant: "link" }),
				"text-stone-700 text-xl",
				className,
			)}
		>
			← {t["back-to-recipes"]}
		</Link>
	);
};

export default BackButton;
