"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProduct, products, unitPriceFor } from "@/data/products";

export type CartItem = {
  /** productId + cor + tamanho — identifica a linha do carrinho */
  key: string;
  productId: string;
  colorLabel: string;
  size?: string;
  image: string;
  qty: number;
};

type Toast = { id: number; message: string };

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  toast: Toast | null;
  openCart: () => void;
  closeCart: () => void;
  addItem: (input: {
    productId: string;
    colorLabel: string;
    image: string;
    size?: string;
    /** Quantidade adicionada por clique — default 1 */
    qty?: number;
  }) => void;
  updateQty: (key: string, qty: number) => void;
  removeItem: (key: string) => void;
  dismissToast: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "stylos-cart";

/** Aceita só itens válidos do storage — descarta lixo e produtos removidos */
function isStoredItem(value: unknown): value is CartItem {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.key === "string" &&
    typeof item.productId === "string" &&
    typeof item.colorLabel === "string" &&
    typeof item.image === "string" &&
    (item.size === undefined || typeof item.size === "string") &&
    typeof item.qty === "number" &&
    Number.isInteger(item.qty) &&
    item.qty >= 1 &&
    products.some((p) => p.id === item.productId)
  );
}

export function lineUnitPrice(item: CartItem): number {
  return unitPriceFor(getProduct(item.productId), item.qty);
}

export function lineSubtotal(item: CartItem): number {
  return lineUnitPrice(item) * item.qty;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  // Estado inicial sempre vazio (SSR) — o storage entra depois da hidratação,
  // e só a partir daí o carrinho passa a ser salvo (evita gravar [] por cima)
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const restored = parsed.filter(isStoredItem);
          if (restored.length > 0) setItems(restored);
        }
      }
    } catch {
      // storage indisponível (modo privado, cota) — segue sem persistência
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage indisponível — segue sem persistência
    }
  }, [items, hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const dismissToast = useCallback(() => setToast(null), []);

  const addItem = useCallback(
    (input: {
      productId: string;
      colorLabel: string;
      image: string;
      size?: string;
      qty?: number;
    }) => {
      const { qty = 1, ...variant } = input;
      const added = Math.max(1, Math.floor(qty) || 1);
      const key = [input.productId, input.colorLabel, input.size ?? ""].join(
        "|",
      );
      setItems((current) => {
        const existing = current.find((item) => item.key === key);
        if (existing) {
          return current.map((item) =>
            item.key === key ? { ...item, qty: item.qty + added } : item,
          );
        }
        return [...current, { key, qty: added, ...variant }];
      });
      setToast({ id: Date.now(), message: "Adicionado ao carrinho" });
    },
    [],
  );

  const updateQty = useCallback((key: string, qty: number) => {
    const next = Math.max(1, Math.floor(qty) || 1);
    setItems((current) =>
      current.map((item) => (item.key === key ? { ...item, qty: next } : item)),
    );
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key));
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const total = items.reduce((sum, item) => sum + lineSubtotal(item), 0);
    return {
      items,
      count,
      total,
      isOpen,
      toast,
      openCart,
      closeCart,
      addItem,
      updateQty,
      removeItem,
      dismissToast,
    };
  }, [
    items,
    isOpen,
    toast,
    openCart,
    closeCart,
    addItem,
    updateQty,
    removeItem,
    dismissToast,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart precisa estar dentro de CartProvider");
  return context;
}
