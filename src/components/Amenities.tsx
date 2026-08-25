import {
  Wifi,
  Utensils,
  Waves,
  Car,
  Flame,
  Mountain,
  Ship,
  CarFront,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { amenities } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  wifi: Wifi,
  utensils: Utensils,
  waves: Waves,
  car: Car,
  flame: Flame,
  mountain: Mountain,
  ship: Ship,
  "car-front": CarFront,
  plug: Plug,
};

export default function Amenities() {
  return (
    <section id="amenities" className="border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
          On the Property
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          Everything you need,{" "}
          <span className="italic-serif">nothing you don&apos;t</span>
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-4">
          {amenities.map((a) => {
            const Icon = icons[a.icon];
            return (
              <div
                key={a.label}
                className="flex flex-col items-start gap-4 bg-cream p-6 sm:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-soft">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <p className="text-sm font-medium leading-snug">{a.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
