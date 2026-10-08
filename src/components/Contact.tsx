"use client";

import { useState, type FormEvent } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
} from "lucide-react";
import { property, rooms, waLink } from "@/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("forest-chalet");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const chosenRoom = rooms.find((r) => r.slug === category);
    const roomTitle = chosenRoom ? `${chosenRoom.name} (${chosenRoom.categoryTag})` : category;

    const messageLines = [
      `🌿 *Stay Inquiry — Saya Forest Resort, Alibaug*`,
      name && `• Guest Name: ${name}`,
      phone && `• Contact: ${phone}`,
      `• Desired Room: ${roomTitle}`,
      dates && `• Dates: ${dates}`,
      guests && `• Guests: ${guests}`,
      notes && `• Special Requests: ${notes}`,
      ``,
      `Please confirm live availability and current tariff.`,
    ].filter(Boolean);

    window.open(waLink(messageLines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 lg:py-40 bg-forest-bg border-t border-forest-border/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Concierge & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-forest-gold" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-moss">
                  Direct Reservations
                </p>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-light text-forest-dark leading-[1.08]">
                Begin your journey <br />
                <span className="italic-serif text-forest-moss font-normal">
                  into the trees
                </span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-forest-muted leading-relaxed font-light">
                Direct bookings enjoy our guaranteed best tariff, complimentary breakfast, flexible cancellation assistance, and personalized chalet concierge support.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-4 pt-2">
              <a
                href={waLink("Hi Saya Forest Resort! I would like to inquire about room availability.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-forest-border bg-white p-5 transition-all hover:border-forest-moss hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-card text-forest-moss">
                    <MessageCircle size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-muted">
                      WhatsApp Concierge
                    </p>
                    <p className="text-sm font-medium text-forest-dark">
                      Instant Availability &amp; Photos
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-forest-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={`tel:${property.phone.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between rounded-2xl border border-forest-border bg-white p-5 transition-all hover:border-forest-moss hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-card text-forest-moss">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-muted">
                      Direct Front Desk
                    </p>
                    <p className="text-sm font-medium text-forest-dark">
                      {property.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-forest-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={`mailto:${property.email}`}
                className="group flex items-center justify-between rounded-2xl border border-forest-border bg-white p-5 transition-all hover:border-forest-moss hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-card text-forest-moss">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-muted">
                      Email Inquiries
                    </p>
                    <p className="text-sm font-medium text-forest-dark">
                      {property.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-forest-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Direct Booking Guarantee */}
            <div className="flex items-center gap-3 text-xs text-forest-muted pt-2">
              <ShieldCheck size={16} className="text-forest-gold shrink-0" />
              <span>Zero booking commissions • Direct confirmation with property management</span>
            </div>
          </div>

          {/* Right Column: Editorial Reservation Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2.25rem] border border-forest-border bg-white p-8 sm:p-12 shadow-xl"
            >
              <div className="pb-6 border-b border-forest-border flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-light text-forest-dark">
                    Reserve Your Stay
                  </h3>
                  <p className="text-xs text-forest-muted font-light mt-1">
                    Fill out your preferences and receive an instant quote on WhatsApp
                  </p>
                </div>
                <span className="hidden sm:inline-block font-sans text-[10px] uppercase tracking-widest text-forest-gold px-3 py-1 rounded-full border border-forest-gold/30 bg-forest-gold-soft/40">
                  Priority Response
                </span>
              </div>

              <div className="mt-8 space-y-6">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-semibold tracking-wider text-forest-dark">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-forest-border bg-forest-bg px-4 py-3 text-sm text-forest-dark placeholder:text-forest-light outline-none focus:border-forest-moss focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-semibold tracking-wider text-forest-dark">
                      Contact / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98200 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-forest-border bg-forest-bg px-4 py-3 text-sm text-forest-dark placeholder:text-forest-light outline-none focus:border-forest-moss focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Room Category Selection */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-semibold tracking-wider text-forest-dark flex items-center justify-between">
                    <span>Desired Accommodation Category</span>
                    <span className="text-[10px] text-forest-gold font-normal lowercase">5 categories available</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-forest-border bg-forest-bg px-4 py-3 text-sm font-medium text-forest-dark outline-none focus:border-forest-moss focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="forest-chalet">
                      🌲 Forest Chalet — Crown Jewel (Highest Category)
                    </option>
                    <option value="villa-4bhk">
                      🏡 Villa 4BHK — Grand Private Forest Estate
                    </option>
                    <option value="two-bed-suite">
                      🛋️ Two Bed Suite — 2 BHK Family Forest Haven
                    </option>
                    <option value="one-bed-suite">
                      🌿 One Bed Suite — 1 BHK Boutique Forest Suite
                    </option>
                    <option value="deluxe-room">
                      🛏️ Deluxe Room — Serene Forest View Deluxe
                    </option>
                  </select>
                </div>

                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-semibold tracking-wider text-forest-dark">
                      Preferred Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 18th to 20th November"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="w-full rounded-xl border border-forest-border bg-forest-bg px-4 py-3 text-sm text-forest-dark placeholder:text-forest-light outline-none focus:border-forest-moss focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-semibold tracking-wider text-forest-dark">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full rounded-xl border border-forest-border bg-forest-bg px-4 py-3 text-sm font-medium text-forest-dark outline-none focus:border-forest-moss focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="1 Guest">1 Guest (Solo)</option>
                      <option value="2 Guests">2 Guests (Couple)</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4-5 Guests">4–5 Guests (Family)</option>
                      <option value="6-10 Guests">6–10 Guests (Villa Party)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-semibold tracking-wider text-forest-dark">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Mandwa ferry transfer, anniversary setup, private forest dinner..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full resize-none rounded-xl border border-forest-border bg-forest-bg px-4 py-3 text-sm text-forest-dark placeholder:text-forest-light outline-none focus:border-forest-moss focus:bg-white transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-forest-green py-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest-bg shadow-md transition-all duration-300 hover:bg-forest-dark hover:shadow-lg cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
