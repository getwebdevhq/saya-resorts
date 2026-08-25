"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { property, waLink } from "@/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi! I'd like to enquire about a stay at SAYA Resorts.`,
      name && `Name: ${name}`,
      dates && `Dates: ${dates}`,
      guests && `Guests: ${guests}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="border-t border-line bg-cream-soft/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Book a Stay
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Let&apos;s plan your <span className="italic-serif">escape</span>
            </h2>
            <p className="mt-5 max-w-sm text-ink-soft">
              Send us your dates and we&apos;ll confirm availability and the
              best rate directly — no booking fees, no middlemen.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={waLink("Hi! I'd like to enquire about a stay at SAYA Resorts.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium hover:text-amber-deep"
              >
                <MessageCircle size={18} className="text-amber" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${property.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium hover:text-amber-deep"
              >
                <Phone size={18} className="text-amber" />
                {property.phone}
              </a>
              <a
                href={`mailto:${property.email}`}
                className="flex items-center gap-3 text-sm font-medium hover:text-amber-deep"
              >
                <Mail size={18} className="text-amber" />
                {property.email}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-line bg-cream p-6 sm:p-8 md:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-amber"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                Guests
                <input
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  type="text"
                  placeholder="e.g. 2 adults"
                  className="rounded-xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-amber"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
                Preferred dates
                <input
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  type="text"
                  placeholder="e.g. 12–14 Dec"
                  className="rounded-xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-amber"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
                Message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Anything else we should know?"
                  className="resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-amber"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-amber-deep sm:w-auto"
            >
              <MessageCircle size={16} />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
