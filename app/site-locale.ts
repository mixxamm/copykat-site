"use client";

import { useSyncExternalStore } from "react";
import {
  resolveLocale,
  supportedLocales,
  type Locale,
} from "./i18n";

const STORAGE_KEY = "copykat-site-locale";
const LOCALE_EVENT = "copykat:locale-change";

export const localeNames: Record<Locale, string> = {
  en: "English",
  nl: "Nederlands",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  "pt-PT": "Português",
  pl: "Polski",
  uk: "Українська",
  ro: "Română",
  sv: "Svenska",
  ru: "Русский",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  ja: "日本語",
  ko: "한국어",
  tr: "Türkçe",
  ar: "العربية",
  hi: "हिन्दी",
};

function readStoredLocale(): Locale | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return supportedLocales.find((locale) => locale === stored) ?? null;
}

function getLocaleSnapshot(): Locale {
  const stored = readStoredLocale();
  if (stored) return stored;

  const browserLanguages =
    navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  return resolveLocale(browserLanguages);
}

function subscribeToLocale(onStoreChange: () => void) {
  window.addEventListener("languagechange", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LOCALE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("languagechange", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LOCALE_EVENT, onStoreChange);
  };
}

export function setSiteLocale(locale: Locale) {
  window.localStorage.setItem(STORAGE_KEY, locale);
  window.dispatchEvent(new Event(LOCALE_EVENT));
}

export function useSiteLocale() {
  return useSyncExternalStore<Locale>(
    subscribeToLocale,
    getLocaleSnapshot,
    () => "en",
  );
}
