"use client";

import { useEffect, useRef } from "react";

export default function GlobalCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!glow || !finePointer.matches || reducedMotion.matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      glow.style.setProperty("--cursor-x", `${event.clientX}px`);
      glow.style.setProperty("--cursor-y", `${event.clientY}px`);
      glow.classList.add("is-visible");
    };

    const hideGlow = () => glow.classList.remove("is-visible");

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", hideGlow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return <div ref={glowRef} aria-hidden="true" className="home-cursor-glow" />;
}
