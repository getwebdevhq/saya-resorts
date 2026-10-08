import { ArrowUpRight } from "lucide-react";
import { nav, property, rooms, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-forest-dark pb-10 pt-24 text-white">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-white">
                Saya
              </span>
              <span className="text-[0.625rem] font-semibold uppercase leading-none tracking-[0.22em] text-forest-gold">
                Forest Resort
              </span>
            </div>
            <p className="label">
              Alibaug, Maharashtra · {property.formerName}
            </p>
            <p className="body-sm max-w-sm">{property.taglineLong}</p>
            <a
              href={waLink("Hi! I would like to reserve a stay at Saya Forest Resort Alibaug.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm mt-2"
            >
              <span>Reserve on WhatsApp</span>
              <ArrowUpRight size={14} className="arrow-up-right" />
            </a>
          </div>

          {/* Stays */}
          <div className="lg:col-span-4">
            <p className="eyebrow">The {rooms.length} stays</p>
            <ul className="mt-5 space-y-1 text-sm">
              {rooms.map((r) => (
                <li key={r.slug}>
                  <a
                    href={`#room-${r.slug}`}
                    className="group flex items-center justify-between gap-4 py-1.5 text-white/80 transition-colors hover:text-forest-gold"
                  >
                    <span>{r.name}</span>
                    <span className="text-xs text-white/40 transition-colors group-hover:text-forest-gold">
                      {r.isCrownJewel ? "Highest category" : r.categoryTag}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sanctuary links + contact */}
          <div className="lg:col-span-3">
            <p className="eyebrow">Sanctuary</p>
            <ul className="mt-5 space-y-1 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-1.5 text-white/80 transition-colors hover:text-forest-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1 text-sm text-white/60">
              <p>{property.phone}</p>
              <p>{property.email}</p>
            </div>
          </div>
        </div>

        {/* Wordmark echo of the hero */}
        <div className="rule overflow-hidden border-t pt-10 select-none" aria-hidden="true">
          <span className="wordmark wordmark-footer">Saya</span>
        </div>

        <div className="rule mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {property.name}, Alibaug. All rights reserved.
          </p>
          <p className="text-center sm:text-right">{property.formerName}</p>
        </div>
      </div>
    </footer>
  );
}
