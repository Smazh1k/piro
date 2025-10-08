"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-[#0b0c10] text-white flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Sceniczna Background"
        fill
        priority
        className="object-cover opacity-25"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-pink-500/30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-transparent to-blue-500/20"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sceniczna.pl
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Profesjonalna obsługa sceniczna, światła, dźwięk i eventy,  
          które zapadają w pamięć.
        </motion.p>
      </div>
    </section>
  );
}
