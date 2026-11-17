"use client";

import { useSyncExternalStore } from "react";

// Consentement aux cookies de mesure d'audience (Google Analytics).
// Le choix est conservé 6 mois (recommandation CNIL), puis redemandé.

export type Consent = "granted" | "denied";

const STORAGE_KEY = "cookie-consent";
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182; // ~6 mois

const listeners = new Set<() => void>();
let current: Consent | null | undefined;
let bannerOpen = false;

function emit() {
    listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

function readStored(): Consent | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const { value, date } = JSON.parse(raw) as { value: Consent; date: number };
        if ((value !== "granted" && value !== "denied") || Date.now() - date > MAX_AGE_MS) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return value;
    } catch {
        return null;
    }
}

function getConsent(): Consent | null {
    if (current === undefined) current = readStored();
    return current;
}

// Supprime les cookies Google Analytics (_ga, _ga_XXXX) déjà déposés
function clearAnalyticsCookies() {
    const host = window.location.hostname;
    const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
    document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        if (name === "_ga" || name.startsWith("_ga_") || name === "_gid") {
            domains.forEach((domain) => {
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
            });
        }
    });
}

export function setConsent(value: Consent) {
    const previous = getConsent();
    current = value;
    bannerOpen = false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: Date.now() }));
    } catch {
        // Stockage indisponible : le choix vaut pour la session en cours
    }
    if (value === "denied") {
        clearAnalyticsCookies();
        // Le script déjà chargé ne peut pas être déchargé : on recharge la page
        if (previous === "granted") {
            window.location.reload();
            return;
        }
    }
    emit();
}

export function openConsentBanner() {
    bannerOpen = true;
    emit();
}

export function useConsent() {
    const consent = useSyncExternalStore(subscribe, getConsent, () => null);
    const isBannerOpen = useSyncExternalStore(subscribe, () => bannerOpen, () => false);
    // Côté serveur et au premier rendu, on ne connaît pas encore le choix
    const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
    return { consent, showBanner: hydrated && (consent === null || isBannerOpen) };
}
