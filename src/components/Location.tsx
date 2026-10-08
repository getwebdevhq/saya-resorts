import { MapPin, ArrowUpRight, Compass, Ship, Car, Clock } from "lucide-react";
import { nearbyPlaces, property, waLink } from "@/lib/site";

export default function Location() {
  return (
    <section id="location" className="relative py-28 md:py-36 lg:py-40 bg-white border-t border-forest-border/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-forest-border/80">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-forest-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-moss">
                Location &amp; Connectivity
              </p>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-forest-dark leading-[1.05]">
              Minutes from the jetty, <br className="hidden sm:inline" />
              <span className="italic-serif text-forest-moss font-normal">
                worlds away in spirit
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-forest-muted text-sm sm:text-base leading-relaxed font-light">
              Situated in pristine forest surroundings near Kihim and Chondi in Alibaug.
              Easily accessible via direct speedboats and car ferries from Mumbai.
            </p>
          </div>
        </div>

        {/* Location Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Map Frame */}
          <div className="lg:col-span-7 overflow-hidden rounded-[2rem] border border-forest-border bg-forest-card shadow-sm">
            <div className="p-4 sm:p-5 border-b border-forest-border flex items-center justify-between bg-forest-bg">
              <div className="flex items-center gap-2 text-xs text-forest-dark font-medium">
                <MapPin size={15} className="text-forest-moss" />
                <span>{property.address}</span>
              </div>
              <a
                href={property.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-forest-moss hover:underline"
              >
                <span>Google Maps</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <iframe
              src={property.mapsEmbedSrc}
              className="h-[380px] sm:h-[460px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saya Forest Resort Alibaug Location Map"
            />
          </div>

          {/* Travel Distances & Concierge Assistance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-forest-border bg-forest-bg p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-forest-border">
                <h3 className="font-display text-2xl font-light text-forest-dark">
                  Nearby Landmarks
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-forest-muted">
                  Drive Times
                </span>
              </div>

              <div className="mt-4 divide-y divide-forest-border/60">
                {nearbyPlaces.map((place) => (
                  <div key={place.name} className="py-3.5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-forest-dark">{place.name}</p>
                      <p className="text-xs text-forest-muted font-light mt-0.5">{place.detail}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-forest-card px-2.5 py-1 text-xs font-semibold text-forest-moss border border-forest-border">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mandwa Ferry Assistance Box */}
            <div className="rounded-2xl border border-forest-gold/50 bg-forest-gold-soft/40 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest-gold-deep">
                <Ship size={15} />
                <span>Arriving from Mumbai?</span>
              </div>
              <p className="mt-2 text-sm text-forest-dark font-light leading-relaxed">
                Take the 20-minute speedboat from Gateway of India or the M2M Ro-Pax car ferry from Bhaucha Dhakka to Mandwa Jetty. Our concierge can arrange direct transfers to the resort.
              </p>
              <a
                href={waLink("Hi! I am traveling to Saya Forest Resort from Mumbai. Could you assist with speedboat bookings and Mandwa Jetty pickup?")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-forest-dark hover:text-forest-moss hover:underline"
              >
                <span>Request Ferry Transfer Assistance</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
