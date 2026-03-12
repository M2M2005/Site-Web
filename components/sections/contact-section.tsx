"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const isFormValid =
        formData.firstName.trim() !== "" &&
        formData.lastName.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.title.trim() !== "" &&
        formData.message.trim() !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("https://formspree.io/f/xjkwvvnl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    title: formData.title,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    title: "",
                    message: "",
                });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section
            id="contact"
            className="min-h-screen w-full bg-neutral-950 dark:bg-white py-20 px-4 md:px-6 flex items-center"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-neutral-950 mb-4">
                        Contact
                    </h2>
                    <div className="w-20 h-1 bg-white/20 dark:bg-neutral-950/20"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white/5 dark:bg-neutral-950/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 dark:border-neutral-950/10">
                            <h3 className="text-2xl font-bold text-white dark:text-neutral-950 mb-6">
                                Envoyez-moi un message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 dark:text-neutral-950/80 mb-2">
                                            Prénom <span className="text-red-400">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="bg-white/10 dark:bg-neutral-950/10 border-white/20 dark:border-neutral-950/20 text-white dark:text-neutral-950 placeholder:text-white/40 dark:placeholder:text-neutral-950/40"
                                            placeholder="Votre prénom"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 dark:text-neutral-950/80 mb-2">
                                            Nom <span className="text-red-400">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="bg-white/10 dark:bg-neutral-950/10 border-white/20 dark:border-neutral-950/20 text-white dark:text-neutral-950 placeholder:text-white/40 dark:placeholder:text-neutral-950/40"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-white/80 dark:text-neutral-950/80 mb-2">
                                        Adresse mail <span className="text-red-400">*</span>
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-white/10 dark:bg-neutral-950/10 border-white/20 dark:border-neutral-950/20 text-white dark:text-neutral-950 placeholder:text-white/40 dark:placeholder:text-neutral-950/40"
                                        placeholder="votre.email@exemple.com"
                                    />
                                </div>

                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-white/80 dark:text-neutral-950/80 mb-2">
                                        Titre <span className="text-red-400">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="bg-white/10 dark:bg-neutral-950/10 border-white/20 dark:border-neutral-950/20 text-white dark:text-neutral-950 placeholder:text-white/40 dark:placeholder:text-neutral-950/40"
                                        placeholder="Objet de votre message"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-white/80 dark:text-neutral-950/80 mb-2">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="bg-white/10 dark:bg-neutral-950/10 border-white/20 dark:border-neutral-950/20 text-white dark:text-neutral-950 placeholder:text-white/40 dark:placeholder:text-neutral-950/40 resize-none"
                                        placeholder="Écrivez votre message ici..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={!isFormValid || isSubmitting}
                                    className="w-full bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white hover:bg-white/90 dark:hover:bg-neutral-950/90 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-6"
                                >
                                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                                </Button>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <p className="text-green-400 text-center">
                                        Message envoyé avec succès !
                                    </p>
                                )}
                                {submitStatus === "error" && (
                                    <p className="text-red-400 text-center">
                                        Une erreur est survenue. Veuillez réessayer.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                    {/* Right: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white dark:text-neutral-950 mb-6">
                                Informations de contact
                            </h3>
                            <p className="text-white/80 dark:text-neutral-950/80 mb-8 leading-relaxed">
                                N'hésitez pas à me contacter pour toute opportunité professionnelle,
                                collaboration ou simplement pour échanger.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-neutral-950/10 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white dark:text-neutral-950"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white/60 dark:text-neutral-950/60 mb-1">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:contact@cyprienbons.com"
                                        className="text-white dark:text-neutral-950 hover:underline"
                                    >
                                        contact@cyprienbons.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-neutral-950/10 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white dark:text-neutral-950"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white/60 dark:text-neutral-950/60 mb-1">
                                        Téléphone
                                    </p>
                                    <a
                                        href="tel:+33768512006"
                                        className="text-white dark:text-neutral-950 hover:underline"
                                    >
                                        07 68 51 20 06
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-neutral-950/10 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white dark:text-neutral-950"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white/60 dark:text-neutral-950/60 mb-1">
                                        Localisation
                                    </p>
                                    <p className="text-white dark:text-neutral-950">
                                        Montpellier, France
                                    </p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-6 border-t border-white/10 dark:border-neutral-950/10">
                                <p className="text-sm font-semibold text-white/60 dark:text-neutral-950/60 mb-4">
                                    Réseaux sociaux
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.linkedin.com/in/cyprien-bons/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/10 dark:bg-neutral-950/10 flex items-center justify-center hover:bg-white/20 dark:hover:bg-neutral-950/20 transition-colors"
                                    >
                                        <Image
                                            src="/img/linkedin.svg"
                                            alt="LinkedIn"
                                            width={24}
                                            height={24}
                                            className="invert dark:invert-0"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/M2M2005"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/10 dark:bg-neutral-950/10 flex items-center justify-center hover:bg-white/20 dark:hover:bg-neutral-950/20 transition-colors"
                                    >
                                        <Image
                                            src="/img/github.svg"
                                            alt="GitHub"
                                            width={24}
                                            height={24}
                                            className="invert dark:invert-0"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* CV Download */}
                            <div className="pt-6">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full border-white/20 dark:border-neutral-950/20 text-white dark:text-neutral-950 hover:bg-white/10 dark:hover:bg-neutral-950/10"
                                >
                                    <a href="/docs/CV_BONS.pdf" download>
                                        Télécharger mon CV
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
