"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] text-gray-400 py-10 px-6 md:px-16 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold mb-2">Sceniczna</h3>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sceniczna. Wszelkie prawa zastrzeżone.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-white transition">
            Strona główna
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projekty
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Kontakt
          </Link>
        </div>

        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/piroefekt/?ref=embed_page#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Facebook size={22} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
