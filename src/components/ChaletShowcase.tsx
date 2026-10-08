"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Bath,
  Maximize2,
  Users,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { rooms, waLink } from "@/lib/site";

export default function ChaletShowcase() {
  const chalet = rooms.find((r) => r.slug === "forest-chalet")!;
  const [activeImg, setActiveImg] = useState(0);

  const images = [
    {
      src: chalet.image,
      caption: "Exterior timber architecture suspended amidst the forest canopy",
    },
    {
      src: chalet.secondaryImage || "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1800&auto=format&fit=crop",
      caption: "Vaulted Scandinavian ceilings, raw wood finishes & panoramic glass walls",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800&auto=format&fit=crop",
      caption: "Private forest viewing deck with outdoor soaking tub & daybed",
    },
  ];

  return (
    <section id="chalets" className="relative py-28 md:py-36 lg:py-40 bg-forest-dark text-white overflow-hidden">
      {/* Decorative ambient subtle light behind */}
      <div className="absolute top-1/4 -right-48 h-96 w-96 rounded-full bg-forest-moss/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 h-96 w-96 rounded-full bg-forest-gold/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Crown Jewel Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-gold/40 bg-forest-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-forest-gold-soft mb-3">
              <Sparkles size={13} className="text-forest-gold" />
              Highest Room Category on Property
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-white leading-tight">
              The Signature <span className="italic-serif text-forest-gold font-normal">Forest Chalet</span>
            </h2>
          </div>
          <div className="sm:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Exclusive Tariff
            </p>
            <p className="font-display text-3xl sm:text-4xl text-forest-gold-soft font-normal">
              ₹{chalet.price.toLocaleString("en-IN")}{" "}
              <span className="text-sm font-sans text-white/60 font-light">/ night</span>
            </p>
            <p className="text-[11px] text-white/50">Includes artisanal forest breakfast & butler</p>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Image Gallery & Carousel View */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <Image
                src={images[activeImg].src}
                alt={images[activeImg].caption}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              
              {/* Caption Tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/90">
                <span className="glass-dark px-3 py-1.5 rounded-full font-light">
                  {images[activeImg].caption}
                </span>
                <span className="text-forest-gold font-medium">
                  0{activeImg + 1} / 0{images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="grid grid-cols-3 gap-3">
              {images.map((img, idx) => (
                <button
                  key={img.caption}
                  onClick={() => setActiveImg(idx)}
                  className={`relative aspect-[16/10] overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                    activeImg === idx
                      ? "border-forest-gold scale-[1.02] shadow-md"
                      : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Chalet Specifications, Luxury Perks & Reservation */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-forest-gold font-medium">
                Architectural Sanctuary
              </p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-light text-white leading-snug">
                {chalet.tagline}
              </h3>
              <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed font-light">
                {chalet.description}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-xs">
              <div className="border-r border-white/10 pr-2">
                <p className="text-[10px] uppercase tracking-wider text-white/50">Space</p>
                <p className="text-sm font-semibold text-white mt-1">{chalet.size}</p>
              </div>
              <div className="border-r border-white/10 px-2">
                <p className="text-[10px] uppercase tracking-wider text-white/50">Occupancy</p>
                <p className="text-sm font-semibold text-white mt-1">{chalet.sleeps}</p>
              </div>
              <div className="pl-2">
                <p className="text-[10px] uppercase tracking-wider text-white/50">View</p>
                <p className="text-sm font-semibold text-forest-gold mt-1">Canopy Vistas</p>
              </div>
            </div>

            {/* Exclusive Inclusions */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">
                Signature Chalet Inclusions
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {chalet.amenities.slice(0, 6).map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/85">
                    <CheckCircle2 size={14} className="text-forest-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Reservation CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={waLink("Hi! I would like to reserve the Forest Chalet (Highest Category) at Saya Forest Resort Alibaug. Please share available dates and special tariff.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2 rounded-full bg-forest-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest-dark shadow-lg transition-all duration-300 hover:bg-forest-gold-soft hover:shadow-xl cursor-pointer"
              >
                <span>Reserve Forest Chalet</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center rounded-full border border-white/25 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
              >
                Inquire Rates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
