import { nav, property, rooms, waLink } from "@/lib/site";
import { ArrowUpRight, Trees } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-forest-dark text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl sm:text-4xl font-normal text-white">
                SAYA
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-forest-gold px-2.5 py-0.5 rounded-full border border-forest-gold/30">
                Forest Resort
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/50">
              Alibaug, Maharashtra • {property.formerName}
            </p>
            <p className="max-w-sm text-sm text-white/70 leading-relaxed font-light pt-2">
              {property.taglineLong}
            </p>
            <div className="pt-2">
              <a
                href={waLink("Hi! I would like to reserve a stay at Saya Forest Resort Alibaug.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest-dark transition-all hover:bg-forest-gold-soft"
              >
                <span>Reserve on WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Room Categories Col */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-forest-gold font-semibold">
              The 5 Accommodations
            </p>
            <ul className="space-y-2 text-sm text-white/75 font-light">
              {rooms.map((r) => (
                <li key={r.slug}>
                  <a
                    href={`#room-${r.slug}`}
                    className="hover:text-forest-gold transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{r.name}</span>
                    <span className="text-[11px] text-white/40 group-hover:text-forest-gold">
                      {r.slug === "forest-chalet" ? "Highest Category" : r.categoryTag}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-forest-gold font-semibold">
              Sanctuary
            </p>
            <ul className="space-y-2 text-sm text-white/75 font-light">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-forest-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 space-y-1 text-xs text-white/60">
              <p>{property.phone}</p>
              <p>{property.email}</p>
            </div>
          </div>
        </div>

        {/* Big Editorial Watermark */}
        <div className="py-12 text-center select-none overflow-hidden">
          <p
            className="font-display font-light text-white/[0.07] tracking-[0.18em] uppercase transition-all"
            style={{ fontSize: "clamp(3rem, 11vw, 8.5rem)", lineHeight: 0.9 }}
          >
            SAYA RESORT
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {property.name}, Alibaug. All rights reserved.</p>
          <p className="text-center sm:text-right">{property.formerName} • Redesigned for Tranquility</p>
        </div>
      </div>
    </footer>
  );
}
