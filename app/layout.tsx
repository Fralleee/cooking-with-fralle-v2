import { cn } from "@/lib/utils";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Roboto, Oleo_Script } from "next/font/google";
import type { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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

export default async function Layout({ children }: PropsWithChildren<unknown>) {
	const messages = await getMessages();
	const locale = await getLocale();

	return (
		<html lang={locale}>
			<body
				className={cn(
					"flex flex-col bg-stone-100",
					titleFont.variable,
					font.className,
				)}
			>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
