import { cn } from "@/app/lib/utils";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Roboto, Oleo_Script } from "next/font/google";
import type { PropsWithChildren } from "react";
import type { Locale } from "@/i18n-config";
import { TranslationProvider } from "@/app/i18n/translation-context";
import { translations } from "@/app/i18n/translations";
import LocaleSelector from "./_components/locale-selector";
import { unstable_ViewTransition as ViewTransition } from "react";
import { CSPostHogProvider } from "../../../providers/posthog";

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const titleFont = Oleo_Script({
	subsets: ["latin"],
	weight: "700",
	variable: "--font-header",
});

export const metadata: Metadata = {
	title: "Cooking with Fralle",
	description:
		"Chop It Like It’s Hot! Sizzling recipes from the kitchen of Fralle.",
	metadataBase: new URL("https://cooking.fralle.net"),
	keywords: [
		"recipe",
		"cooking",
		"homemade",
		"cuisine",
		"foodie",
		"delicious",
		"easy recipes",
		"quick meals",
		"healthy recipes",
		"vegetarian dishes",
		"vegan options",
		"breakfast ideas",
		"lunch recipes",
		"dinner creations",
		"dessert delights",
		"baking bliss",
		"chef's special",
		"family meals",
		"gluten-free",
		"low-carb recipes",
		"savory dishes",
		"sweet treats",
		"appetizers",
		"beverages",
		"seasonal recipes",
		"holiday cooking",
		"international dishes",
		"comfort food",
		"kitchen tips",
		"cooking tutorials",
		"meal planning",
		"food plating",
		"culinary arts",
		"spices and herbs",
		"nutritional meals",
		"sustainable cooking",
		"food presentation",
		"cooking techniques",
		"cooking basics",
		"gourmet recipes",
		"food pairing",
		"ingredient substitution",
		"cooking terms",
		"culinary innovation",
	],
};

interface Props {
	params: Promise<{ locale: Locale }>;
}

export default async function Layout({
	children,
	params,
}: PropsWithChildren<Props>) {
	const { locale } = await params;
	console.log("Layout");
	return (
		<html lang={locale}>
			<body
				className={cn(
					"relative flex flex-col bg-stone-100",
					titleFont.variable,
					font.className,
				)}
			>
				<CSPostHogProvider>
					<ViewTransition name="layout">
						<div className="pointer-events-none fixed inset-0 z-50 bg-radial from-50% from-transparent to-neutral-950/30 opacity-0 transition-opacity md:opacity-100" />
						<TranslationProvider
							translations={translations[locale]}
							locale={locale}
						>
							<nav className="absolute top-4 z-20 flex w-full items-center justify-center gap-3">
								<LocaleSelector currentLocale={locale} />
							</nav>
							{children}
						</TranslationProvider>
					</ViewTransition>
				</CSPostHogProvider>
			</body>
		</html>
	);
}
