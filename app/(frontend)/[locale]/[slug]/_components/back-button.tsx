import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";
import type { Locale } from "@/i18n-config";
import type { Translations } from "@/app/i18n/translation-context";
import { defaultLocale } from "@/i18n-config";
import { translations } from "@/app/i18n/translations";

interface Props {
	className?: string;
	locale?: Locale;
	t?: Translations;
}

const BackButton = ({ className, locale = defaultLocale, t = translations[defaultLocale] }: Props) => {
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
