"use client";

import { useState } from "react";
import Image from "next/image";
import {
  formatPrice,
  unitPriceFor,
  type ColorOption,
  type Product,
} from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function VariantCard({
  product,
  color,
}: {
  product: Product;
  color: ColorOption;
}) {
  const { addItem } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [sizeMissing, setSizeMissing] = useState(false);
  const [qty, setQty] = useState(1);
  const [slide, setSlide] = useState(0);

  const unit = unitPriceFor(product, qty);

  const setQtySafe = (next: number) =>
    setQty(Math.max(1, Math.floor(next) || 1));

  const handleAdd = () => {
    if (product.sizes && !size) {
      setSizeMissing(true);
      return;
    }
    addItem({
      productId: product.id,
      colorLabel: color.label,
      image: color.image,
      size: size ?? undefined,
      qty,
    });
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white">
      <div className="group relative aspect-square overflow-hidden bg-surface">
        {color.detailImage ? (
          <>
            {/* Touch: swipe horizontal entre foto principal e detalhe */}
            <div
              onScroll={(event) => {
                const el = event.currentTarget;
                setSlide(Math.round(el.scrollLeft / el.clientWidth));
              }}
              className="flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="relative h-full w-full shrink-0 snap-center">
                <Image
                  src={color.image}
                  alt={`${product.singularName} na cor ${color.label.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-full w-full shrink-0 snap-center">
                <Image
                  src={color.detailImage}
                  alt={`Foto de detalhe — ${product.singularName.toLowerCase()} na cor ${color.label.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Desktop: hover troca pra foto de detalhe — na v4 o hover: só
                se aplica em dispositivo com hover, então não vaza pro touch */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            >
              <Image
                src={color.detailImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Indicador de 2 fotos — só onde swipe é o gesto (sem hover) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5 [@media(hover:hover)]:hidden">
              {[0, 1].map((index) => (
                <span
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    slide === index ? "bg-navy" : "bg-navy/25"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <Image
            src={color.image}
            alt={`${product.singularName} na cor ${color.label.toLowerCase()}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-ink/50">
            {product.singularName}
          </p>
          <div className="mt-0.5 flex items-baseline justify-between gap-2">
            <h3 className="font-heading text-lg font-bold">{color.label}</h3>
            {!product.priceTiers && (
              <p className="text-sm font-semibold">{formatPrice(unit)}</p>
            )}
          </div>
        </div>

        {product.sizes && (
          <div>
            <p className="mb-1.5 text-xs text-ink/60">Tamanho</p>
            <ul className="flex flex-wrap gap-1.5">
              {product.sizes.map((option) => {
                const selected = option === size;
                return (
                  <li key={option}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => {
                        setSize(option);
                        setSizeMissing(false);
                      }}
                      className={`h-8 min-w-9 rounded-md border px-1.5 text-xs font-semibold transition-colors ${
                        selected
                          ? "border-navy bg-navy text-white"
                          : "border-ink/20 bg-white hover:border-navy"
                      }`}
                    >
                      {option}
                    </button>
                  </li>
                );
              })}
            </ul>
            {sizeMissing && (
              <p role="alert" className="mt-1.5 text-xs text-red-700">
                Escolha um tamanho antes de adicionar.
              </p>
            )}
          </div>
        )}

        {product.priceTiers && (
          <div>
            <ol className="grid grid-cols-3 overflow-hidden rounded-md border border-ink/15 text-center">
              {product.priceTiers.map((tier) => {
                const active = tier.price === unit;
                return (
                  <li
                    key={tier.rangeLabel}
                    aria-current={active ? "true" : undefined}
                    className={`flex flex-col gap-0.5 border-ink/15 py-2.5 not-first:border-l ${
                      active ? "bg-navy text-white" : "bg-white"
                    }`}
                  >
                    <span
                      className={`text-xs ${active ? "text-white/70" : "text-ink/60"}`}
                    >
                      {tier.rangeLabel}
                    </span>
                    <span className="text-sm font-bold">
                      {formatPrice(tier.price)}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        )}

        <div className="mt-auto pt-3">
          <div className="flex items-center rounded-md border border-ink/20">
            <button
              type="button"
              aria-label="Diminuir quantidade"
              onClick={() => setQtySafe(qty - 1)}
              className="h-9 w-9 text-sm font-semibold transition-colors hover:bg-ink/5 disabled:opacity-40"
              disabled={qty <= 1}
            >
              −
            </button>
            <input
              type="number"
              min={1}
              value={qty}
              aria-label="Quantidade"
              onChange={(event) => setQtySafe(Number(event.target.value))}
              className="h-9 min-w-0 flex-1 border-x border-ink/20 text-center text-sm font-medium [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() => setQtySafe(qty + 1)}
              className="h-9 w-9 text-sm font-semibold transition-colors hover:bg-ink/5"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-2.5 h-10 w-full rounded-md bg-navy text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </article>
  );
}
