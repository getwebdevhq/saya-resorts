import { MapPin, ArrowUpRight } from "lucide-react";
import { nearby, property } from "@/lib/site";

export default function Location() {
  return (
    <section id="location" className="border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
          Find Us
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          Easy to reach, <span className="italic-serif">worth the drive</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-12">
          <div className="overflow-hidden rounded-[1.75rem] border border-line md:col-span-3">
            <iframe
              src={property.mapsEmbedSrc}
              className="h-[360px] w-full sm:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAYA Resorts location map"
            />
          </div>

          <div className="md:col-span-2">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-amber" />
              <p className="text-ink-soft">{property.address}</p>
            </div>

            <a
              href={property.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-deep hover:underline"
            >
              Get directions
              <ArrowUpRight size={14} />
            </a>

            <div className="mt-8 divide-y divide-line border-t border-line">
              {nearby.map((place) => (
                <div
                  key={place.name}
                  className="flex items-center justify-between py-3.5"
                >
                  <span className="text-sm font-medium">{place.name}</span>
                  <span className="text-sm text-ink-soft">
                    {place.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
