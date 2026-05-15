"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import vi from "./locales/vi";
import en from "./locales/en";
import type { Locale, Translation } from "./types";

const STORAGE_KEY = "portfolio-locale";

const translations: Record<Locale, Translation> = { vi, en };

interface I18nContextValue {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "vi";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && translations[stored]) return stored;
  const browserLang = navigator.language.slice(0, 2);
  if (browserLang === "en") return "en";
  return "vi";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  // Sync lang attribute on mount
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}