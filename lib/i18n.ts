"use client";

import { useEffect, useSyncExternalStore } from "react";

export type Lang = "fr" | "en";

// Valeur disponible dans chaque langue du site
export type Localized<T = string> = Record<Lang, T>;

const STORAGE_KEY = "lang";
const DEFAULT_LANG: Lang = "fr";

const listeners = new Set<() => void>();
let currentLang: Lang | null = null;

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

// Langue préférée du navigateur : anglais si elle est en anglais, sinon français.
// navigator.languages[0] suit l'ordre des langues des réglages (Chrome garde
// navigator.language sur la langue de l'interface).
function getBrowserLang(): Lang {
    const preferred = navigator.languages?.[0] ?? navigator.language;
    return preferred.toLowerCase().startsWith("en") ? "en" : DEFAULT_LANG;
}

function getSnapshot(): Lang {
    if (currentLang === null) {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            currentLang = stored === "fr" || stored === "en" ? stored : getBrowserLang();
        } catch {
            currentLang = getBrowserLang();
        }
    }
    return currentLang;
}

function getServerSnapshot(): Lang {
    return DEFAULT_LANG;
}

function setLang(lang: Lang) {
    currentLang = lang;
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch {
        // Stockage indisponible : la langue reste valable jusqu'au rechargement
    }
    listeners.forEach((listener) => listener());
}

// Langue courante : choix mémorisé du visiteur, sinon langue du navigateur
export function useLanguage() {
    const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return { lang, setLang };
}
