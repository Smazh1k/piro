"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const contactEmail = "info@sceniczna.pl";

export default function Footer() {
  return (
    <footer className="border-t border-amber-500/20 bg-[#08090d] px-6 py-9 text-neutral-400 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="text-center md:text-left">
          <Link href="/" className="mb-2 inline-block text-2xl font-bold tracking-tight text-amber-300">
            sceniczna.pl
          </Link>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} sceniczna.pl. Wszelkie prawa zastrzeżone.
          </p>
        </div>

        <nav aria-label="Nawigacja w stopce" className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          <Link href="/#o-nas" className="transition hover:text-amber-300">
            O nas
          </Link>
          <Link href="/#uslugi" className="transition hover:text-amber-300">
            Usługi
          </Link>
          <Link href="/#galeria" className="transition hover:text-amber-300">
            Galeria
          </Link>
          <Link href="/contact" className="transition hover:text-amber-300">
            Kontakt
          </Link>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm md:justify-end">
          <a href="tel:+48790300570" className="inline-flex items-center gap-2 transition hover:text-amber-300">
            <Phone size={15} className="text-amber-400" aria-hidden="true" />
            +48 790 300 570
          </a>
          <a href={`mailto:${contactEmail}`} className="inline-flex min-w-0 items-center gap-2 transition hover:text-amber-300">
            <Mail size={15} className="text-amber-400" aria-hidden="true" />
            <span className="break-all">{contactEmail}</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
