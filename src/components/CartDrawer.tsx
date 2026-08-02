"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  lineSubtotal,
  lineUnitPrice,
  useCart,
  type CartItem,
} from "@/context/CartContext";
import { formatPrice, getProduct } from "@/data/products";
import { whatsappNumber } from "@/lib/site";

function buildWhatsAppUrl(items: CartItem[], total: number): string {
  const lines = items.map((item) => {
    const product = getProduct(item.productId);
    const variation = [
      `Cor: ${item.colorLabel}`,
      item.size ? `Tam: ${item.size}` : null,
    ]
      .filter(Boolean)
      .join(" · ");
    const unit = lineUnitPrice(item);
    return `• ${product.name} (${variation}) — ${item.qty} un × ${formatPrice(unit)} = ${formatPrice(lineSubtotal(item))}`;
  });

  const message = [
    "Olá! Quero fazer um pedido pelo catálogo:",
    "",
    ...lines,
    "",
    `Total: ${formatPrice(total)}`,
    "",
    "Retirada na loja em Franca/SP.",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function CartLine({ item }: { item: CartItem }) {
  const { updateQty, removeItem } = useCart();
  const product = getProduct(item.productId);
  const unit = lineUnitPrice(item);

  return (
    <li className="flex gap-3 border-b border-ink/10 py-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-surface">
        <Image
          src={item.image}
          alt={`${product.name} na cor ${item.colorLabel.toLowerCase()}`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-semibold">{product.name}</p>
            <p className="text-xs text-ink/60">
              Cor: {item.colorLabel}
              {item.size && ` · Tam: ${item.size}`}
            </p>
          </div>
          <button
            type="button"
            aria-label="Remover item"
            onClick={() => removeItem(item.key)}
            className="rounded p-1 text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16m-10-3h4M6.5 7l1 13.4a1 1 0 0 0 1 .6h7a1 1 0 0 0 1-.6l1-13.4m-8 4v6m4-6v6" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center rounded-md border border-ink/20">
            <button
              type="button"
              aria-label="Diminuir quantidade"
              onClick={() => updateQty(item.key, item.qty - 1)}
              className="h-8 w-8 text-sm font-semibold transition-colors hover:bg-ink/5 disabled:opacity-40"
              disabled={item.qty <= 1}
            >
              −
            </button>
            <input
              type="number"
              min={1}
              value={item.qty}
              aria-label="Quantidade"
              onChange={(event) =>
                updateQty(item.key, Number(event.target.value))
              }
              className="h-8 w-12 border-x border-ink/20 text-center text-sm font-medium [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() => updateQty(item.key, item.qty + 1)}
              className="h-8 w-8 text-sm font-semibold transition-colors hover:bg-ink/5"
            >
              +
            </button>
          </div>
          <p className="text-sm">
            <span className="text-xs text-ink/60">
              {item.qty} × {formatPrice(unit)} ={" "}
            </span>
            <span className="font-semibold">
              {formatPrice(lineSubtotal(item))}
            </span>
          </p>
        </div>

        {product.priceTiers && (
          <p className="text-xs text-ink/60">
            Compre 10 ou mais e pague R$ 3,50. Compre 100 ou mais e pague
            R$ 3,00.
          </p>
        )}
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const { items, total, isOpen, closeCart } = useCart();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-100 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-navy/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="font-heading text-lg font-bold">Carrinho</h2>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar carrinho"
            onClick={closeCart}
            className="rounded-md p-2 transition-colors hover:bg-ink/5"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 5l14 14M19 5 5 19" />
            </svg>
          </button>
        </header>

        {items.length === 0 ? (
          <p className="flex-1 px-5 py-10 text-center text-ink/60">
            Seu carrinho tá vazio. Escolha uma cor pra começar.
          </p>
        ) : (
          <ul className="flex-1 overflow-y-auto px-5">
            {items.map((item) => (
              <CartLine key={item.key} item={item} />
            ))}
          </ul>
        )}

        <footer className="border-t border-ink/10 px-5 py-4">
          {items.length > 0 && (
            <p className="mb-3 flex items-baseline justify-between">
              <span className="text-sm text-ink/60">Total</span>
              <span className="text-xl font-bold">{formatPrice(total)}</span>
            </p>
          )}
          <a
            href={items.length > 0 ? buildWhatsAppUrl(items, total) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={items.length === 0}
            className={`flex h-12 items-center justify-center gap-2 rounded-md bg-whatsapp font-semibold text-navy transition-opacity ${
              items.length === 0
                ? "pointer-events-none opacity-40"
                : "hover:opacity-90"
            }`}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.2Z" />
            </svg>
            Finalizar no WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-ink/60">
            Retirada apenas na loja, em Franca/SP. Sem entrega.
          </p>
        </footer>
      </aside>
    </div>
  );
}
