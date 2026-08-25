import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { heroTags, property, waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-32 pb-6 sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Hero Title: SAYA */}
        <h1
          className="select-none text-center font-display font-semibold tracking-[0.14em] text-ink uppercase transition-all duration-300"
          style={{ fontSize: "clamp(3.25rem, 10.5vw, 8.25rem)", lineHeight: 0.95 }}
        >
          SAYA
        </h1>

        {/* Descriptor micro-copy grid */}
        <div className="mt-4 sm:mt-5 flex flex-col items-center justify-between gap-2.5 text-xs uppercase tracking-[0.22em] text-ink-soft sm:flex-row sm:px-6">
          <p className="text-center sm:text-left font-medium">
            Nestled in coconut groves
          </p>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-amber/80 sm:block" />
          <p className="text-center font-medium">
            A Coastal Retreat, Reimagined
          </p>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-amber/80 sm:block" />
          <p className="text-center sm:text-right font-medium">
            Space to unwind
          </p>
        </div>
      </div>

      {/* Hero Image Frame */}
      <div className="mx-auto mt-6 max-w-7xl px-5 sm:mt-8 sm:px-8">
        <div className="relative h-[55vh] min-h-[380px] max-h-[620px] w-full overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] shadow-2xl border border-line/40 group">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop"
            alt="SAYA Resorts coastal luxury pool villa property in Alibaug"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />

          {/* Floating Pill Badges (Navigable Rooms) */}
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6 z-10">
            <div className="flex flex-wrap gap-2">
              {heroTags.map((tag, i) => (
                <a
                  key={tag.label}
                  href={tag.href}
                  className={`rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-md transition-all sm:text-sm shadow-sm hover:scale-105 hover:bg-cream hover:text-ink active:scale-95 ${
                    i === 0
                      ? "bg-cream text-ink shadow-md"
                      : "bg-white/25 text-white hover:bg-cream hover:text-ink"
                  }`}
                >
                  {tag.label}
                </a>
              ))}
            </div>
            <a
              href="#location"
              className="flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/35 sm:text-sm"
            >
              <MapPin size={14} className="text-amber-300" />
              {property.location}
            </a>
          </div>
        </div>
      </div>

      {/* Tagline & WhatsApp CTA */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <p className="max-w-md font-display italic-serif text-2xl leading-snug text-ink-soft sm:text-3xl">
          {property.tagline}
        </p>
        <a
          href={waLink("Hi! I'd like to check availability at SAYA Resorts Alibaug.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-all shadow-md hover:bg-amber-deep hover:shadow-lg"
        >
          Check Availability on WhatsApp
          <ArrowDownRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}

