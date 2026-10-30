"use client";

import { useId } from "react";

const colors = ["pink", "violet", "cyan"] as const;
const particleCount = 18;

export default function SiteAtmosphere() {
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

  return (
    <div className="site-atmosphere" aria-hidden="true">
      {Array.from({ length: particleCount }, (_, id) => {
        const color = colors[Math.floor(random(id * 4 + 3) * colors.length)];

        return (
          <span
            key={id}
            className={`site-atmosphere__particle site-atmosphere__particle--${color}`}
            style={{
              left: `${3 + random(id * 4) * 94}%`,
              top: `${5 + random(id * 4 + 1) * 90}%`,
              animationDuration: `${3.2 + random(id * 4 + 2) * 5}s`,
              animationDelay: `${random(id * 4 + 3) * -8}s`,
            }}
          />
        );
      })}
    </div>
  );
}
