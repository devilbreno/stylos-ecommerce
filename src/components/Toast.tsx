"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toast, dismissToast } = useCart();

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
      className="fixed bottom-6 left-1/2 z-110 -translate-x-1/2 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-white shadow-lg"
    >
      {toast.message}
    </div>
  );
}
