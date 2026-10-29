import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

export const metadata = {
  title: "Sceniczna — obsługa sceniczna i eventy",
  description:
    "Profesjonalna obsługa sceniczna, nagłośnienie, oświetlenie i efekty na wydarzenia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-[#080910] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ContactButton />
      </body>
    </html>
  );
}
