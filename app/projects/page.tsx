import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCards from "@/components/ServiceCards";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32 text-white sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
          Sceny. Konstrukcje. Wydarzenia.
        </p>
        <h1 className="mb-5 text-4xl font-bold sm:text-5xl">
          Kompleksowa obsługa
          <br />
          <span className="text-fuchsia-400">Twojego wydarzenia</span>
        </h1>
        <p className="mb-12 max-w-2xl leading-relaxed text-neutral-300">
          Projektujemy, dostarczamy i montujemy nowoczesne sceny oraz konstrukcje
          eventowe. Od pierwszego pomysłu po bezpieczną realizację wydarzenia.
        </p>

        <p className="mb-3 flex items-center gap-2 text-xs text-neutral-500 sm:hidden">
          Przesuń, aby zobaczyć wszystkie usługi
          <ArrowRight size={14} aria-hidden="true" />
        </p>
        <p className="mb-3 flex items-center gap-2 text-xs text-neutral-500">
          Wybierz usługę, aby zobaczyć, o czym warto porozmawiać
          <ArrowRight size={14} aria-hidden="true" />
        </p>
        <ServiceCards />

        <div className="mt-12 rounded-2xl border border-fuchsia-500/20 bg-[radial-gradient(ellipse_at_75%_50%,rgba(126,34,206,0.14),transparent_58%)] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-2xl font-bold">Opowiedz nam o swoim pomyśle</h2>
            <p className="mt-2 text-neutral-400">
              Wspólnie dobierzemy rozwiązanie do Twojego wydarzenia.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400 sm:mt-0"
          >
            Porozmawiajmy <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
