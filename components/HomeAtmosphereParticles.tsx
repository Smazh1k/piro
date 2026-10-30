"use client";

import { useId } from "react";

type Particle = {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  color: string;
};

const colors = ["pink", "violet", "cyan"] as const;

export default function HomeAtmosphereParticles() {
  const instanceId = useId();
  const seed = Array.from(instanceId).reduce(
    (value, character) => (value * 31 + character.charCodeAt(0)) >>> 0,
    0,
  );
  const random = (key: number) => {
    let value = (seed + key * 1013904223) >>> 0;
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
  const particles: Particle[] = Array.from({ length: 10 }, (_, id) => ({
    id,
    left: 5 + random(id * 5) * 90,
    top: 8 + random(id * 5 + 1) * 84,
    duration: 2.8 + random(id * 5 + 2) * 3.8,
    delay: random(id * 5 + 3) * -6,
    color: colors[Math.floor(random(id * 5 + 4) * colors.length)],
  }));

  return (
    <div className="home-atmosphere__particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`home-atmosphere__particle home-atmosphere__particle--${particle.color}`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
