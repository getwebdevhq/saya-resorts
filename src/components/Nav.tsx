"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, property, waLink } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display italic-serif text-2xl tracking-tight">
          {property.name}
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-cream/70 px-1.5 py-1.5 backdrop-blur md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-ink hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Hi! I'd like to check availability at SAYA Resorts.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-amber-deep md:inline-block"
        >
          Check Availability
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-line p-2.5 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-cream px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-cream-soft"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink("Hi! I'd like to check availability at SAYA Resorts.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-cream"
          >
            Check Availability
          </a>
        </div>
      )}
    </header>
  );
}
