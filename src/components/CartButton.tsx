"use client";

import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      aria-label={`Abrir carrinho${count > 0 ? ` (${count} ${count === 1 ? "item" : "itens"})` : ""}`}
      onClick={openCart}
      className="relative rounded-md p-2 transition-colors hover:bg-white/10"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 7h12l1.5 13.5a1 1 0 0 1-1 1.1h-13a1 1 0 0 1-1-1.1L6 7Z" />
        <path d="M9 10V6a3 3 0 0 1 6 0v4" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-whatsapp px-1 text-xs font-semibold text-navy">
          {count}
        </span>
      )}
    </button>
  );
}
