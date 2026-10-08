import Image from "next/image";
import { ArrowUpRight, Compass, Sparkles, Trees, Eye } from "lucide-react";
import { property, quickStats, waLink } from "@/lib/site";

export default function Story() {
  return (
    <section id="story" className="relative py-28 md:py-36 lg:py-40 bg-forest-bg border-t border-forest-border/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Subtle eyebrow badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-forest-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-moss">
            The Transformation Story
          </span>
        </div>

        {/* Editorial Heading with large typography and whitespace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-forest-dark leading-[1.05]">
              Reborn from the roots of{" "}
              <span className="italic-serif text-forest-moss font-normal">
                Giriraj Garden Resort
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-forest-muted text-base sm:text-lg leading-relaxed font-light">
              Acquired and thoughtfully reimagined by its new owners, the historic Giriraj Garden Resort
              has been completely transformed into <strong>Saya Forest Resort, Alibaug</strong>.
              We stepped away from generic landscaping to embrace wild botanical tranquility.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-forest-dark">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-card text-forest-moss border border-forest-border">
                <Eye size={15} />
              </span>
              <span>Every single room frames uninterrupted forest vistas.</span>
            </div>
          </div>
        </div>

        {/* Two-Column Editorial Image & Text Feature */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Visual Frame */}
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-forest-border">
              <Image
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop"
                alt="Saya Forest Resort Alibaug tranquil forest trees and pathways"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex items-center justify-between text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-forest-gold-soft">
                    Sanctuary Concept
                  </p>
                  <p className="font-display text-xl sm:text-2xl font-light">
                    Where Nature Sets the Rhythm
                  </p>
                </div>
                <span className="glass-dark rounded-full px-3.5 py-1.5 text-xs text-forest-gold-soft">
                  Alibaug, Maharashtra
                </span>
              </div>
            </div>

            {/* Overlapping Decorative Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 max-w-xs rounded-2xl border border-forest-border bg-white p-6 shadow-xl backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-gold">
                The Crown Jewel
              </p>
              <p className="mt-2 text-sm text-forest-dark font-medium leading-snug">
                Private elevated Forest Chalets suspended in the trees — Alibaug’s highest category room.
              </p>
              <a
                href="#chalets"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest-moss hover:underline"
              >
                Discover Chalets <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Editorial Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-l-2 border-forest-gold/60 pl-6 space-y-2">
              <h3 className="font-display text-2xl md:text-3xl text-forest-dark font-normal">
                Forest View from Every Room
              </h3>
              <p className="text-sm text-forest-muted leading-relaxed font-light">
                Gone are enclosed box walls. Expansive picture windows and deep timber balconies
                in every room ensure morning sun dapples through swaying leaves directly into your living space.
              </p>
            </div>

            <div className="border-l-2 border-forest-border pl-6 space-y-2">
              <h3 className="font-display text-2xl md:text-3xl text-forest-dark font-normal">
                Five Curated Living Categories
              </h3>
              <p className="text-sm text-forest-muted leading-relaxed font-light">
                From cozy couples looking for restorative silence in our Deluxe Rooms, to sprawling multi-family celebrations in our 4BHK Villa, and the ultimate forest immersion in the standalone Forest Chalet.
              </p>
            </div>

            <div className="border-l-2 border-forest-border pl-6 space-y-2">
              <h3 className="font-display text-2xl md:text-3xl text-forest-dark font-normal">
                15 Minutes from Mumbai Speedboats
              </h3>
              <p className="text-sm text-forest-muted leading-relaxed font-light">
                Seamlessly step off the Mandwa ferry from Gateway of India into tranquil forest shadows.
                Far enough to leave Mumbai’s noise behind; close enough for an effortless weekend pause.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={waLink("Hi! I would like to learn more about the revamp of Saya Forest Resort and enquire for an upcoming stay.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-forest-dark px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest-dark transition-all duration-300 hover:bg-forest-dark hover:text-white"
              >
                <span>Plan Your Getaway</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Numerical Stats Bar */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-forest-border/80 pt-12">
          {quickStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-forest-dark">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-forest-muted font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
