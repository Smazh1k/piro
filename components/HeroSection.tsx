"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[min(820px,100svh)] overflow-hidden border-b border-amber-400/15 bg-[#07080c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_38%,rgba(249,115,22,0.2),transparent_38%),radial-gradient(ellipse_at_62%_62%,rgba(168,85,247,0.13),transparent_42%),radial-gradient(ellipse_at_35%_85%,rgba(14,165,233,0.1),transparent_38%)]" />
      <div className="relative mx-auto grid min-h-[min(820px,100svh)] max-w-[1440px] items-center gap-8 px-6 pb-16 pt-28 sm:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-0 lg:px-14">
        <motion.div
          className="relative z-10 max-w-2xl lg:py-12"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-amber-400 sm:text-sm">
            Sceny. Konstrukcje. Wydarzenia.
          </p>
          <h1 className="mb-7 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Profesjonalne sceny
            <br />
            na <span className="text-amber-400">każde wydarzenie</span>
          </h1>
          <p className="mb-9 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Projektujemy, dostarczamy i montujemy nowoczesne sceny oraz
            konstrukcje eventowe dla koncertów, eventów firmowych i imprez
            plenerowych.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-xl border border-amber-500/70 bg-amber-500 px-6 py-3.5 text-sm font-semibold text-[#17100a] shadow-[0_0_30px_rgba(217,143,41,0.16)] transition hover:bg-amber-400"
          >
            Poznaj nasze usługi <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          className="relative h-[300px] overflow-hidden rounded-2xl border border-amber-500/25 sm:h-[390px] lg:-mr-14 lg:h-[min(650px,78vh)]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <Image
            src="/images/stage-hero.jpg"
            alt="Scena koncertowa z oświetleniem i konstrukcją techniczną"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080c]/35 via-transparent to-[#07080c]/10" />
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(217,70,239,0.12),transparent_42%,rgba(14,165,233,0.14))] mix-blend-screen" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07080c]/55 to-transparent" />
          <div className="absolute bottom-5 left-5 border-l-2 border-amber-400 pl-4 text-xs uppercase tracking-[0.2em] text-white/85">
            Technika, która buduje widowisko
          </div>
        </motion.div>
      </div>
    </section>
  );
}
