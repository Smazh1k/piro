"use client";

import Image from "next/image";
import { useEffect, useRef, type PointerEvent } from "react";

const sponsors = [
  { name: "Radio ESKA", image: "/images/sponsors/logo_eska.png" },
  { name: "Galeria Słupsk", image: "/images/sponsors/logo_galeriaslupsk.png" },
  { name: "ING", image: "/images/sponsors/logo_ing.png" },
  { name: "Lexus", image: "/images/sponsors/logo_lexus.png" },
  { name: "Multi", image: "/images/sponsors/logo_multi.png" },
  { name: "Nestlé", image: "/images/sponsors/logo_nestle.png" },
  { name: "ORLEN", image: "/images/sponsors/logo_orlen.png" },
  { name: "Ramirent", image: "/images/sponsors/logo_ramirent.png" },
  { name: "Stena Line", image: "/images/sponsors/logo_stenaline.png" },
  { name: "Toyota", image: "/images/sponsors/logo_toyota.png" },
  { name: "AIG", image: "/images/sponsors/logo_aig.png" },
  { name: "Avans", image: "/images/sponsors/logo_avans.png" },
];

const speed = 35;

const normalizeOffset = (offset: number, cycleWidth: number) =>
  ((offset % cycleWidth) + cycleWidth) % cycleWidth;

export default function SponsorCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cycleWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const pointerRef = useRef<{ id: number; x: number } | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = track?.firstElementChild;
    if (!track || !firstSet) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frameId = 0;
    let previousTime = 0;

    const updateCycleWidth = () => {
      cycleWidthRef.current = firstSet.getBoundingClientRect().width;
      if (cycleWidthRef.current > 0) {
        offsetRef.current = normalizeOffset(
          offsetRef.current,
          cycleWidthRef.current,
        );
      }
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    };

    const resizeObserver = new ResizeObserver(updateCycleWidth);
    resizeObserver.observe(firstSet);
    updateCycleWidth();

    const animate = (time: number) => {
      if (
        previousTime &&
        !pointerRef.current &&
        !isHoveredRef.current &&
        !motionPreference.matches
      ) {
        const elapsed = Math.min(time - previousTime, 50);
        const cycleWidth = cycleWidthRef.current;

        if (cycleWidth > 0) {
          offsetRef.current = (offsetRef.current + (speed * elapsed) / 1000) % cycleWidth;
          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }

      previousTime = time;
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerRef.current = { id: event.pointerId, x: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const pointer = pointerRef.current;
    const track = trackRef.current;
    const cycleWidth = cycleWidthRef.current;
    if (!pointer || pointer.id !== event.pointerId || !track || cycleWidth <= 0) {
      return;
    }

    offsetRef.current = normalizeOffset(
      offsetRef.current - (event.clientX - pointer.x),
      cycleWidth,
    );
    pointerRef.current = { ...pointer, x: event.clientX };
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerRef.current?.id !== event.pointerId) return;
    pointerRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const renderSponsors = () =>
    sponsors.map((sponsor) => (
      <div
        key={sponsor.name}
        className="sponsor-logo-card group mx-3 flex h-40 w-[224px] shrink-0 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-[#0b0c11] p-5 sm:w-[280px]"
      >
        <div className="relative h-full w-full">
          <Image
            src={sponsor.image}
            alt={sponsor.name}
            fill
            sizes="(max-width: 640px) 224px, 280px"
            className="sponsor-logo-card__image pointer-events-none object-contain"
            draggable={false}
          />
        </div>
      </div>
    ));

  return (
    <div
      role="region"
      aria-label="Partnerzy Sceniczna.pl"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onDragStart={(event) => event.preventDefault()}
      className="relative -mx-6 touch-pan-y cursor-grab overflow-hidden active:cursor-grabbing sm:-mx-10 lg:-mx-14"
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        <div className="flex shrink-0">{renderSponsors()}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {renderSponsors()}
        </div>
      </div>
    </div>
  );
}
