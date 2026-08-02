"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toast, dismissToast, openCart } = useCart();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(dismissToast, 2200);
    return () => clearTimeout(timer);
  }, [toast, dismissToast]);

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-120 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-3 rounded-md bg-navy py-2.5 pr-2.5 pl-4 text-sm font-medium text-white shadow-lg"
    >
      {toast.message}
      <button
        type="button"
        onClick={() => {
          dismissToast();
          openCart();
        }}
        className="shrink-0 rounded bg-white/10 px-3 py-1.5 font-semibold transition-colors hover:bg-white/20"
      >
        Ver carrinho
      </button>
    </div>
  );
}
