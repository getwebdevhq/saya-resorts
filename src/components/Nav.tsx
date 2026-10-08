"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, property, waLink } from "@/lib/site";

const RESERVE_MESSAGE =
  "Hi! I would like to check room rates and availability at Saya Forest Resort, Alibaug.";

// "Contact" lives in the Reserve button on desktop, so the pill group stays short.
const desktopLinks = nav.filter((item) => item.href !== "#contact");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section crossing the middle of the viewport.
  useEffect(() => {
    const ids = ["home", ...nav.map((item) => item.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActive(entry.target.id === "home" ? "" : `#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color] duration-300 ${
        scrolled || open
          ? "glass-nav border-b border-forest-border py-3"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6">
        {/* Brand lockup */}
        <a
          href="#home"
          aria-label="Saya Forest Resort, Alibaug — back to top"
          className="flex items-baseline gap-2.5"
        >
          <span className="font-display text-[1.7rem] font-semibold leading-none tracking-[-0.05em] text-forest-dark">
            Saya
          </span>
          <span className="hidden text-[0.625rem] font-semibold uppercase leading-none tracking-[0.22em] text-forest-light sm:block">
            Forest Resort
          </span>
        </a>

        {/* Section pills */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-0.5 rounded-full border border-forest-border bg-white/75 p-1 backdrop-blur-md lg:flex"
        >
          {desktopLinks.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-colors ${
                  isActive
                    ? "bg-forest-dark text-white"
                    : "text-forest-muted hover:bg-forest-card hover:text-forest-dark"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink(RESERVE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            <span>Reserve a stay</span>
            <ArrowUpRight size={14} className="arrow-up-right" />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-border bg-white text-forest-dark transition-colors hover:bg-forest-card lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-forest-border bg-forest-bg shadow-lift lg:hidden"
        >
          <div className="container-page pb-8 pt-4">
            <p className="label pb-3">{property.formerName}</p>
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rule flex items-center justify-between border-t py-4 font-display text-2xl font-medium tracking-[-0.03em] text-forest-dark"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} className="text-forest-light" />
                </a>
              ))}
            </nav>
            <a
              href={waLink(RESERVE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block mt-6"
            >
              <span>Reserve on WhatsApp</span>
              <ArrowUpRight size={14} className="arrow-up-right" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
