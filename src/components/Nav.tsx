"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";
import { nav, property, waLink } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav border-b border-forest-border/60 py-3.5 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Brand identity */}
        <a href="#home" className="group flex flex-col items-start text-left">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-normal tracking-wide text-forest-dark group-hover:text-forest-moss transition-colors">
              SAYA
            </span>
            <span className="hidden sm:inline-block font-sans text-[10px] uppercase tracking-[0.28em] text-forest-gold px-2 py-0.5 rounded-full border border-forest-gold/30 bg-forest-gold-soft/50">
              Forest Resort
            </span>
          </div>
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-forest-muted -mt-0.5">
            Alibaug
          </span>
        </a>

        {/* Desktop Nav links with generous spacing */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-forest-muted transition-colors hover:text-forest-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={waLink("Hi! I would like to check room rates and availability at Saya Forest Resort, Alibaug.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-forest-green px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-forest-bg shadow-sm transition-all duration-300 hover:bg-forest-dark hover:shadow-md"
          >
            <span>Reserve Stay</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          aria-label="Toggle Navigation Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-border bg-white/80 p-2 text-forest-dark transition-colors hover:bg-forest-card lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-forest-border bg-forest-bg/98 px-6 pb-8 pt-4 shadow-xl lg:hidden">
          <div className="mb-4 pb-3 border-b border-forest-border-light flex items-center justify-between text-xs text-forest-muted">
            <span className="flex items-center gap-1.5">
              <Compass size={14} className="text-forest-gold" />
              Formerly Giriraj Garden Resort
            </span>
            <span className="text-[11px] font-semibold text-forest-gold">Alibaug</span>
          </div>
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-display text-forest-dark transition-colors hover:bg-forest-card"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink("Hi! I would like to check room rates and availability at Saya Forest Resort, Alibaug.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-forest-green py-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest-bg shadow-md"
          >
            <span>Reserve on WhatsApp</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
