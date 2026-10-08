import Image from "next/image";
import {
  ArrowUpRight,
  Bell,
  Flame,
  Ship,
  ShieldCheck,
  Trees,
  Utensils,
  Waves,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { amenitiesList, experienceHighlights, waLink } from "@/lib/site";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, LucideIcon> = {
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
    <section id="experience" className="section bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="The forest experience"
          title={
            <>
              Life enveloped by <em className="italic-serif">verdant tranquility</em>
            </>
          }
        >
          From dawn birding walks to wood-fired coastal dining and starlit gatherings, every moment
          at Saya Forest Resort celebrates the outdoors.
        </SectionHeader>

        {/* Four experiences */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experienceHighlights.map((exp) => (
            <article
              key={exp.title}
              className="card reveal group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
                <span className="tag glass-dark absolute left-4 top-4 text-forest-gold-soft">
                  {exp.category}
                </span>
              </div>

              <div className="flex-1 p-6">
                <h3 className="h-card transition-colors group-hover:text-forest-moss">
                  {exp.title}
                </h3>
                <p className="body-sm mt-3">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Property inclusions */}
        <div className="mt-24 md:mt-32">
          <div className="rule mb-8 flex flex-col justify-between gap-2 border-b pb-6 sm:flex-row sm:items-end">
            <h3 className="h-card">Curated property inclusions</h3>
            <p className="label">Thoughtful comforts</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {amenitiesList.map((item) => {
              const Icon = iconMap[item.icon] ?? Trees;
              return (
                <div
                  key={item.name}
                  className="reveal rounded-card border border-forest-border bg-forest-card/50 p-6 transition-colors hover:border-forest-moss/40 hover:bg-forest-card"
                >
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-forest-border bg-white text-forest-moss shadow-soft">
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h4 className="h-sub text-base md:text-lg">{item.name}</h4>
                  <p className="body-sm mt-1.5">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dining band */}
        <div className="on-dark reveal relative mt-20 overflow-hidden rounded-frame bg-forest-green p-8 md:mt-28 md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-forest-gold/15 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow">Gastronomic sanctuary</p>
              <h3 className="h-title mt-4">
                Dining beneath ancient trees at{" "}
                <em className="italic-serif">The Forest Bistro</em>
              </h3>
              <p className="lead mt-4 text-[0.9375rem]">
                Seasonal Konkani catches, wood-fired coastal spices and freshly picked organic farm
                produce. Private romantic dinner setups in the forest are available on reservation.
              </p>
            </div>
            <a
              href={waLink(
                "Hi! I would like to inquire about dining and private meal arrangements at The Forest Bistro, Saya Forest Resort Alibaug.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold shrink-0"
            >
              <span>Inquire about dining</span>
              <ArrowUpRight size={14} className="arrow-up-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
