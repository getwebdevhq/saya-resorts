import Image from "next/image";
import { Users } from "lucide-react";
import { rooms, waLink } from "@/lib/site";

export default function Rooms() {
  return (
    <section id="rooms" className="border-t border-line bg-cream-soft/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Rooms &amp; Rates
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Choose your <span className="italic-serif">space to rest</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            Rates are per night and include breakfast unless noted. Tap a
            room to check live availability on WhatsApp — no booking fees.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {rooms.map((room) => (
            <div
              key={room.slug}
              id={`room-${room.slug}`}
              className="group overflow-hidden rounded-[1.75rem] border border-line bg-cream scroll-mt-28 transition-all"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur">
                  <Users size={13} />
                  Sleeps {room.sleeps}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl">{room.name}</h3>
                  <div className="shrink-0 text-right">
                    <p className="font-display text-xl font-semibold">
                      ₹{room.price.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-ink-soft">per night</p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {room.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.map((a) => (
                    <li
                      key={a}
                      className="rounded-full bg-cream-soft px-3 py-1 text-xs text-ink-soft"
                    >
                      {a}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(
                    `Hi! I'd like to check availability for the ${room.name} at SAYA Resorts.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-amber-deep sm:w-auto"
                >
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
