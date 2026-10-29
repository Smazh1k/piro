"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDistance = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (currentScrollY < 80 || menuOpen) {
        setIsHidden(false);
        scrollDistance.current = 0;
      } else if (scrollDifference !== 0) {
        if (Math.sign(scrollDifference) !== Math.sign(scrollDistance.current)) {
          scrollDistance.current = scrollDifference;
        } else {
          scrollDistance.current += scrollDifference;
        }

        if (Math.abs(scrollDistance.current) >= 3) {
          setIsHidden(scrollDistance.current > 0);
          scrollDistance.current = 0;
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <motion.nav
      aria-label="Nawigacja główna"
      aria-hidden={isHidden}
      inert={isHidden}
      animate={{ y: isHidden ? "-100%" : "0%" }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4"
    >
      <button
        className="z-50 text-amber-300 sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <Link
        href="/"
        aria-label="sceniczna.pl — strona główna"
        className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-tight text-amber-300 drop-shadow-[0_0_16px_rgba(245,158,11,0.28)] transition hover:text-amber-200 sm:text-2xl"
      >
        sceniczna.pl
      </Link>

      <ul className="ml-auto hidden gap-6 font-medium text-amber-100 sm:flex">
        <li>
          <Link href="/#o-nas" className="transition hover:text-amber-300">
            O nas
          </Link>
        </li>
        <li>
          <Link href="/#uslugi" className="transition hover:text-amber-300">
            Usługi
          </Link>
        </li>
        <li>
          <Link href="/#galeria" className="transition hover:text-amber-300">
            Galeria
          </Link>
        </li>
        <li>
          <Link href="/sponsors" className="transition hover:text-amber-300">
            Partnerzy
          </Link>
        </li>
        <li>
          <Link href="/contact" className="transition hover:text-amber-300">
            Kontakt
          </Link>
        </li>
      </ul>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 z-50 flex w-full flex-col items-center gap-5 border-t border-amber-500/20 bg-[#08090d]/95 py-8 shadow-lg backdrop-blur-md sm:hidden"
            >
              <Link
                href="/#o-nas"
                className="text-lg font-medium text-amber-100 transition hover:text-amber-300"
                onClick={() => setMenuOpen(false)}
              >
                O nas
              </Link>
              <Link
                href="/#uslugi"
                className="text-lg font-medium text-amber-100 transition hover:text-amber-300"
                onClick={() => setMenuOpen(false)}
              >
                Usługi
              </Link>
              <Link
                href="/#galeria"
                className="text-amber-100 text-lg font-medium transition hover:text-amber-300"
                onClick={() => setMenuOpen(false)}
              >
                Galeria
              </Link>
              <Link
                href="/sponsors"
                className="text-lg font-medium text-amber-100 transition hover:text-amber-300"
                onClick={() => setMenuOpen(false)}
              >
                Partnerzy
              </Link>
              <Link
                href="/contact"
                className="text-amber-100 text-lg font-medium transition hover:text-amber-300"
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
