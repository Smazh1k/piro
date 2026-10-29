"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  life: number;
  maxLife: number;
  radius: number;
  color: string;
};

type Rocket = {
  x: number;
  y: number;
  targetY: number;
  color: string;
  trail: Array<{ x: number; y: number }>;
};

type BurstRing = {
  x: number;
  y: number;
  radius: number;
  life: number;
  color: string;
};

const colors = ["#f0abfc", "#e879f9", "#c084fc", "#67e8f9", "#f5d0fe"];

export default function FireworkParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const rockets: Rocket[] = [];
    const particles: Particle[] = [];
    const burstRings: BurstRing[] = [];
    let animationFrame = 0;
    let previousTime = 0;
    let nextLaunch = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let staticFrameDrawn = false;
    let isVisible = false;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      staticFrameDrawn = false;
    };

    const createBurst = (x: number, y: number, color: string) => {
      const particleCount = 44;
      burstRings.push({ x, y, radius: 4, life: 0.55, color });
      for (let index = 0; index < particleCount; index += 1) {
        const angle = (Math.PI * 2 * index) / particleCount;
        const speed = 55 + Math.random() * 130;
        const life = 1 + Math.random() * 0.7;
        particles.push({
          x,
          y,
          velocityX: Math.cos(angle) * speed,
          velocityY: Math.sin(angle) * speed,
          life,
          maxLife: life,
          radius: 1.2 + Math.random() * 1.8,
          color,
        });
      }
    };

    const launchRocket = () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      rockets.push({
        x: width * (0.08 + Math.random() * 0.84),
        y: height + 4,
        targetY: height * (0.12 + Math.random() * 0.45),
        color,
        trail: [],
      });
    };

    const drawStatic = () => {
      context.clearRect(0, 0, width, height);
      for (let index = 0; index < 3; index += 1) {
        createBurst(
          width * (0.18 + index * 0.3),
          height * (0.2 + (index % 2) * 0.24),
          colors[index],
        );
      }
      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 1.5, 0, Math.PI * 2);
        context.fillStyle = `${particle.color}88`;
        context.fill();
      }
      particles.length = 0;
      for (const ring of burstRings) {
        context.beginPath();
        context.arc(ring.x, ring.y, 26, 0, Math.PI * 2);
        context.strokeStyle = `${ring.color}55`;
        context.lineWidth = 2;
        context.stroke();
      }
      burstRings.length = 0;
      staticFrameDrawn = true;
    };

    const draw = (time: number) => {
      if (document.hidden) {
        animationFrame = 0;
        return;
      }

      if (motionPreference.matches) {
        animationFrame = 0;
        if (!staticFrameDrawn) drawStatic();
        return;
      }

      const delta = previousTime
        ? Math.min((time - previousTime) / 1000, 0.05)
        : 0;
      previousTime = time;
      context.clearRect(0, 0, width, height);

      if (time >= nextLaunch && rockets.length < 3) {
        launchRocket();
        nextLaunch = time + 900 + Math.random() * 1200;
      }

      for (let index = rockets.length - 1; index >= 0; index -= 1) {
        const rocket = rockets[index];
        rocket.trail.push({ x: rocket.x, y: rocket.y });
        if (rocket.trail.length > 7) rocket.trail.shift();

        rocket.y -= Math.max(100, height * 0.42) * delta;
        rocket.trail.forEach((point, trailIndex) => {
          context.beginPath();
          context.arc(
            point.x,
            point.y,
            2.6 * (trailIndex / rocket.trail.length),
            0,
            Math.PI * 2,
          );
          context.fillStyle = `${rocket.color}${Math.floor(
            (trailIndex / rocket.trail.length) * 210,
          )
            .toString(16)
            .padStart(2, "0")}`;
          context.shadowColor = rocket.color;
          context.shadowBlur = 12;
          context.fill();
          context.shadowBlur = 0;
        });
        context.beginPath();
        context.arc(rocket.x, rocket.y, 3, 0, Math.PI * 2);
        context.fillStyle = "#ffffff";
        context.shadowColor = rocket.color;
        context.shadowBlur = 16;
        context.fill();
        context.shadowBlur = 0;

        if (rocket.y <= rocket.targetY) {
          createBurst(rocket.x, rocket.y, rocket.color);
          rockets.splice(index, 1);
        }
      }

      for (let index = burstRings.length - 1; index >= 0; index -= 1) {
        const ring = burstRings[index];
        ring.radius += 115 * delta;
        ring.life -= delta;
        if (ring.life <= 0) {
          burstRings.splice(index, 1);
          continue;
        }

        context.beginPath();
        context.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        context.strokeStyle = `${ring.color}${Math.floor(
          (ring.life / 0.55) * 180,
        )
          .toString(16)
          .padStart(2, "0")}`;
        context.lineWidth = 2;
        context.shadowColor = ring.color;
        context.shadowBlur = 12;
        context.stroke();
        context.shadowBlur = 0;
      }

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.velocityX * delta;
        particle.y += particle.velocityY * delta;
        particle.velocityY += 32 * delta;
        particle.life -= delta;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          continue;
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `${particle.color}${Math.floor(
          (particle.life / particle.maxLife) * 230,
        )
          .toString(16)
          .padStart(2, "0")}`;
        context.shadowColor = particle.color;
        context.shadowBlur = 10;
        context.fill();
        context.shadowBlur = 0;
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const startAnimation = () => {
      if (animationFrame || document.hidden) return;
      previousTime = 0;
      animationFrame = window.requestAnimationFrame(draw);
    };

    const stopAnimation = () => {
      if (!animationFrame) return;
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const updateAnimation = () => {
      if (motionPreference.matches) {
        stopAnimation();
        if (isVisible && !document.hidden && !staticFrameDrawn) drawStatic();
      } else {
        startAnimation();
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      updateAnimation();
    });
    visibilityObserver.observe(canvas);

    resize();
    document.addEventListener("visibilitychange", updateAnimation);
    motionPreference.addEventListener("change", updateAnimation);
    updateAnimation();

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", updateAnimation);
      motionPreference.removeEventListener("change", updateAnimation);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full opacity-80 mix-blend-screen"
    />
  );
}
