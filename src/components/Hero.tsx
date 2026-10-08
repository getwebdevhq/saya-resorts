"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDownRight, Sparkles, Trees, Calendar, Users, BedDouble } from "lucide-react";
import { property, rooms, waLink } from "@/lib/site";

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState("forest-chalet");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2 Guests");

  function handleBookingInquiry(e: React.FormEvent) {
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
    <section id="home" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Editorial Top Title & Whitespace */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
        {/* Heritage & Revamp Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-forest-border bg-white/70 px-4 py-1.5 shadow-2xs backdrop-blur-sm mb-6">
          <Trees size={14} className="text-forest-moss" />
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-forest-muted">
            Formerly Giriraj Garden Resort • Reborn in Alibaug
          </span>
        </div>

        {/* Large Confident Editorial Headline */}
        <h1 className="font-display font-light text-5xl sm:text-7xl md:text-8xl lg:text-[6.75rem] tracking-[-0.02em] leading-[0.95] text-forest-dark">
          Where the forest <br className="hidden sm:inline" />
          <span className="italic-serif font-normal text-forest-moss">cradles quiet luxury</span>
        </h1>

        {/* Sub-headline with generous breathing space */}
        <p className="mx-auto mt-7 max-w-2xl text-base md:text-lg text-forest-muted leading-relaxed font-light">
          A tranquil transformation from garden retreat to Alibaug’s secluded forest sanctuary.
          Every room is designed with an immersive forest view, crowned by our signature{" "}
          <a href="#chalets" className="font-medium text-forest-dark underline decoration-forest-gold decoration-1 underline-offset-4 hover:text-forest-moss">
            Forest Chalets
          </a>.
        </p>
      </div>

      {/* Hero Visual Showcase with Rounded Luxury Framing */}
      <div className="mx-auto mt-12 max-w-7xl px-6 md:px-12">
        <div className="relative h-[60vh] min-h-[440px] max-h-[680px] w-full overflow-hidden rounded-[2rem] md:rounded-[2.75rem] shadow-xl border border-forest-border/80">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2200&auto=format&fit=crop"
            alt="Saya Forest Resort Alibaug luxury pavilions surrounded by lush forest canopy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent" />

          {/* Floating Pill Highlights */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 flex flex-wrap gap-2">
            <span className="glass-dark flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs tracking-wider uppercase text-white/95">
              <Sparkles size={12} className="text-forest-gold" />
              100% Forest Facing Rooms
            </span>
            <span className="hidden sm:inline-flex glass-dark items-center rounded-full px-3.5 py-1.5 text-xs tracking-wider uppercase text-white/80">
              15 Mins from Mandwa Jetty
            </span>
          </div>

          {/* Bottom Overlay Info on Hero */}
          <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-xl text-white">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-forest-gold-soft/90">
                Signature Stay
              </p>
              <h2 className="mt-1 font-display text-2xl md:text-4xl text-white font-light">
                The Forest Chalet Experience
              </h2>
              <p className="mt-1 text-xs md:text-sm text-white/80 font-light line-clamp-2">
                Elevated among ancient canopies with floor-to-ceiling glass and private timber sundecks.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#chalets"
                className="rounded-full bg-forest-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-dark transition-all hover:bg-forest-gold-soft hover:shadow-lg"
              >
                Explore Chalet
              </a>
              <a
                href="#rooms"
                className="glass-badge rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-dark transition-all hover:bg-white"
              >
                View 5 Categories
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Availability & WhatsApp Quick Reserve Strip */}
      <div className="mx-auto -mt-6 sm:-mt-8 max-w-5xl px-6 md:px-12 relative z-20">
        <form
          onSubmit={handleBookingInquiry}
          className="rounded-2xl md:rounded-full border border-forest-border/80 bg-white p-4 md:p-3 shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-2"
        >
          {/* Room Category Selection */}
          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-forest-border-light">
            <BedDouble size={18} className="text-forest-moss shrink-0" />
            <div className="flex flex-col text-left w-full">
              <label className="text-[10px] uppercase font-semibold tracking-wider text-forest-muted">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-sm font-medium text-forest-dark outline-none cursor-pointer"
              >
                <option value="forest-chalet">Forest Chalet (Highest Category)</option>
                <option value="villa-4bhk">Villa 4BHK (Private Estate)</option>
                <option value="two-bed-suite">Two Bed Suite (2 BHK)</option>
                <option value="one-bed-suite">One Bed Suite (1 BHK)</option>
                <option value="deluxe-room">Deluxe Room (Forest View)</option>
              </select>
            </div>
          </div>

          {/* Dates Input */}
          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-forest-border-light">
            <Calendar size={18} className="text-forest-moss shrink-0" />
            <div className="flex flex-col text-left w-full">
              <label className="text-[10px] uppercase font-semibold tracking-wider text-forest-muted">
                Preferred Dates
              </label>
              <input
                type="text"
                placeholder="e.g. This Weekend / Nov 14-16"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="bg-transparent text-sm text-forest-dark placeholder:text-forest-light outline-none"
              />
            </div>
          </div>

          {/* Guests Input */}
          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-forest-border-light">
            <Users size={18} className="text-forest-moss shrink-0" />
            <div className="flex flex-col text-left w-full">
              <label className="text-[10px] uppercase font-semibold tracking-wider text-forest-muted">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent text-sm font-medium text-forest-dark outline-none cursor-pointer"
              >
                <option value="2 Guests">2 Guests (Couple)</option>
                <option value="4-5 Guests">4–5 Guests (Family)</option>
                <option value="6-10 Guests">6–10 Guests (Villa Group)</option>
                <option value="1 Guest">1 Guest (Solo Retreat)</option>
              </select>
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 rounded-xl md:rounded-full bg-forest-green px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest-bg shadow-sm transition-all hover:bg-forest-dark hover:shadow-md cursor-pointer shrink-0"
          >
            <span>Live Availability</span>
            <ArrowDownRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
