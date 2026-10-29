"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, LockKeyhole, Mail, Phone } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

const contactEmail = "info@sceniczna.pl";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Zapytanie o wydarzenie — ${formData.name}`,
    );
    const body = encodeURIComponent(
      `${formData.message}\n\nImię i nazwisko: ${formData.name}\nE-mail: ${formData.email}\nTelefon: ${formData.phone || "Nie podano"}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative min-h-[calc(100svh-100px)] overflow-hidden bg-[#08090d] px-6 pb-20 pt-32 text-white sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.14fr_0.96fr] lg:items-center lg:gap-16">
        <motion.section
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          aria-labelledby="contact-title"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
            Kontakt
          </p>
          <div className="mb-2 h-px w-11 bg-amber-400" />
          <h1
            id="contact-title"
            className="mb-6 text-4xl font-bold leading-tight sm:text-5xl"
          >
            Porozmawiajmy
            <br />
            <span className="text-amber-400">o Twoim wydarzeniu</span>
          </h1>
          <p className="mb-8 max-w-xl leading-relaxed text-neutral-300">
            Masz pytania lub chcesz wycenić swój projekt? Napisz do nas lub
            zadzwoń — odpowiemy najszybciej, jak to możliwe.
          </p>

          <div className="mb-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <a
              href="tel:+48790300570"
              className="flex min-h-[84px] items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.015] px-4 py-4 transition hover:border-amber-400/60"
            >
              <Phone className="shrink-0 text-amber-400" size={23} strokeWidth={1.7} aria-hidden="true" />
              <span>
                <span className="block text-xs text-neutral-400">Telefon</span>
                <span className="mt-1 block whitespace-nowrap text-xs font-semibold sm:text-sm">
                  +48 790 300 570
                </span>
              </span>
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="flex min-h-[84px] min-w-0 items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.015] px-4 py-4 transition hover:border-amber-400/60"
            >
              <Mail className="shrink-0 text-amber-400" size={23} strokeWidth={1.7} aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs text-neutral-400">E-mail</span>
                <span className="mt-1 block break-all text-xs font-semibold leading-tight sm:text-sm">
                  {contactEmail}
                </span>
              </span>
            </a>
            <div className="flex min-h-[84px] items-center gap-3 rounded-xl border border-amber-500/20 bg-white/[0.015] px-4 py-4">
              <Clock3 className="shrink-0 text-amber-400" size={23} strokeWidth={1.7} aria-hidden="true" />
              <span>
                <span className="block text-xs text-neutral-400">Dostępni</span>
                <span className="mt-1 block text-xs font-semibold sm:text-sm">
                  Pon. – Pt.
                  <span className="block">9:00 – 17:00</span>
                </span>
              </span>
            </div>
          </div>

          <a
            href="#formularz"
            className="inline-flex items-center gap-5 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-[#17100a] shadow-[0_0_26px_rgba(217,143,41,0.18)] transition hover:bg-amber-400"
          >
            Skontaktuj się <ArrowRight size={17} aria-hidden="true" />
          </a>
        </motion.section>

        <motion.section
          id="formularz"
          aria-labelledby="form-title"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="scroll-mt-28 rounded-2xl border border-amber-500/25 bg-[#0a0b10]/90 p-5 shadow-[0_16px_80px_rgba(0,0,0,0.22)] sm:p-7"
        >
          <h2 id="form-title" className="mb-2 text-lg font-semibold text-amber-400">
            Napisz do nas
          </h2>
          <p className="mb-6 text-sm text-neutral-400">
            Wypełnij formularz, a przygotujemy wiadomość do wysłania.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                aria-label="Imię i nazwisko"
                required
                className="min-w-0 rounded-lg border border-white/10 bg-[#08090d] px-3 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-amber-400/70"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                aria-label="E-mail"
                required
                className="min-w-0 rounded-lg border border-white/10 bg-[#08090d] px-3 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-amber-400/70"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Numer telefonu"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              aria-label="Numer telefonu"
              className="rounded-lg border border-white/10 bg-[#08090d] px-3 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-amber-400/70"
            />
            <textarea
              name="message"
              placeholder="Wiadomość"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              aria-label="Wiadomość"
              required
              className="resize-y rounded-lg border border-white/10 bg-[#08090d] px-3 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-amber-400/70"
            />
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-3 rounded-xl border border-amber-500/70 px-4 py-3.5 text-sm font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-[#17100a]"
            >
              Wyślij wiadomość <ArrowRight size={17} aria-hidden="true" />
            </button>
          </form>

          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-neutral-500">
            <LockKeyhole className="mt-0.5 shrink-0" size={13} aria-hidden="true" />
            Po kliknięciu otworzy się aplikacja pocztowa z przygotowaną
            wiadomością. Sprawdź ją i wyślij.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
