"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Users,
  Maximize2,
  Bed,
  Trees,
  ArrowUpRight,
  Sparkles,
  Check,
  ChevronDown,
} from "lucide-react";
import { rooms, waLink, RoomCategory } from "@/lib/site";

export default function Rooms() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedRoom, setExpandedRoom] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All 5 Categories" },
    { id: "forest-chalet", label: "Forest Chalet (Highest)" },
    { id: "villa-4bhk", label: "Villa 4BHK" },
    { id: "two-bed-suite", label: "Two Bed Suite" },
    { id: "one-bed-suite", label: "One Bed Suite" },
    { id: "deluxe-room", label: "Deluxe Room" },
  ];

  const displayedRooms =
    filter === "all" ? rooms : rooms.filter((r) => r.slug === filter);

  return (
    <section id="rooms" className="relative py-28 md:py-36 lg:py-40 bg-forest-bg border-t border-forest-border/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header with generous whitespace */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-forest-border/80">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-forest-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-moss">
                Accommodations &amp; Sanctuaries
              </p>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-forest-dark leading-[1.05]">
              Five distinct stays, <br className="hidden sm:inline" />
              <span className="italic-serif text-forest-moss font-normal">
                one unbroken forest view
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-forest-muted text-sm sm:text-base leading-relaxed font-light">
              Every category at Saya Forest Resort was designed to dissolve boundaries between
              interiors and the lush wilderness. Rates include daily artisanal breakfast.
            </p>
          </div>
        </div>

        {/* Category Filter Pills with generous breathing space */}
        <div className="mt-10 flex flex-wrap gap-2.5 items-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-forest-green text-white shadow-sm"
                  : "bg-white/80 border border-forest-border text-forest-muted hover:border-forest-dark hover:text-forest-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accommodation Cards (Spacious, Editorial Layout) */}
        <div className="mt-14 space-y-16 md:space-y-24">
          {displayedRooms.map((room, index) => {
            const isCrown = room.slug === "forest-chalet";
            const isExpanded = expandedRoom === room.slug;

            return (
              <article
                key={room.slug}
                id={`room-${room.slug}`}
                className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.75rem] border transition-all duration-500 scroll-mt-28 ${
                  isCrown
                    ? "border-forest-gold/60 bg-gradient-to-br from-white via-forest-card/50 to-white shadow-xl"
                    : "border-forest-border bg-white shadow-sm hover:shadow-lg"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Image Frame (Large Editorial Scale) */}
                  <div className="relative lg:col-span-6 min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent lg:hidden" />

                    {/* Badge top-left */}
                    <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-md ${
                          isCrown
                            ? "bg-forest-gold text-forest-dark font-bold"
                            : "bg-white/90 text-forest-dark"
                        }`}
                      >
                        {room.categoryTag}
                      </span>
                    </div>

                    {/* View tag bottom-left on mobile */}
                    <div className="absolute bottom-5 left-5 z-10 lg:hidden text-white">
                      <span className="flex items-center gap-1.5 text-xs font-light text-forest-gold-soft">
                        <Trees size={13} />
                        {room.view}
                      </span>
                    </div>
                  </div>

                  {/* Room Details & Pricing (Generous whitespace & typography) */}
                  <div className="lg:col-span-6 p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
                    <div>
                      {/* Sub-header & Pricing */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-forest-border-light">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest-gold">
                            Category 0{index + 1}
                          </p>
                          <h3 className="mt-1 font-display text-3xl sm:text-4xl md:text-5xl font-light text-forest-dark">
                            {room.name}
                          </h3>
                        </div>

                        <div className="sm:text-right shrink-0">
                          <p className="font-display text-2xl sm:text-3xl font-normal text-forest-dark">
                            ₹{room.price.toLocaleString("en-IN")}
                          </p>
                          <p className="text-[11px] text-forest-muted uppercase tracking-wider">
                            per night • breakfast included
                          </p>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="mt-5 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-forest-moss">
                        {room.tagline}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm sm:text-base text-forest-muted leading-relaxed font-light">
                        {room.description}
                      </p>

                      {/* Key Architectural Specs Grid */}
                      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-2xl bg-forest-card/60 p-4 border border-forest-border/60">
                        <div>
                          <span className="text-[10px] uppercase font-semibold tracking-wider text-forest-muted flex items-center gap-1">
                            <Maximize2 size={12} className="text-forest-moss" />
                            Area
                          </span>
                          <p className="mt-1 text-xs sm:text-sm font-medium text-forest-dark">
                            {room.size}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-semibold tracking-wider text-forest-muted flex items-center gap-1">
                            <Users size={12} className="text-forest-moss" />
                            Occupancy
                          </span>
                          <p className="mt-1 text-xs sm:text-sm font-medium text-forest-dark">
                            {room.sleeps}
                          </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <span className="text-[10px] uppercase font-semibold tracking-wider text-forest-muted flex items-center gap-1">
                            <Trees size={12} className="text-forest-moss" />
                            View
                          </span>
                          <p className="mt-1 text-xs sm:text-sm font-medium text-forest-moss truncate">
                            {room.view}
                          </p>
                        </div>
                      </div>

                      {/* Amenities checklist */}
                      <div className="mt-6">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-forest-muted font-light">
                          {(isExpanded ? room.amenities : room.amenities.slice(0, 4)).map(
                            (amenity) => (
                              <li key={amenity} className="flex items-center gap-2">
                                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-forest-moss/10 text-forest-moss shrink-0">
                                  <Check size={11} strokeWidth={2.5} />
                                </span>
                                <span>{amenity}</span>
                              </li>
                            )
                          )}
                        </ul>

                        {room.amenities.length > 4 && (
                          <button
                            onClick={() =>
                              setExpandedRoom(isExpanded ? null : room.slug)
                            }
                            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest-moss hover:underline cursor-pointer"
                          >
                            <span>{isExpanded ? "Show fewer features" : `+ ${room.amenities.length - 4} more inclusions`}</span>
                            <ChevronDown
                              size={13}
                              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Booking Actions */}
                    <div className="mt-8 pt-6 border-t border-forest-border-light flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={waLink(
                          `Hi! I would like to check live availability and reserve the ${room.name} (${room.categoryTag}) at Saya Forest Resort Alibaug.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex-1 flex items-center justify-center gap-2 rounded-full py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-sm hover:shadow-md ${
                          isCrown
                            ? "bg-forest-gold text-forest-dark hover:bg-forest-gold-deep hover:text-white"
                            : "bg-forest-green text-forest-bg hover:bg-forest-dark"
                        }`}
                      >
                        <span>Check Live Rates</span>
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>

                      <a
                        href="#contact"
                        className="flex items-center justify-center rounded-full border border-forest-border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest-dark transition-colors hover:bg-forest-card"
                      >
                        Inquire Details
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
