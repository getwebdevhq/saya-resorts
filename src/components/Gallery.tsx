import Image from "next/image";
import { gallery } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-line bg-cream-soft/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
          Gallery
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          A closer <span className="italic-serif">look around</span>
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
          {gallery.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 aspect-[16/9] sm:col-span-1 sm:aspect-[3/4]" : "aspect-[3/4]"
              } ${i === 3 ? "sm:aspect-[3/4] md:col-span-1" : ""}`}
            >
              <Image
                src={src}
                alt="SAYA Resorts property photo"
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
