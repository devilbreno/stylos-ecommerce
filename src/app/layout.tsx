import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { CartProvider } from "@/context/CartContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stylos — Camisetas, Bucket Hats e Relógios | Catálogo em Franca/SP",
  description:
    "Catálogo Stylos: camisetas em 14 cores, bucket hats e relógios com desconto por quantidade. Monte seu pedido e retire em Franca/SP.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-white font-body text-ink antialiased">
        <CartProvider>
          <Header />
          <TrustBar />
          {children}
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
