"use client";

import { createContext, type PropsWithChildren, useContext } from "react";
import type { translations } from "@/i18n/translations";
import type { Locale } from "@/i18n-config";

interface TranslationContextProps {
	t: (typeof translations)[Locale];
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
	undefined,
);

interface TranslationProviderProps {
	translations: (typeof translations)[Locale];
}

export function TranslationProvider({
	translations,
	children,
}: PropsWithChildren<TranslationProviderProps>) {
	return (
		<TranslationContext.Provider value={{ t: translations }}>
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
