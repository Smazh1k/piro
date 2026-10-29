import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#08090d] px-6 pb-20 pt-32 text-white sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
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
            className="inline-flex items-center gap-2 self-start rounded-xl border border-amber-500/60 px-5 py-3 text-sm font-medium text-amber-300 transition hover:bg-amber-500 hover:text-[#17100a] sm:self-auto"
          >
            Zaplanuj wydarzenie <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <section
          aria-labelledby="gallery-video-title"
          className="mb-10 overflow-hidden rounded-2xl border border-amber-500/20 bg-[#0b0c11]"
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

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-xl border border-amber-500/20 ${
                index === 0 ? "row-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition group-hover:opacity-40" />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
