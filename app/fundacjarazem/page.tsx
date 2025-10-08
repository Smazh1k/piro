"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FundacjaRazemPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
<section
  className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center text-white"
  style={{
    backgroundImage: "url('/images/fundacjarazem-hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-[#1D3557]/70"></div>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative z-10 px-4"
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Fundacja Razem
    </h1>
    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
      Pomagamy rozwijać sztukę, kulturę i wspólne projekty sceniczne.
    </p>
  </motion.div>
</section>
      <section className="bg-gray-100 w-full py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Nasze projekty</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Koncert Letni 2024",
              desc: "Wydarzenie, które połączyło artystów i publiczność w magicznej atmosferze muzyki.",
            },
            {
              title: "Warsztaty Teatralne",
              desc: "Szkolenia i spotkania dla młodych aktorów i reżyserów scenicznych.",
            },
            {
              title: "Świąteczna Scena Razem",
              desc: "Wspólne przedstawienie charytatywne dla lokalnej społeczności.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#1D3557]">
                {p.title}
              </h3>
              <p className="text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Chcesz współpracować?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Skontaktuj się z nami, aby dowiedzieć się więcej o naszych projektach.
        </p>
        <Link
          href="/contact"
          className="bg-[#1D3557] text-white px-6 py-3 rounded-full hover:bg-[#274b8b] transition"
        >
          Napisz do nas
        </Link>
      </section>
    </main>
  );
}
