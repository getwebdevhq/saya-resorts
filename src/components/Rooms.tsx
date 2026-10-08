"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, ChevronDown, Maximize2, Trees, Users } from "lucide-react";
import { rooms, waLink } from "@/lib/site";
import SectionHeader from "./SectionHeader";

const PREVIEW_COUNT = 4;

const filters = [
  { id: "all", label: `All ${rooms.length} stays` },
  ...rooms.map((r) => ({ id: r.slug, label: r.name })),
];

export default function Rooms() {
  const [filter, setFilter] = useState("all");
  const [expandedRoom, setExpandedRoom] = useState<string | null>(null);

  const displayedRooms = filter === "all" ? rooms : rooms.filter((r) => r.slug === filter);

  return (
    <section id="rooms" className="section bg-forest-bg">
      <div className="container-page">
        <SectionHeader
          eyebrow="Accommodations & sanctuaries"
          title={
            <>
              Five distinct stays, <em className="italic-serif">one unbroken forest view</em>
            </>
          }
        >
          Every category at Saya Forest Resort was designed to dissolve the boundary between
          interior and wilderness. Rates include daily artisanal breakfast.
        </SectionHeader>

        <div className="mt-10 flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter stays">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="chip"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-8 md:space-y-10">
          {displayedRooms.map((room) => {
            const number = rooms.findIndex((r) => r.slug === room.slug) + 1;
            const isCrown = Boolean(room.isCrownJewel);
            const isExpanded = expandedRoom === room.slug;
            const hiddenCount = room.amenities.length - PREVIEW_COUNT;
            // Alternate the photo side on desktop so the stack has rhythm
            const flip = number % 2 === 0;

            return (
              <article
                key={room.slug}
                id={`room-${room.slug}`}
                className={`group reveal scroll-mt-24 overflow-hidden rounded-frame border bg-white transition-shadow duration-500 ${
                  isCrown
                    ? "border-forest-gold/60 shadow-lift"
                    : "border-forest-border shadow-soft hover:shadow-lift"
                }`}
              >
                <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                  {/* Photo */}
                  <div
                    className={`relative min-h-[20rem] overflow-hidden sm:min-h-[26rem] lg:col-span-6 lg:min-h-[32rem] ${
                      flip ? "lg:order-last" : ""
                    }`}
                  >
                    <Image
                      src={room.image}
                      alt={`${room.name} at Saya Forest Resort`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent lg:hidden" />

                    <span
                      className={`tag absolute left-5 top-5 shadow-soft ${
                        isCrown ? "bg-forest-gold text-forest-dark" : "bg-white/90 text-forest-dark backdrop-blur-md"
                      }`}
                    >
                      {room.categoryTag}
                    </span>

                    <span className="absolute bottom-5 left-5 flex items-center gap-1.5 text-xs text-white/90 lg:hidden">
                      <Trees size={14} aria-hidden="true" />
                      {room.view}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-6 lg:p-12">
                    <div>
                      <div className="rule flex flex-col justify-between gap-4 border-b pb-6 sm:flex-row sm:items-start">
                        <div>
                          <p className="eyebrow">Stay 0{number}</p>
                          <h3 className="h-title mt-3">{room.name}</h3>
                        </div>
                        <div className="shrink-0 sm:text-right">
                          <p className="font-display text-3xl font-medium tracking-[-0.04em] text-forest-dark">
                            ₹{room.price.toLocaleString("en-IN")}
                          </p>
                          <p className="label mt-1">per night · breakfast incl.</p>
                        </div>
                      </div>

                      <p className="mt-6 text-base font-medium leading-snug text-forest-moss">
                        {room.tagline}
                      </p>
                      <p className="body-sm mt-3">{room.description}</p>

                      <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 rounded-card border border-forest-border bg-forest-card/60 p-5 sm:grid-cols-3">
                        <div>
                          <dt className="label flex items-center gap-1.5">
                            <Maximize2 size={12} className="text-forest-moss" aria-hidden="true" />
                            Area
                          </dt>
                          <dd className="mt-1.5 text-sm font-medium text-forest-dark">{room.size}</dd>
                        </div>
                        <div>
                          <dt className="label flex items-center gap-1.5">
                            <Users size={12} className="text-forest-moss" aria-hidden="true" />
                            Occupancy
                          </dt>
                          <dd className="mt-1.5 text-sm font-medium text-forest-dark">{room.sleeps}</dd>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <dt className="label flex items-center gap-1.5">
                            <Trees size={12} className="text-forest-moss" aria-hidden="true" />
                            View
                          </dt>
                          <dd className="mt-1.5 text-sm font-medium text-forest-dark">{room.view}</dd>
                        </div>
                      </dl>

                      <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
                        {(isExpanded ? room.amenities : room.amenities.slice(0, PREVIEW_COUNT)).map(
                          (amenity) => (
                            <li key={amenity} className="flex items-start gap-2.5 text-sm text-forest-muted">
                              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-forest-moss/10 text-forest-moss">
                                <Check size={11} strokeWidth={2.75} aria-hidden="true" />
                              </span>
                              <span>{amenity}</span>
                            </li>
                          ),
                        )}
                      </ul>

                      {hiddenCount > 0 && (
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => setExpandedRoom(isExpanded ? null : room.slug)}
                          className="link-arrow mt-4 cursor-pointer"
                        >
                          <span>{isExpanded ? "Show fewer inclusions" : `+ ${hiddenCount} more inclusions`}</span>
                          <ChevronDown
                            size={14}
                            aria-hidden="true"
                            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    <div className="rule mt-8 flex flex-col gap-3 border-t pt-6 sm:flex-row">
                      <a
                        href={waLink(
                          `Hi! I would like to check live availability and reserve the ${room.name} (${room.categoryTag}) at Saya Forest Resort Alibaug.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn flex-1 ${isCrown ? "btn-gold" : "btn-primary"}`}
                      >
                        <span>Check live rates</span>
                        <ArrowUpRight size={14} className="arrow-up-right" />
                      </a>
                      <a href="#contact" className="btn btn-outline">
                        Inquire details
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
