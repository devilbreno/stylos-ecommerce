"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type NavLink = { label: string; href: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="rounded-md p-2 transition-colors hover:bg-white/10"
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
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-100 ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-navy text-white shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="font-heading text-lg font-bold tracking-wide">
              Stylos
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 transition-colors hover:bg-white/10"
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

          <nav aria-label="Categorias">
            <ul className="px-2 py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
