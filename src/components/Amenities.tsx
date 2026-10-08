import Image from "next/image";
import {
  Waves,
  Utensils,
  Wifi,
  Flame,
  Ship,
  Bell,
  Zap,
  ShieldCheck,
  Trees,
  ArrowUpRight,
} from "lucide-react";
import { amenitiesList, experienceHighlights, waLink } from "@/lib/site";

const iconMap: Record<string, React.ElementType> = {
  waves: Waves,
  utensils: Utensils,
  wifi: Wifi,
  flame: Flame,
  ship: Ship,
  bell: Bell,
  zap: Zap,
  "shield-check": ShieldCheck,
};

export default function Amenities() {
  return (
    <section id="experience" className="relative py-28 md:py-36 lg:py-40 bg-white border-t border-forest-border/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-forest-border/80">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-forest-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-moss">
                The Forest Experience
              </p>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-forest-dark leading-[1.05]">
              Life enveloped by <br className="hidden sm:inline" />
              <span className="italic-serif text-forest-moss font-normal">
                verdant tranquility
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-forest-muted text-sm sm:text-base leading-relaxed font-light">
              From dawn birding walks to wood-fired coastal dining and starlit gatherings,
              every moment at Saya Forest Resort celebrates the outdoors.
            </p>
          </div>
        </div>

        {/* 4 Feature Experiences Grid with large photo cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceHighlights.map((exp, idx) => (
            <div
              key={exp.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-forest-border bg-forest-bg transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 glass-dark rounded-full px-3 py-1 text-[10px] uppercase tracking-wider text-forest-gold-soft">
                  {exp.category}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-2xl font-light text-forest-dark group-hover:text-forest-moss transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-forest-muted leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Resort Comforts & Amenities Grid */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-light text-forest-dark">
              Curated Property Inclusions
            </h3>
            <span className="text-xs uppercase tracking-[0.2em] text-forest-muted">
              Thoughtful Comforts
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {amenitiesList.map((item) => {
              const Icon = iconMap[item.icon] || Trees;
              return (
                <div
                  key={item.name}
                  className="flex flex-col items-start p-6 rounded-2xl border border-forest-border/80 bg-forest-card/40 transition-all hover:bg-forest-card hover:border-forest-moss/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest-moss border border-forest-border/60 shadow-2xs mb-4">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h4 className="font-display text-lg font-normal text-forest-dark">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs text-forest-muted leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Forest Dining Highlight Banner */}
        <div className="mt-16 md:mt-24 rounded-[2rem] border border-forest-border bg-forest-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-forest-gold">
              Gastronomic Sanctuary
            </span>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl text-forest-dark font-light">
              Dining beneath ancient trees at <span className="italic-serif text-forest-moss">The Forest Bistro</span>
            </h3>
            <p className="mt-3 text-sm text-forest-muted font-light leading-relaxed">
              Featuring seasonal Konkani catches, wood-fired coastal spices, and freshly picked organic farm produce. Private romantic dinner setups in the forest available on reservation.
            </p>
          </div>
          <a
            href={waLink("Hi! I would like to inquire about dining and private meal arrangements at The Forest Bistro, Saya Forest Resort Alibaug.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-forest-green px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-bg shadow-sm transition-all hover:bg-forest-dark hover:shadow-md"
          >
            <span>Inquire Dining</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
