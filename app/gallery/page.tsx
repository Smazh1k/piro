import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

const galleryImages = [
  {
    src: "/images/gallery-01.webp",
    alt: "Scena i konstrukcje techniczne przygotowane na wydarzenie",
  },
  {
    src: "/images/gallery-02.webp",
    alt: "Efekty sceniczne podczas koncertu",
  },
  {
    src: "/images/gallery-03.webp",
    alt: "Zespół występujący na oświetlonej scenie",
  },
  {
    src: "/images/gallery-04.webp",
    alt: "Realizacja muzyczna podczas wydarzenia plenerowego",
  },
  {
    src: "/images/gallery-05.webp",
    alt: "DJ i efekty świetlne podczas wydarzenia",
  },
  {
    src: "/images/gallery-06.webp",
    alt: "Scena plenerowa z nagłośnieniem i oświetleniem",
  },
  {
    src: "/images/gallery-07.webp",
    alt: "Ekipa techniczna za konsoletą na scenie",
  },
  {
    src: "/images/gallery-08.webp",
    alt: "Publiczność podczas wieczornego wydarzenia",
  },
  {
    src: "/images/gallery-09.webp",
    alt: "Kolorowe światło na scenie koncertowej",
  },
  {
    src: "/images/gallery-10.webp",
    alt: "Koncert plenerowy i publiczność",
  },
  {
    src: "/images/gallery-11.webp",
    alt: "Zespół rockowy podczas występu na żywo",
  },
  {
    src: "/images/gallery-12.webp",
    alt: "Scena koncertowa z niebieskim oświetleniem",
  },
  {
    src: "/images/gallery-13.webp",
    alt: "Kolorowo oświetlona scena podczas wydarzenia w hali",
  },
  {
    src: "/images/gallery-14.webp",
    alt: "Scena Retro Festival skąpana w zielonym świetle",
  },
  {
    src: "/images/gallery-15.webp",
    alt: "Ring bokserski i scena oświetlone czerwonym i niebieskim światłem",
  },
  {
    src: "/images/gallery-16.webp",
    alt: "Scena plenerowa przygotowana do występu",
  },
  {
    src: "/images/gallery-17.webp",
    alt: "Koncertowa scena i publiczność w niebieskim świetle",
  },
  {
    src: "/images/gallery-18.webp",
    alt: "Konstrukcja sceniczna i ekran przygotowane do wydarzenia",
  },
  {
    src: "/images/gallery-19.webp",
    alt: "Scena z ringiem i wielobarwnymi efektami laserowymi",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-32 text-white sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
              Galeria
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Galeria</h1>
            <p className="mt-3 max-w-xl text-neutral-400">
              Sceny, konstrukcje i światło — zobacz, jak tworzymy oprawę
              wydarzeń.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-fuchsia-500/60 px-5 py-3 text-sm font-medium text-fuchsia-300 transition hover:bg-fuchsia-500 hover:text-white sm:self-auto"
          >
            Zaplanuj wydarzenie <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <section
          aria-labelledby="gallery-video-title"
          className="mb-10 overflow-hidden rounded-2xl border border-fuchsia-500/20 bg-[#0b0c11]"
        >
          <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 id="gallery-video-title" className="font-semibold">
              Zobacz realizację w ruchu
            </h2>
            <p className="text-sm text-neutral-500">
              Fragment wydarzenia z naszej galerii
            </p>
          </div>
          <video
            className="aspect-video max-h-[70vh] w-full bg-black object-contain"
            controls
            playsInline
            preload="metadata"
            poster="/images/gallery-12.webp"
          >
            <source src="/videos/gallery-event.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje odtwarzania wideo.
          </video>
        </section>

        <GalleryLightbox images={galleryImages} />
      </div>
    </main>
  );
}
