import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

/** Mesma origem do menu do header — ver Header.tsx */
const navLinks = [
  ...products.map((product) => ({
    label: product.tabLabel,
    href: `/${product.anchor}`,
  })),
  { label: "Sobre", href: "#sobre" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo-symbol.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-heading text-lg font-bold tracking-wide">
              Stylos
            </span>
          </div>
          <p className="mt-3 text-sm text-white/70">
            Stylos — catálogo direto, sem enrolação.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="font-heading text-sm font-bold tracking-wide text-silver">
            Catálogo
          </h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-bold tracking-wide text-silver">
            Loja
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/5516992949249"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
              >
                (16) 99294-9249
              </a>
            </li>
            <li>Rua Major Moura Mattos, 1465 — Jardim Dermínio, Franca/SP</li>
            <li>Seg a sex, 7h às 17h</li>
            <li className="font-medium text-white/90">
              Retirada no local. Sem pedido mínimo.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} Stylos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
