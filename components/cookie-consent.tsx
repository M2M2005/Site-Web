"use client";

import Link from "next/link";
import Script from "next/script";
import { setConsent, useConsent } from "@/lib/consent";
import { useLanguage } from "@/lib/i18n";

const GA_ID = "G-0DTZV3851T";

const texts = {
    fr: {
        title: "Cookies de mesure d'audience",
        text: "J'utilise Google Analytics pour savoir combien de personnes visitent ce site et quelles pages les intéressent. Ces cookies ne sont déposés que si vous les acceptez. Vous pouvez changer d'avis à tout moment via le lien « Gérer les cookies » en bas de page.",
        more: "En savoir plus",
        accept: "Accepter",
        refuse: "Refuser",
    },
    en: {
        title: "Analytics cookies",
        text: "I use Google Analytics to know how many people visit this site and which pages interest them. These cookies are only set if you accept them. You can change your mind at any time with the “Manage cookies” link at the bottom of the page.",
        more: "Learn more",
        accept: "Accept",
        refuse: "Refuse",
    },
};

// Google Analytics : chargé uniquement après consentement
function Analytics() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', { cookie_expires: 60 * 60 * 24 * 395 });
                `}
            </Script>
        </>
    );
}

export function CookieConsent() {
    const { consent, showBanner } = useConsent();
    const { lang } = useLanguage();
    const t = texts[lang];

    return (
        <>
            {consent === "granted" && <Analytics />}
            {showBanner && (
                <div
                    role="dialog"
                    aria-labelledby="cookie-consent-title"
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-[100] rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-2xl p-5"
                >
                    <h2
                        id="cookie-consent-title"
                        className="text-base font-semibold text-neutral-950 dark:text-white mb-2"
                    >
                        {t.title}
                    </h2>
                    <p className="text-sm text-neutral-600 dark:text-white/70 mb-4 leading-relaxed">
                        {t.text}{" "}
                        <Link href="/confidentialite" className="underline hover:text-neutral-950 dark:hover:text-white">
                            {t.more}
                        </Link>
                    </p>
                    {/* Refuser est aussi simple et visible qu'accepter */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => setConsent("denied")}
                            className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 transition-opacity"
                        >
                            {t.refuse}
                        </button>
                        <button
                            type="button"
                            onClick={() => setConsent("granted")}
                            className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 transition-opacity"
                        >
                            {t.accept}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
