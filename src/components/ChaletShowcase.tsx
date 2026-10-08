"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { photos, rooms, waLink } from "@/lib/site";
import SectionHeader from "./SectionHeader";

export default function ChaletShowcase() {
  const chalet = rooms.find((r) => r.slug === "forest-chalet")!;
  const [activeImg, setActiveImg] = useState(0);

  const images = [
    {
      src: chalet.image,
      caption: "A-frame timber architecture rising from the forest floor",
    },
    {
      src: chalet.secondaryImage ?? photos.timberInterior,
      caption: "Glowing at dusk, a sanctuary suspended in the jungle canopy",
    },
    {
      src: photos.timberInterior,
      caption: "Raw timber floors and panoramic glass framing the forest",
    },
  ];
  const current = images[activeImg];

  return (
    <section id="chalets" className="section on-dark bg-forest-dark text-white">
      {/* Ambient light behind the content */}
      <div className="pointer-events-none absolute -right-48 top-1/4 h-96 w-96 rounded-full bg-forest-moss/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-48 bottom-10 h-96 w-96 rounded-full bg-forest-gold/15 blur-3xl" />

      <div className="container-page relative">
        <SectionHeader
          eyebrow="Highest room category on property"
          title={
            <>
              The signature <em className="italic-serif">Forest Chalet</em>
            </>
          }
          aside={
            <div className="lg:text-right">
              <p className="label">Exclusive tariff</p>
              <p className="mt-2 font-display text-4xl font-medium tracking-[-0.04em] text-forest-gold-soft">
                ₹{chalet.price.toLocaleString("en-IN")}
                <span className="ml-2 text-sm font-normal tracking-normal text-white/60">
                  / night
                </span>
              </p>
              <p className="mt-1 text-xs text-white/60">
                Includes artisanal forest breakfast &amp; butler
              </p>
            </div>
          }
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 md:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Gallery */}
          <div className="reveal space-y-4 lg:col-span-7">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-frame border border-white/15 shadow-lift">
              <Image
                key={current.src}
                src={current.src}
                alt={current.caption}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />

              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4">
                <span className="tag glass-dark text-xs font-normal normal-case tracking-normal text-white/90">
                  {current.caption}
                </span>
                <span className="shrink-0 text-xs font-semibold tabular-nums text-forest-gold">
                  {String(activeImg + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {images.map((img, idx) => (
                <button
                  key={img.caption}
                  type="button"
                  onClick={() => setActiveImg(idx)}
                  aria-label={`Show photo ${idx + 1}: ${img.caption}`}
                  aria-pressed={activeImg === idx}
                  className={`relative aspect-[16/10] cursor-pointer overflow-hidden rounded-control border-2 transition-all ${
                    activeImg === idx
                      ? "border-forest-gold"
                      : "border-white/15 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt="" fill sizes="20vw" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-9 lg:col-span-5">
            <div className="reveal">
              <p className="eyebrow">Architectural sanctuary</p>
              <h3 className="h-card mt-4">{chalet.tagline}</h3>
              <p className="lead mt-4 text-[0.9375rem]">{chalet.description}</p>
            </div>

            <dl className="grid grid-cols-3 divide-x divide-white/10 rounded-card border border-white/15 bg-white/5 py-4">
              <div className="px-4">
                <dt className="label">Space</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">{chalet.size}</dd>
              </div>
              <div className="px-4">
                <dt className="label">Occupancy</dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">{chalet.sleeps}</dd>
              </div>
              <div className="px-4">
                <dt className="label">View</dt>
                <dd className="mt-1.5 text-sm font-semibold text-forest-gold">Canopy vistas</dd>
              </div>
            </dl>

            <div>
              <p className="label">Signature chalet inclusions</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {chalet.amenities.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-forest-gold"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Hi! I would like to reserve the Forest Chalet (Highest Category) at Saya Forest Resort Alibaug. Please share available dates and special tariff.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold flex-1"
              >
                <span>Reserve the Forest Chalet</span>
                <ArrowUpRight size={14} className="arrow-up-right" />
              </a>
              <a href="#contact" className="btn btn-outline-light">
                Inquire rates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
