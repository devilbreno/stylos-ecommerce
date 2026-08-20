import Image from "next/image";
import Link from "next/link";
import CartButton from "@/components/CartButton";
import MobileNav from "@/components/MobileNav";
import { products } from "@/data/products";

/** Menu derivado do catálogo — categoria nova entra aqui sozinha */
const navLinks = [
  ...products.map((product) => ({
    label: product.tabLabel,
    href: `/${product.anchor}`,
  })),
  { label: "Sobre", href: "#sobre" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-symbol.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading text-xl font-bold tracking-wide">
            Stylos
          </span>
        </Link>

        <nav aria-label="Categorias" className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-silver-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <CartButton />
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}
