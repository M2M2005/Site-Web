"use client";

import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/10 py-12 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Left: Copyright */}
                    <div className="space-y-4">
                        <span className="text-lg font-bold text-neutral-950 dark:text-white">
                            Cyprien Bons
                        </span>
                        <p className="text-sm text-neutral-600 dark:text-white/60">
                            © {new Date().getFullYear()} Cyprien Bons. Tous droits réservés.
                        </p>
                    </div>

                    {/* Center: Contact Info */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-neutral-950 dark:text-white uppercase tracking-wider mb-4">
                            Contact
                        </h3>
                        <div className="space-y-2 text-sm">
                            <p className="text-neutral-600 dark:text-white/60">
                                <a
                                    href="mailto:contact@cyprienbons.com"
                                    className="hover:text-neutral-950 dark:hover:text-white transition-colors"
                                >
                                    contact@cyprienbons.com
                                </a>
                            </p>
                            <p className="text-neutral-600 dark:text-white/60">
                                <a
                                    href="tel:+33768512006"
                                    className="hover:text-neutral-950 dark:hover:text-white transition-colors"
                                >
                                    07 68 51 20 06
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right: Social Links */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-neutral-950 dark:text-white uppercase tracking-wider mb-4">
                            Réseaux sociaux
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/cyprien-bons/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Image
                                    src="/img/linkedin.svg"
                                    alt="LinkedIn"
                                    width={20}
                                    height={20}
                                    className="dark:invert"
                                />
                            </a>
                            <a
                                href="https://github.com/M2M2005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
                                aria-label="GitHub"
                            >
                                <Image
                                    src="/img/github.svg"
                                    alt="GitHub"
                                    width={20}
                                    height={20}
                                    className="dark:invert"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom: Attribution */}
                <div className="pt-8 border-t border-neutral-200 dark:border-white/10">
                    <p className="text-center text-xs text-neutral-500 dark:text-white/40">
                        Développé avec Next.js, Tailwind CSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
