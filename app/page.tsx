"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="bg-[#0b0c10] text-white overflow-hidden">
      <HeroSection />
      <section className="py-24 px-6 md:px-16 bg-[#111216]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">O nas</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sceniczna to zespół pasjonatów sztuki, dźwięku i światła. 
            Od lat realizujemy wydarzenia sceniczne, koncerty, przedstawienia i instalacje artystyczne. 
            Naszym celem jest tworzenie niezapomnianych doświadczeń, które inspirują i poruszają publiczność.
          </p>
        </motion.div>
      </section>
      <section className="py-24 px-6 md:px-16 bg-[#0d0e13]">
        <h2 className="text-4xl font-bold text-center mb-12">Nasze usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Efekty sceniczne", desc: "Specjalne efekty świetlne i pirotechniczne dla Twojego wydarzenia." },
            { title: "Nagłośnienie", desc: "Profesjonalne systemy audio i akustyka najwyższej jakości." },
            { title: "Oświetlenie", desc: "Nowoczesne rozwiązania LED, dynamiczne oświetlenie sceniczne." },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#15171d] rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-[#111216]">
        <h2 className="text-4xl font-bold text-center mb-12">Galeria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: n * 0.1 }}
              className="overflow-hidden rounded-xl"
            >
              <Image
                src={`/images/gallery${n}.jpg`}
                alt={`Galeria ${n}`}
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#0b0c10] overflow-hidden">
  <h2 className="text-3xl font-bold text-center mb-10">Nasi sponsorzy</h2>

  <div className="relative w-full overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      className="flex gap-16 whitespace-nowrap w-[200%]"
    >
      {[...Array(2)].map((_, loopIndex) => (
        <div key={loopIndex} className="flex gap-16">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <Image
              key={`${loopIndex}-${s}`}
              src={`/images/sponsor${s}.png`}
              alt={`Sponsor ${s}`}
              width={160}
              height={60}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      ))}
    </motion.div>
  </div>
</section>
      <section className="py-24 px-6 md:px-16 bg-[#111216] text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Kontakt</h2>
          <p className="text-gray-400 mb-8">
            Masz pytania? Skontaktuj się z nami:
          </p>
          <p className="text-lg">📞 +48 790 300 570</p>
          <p className="text-lg mb-6">✉️ info@piroefekt.pl</p>
          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full text-white font-medium">
            Wyślij wiadomość
          </button>
        </motion.div>
      </section>
    </main>
  );
}
