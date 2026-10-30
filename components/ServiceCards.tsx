"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Lightbulb,
  PanelsTopLeft,
  UsersRound,
} from "lucide-react";
import StageStructureIcon from "@/components/StageStructureIcon";

const services = [
  {
    title: "Montaż scen",
    accent: "text-fuchsia-200",
    badge: "from-fuchsia-500/30 via-fuchsia-950/20 to-[#0b0c11]",
    glow: "hover:border-fuchsia-400/50 hover:bg-fuchsia-400/[0.04]",
    description:
      "Profesjonalny montaż scen dopasowanych do charakteru i skali wydarzenia.",
    details: ["Rodzaj i skala wydarzenia", "Miejsce oraz układ sceny", "Zakres potrzebnego montażu"],
    icon: PanelsTopLeft,
  },
  {
    title: "Konstrukcje eventowe",
    accent: "text-violet-200",
    badge: "from-violet-500/30 via-violet-950/20 to-[#0b0c11]",
    glow: "hover:border-violet-400/50 hover:bg-violet-400/[0.04]",
    description:
      "Bezpieczne i estetyczne konstrukcje dostosowane do każdej przestrzeni i potrzeb.",
    details: ["Typ potrzebnej konstrukcji", "Przestrzeń wydarzenia", "Oczekiwania dotyczące realizacji"],
    icon: StageStructureIcon,
  },
  {
    title: "Oświetlenie i technika",
    accent: "text-fuchsia-100",
    badge: "from-fuchsia-400/30 via-fuchsia-950/20 to-[#0b0c11]",
    glow: "hover:border-fuchsia-300/50 hover:bg-fuchsia-300/[0.04]",
    description:
      "Nowoczesne oświetlenie i zaplecze techniczne dla najlepszych efektów scenicznych.",
    details: ["Charakter oprawy wydarzenia", "Potrzebne zaplecze techniczne", "Miejsce i harmonogram"],
    icon: Lightbulb,
  },
  {
    title: "Obsługa imprez plenerowych",
    accent: "text-pink-200",
    badge: "from-pink-500/30 via-pink-950/20 to-[#0b0c11]",
    glow: "hover:border-pink-400/50 hover:bg-pink-400/[0.04]",
    description:
      "Kompleksowa obsługa techniczna imprez plenerowych — od planowania po realizację.",
    details: ["Lokalizacja i termin", "Planowany zakres wydarzenia", "Potrzebna obsługa techniczna"],
    icon: UsersRound,
  },
];

export default function ServiceCards() {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(
    () => new Set(),
  );

  return (
    <div
      role="region"
      aria-label="Nasze usługi"
      className="-mx-6 overflow-hidden px-6 sm:mx-0 sm:overflow-visible sm:px-0"
    >
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          const isExpanded = expandedServices.has(service.title);
          const detailsId = `service-details-${services.indexOf(service)}`;

          return (
            <article
              key={service.title}
              className={`group min-h-52 min-w-[86%] snap-start rounded-2xl border border-fuchsia-500/20 bg-[#0b0c11] p-5 transition duration-300 hover:-translate-y-1 sm:min-w-0 ${service.glow}`}
            >
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                onClick={() => {
                  setExpandedServices((current) => {
                    const next = new Set(current);
                    if (next.has(service.title)) {
                      next.delete(service.title);
                    } else {
                      next.add(service.title);
                    }
                    return next;
                  });
                }}
                className="w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-400"
              >
                <span
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
                </span>
                <span className="mb-2 flex items-center justify-between gap-2 text-base font-semibold">
                  {service.title}
                  <ArrowDown
                    className={`shrink-0 text-fuchsia-300 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    size={16}
                    aria-hidden="true"
                  />
                </span>
                <span className="block text-sm leading-relaxed text-neutral-400">
                  {service.description}
                </span>
              </button>

              <div
                id={detailsId}
                aria-hidden={!isExpanded}
                inert={!isExpanded}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                  isExpanded
                    ? "grid-rows-[1fr] pt-4 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
                    Warto omówić
                  </p>
                  <ul className="space-y-1.5 text-sm text-neutral-300">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-fuchsia-400"
                          aria-hidden="true"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-300 transition hover:text-white"
                  >
                    Zapytaj o usługę
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
