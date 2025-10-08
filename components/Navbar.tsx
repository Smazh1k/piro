"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { detectSite, SiteInfo } from "@/lib/siteConfig";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [site, setSite] = useState<SiteInfo | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setSite(detectSite());
  }, []);

  if (!site) return null;

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#1D3557] shadow-md relative z-50">
      <button
        className="text-white sm:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-6 sm:gap-12">
        <a
          href="https://piroefekt.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <Image
            src="/images/piro.png"
            alt="PiroEfekt"
            width={100}
            height={30}
            className="object-contain"
          />
        </a>

        <a
          href="https://sceniczna.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <Image
            src="/images/sceniczna.svg"
            alt="Sceniczna"
            width={140}
            height={40}
            className="object-contain"
          />
        </a>

        <a
          href="https://sceniczna.pl/fundacjarazem"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <Image
            src="/images/fund.jpg"
            alt="Fundacja Razem"
            width={100}
            height={30}
            className="object-contain"
          />
        </a>
      </div>

      <ul className="hidden sm:flex gap-6 text-white font-medium ml-auto">
        <li>
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-300 transition">
            Projects
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
              className="absolute top-full left-0 w-full bg-[#1D3557] flex flex-col items-center gap-5 py-8 sm:hidden z-50 shadow-lg"
            >
              <Link
                href="/"
                className="text-white text-lg font-medium hover:text-gray-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-white text-lg font-medium hover:text-gray-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/projects"
                className="text-white text-lg font-medium hover:text-gray-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
