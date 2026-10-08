"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle, Phone, ShieldCheck, type LucideIcon } from "lucide-react";
import { guestOptions, property, rooms, waLink } from "@/lib/site";

const contactOptions: { icon: LucideIcon; label: string; value: string; href: string; external?: boolean }[] = [
  {
    icon: MessageCircle,
    label: "WhatsApp concierge",
    value: "Instant availability & photos",
    href: waLink("Hi Saya Forest Resort! I would like to inquire about room availability."),
    external: true,
  },
  {
    icon: Phone,
    label: "Direct front desk",
    value: property.phone,
    href: `tel:${property.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email inquiries",
    value: property.email,
    href: `mailto:${property.email}`,
  },
];

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
    <section id="contact" className="section bg-forest-bg">
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Direct lines */}
          <div className="reveal space-y-9 lg:col-span-5">
            <div>
              <p className="eyebrow">Direct reservations</p>
              <h2 className="h-section mt-5">
                Begin your journey <em className="italic-serif">into the trees</em>
              </h2>
              <p className="lead mt-6">
                Direct bookings enjoy our guaranteed best tariff, complimentary breakfast, flexible
                cancellation assistance and personalised chalet concierge support.
              </p>
            </div>

            <ul className="space-y-3">
              {contactOptions.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="card group flex items-center justify-between gap-4 p-5 transition-all hover:border-forest-moss hover:shadow-lift"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-card text-forest-moss">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="label block">{label}</span>
                        <span className="mt-0.5 block text-sm font-semibold text-forest-dark">
                          {value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-forest-light transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <p className="flex items-center gap-3 text-sm text-forest-muted">
              <ShieldCheck size={18} className="shrink-0 text-forest-gold-ink" aria-hidden="true" />
              Zero booking commissions · Direct confirmation with property management
            </p>
          </div>

          {/* Reservation form */}
          <div className="reveal lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-frame border border-forest-border bg-white p-7 shadow-lift sm:p-12"
            >
              <div className="rule flex items-start justify-between gap-4 border-b pb-6">
                <div>
                  <h3 className="h-title">Reserve your stay</h3>
                  <p className="body-sm mt-2">
                    Share your preferences and receive an instant quote on WhatsApp.
                  </p>
                </div>
                <span className="tag hidden shrink-0 border border-forest-gold/40 bg-forest-gold-soft text-forest-gold-ink sm:inline-flex">
                  Priority response
                </span>
              </div>

              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="field-label">
                      Full name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Ananya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="field-label">
                      WhatsApp number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="e.g. +91 98200 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-category" className="field-label">
                    Accommodation
                  </label>
                  <select
                    id="contact-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="field"
                  >
                    {rooms.map((r) => (
                      <option key={r.slug} value={r.slug}>
                        {r.name} — {r.categoryTag}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-dates" className="field-label">
                      Preferred dates
                    </label>
                    <input
                      id="contact-dates"
                      type="text"
                      placeholder="e.g. 18–20 November"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-guests" className="field-label">
                      Guests
                    </label>
                    <select
                      id="contact-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="field"
                    >
                      {guestOptions.map((g) => (
                        <option key={g.value} value={g.value}>
                          {g.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-notes" className="field-label">
                    Special requests or questions
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={3}
                    placeholder="e.g. Mandwa ferry transfer, anniversary setup, private forest dinner…"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="field resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block h-14">
                  <MessageCircle size={17} aria-hidden="true" />
                  <span>Send inquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
