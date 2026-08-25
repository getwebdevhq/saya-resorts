import Image from "next/image";
import { stats, waLink } from "@/lib/site";

export default function About() {
  return (
    <section className="border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex items-start justify-between gap-6">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.15] tracking-tight sm:text-5xl">
            Stunning stays for moments that{" "}
            <span className="italic-serif">matter</span>, meant to help you{" "}
            <span className="italic-serif">slow down</span>.
          </h2>
          <p className="hidden shrink-0 text-xs uppercase tracking-[0.2em] text-ink-soft sm:block">
            About Us
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 items-center gap-10 md:mt-24 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Pool Villa
            </p>
            <p className="mt-4 max-w-sm text-ink-soft">
              Our signature stay has the basics covered and then some.
              Compact yet generous, quiet yet close to everything worth
              seeing — built for guests who want comfort without losing the
              outdoors.
            </p>
            <a
              href={waLink("Hi! I'd like to know more about the Pool Villa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-ink px-6 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream"
            >
              Ask about this room
            </a>
          </div>

          <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-[2rem] md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
              alt="SAYA Resorts Alibaug luxury pool villa"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4 md:mt-24">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-semibold sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
