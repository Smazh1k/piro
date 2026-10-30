"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Images,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryLightboxProps = {
  images: GalleryImage[];
};

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [navigationDirection, setNavigationDirection] = useState(1);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const closeDialog = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    } else {
      setSelectedIndex(null);
    }
  };

  const showPrevious = () => {
    setNavigationDirection(-1);
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setNavigationDirection(1);
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    if (selectedIndex !== null && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setNavigationDirection(-1);
        setSelectedIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length,
        );
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setNavigationDirection(1);
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  const selectedImage =
    selectedIndex === null ? null : images[selectedIndex];

  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Otwórz zdjęcie: ${image.alt}`}
            className={`group relative overflow-hidden rounded-xl border border-fuchsia-500/20 text-left transition hover:border-fuchsia-400/70 hover:shadow-[0_0_22px_rgba(217,70,239,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400 ${
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
            <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-3 opacity-70 transition group-hover:opacity-100">
              <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <Images size={14} aria-hidden="true" />
                Powiększ
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Podgląd zdjęcia z galerii"
        className="gallery-lightbox fixed m-auto max-h-[94dvh] w-[min(96vw,1400px)] max-w-none overflow-visible border-0 bg-transparent p-0 text-white backdrop:bg-black/90"
        onClose={() => setSelectedIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeDialog();
          }
        }}
      >
        {selectedImage && selectedIndex !== null && (
          <div
            className="relative mx-auto flex max-h-[94dvh] flex-col items-center touch-pan-y"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const startX = touchStartX.current;
              const endX = event.changedTouches[0]?.clientX;
              touchStartX.current = null;

              if (startX === null || endX === undefined) {
                return;
              }

              const distance = endX - startX;
              if (Math.abs(distance) > 50) {
                if (distance > 0) {
                  setNavigationDirection(-1);
                  setSelectedIndex((current) =>
                    current === null
                      ? null
                      : (current - 1 + images.length) % images.length,
                  );
                } else {
                  setNavigationDirection(1);
                  setSelectedIndex((current) =>
                    current === null ? null : (current + 1) % images.length,
                  );
                }
              }
            }}
          >
            <div className="relative h-[min(76dvh,900px)] w-full overflow-hidden">
              <motion.div
                key={selectedImage.src}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: navigationDirection * 24,
                        scale: 0.995,
                      }
                }
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.1 : 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="96vw"
                  quality={90}
                  className="select-none object-contain"
                  priority
                />
              </motion.div>
            </div>

            <button
              type="button"
              onClick={closeDialog}
              aria-label="Zamknij podgląd zdjęcia"
              className="absolute -top-3 right-2 z-10 rounded-full border border-white/20 bg-black/70 p-2.5 text-white backdrop-blur-sm transition hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-400 sm:top-3 sm:right-3"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Poprzednie zdjęcie"
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2.5 text-white backdrop-blur-sm transition hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-400 sm:flex sm:left-4 sm:p-3"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Następne zdjęcie"
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2.5 text-white backdrop-blur-sm transition hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-400 sm:flex sm:right-4 sm:p-3"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>

            <div className="mt-2 flex w-full items-center justify-between gap-4 px-2 text-sm text-neutral-300 sm:px-4">
              <p className="line-clamp-2">{selectedImage.alt}</p>
              <p className="shrink-0 tabular-nums text-neutral-400">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
            <p className="mt-2 text-xs text-neutral-500 sm:hidden">
              Przesuń zdjęcie, aby zobaczyć następne
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
