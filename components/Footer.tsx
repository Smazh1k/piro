"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const contactEmail = "technika@sceniczna.pl";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-fuchsia-500/20 bg-[#08090d] px-6 py-9 text-neutral-400 sm:px-10 lg:px-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="footer-light-rig">
          <span className="footer-light-rig__bar" />
          <span className="footer-spotlight footer-spotlight--one">
            <span className="footer-spotlight__beam" />
            <span className="footer-spotlight__fixture" />
          </span>
          <span className="footer-spotlight footer-spotlight--two">
            <span className="footer-spotlight__beam" />
            <span className="footer-spotlight__fixture" />
          </span>
          <span className="footer-spotlight footer-spotlight--three">
            <span className="footer-spotlight__beam" />
            <span className="footer-spotlight__fixture" />
          </span>
        </div>
        <div className="absolute -bottom-32 left-[12%] size-64 rounded-full bg-fuchsia-600/10 blur-[90px]" />
        <div className="absolute -bottom-36 right-[14%] size-72 rounded-full bg-violet-600/10 blur-[100px]" />
        <span className="footer-glow-particle footer-glow-particle--one left-[18%] bg-fuchsia-300" />
        <span className="footer-glow-particle footer-glow-particle--two left-[36%] bg-violet-300" />
        <span className="footer-glow-particle footer-glow-particle--three left-[62%] bg-cyan-300" />
        <span className="footer-glow-particle footer-glow-particle--four left-[82%] bg-fuchsia-200" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="text-center md:text-left">
          <Link href="/" aria-label="Sceniczna.pl — strona główna" className="mb-2 inline-block">
            <Image
              src="/images/sceniczna-logo.png"
              alt="Sceniczna.pl"
              width={2172}
              height={188}
              className="mx-auto h-auto w-[155px] md:mx-0"
            />
          </Link>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} sceniczna.pl. Wszelkie prawa zastrzeżone.
          </p>
        </div>

        <nav aria-label="Nawigacja w stopce" className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          <Link href="/#o-nas" className="transition hover:text-fuchsia-300">
            O nas
          </Link>
          <Link href="/#uslugi" className="transition hover:text-fuchsia-300">
            Usługi
          </Link>
          <Link href="/#galeria" className="transition hover:text-fuchsia-300">
            Galeria
          </Link>
          <Link href="/contact" className="transition hover:text-fuchsia-300">
            Kontakt
          </Link>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm md:justify-end">
          <a href="tel:+48790300570" className="inline-flex items-center gap-2 transition hover:text-fuchsia-300">
            <Phone size={15} className="text-fuchsia-400" aria-hidden="true" />
            +48 790 300 570
          </a>
          <a href={`mailto:${contactEmail}`} className="inline-flex min-w-0 items-center gap-2 transition hover:text-fuchsia-300">
            <Mail size={15} className="text-fuchsia-400" aria-hidden="true" />
            <span className="break-all">{contactEmail}</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
