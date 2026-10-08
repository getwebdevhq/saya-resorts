"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/site";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const tags = ["All", "Chalet", "Villa", "Suites", "Pool", "Dining"];

  const filtered =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.tag === filter);

  return (
    <section id="gallery" className="relative py-28 md:py-36 lg:py-40 bg-forest-bg border-t border-forest-border/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-forest-border/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-forest-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-moss">
                Visual Impressions
              </p>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-forest-dark leading-[1.05]">
              Vistas through <br className="hidden sm:inline" />
              <span className="italic-serif text-forest-moss font-normal">
                the living canopy
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all cursor-pointer ${
                  filter === t
                    ? "bg-forest-dark text-white"
                    : "bg-white border border-forest-border text-forest-muted hover:border-forest-dark hover:text-forest-dark"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-forest-border/80 bg-forest-card shadow-sm transition-all duration-500 hover:shadow-xl ${
                i === 0 || i === 3 ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[4/3] lg:aspect-[3/4]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-between text-white">
                <p className="text-xs font-light text-white/90 line-clamp-1">
                  {img.caption}
                </p>
                <span className="glass-dark px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider text-forest-gold-soft">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
