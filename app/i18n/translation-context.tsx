"use client";

import { createContext, type PropsWithChildren, useContext, useMemo } from "react";
import type { Locale } from "@/i18n-config";
import type { translations } from "./translations";

interface TranslationContextProps {
	locale: Locale;
	t: (typeof translations)[Locale];
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
	undefined,
);

interface TranslationProviderProps {
	locale: Locale;
	translations: (typeof translations)[Locale];
}

export type Translations = (typeof translations)[Locale];

export function TranslationProvider({
	locale,
	translations,
	children,
}: PropsWithChildren<TranslationProviderProps>) {
	const value = useMemo(() => ({ t: translations, locale }), [translations, locale]);

	return (
		<TranslationContext.Provider value={value}>
			{children}
		</TranslationContext.Provider>
	);
}

export function useTranslation() {
	const context = useContext(TranslationContext);
	if (!context) {
		throw new Error("useTranslation must be used within a TranslationProvider");
	}
	return context;
}
