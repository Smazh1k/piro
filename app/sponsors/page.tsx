import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SponsorCarousel from "@/components/SponsorCarousel";

export default function SponsorsPage() {
  return (
    <main className="bg-[#08090d] px-6 pb-24 pt-32 text-white sm:px-10 lg:px-14">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
            Współpraca
          </p>
          <h1 className="mb-5 text-3xl font-bold sm:text-4xl">
            Nasi partnerzy
          </h1>
          <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
            Dziękujemy markom, które razem z nami współtworzą wydarzenia i
            niezapomniane emocje.
          </p>
        </div>

        <SponsorCarousel />

        <div className="mt-16 flex flex-col gap-6 rounded-2xl border border-fuchsia-500/20 bg-[radial-gradient(ellipse_at_75%_50%,rgba(126,34,206,0.14),transparent_58%)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
              Współpraca
            </p>
            <h2 className="text-2xl font-bold">
              Zainteresowała Cię współpraca?
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Zapraszamy do kontaktu — porozmawiajmy o wspólnych możliwościach.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-fuchsia-500/60 px-5 py-3 text-sm font-medium text-fuchsia-300 transition hover:bg-fuchsia-500 hover:text-white sm:self-auto"
          >
            Skontaktuj się <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}