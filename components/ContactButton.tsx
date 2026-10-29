import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      aria-label="Przejdź do strony kontaktowej"
      title="Kontakt"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-amber-500 text-[#17100a] shadow-[0_8px_30px_rgba(245,158,11,0.3)] transition hover:scale-105 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
    >
      <MessageCircle size={24} strokeWidth={2} aria-hidden="true" />
    </Link>
  );
}
