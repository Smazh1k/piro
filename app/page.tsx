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
    accent: "text-violet-200",
    badge: "from-violet-500/30 via-violet-950/20 to-[#0b0c11]",
    glow: "hover:border-violet-400/50 hover:bg-violet-400/[0.04]",
    description:
      "Bezpieczne i estetyczne konstrukcje dostosowane do każdej przestrzeni i potrzeb.",
    icon: StageStructureIcon,
  },
  {
    title: "Oświetlenie i technika",
    accent: "text-fuchsia-100",
    badge: "from-fuchsia-400/30 via-fuchsia-950/20 to-[#0b0c11]",
    glow: "hover:border-fuchsia-300/50 hover:bg-fuchsia-300/[0.04]",
    description:
      "Nowoczesne oświetlenie i zaplecze techniczne dla najlepszych efektów scenicznych.",
    icon: Lightbulb,
  },
  {
    title: "Obsługa imprez plenerowych",
    accent: "text-pink-200",
    badge: "from-pink-500/30 via-pink-950/20 to-[#0b0c11]",
    glow: "hover:border-pink-400/50 hover:bg-pink-400/[0.04]",
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
        className="scroll-mt-24 border-b border-fuchsia-400/10 bg-[#08090d] px-6 py-20 sm:px-10 lg:px-14"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
              O nas
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
              Tworzymy sceny,
              <br />
              które <span className="text-fuchsia-400">robią wrażenie</span>
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
              className="group inline-flex items-center gap-3 rounded-xl border border-fuchsia-500/60 px-5 py-3 text-sm font-medium text-fuchsia-300 transition hover:bg-fuchsia-500 hover:text-white"
            >
              Dowiedz się więcej
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={16}
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          <motion.div
            className="about-photo relative h-[280px] overflow-hidden rounded-2xl border border-fuchsia-500/25 sm:h-[360px] lg:h-[390px]"
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
              className="about-photo__image object-cover"
            />
            <div className="about-photo__light" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 text-sm text-white">
              <span className="about-photo__marker h-px w-8 bg-fuchsia-400" />
              Od planu do realizacji
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="uslugi"
        className="scroll-mt-24 border-b border-fuchsia-400/10 bg-[#0a0b10] px-6 py-20 sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
            Nasze usługi
          </p>
          <h2 className="mb-9 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            Kompleksowa obsługa
            <br />
            <span className="text-fuchsia-400">Twojego wydarzenia</span>
          </h2>

          <p className="mb-3 flex items-center gap-2 text-xs text-neutral-500 sm:hidden">
            Przesuń, aby zobaczyć wszystkie usługi
            <ArrowRight size={14} aria-hidden="true" />
          </p>
          <div
            role="region"
            aria-label="Nasze usługi"
            className="-mx-6 overflow-hidden px-6 sm:mx-0 sm:overflow-visible sm:px-0"
          >
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`service-card group min-h-52 min-w-[86%] snap-start rounded-2xl border border-fuchsia-500/20 bg-[#0b0c11] p-5 transition duration-300 hover:-translate-y-1 sm:min-w-0 ${service.glow}`}
                >
                  <div
                    className={`service-card__icon relative mb-5 flex size-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${service.badge} transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]`}
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
        </div>
      </section>

      <section
        id="galeria"
        className="scroll-mt-24 border-b border-fuchsia-400/10 bg-[#08090d] px-6 py-20 sm:px-10 lg:px-14"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
              Galeria
            </p>
            <h2 className="mb-4 text-4xl font-bold">Galeria</h2>
            <p className="mb-7 text-neutral-400">
              Zobacz sceny, światło i wydarzenia, które tworzą wyjątkowe
              wspomnienia.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-fuchsia-500/60 px-5 py-3 text-sm font-medium text-fuchsia-300 transition hover:bg-fuchsia-500 hover:text-white"
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
                className={`gallery-tile group relative overflow-hidden rounded-xl border border-fuchsia-500/20 ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="gallery-tile__image object-cover"
                  priority={index < 2}
                />
                <div className="gallery-tile__overlay absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition" />
                <span className="gallery-tile__caption" aria-hidden="true">
                  Odkryj realizację
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-fuchsia-400/10 bg-[radial-gradient(ellipse_at_70%_50%,rgba(126,34,206,0.14),transparent_58%)] px-6 py-12 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
              Partnerstwo
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">Nasi partnerzy</h2>
          </div>
          <SponsorCarousel />
          <div className="flex flex-col gap-6 rounded-2xl border border-fuchsia-500/15 bg-[#0b0c11]/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
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
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-fuchsia-500/60 px-5 py-3 text-sm font-medium text-fuchsia-300 transition hover:bg-fuchsia-500 hover:text-white"
            >
              Skontaktuj się <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
