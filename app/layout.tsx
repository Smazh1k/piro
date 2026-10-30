import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import SiteAtmosphere from "@/components/SiteAtmosphere";
import GlobalCursorGlow from "@/components/GlobalCursorGlow";
import { DM_Sans, Space_Grotesk } from "next/font/google";

const bodyFont = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "Sceniczna — obsługa sceniczna i eventy",
  description:
    "Profesjonalna obsługa sceniczna, nagłośnienie, oświetlenie i efekty na wydarzenia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body className={`${bodyFont.variable} ${headingFont.variable} bg-[#080910] text-white`}>
        <SiteAtmosphere />
        <GlobalCursorGlow />
        <div className="site-foreground">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ContactButton />
        </div>
      </body>
    </html>
  );
}
