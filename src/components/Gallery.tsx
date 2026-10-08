"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/site";
import SectionHeader from "./SectionHeader";

const tags = ["All", ...Array.from(new Set(galleryImages.map((img) => img.tag)))];

// Six tiles fill a 4-column grid exactly (2x2, 2x1, 1x1, 1x1, 2x1, 2x1) with no
// gaps. Only used for the unfiltered view; filtered results use a plain grid.
const bentoSpans = [
  "sm:col-span-2 lg:row-span-2",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
  "sm:col-span-2",
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const showAll = filter === "All";
  const filtered = showAll ? galleryImages : galleryImages.filter((img) => img.tag === filter);

  return (
    <section id="gallery" className="section bg-forest-bg">
      <div className="container-page">
        <SectionHeader
          eyebrow="Visual impressions"
          title={
            <>
              Vistas through <em className="italic-serif">the living canopy</em>
            </>
          }
          aside={
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
              {tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  className="chip"
                  aria-pressed={filter === t}
                  onClick={() => setFilter(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          }
        />

        <div
          className={`mt-12 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[17rem] ${
            showAll ? "lg:grid-cols-4 lg:auto-rows-[15rem]" : "lg:grid-cols-2 lg:auto-rows-[22rem]"
          }`}
        >
          {filtered.map((img, i) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-card border border-forest-border bg-forest-card shadow-soft transition-shadow duration-500 hover:shadow-lift ${
                showAll ? bentoSpans[i] : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes={
                  showAll
                    ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    : "(min-width: 1024px) 50vw, 100vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-transparent transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100" />

              <span className="tag glass-dark absolute left-4 top-4 text-forest-gold-soft">
                {img.tag}
              </span>

              {/* Always visible on touch / small screens, revealed on hover on desktop */}
              <figcaption className="absolute inset-x-4 bottom-4 text-sm text-white transition-all duration-300 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
