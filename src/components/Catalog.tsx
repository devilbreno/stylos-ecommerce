import Link from "next/link";
import { products } from "@/data/products";
import VariantCard from "@/components/VariantCard";

export default function Catalog({
  activeId = products[0].id,
}: {
  activeId?: string;
}) {
  const active = products.find((p) => p.id === activeId) ?? products[0];

  return (
    <section
      id="catalogo"
      className="mx-auto max-w-6xl scroll-mt-40 px-4 py-14 sm:px-6"
    >
      <h2 className="font-heading text-3xl font-bold">Catálogo</h2>
      <p className="mt-2 text-ink/70">
        Escolha a cor, o tamanho, e feche o pedido em um clique.
      </p>

      <nav
        aria-label="Categorias do catálogo"
        className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
      >
        {products.map((product) => {
          const selected = product.id === active.id;
          return (
            <Link
              key={product.id}
              href={`/${product.anchor}`}
              aria-current={selected ? "page" : undefined}
              className={`flex h-10 shrink-0 items-center rounded-full px-5 text-sm font-semibold transition-colors ${
                selected
                  ? "bg-navy text-white"
                  : "border border-ink/20 bg-white hover:border-navy"
              }`}
            >
              {product.tabLabel}
            </Link>
          );
        })}
      </nav>

      <p className="mt-5 text-sm text-ink/70">{active.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {active.colors.map((color) => (
          <VariantCard key={color.label} product={active} color={color} />
        ))}
      </div>
    </section>
  );
}
