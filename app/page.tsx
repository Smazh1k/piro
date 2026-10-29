"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  PanelsTopLeft,
  UsersRound,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SponsorCarousel from "@/components/SponsorCarousel";
import StageStructureIcon from "@/components/StageStructureIcon";

const services = [
  {
    title: "Montaż scen",
    accent: "text-fuchsia-200",
    badge: "from-fuchsia-500/30 via-fuchsia-950/20 to-[#0b0c11]",
    glow: "hover:border-fuchsia-400/50 hover:bg-fuchsia-400/[0.04]",
    description:
      "Profesjonalny montaż scen dopasowanych do charakteru i skali wydarzenia.",
    icon: PanelsTopLeft,
  },
  {
    title: "Konstrukcje eventowe",
    accent: "text-sky-200",
    badge: "from-sky-400/30 via-sky-950/20 to-[#0b0c11]",
    glow: "hover:border-sky-400/50 hover:bg-sky-400/[0.04]",
    description:
      "Bezpieczne i estetyczne konstrukcje dostosowane do każdej przestrzeni i potrzeb.",
    icon: StageStructureIcon,
  },
  {
    title: "Oświetlenie i technika",
    accent: "text-amber-100",
    badge: "from-amber-400/30 via-amber-950/20 to-[#0b0c11]",
    glow: "hover:border-amber-300/50 hover:bg-amber-300/[0.04]",
    description:
      "Nowoczesne oświetlenie i zaplecze techniczne dla najlepszych efektów scenicznych.",
    icon: Lightbulb,
  },
  {
    title: "Obsługa imprez plenerowych",
    accent: "text-emerald-200",
    badge: "from-emerald-400/30 via-emerald-950/20 to-[#0b0c11]",
    glow: "hover:border-emerald-400/50 hover:bg-emerald-400/[0.04]",
    description:
      "Kompleksowa obsługa techniczna imprez plenerowych — od planowania po realizację.",
    icon: UsersRound,
  },
];

const galleryImages = [
  {
    src: "/images/gallery-01.webp",
    alt: "Scena i konstrukcje techniczne przygotowane na wydarzenie",
    className: "row-span-2",
  },
  {
    src: "/images/gallery-02.webp",
    alt: "Efekty sceniczne podczas koncertu",
    className: "",
  },
  {
    src: "/images/gallery-03.webp",
    alt: "Zespół występujący na oświetlonej scenie",
    className: "",
  },
  {
    src: "/images/gallery-04.webp",
    alt: "Realizacja muzyczna podczas wydarzenia plenerowego",
    className: "",
  },
  {
    src: "/images/gallery-05.webp",
    alt: "DJ i efekty świetlne podczas wydarzenia",
    className: "",
  },
  {
    src: "/images/gallery-06.webp",
    alt: "Scena plenerowa z nagłośnieniem i oświetleniem",
    className: "",
  },
  {
    src: "/images/gallery-07.webp",
    alt: "Ekipa techniczna za konsoletą na scenie",
    className: "",
  },
  {
    src: "/images/gallery-08.webp",
    alt: "Publiczność podczas wieczornego wydarzenia",
    className: "",
  },
  {
    src: "/images/gallery-09.webp",
    alt: "Kolorowe światło na scenie koncertowej",
    className: "",
  },
  {
    src: "/images/gallery-10.webp",
    alt: "Koncert plenerowy i publiczność",
    className: "",
  },
  {
    src: "/images/gallery-11.webp",
    alt: "Zespół rockowy podczas występu na żywo",
    className: "",
  },
  {
    src: "/images/gallery-12.webp",
    alt: "Scena koncertowa z niebieskim oświetleniem",
    className: "",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#08090d] text-white">
      <HeroSection />

      <section
        id="o-nas"
        className="scroll-mt-24 border-b border-amber-400/10 bg-[#08090d] px-6 py-20 sm:px-10 lg:px-14"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
              O nas
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
              Tworzymy sceny,
              <br />
              które <span className="text-amber-400">robią wrażenie</span>
            </h2>
            <p className="mb-4 leading-relaxed text-neutral-300">
              Sceniczna.pl to doświadczony zespół specjalistów, który od lat
              projektuje, montuje i obsługuje sceny oraz konstrukcje eventowe w
              całej Polsce. Obsługujemy koncerty, festiwale, wydarzenia firmowe
              i imprezy plenerowe — od koncepcji po realizację.
            </p>
            <p className="mb-7 leading-relaxed text-neutral-400">
              Stawiamy na bezpieczeństwo, niezawodność i indywidualne podejście
              do każdego projektu. Twoje wydarzenie, nasze doświadczenie.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-xl border border-amber-500/60 px-5 py-3 text-sm font-medium text-amber-300 transition hover:bg-amber-500 hover:text-[#17100a]"
            >
              Dowiedz się więcej <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            className="relative h-[280px] overflow-hidden rounded-2xl border border-amber-500/25 sm:h-[360px] lg:h-[390px]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/gallery-01.webp"
              alt="Konstrukcja sceniczna i zaplecze techniczne wydarzenia"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 text-sm text-white">
              <span className="h-px w-8 bg-amber-400" />
              Od planu do realizacji
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="uslugi"
        className="scroll-mt-24 border-b border-amber-400/10 bg-[#0a0b10] px-6 py-20 sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
            Nasze usługi
          </p>
          <h2 className="mb-9 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            Kompleksowa obsługa
            <br />
            <span className="text-amber-400">Twojego wydarzenia</span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`group min-h-52 rounded-2xl border border-amber-500/20 bg-[#0b0c11] p-5 transition duration-300 hover:-translate-y-1 ${service.glow}`}
                >
                  <div
                    className={`relative mb-5 flex size-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${service.badge} transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -right-2 -top-3 size-8 rounded-full bg-white/10 blur-[1px]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 -left-2 size-8 rounded-full bg-black/20"
                    />
                    <Icon
                      className={`relative ${service.accent} transition group-hover:drop-shadow-[0_0_8px_currentColor]`}
                      size={30}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="scroll-mt-24 border-b border-amber-400/10 bg-[#08090d] px-6 py-20 sm:px-10 lg:px-14"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
              Galeria
            </p>
            <h2 className="mb-4 text-4xl font-bold">Galeria</h2>
            <p className="mb-7 text-neutral-400">
              Zobacz sceny, światło i wydarzenia, które tworzą wyjątkowe
              wspomnienia.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-amber-500/60 px-5 py-3 text-sm font-medium text-amber-300 transition hover:bg-amber-500 hover:text-[#17100a]"
            >
              Zobacz więcej realizacji <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid auto-rows-[112px] grid-cols-2 gap-3 sm:auto-rows-[145px] sm:grid-cols-4">
            {galleryImages.map((image, index) => (
              <Link
                key={image.src}
                href="/gallery"
                aria-label={`Zobacz galerię: ${image.alt}`}
                className={`group relative overflow-hidden rounded-xl border border-amber-500/20 ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-70 transition group-hover:opacity-30" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-amber-400/10 bg-[radial-gradient(ellipse_at_70%_50%,rgba(146,82,22,0.12),transparent_58%)] px-6 py-12 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
              Partnerstwo
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">Nasi partnerzy</h2>
          </div>
          <SponsorCarousel />
          <div className="flex flex-col gap-6 rounded-2xl border border-amber-500/15 bg-[#0b0c11]/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Zainteresowała Cię współpraca?
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                Zapraszamy do kontaktu — porozmawiajmy o wspólnych możliwościach.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-amber-500/60 px-5 py-3 text-sm font-medium text-amber-300 transition hover:bg-amber-500 hover:text-[#17100a]"
            >
              Skontaktuj się <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
