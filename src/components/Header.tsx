import Image from "next/image";
import Link from "next/link";
import CartButton from "@/components/CartButton";

const navLinks = [
  { label: "Camisetas", href: "/camisetas" },
  { label: "Bucket", href: "/bucket" },
  { label: "Relógios", href: "/relogios" },
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
          <ul className="flex items-center gap-8">
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

        <CartButton />
      </div>

      <nav
        aria-label="Categorias"
        className="border-t border-white/10 md:hidden"
      >
        <ul className="flex items-center gap-6 overflow-x-auto px-4 py-2.5">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="text-sm font-medium text-white/80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
