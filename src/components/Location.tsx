import { ArrowUpRight, MapPin, Ship } from "lucide-react";
import { nearbyPlaces, property, waLink } from "@/lib/site";
import SectionHeader from "./SectionHeader";

export default function Location() {
  return (
    <section id="location" className="section bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Location & connectivity"
          title={
            <>
              Minutes from the jetty, <em className="italic-serif">worlds away in spirit</em>
            </>
          }
        >
          Set in pristine forest near Kihim and Chondi in Alibaug, and easily reached by direct
          speedboats and car ferries from Mumbai.
        </SectionHeader>

        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Map */}
          <div className="reveal card overflow-hidden lg:col-span-7">
            <div className="rule flex flex-col gap-2 border-b bg-forest-bg p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <p className="flex items-center gap-2 text-sm font-medium text-forest-dark">
                <MapPin size={16} className="shrink-0 text-forest-moss" aria-hidden="true" />
                <span>{property.address}</span>
              </p>
              <a
                href={property.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow shrink-0"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <iframe
              src={property.mapsEmbedSrc}
              className="map-tint h-[380px] w-full sm:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saya Forest Resort, Alibaug — location map"
            />
          </div>

          {/* Distances + ferry help */}
          <div className="space-y-6 lg:col-span-5">
            <div className="reveal rounded-card border border-forest-border bg-forest-bg p-6 sm:p-8">
              <div className="rule flex items-baseline justify-between border-b pb-4">
                <h3 className="h-card">Nearby landmarks</h3>
                <p className="label">Drive times</p>
              </div>

              <ul className="divide-y divide-forest-border/70">
                {nearbyPlaces.map((place) => (
                  <li key={place.name} className="flex items-start justify-between gap-4 py-4">
                    <div>
                      <p className="text-sm font-semibold text-forest-dark">{place.name}</p>
                      <p className="body-sm mt-0.5">{place.detail}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-forest-border bg-white px-3 py-1 text-xs font-semibold tabular-nums text-forest-moss">
                      {place.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal rounded-card border border-forest-gold/50 bg-forest-gold-soft/60 p-6 sm:p-8">
              <p className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-forest-gold-ink">
                <Ship size={16} aria-hidden="true" />
                Arriving from Mumbai?
              </p>
              <p className="body-sm mt-3 text-forest-dark">
                Take the 20-minute speedboat from Gateway of India or the M2M Ro-Pax car ferry from
                Bhaucha Dhakka to Mandwa Jetty. Our concierge can arrange direct transfers to the
                resort.
              </p>
              <a
                href={waLink(
                  "Hi! I am traveling to Saya Forest Resort from Mumbai. Could you assist with speedboat bookings and Mandwa Jetty pickup?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-4"
              >
                <span>Request ferry transfer assistance</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
