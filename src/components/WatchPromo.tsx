import Link from "next/link";
import { formatPrice, getProduct } from "@/data/products";

/** Faixa de destaque do produto âncora (relógio) — o único com preço por volume */
export default function WatchPromo() {
  const relogio = getProduct("relogio");
  const tiers = relogio.priceTiers ?? [];
  const best = tiers[tiers.length - 1];
  if (!best) return null;

  return (
    <section className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-silver">
            Pra revender
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold">
            Relógio a partir de {formatPrice(best.price)} a unidade
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Compre mais, pague menos — o desconto entra sozinho no carrinho:{" "}
            {tiers
              .map((tier) => `${tier.rangeLabel} por ${formatPrice(tier.price)}`)
              .join(" · ")}
            .
          </p>
        </div>

        <Link
          href="/relogios"
          className="flex h-11 shrink-0 items-center justify-center rounded-md bg-white px-6 font-semibold text-navy transition-opacity hover:opacity-90 md:self-center"
        >
          Ver relógios
        </Link>
      </div>
    </section>
  );
}
