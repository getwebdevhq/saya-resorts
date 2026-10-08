import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import { photos, quickStats, waLink } from "@/lib/site";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    title: "Forest view from every room",
    body: "Gone are enclosed box walls. Expansive picture windows and deep timber balconies in every room ensure morning sun dapples through swaying leaves directly into your living space.",
  },
  {
    title: "Five curated living categories",
    body: "From couples seeking restorative silence in our Deluxe Rooms, to multi-family celebrations in the 4BHK Villa, and the ultimate forest immersion in the standalone Forest Chalet.",
  },
  {
    title: "15 minutes from the Mumbai speedboats",
    body: "Step off the Mandwa ferry from Gateway of India into tranquil forest shadows. Far enough to leave the city’s noise behind; close enough for an effortless weekend pause.",
  },
];

/** "15 min" -> ["15", "min"], "100%" -> ["100", "%"], "4.9/5" -> ["4.9", "/5"] */
function splitStat(value: string): [string, string] {
  const match = value.match(/^([\d.,]+)\s*(.*)$/);
  return match ? [match[1], match[2]] : [value, ""];
}

export default function Story() {
  return (
    <section id="story" className="section bg-forest-bg">
      <div className="container-page">
        <SectionHeader
          eyebrow="The transformation story"
          title={
            <>
              Reborn from the roots of{" "}
              <em className="italic-serif">Giriraj Garden Resort</em>
            </>
          }
          aside={
            <div className="max-w-md space-y-6">
              <p className="lead">
                Acquired and thoughtfully reimagined by its new owners, the historic Giriraj
                Garden Resort has been transformed into{" "}
                <strong className="font-semibold text-forest-dark">
                  Saya Forest Resort, Alibaug
                </strong>
                . We stepped away from generic landscaping to embrace wild botanical tranquility.
              </p>
              <p className="flex items-center gap-3 text-sm font-medium text-forest-dark">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest-border bg-forest-card text-forest-moss">
                  <Eye size={16} aria-hidden="true" />
                </span>
                Every single room frames uninterrupted forest vistas.
              </p>
            </div>
          }
        />

        {/* Image + editorial highlights */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="reveal relative lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-frame shadow-lift">
              <Image
                src={photos.forestPath}
                alt="Sunlight filtering through misty forest trees along a path at Saya Forest Resort"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />

              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white md:inset-x-8 md:bottom-8">
                <div>
                  <p className="label text-forest-gold-soft">Sanctuary concept</p>
                  <p className="mt-1.5 font-display text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                    Where nature sets the rhythm
                  </p>
                </div>
                <span className="tag glass-dark hidden text-forest-gold-soft sm:inline-flex">
                  Alibaug, Maharashtra
                </span>
              </div>
            </div>

            {/* Overlapping note */}
            <div className="card absolute -bottom-8 -right-6 hidden max-w-xs p-6 shadow-lift sm:block xl:-right-8">
              <p className="eyebrow">The crown jewel</p>
              <p className="mt-3 text-sm font-medium leading-snug text-forest-dark">
                Private elevated Forest Chalets suspended in the trees — Alibaug’s highest category
                room.
              </p>
              <a href="#chalets" className="link-arrow mt-4">
                Discover the chalets <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ol className="space-y-9">
              {highlights.map((item, i) => (
                <li key={item.title} className="reveal grid grid-cols-[2.5rem_1fr] gap-x-4">
                  <span className="pt-1 font-display text-sm font-medium tabular-nums text-forest-gold-ink">
                    0{i + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="h-card">{item.title}</h3>
                    <p className="body-sm">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href={waLink(
                "Hi! I would like to learn more about the revamp of Saya Forest Resort and enquire for an upcoming stay.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-10"
            >
              <span>Plan your getaway</span>
              <ArrowUpRight size={14} className="arrow-up-right" />
            </a>
          </div>
        </div>

        {/* Numbers */}
        <dl className="mt-24 grid grid-cols-2 gap-y-10 md:mt-32 md:grid-cols-4">
          {quickStats.map((stat, i) => {
            const [num, unit] = splitStat(stat.value);
            return (
              // Term first in the DOM, number shown above it
              <div
                key={stat.label}
                className={`reveal rule flex flex-col-reverse ${i > 0 ? "md:border-l md:pl-8" : ""}`}
              >
                <dt className="mt-3 text-sm text-forest-muted">{stat.label}</dt>
                <dd className="numeral">
                  {num}
                  {unit && <small>{unit}</small>}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
