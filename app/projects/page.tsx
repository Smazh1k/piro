import Link from "next/link";
import {
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
    icon: PanelsTopLeft,
  },
  {
    title: "Konstrukcje eventowe",
    accent: "text-sky-200",
    badge: "from-sky-400/30 via-sky-950/20 to-[#0b0c11]",
    glow: "hover:border-sky-400/50 hover:bg-sky-400/[0.04]",
    description:
      "Bezpieczne i estetyczne konstrukcje dostosowane do każdej przestrzeni i potrzeb.",
    icon: StageStructureIcon,
  },
  {
    title: "Oświetlenie i technika",
    accent: "text-amber-100",
    badge: "from-amber-400/30 via-amber-950/20 to-[#0b0c11]",
    glow: "hover:border-amber-300/50 hover:bg-amber-300/[0.04]",
    description:
      "Nowoczesne oświetlenie i zaplecze techniczne dla najlepszych efektów scenicznych.",
    icon: Lightbulb,
  },
  {
    title: "Obsługa imprez plenerowych",
    accent: "text-emerald-200",
    badge: "from-emerald-400/30 via-emerald-950/20 to-[#0b0c11]",
    glow: "hover:border-emerald-400/50 hover:bg-emerald-400/[0.04]",
    description:
      "Kompleksowa obsługa techniczna imprez plenerowych — od planowania po realizację.",
    icon: UsersRound,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#08090d] px-6 pb-24 pt-32 text-white sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
          Sceny. Konstrukcje. Wydarzenia.
        </p>
        <h1 className="mb-5 text-4xl font-bold sm:text-5xl">
          Kompleksowa obsługa
          <br />
          <span className="text-amber-400">Twojego wydarzenia</span>
        </h1>
        <p className="mb-12 max-w-2xl leading-relaxed text-neutral-300">
          Projektujemy, dostarczamy i montujemy nowoczesne sceny oraz konstrukcje
          eventowe. Od pierwszego pomysłu po bezpieczną realizację wydarzenia.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className={`group min-h-52 rounded-2xl border border-amber-500/20 bg-[#0b0c11] p-6 transition duration-300 hover:-translate-y-1 ${service.glow}`}
              >
                <div
                  className={`relative mb-6 flex size-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${service.badge} transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]`}
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
                <h2 className="mb-3 text-lg font-semibold">{service.title}</h2>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-amber-500/20 bg-[radial-gradient(ellipse_at_75%_50%,rgba(146,82,22,0.12),transparent_58%)] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-2xl font-bold">Opowiedz nam o swoim pomyśle</h2>
            <p className="mt-2 text-neutral-400">
              Wspólnie dobierzemy rozwiązanie do Twojego wydarzenia.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-[#17100a] transition hover:bg-amber-400 sm:mt-0"
          >
            Porozmawiajmy <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
