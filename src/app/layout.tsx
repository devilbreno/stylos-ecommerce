import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import WhatsAppFab from "@/components/WhatsAppFab";
import { CartProvider } from "@/context/CartContext";
import { siteUrl } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Stylos — Camisetas, Moletons, Bucket Hats e Relógios | Catálogo em Franca/SP",
  description:
    "Catálogo Stylos: camisetas adulto e infantil, moletom canguru, bucket hats e relógios com desconto por quantidade. Monte seu pedido e retire em Franca/SP.",
  openGraph: {
    title: "Stylos — Camisetas, Moletons, Bucket Hats e Relógios",
    description:
      "Camisetas adulto e infantil, moletom canguru, bucket hats e relógios. Monte seu pedido e retire em Franca/SP.",
    url: "/",
    siteName: "Stylos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/banner-1-desktop.jpg",
        width: 2400,
        height: 960,
        alt: "Stylos — seu estilo, sua cor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

/** Dados estruturados de negócio local — endereço e horário do briefing */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Stylos",
  url: siteUrl,
  image: `${siteUrl}/images/logo-symbol.png`,
  telephone: "+55-16-99294-9249",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Major Moura Mattos, 1465 — Jardim Dermínio",
    addressLocality: "Franca",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-white font-body text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <CartProvider>
          <Header />
          <TrustBar />
          {children}
          <Footer />
          <WhatsAppFab />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
