import About from "@/components/About";
import Catalog from "@/components/Catalog";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      {/* Banner único (hero estático) — estrutura pronta para virar slider depois.
          A copy (headline + CTA) é arte dentro do JPG, então o banner renderiza
          na proporção intrínseca do arquivo (2.5:1 desktop, 4:3 mobile) — altura
          fixa em vh com object-cover cortaria o texto da arte. */}
      <section className="bg-navy">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/banner-1-desktop.jpg"
            width="2400"
            height="960"
          />
          <img
            src="/images/banner-1-mobile.jpg"
            alt="Seu estilo, sua cor — camisetas 100% algodão em várias cores e tamanhos. Ver catálogo."
            width="1200"
            height="900"
            fetchPriority="high"
            className="h-auto w-full"
          />
        </picture>
      </section>

      <Catalog />

      <HowItWorks />
      <About />
    </main>
  );
}
