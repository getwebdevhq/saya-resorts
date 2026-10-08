"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, BedDouble, CalendarDays, Users } from "lucide-react";
import { guestOptions, photos, property, rooms, waLink } from "@/lib/site";

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState("forest-chalet");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2 Guests");

  function handleBookingInquiry(e: FormEvent) {
    e.preventDefault();
    const chosenRoom = rooms.find((r) => r.slug === selectedCategory);
    const roomName = chosenRoom ? chosenRoom.name : "Forest Chalet";
    const message = `Hi Saya Forest Resort! I would like to check availability and rates for:
• Room: ${roomName} (${chosenRoom?.categoryTag || ""})
• Preferred Dates: ${dates || "Flexible dates"}
• Number of Guests: ${guests}
Please share current tariff and photos.`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="home" className="relative px-3 pt-3 md:px-5 md:pt-5">
      {/* The sheet: a soft, grainy panel the wordmark and photo sit in */}
      <div className="grain relative overflow-hidden rounded-frame bg-forest-sheet">
        <div className="container-page pt-28 md:pt-32">
          {/* Three tiny captions, as in the editorial reference */}
          <div className="grid grid-cols-2 gap-4 text-xs leading-snug text-forest-dark sm:grid-cols-3 md:text-sm">
            <p>
              Formerly Giriraj
              <br />
              Garden Resort
            </p>
            <p className="hidden text-center sm:block">
              Every room opens
              <br />
              onto the forest
            </p>
            <p className="text-right">
              Quiet luxury,
              <br />
              under the canopy
            </p>
          </div>

          <h1 className="mt-6 md:mt-10">
            <span className="wordmark" aria-hidden="true">
              Saya
            </span>
            <span className="sr-only">Saya Forest Resort, Alibaug</span>
          </h1>
        </div>

        {/* Photo — its top edge fades so the wordmark seems to rise from the mist */}
        <div className="relative z-10 -mt-[clamp(2rem,8.5vw,8rem)] h-[26rem] sm:h-[32rem] lg:h-[40rem]">
          <Image
            src={photos.hero}
            alt="A timber and glass villa nestled among lush forest greenery"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="mist-top object-cover object-[50%_60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/10 to-transparent" />

          <div className="container-page absolute inset-x-0 bottom-16 flex flex-col gap-5 md:bottom-20 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-wrap gap-2.5">
              <a href="#chalets" className="btn btn-gold btn-sm">
                <span>Explore the chalet</span>
                <ArrowUpRight size={14} className="arrow-up-right" />
              </a>
              <a href="#rooms" className="btn btn-glass btn-sm">
                View all 5 stays
              </a>
            </div>
            <p className="text-xs font-medium text-white/90 md:text-right md:text-sm">
              {property.location}
              <span className="mx-2 text-white/40">·</span>
              15 min from Mandwa Jetty
            </p>
          </div>
        </div>
      </div>

      {/* Quick availability — overlaps the sheet's bottom edge */}
      <div className="relative z-20 mx-auto -mt-8 max-w-5xl px-3 md:px-6">
        <form
          onSubmit={handleBookingInquiry}
          aria-label="Check availability on WhatsApp"
          className="grid gap-1 rounded-card border border-forest-border bg-white p-2 shadow-lift md:grid-cols-[1.3fr_1.3fr_1fr_auto] md:items-center md:rounded-full md:p-2.5"
        >
          <div className="flex min-w-0 items-center gap-3 rounded-control px-4 py-2.5 md:border-r md:border-forest-border-light md:rounded-none">
            <BedDouble size={18} className="shrink-0 text-forest-moss" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <label htmlFor="hero-category" className="label block">
                Stay
              </label>
              <select
                id="hero-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full min-w-0 cursor-pointer truncate bg-transparent text-sm font-medium text-forest-dark outline-none"
              >
                {rooms.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-3 rounded-control px-4 py-2.5 md:border-r md:border-forest-border-light md:rounded-none">
            <CalendarDays size={18} className="shrink-0 text-forest-moss" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <label htmlFor="hero-dates" className="label block">
                Dates
              </label>
              <input
                id="hero-dates"
                type="text"
                placeholder="This weekend / 14–16 Nov"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="w-full min-w-0 bg-transparent text-sm font-medium text-forest-dark outline-none placeholder:font-normal placeholder:text-forest-light"
              />
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-3 rounded-control px-4 py-2.5">
            <Users size={18} className="shrink-0 text-forest-moss" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <label htmlFor="hero-guests" className="label block">
                Guests
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full min-w-0 cursor-pointer truncate bg-transparent text-sm font-medium text-forest-dark outline-none"
              >
                {guestOptions.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-1 md:mt-0">
            <span>Check availability</span>
            <ArrowDownRight size={15} className="arrow-down-right" />
          </button>
        </form>
      </div>
    </section>
  );
}
