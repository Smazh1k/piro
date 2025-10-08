"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Dziękujemy za wiadomość! Skontaktujemy się wkrótce.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#0b0c10] text-white px-6 py-16 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skontaktuj się z nami
      </motion.h1>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-300">
            Masz pytania? Chcesz z nami współpracować? Napisz do nas!
          </p>

          <div className="space-y-4">
            <p>
              📍 <strong>Adres:</strong> ul. Sceniczna 12, Warszawa, Polska
            </p>
            <p>
              📞 <strong>Telefon:</strong>{" "}
              <a href="tel:+48123456789" className="text-blue-400 hover:underline">
                +48 123 456 789
              </a>
            </p>
            <p>
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:kontakt@sceniczna.pl" className="text-blue-400 hover:underline">
                kontakt@sceniczna.pl
              </a>
            </p>
          </div>

          <div className="flex gap-6 mt-6">
            <Link
              href="https://www.facebook.com/piroefekt/?ref=embed_page#"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Image src="/icons/facebook.svg" alt="Facebook" width={36} height={36} />
            </Link>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1a1a1d] p-8 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Twoje imię"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#0b0c10] border border-gray-600 focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Twój e-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#0b0c10] border border-gray-600 focus:outline-none focus:border-blue-400"
          />
          <textarea
            name="message"
            placeholder="Twoja wiadomość"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#0b0c10] border border-gray-600 focus:outline-none focus:border-blue-400"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-md font-semibold"
          >
            Wyślij wiadomość
          </button>
        </motion.form>
      </div>
    </main>
  );
}
