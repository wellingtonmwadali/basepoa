import Image from "next/image";
import type { Metadata } from "next";
import RestaurantsGrid from "@/components/RestaurantsGrid";
import { restaurants } from "@/lib/data";

export const metadata: Metadata = {
  title: "Restaurants in Tigoni | Dining Experiences",
  description: "Discover the best cafés, restaurants, and tasting experiences in the highlands of Tigoni.",
};

export default function RestaurantsPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85"
          alt="Dining in Tigoni"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 to-forest-950/75 pointer-events-none" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16 pointer-events-none">
          <p className="text-cream-300/70 text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Dining & Experiences
          </p>
          <h1
            className="text-white text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Restaurants in Tigoni
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-forest-600 text-base max-w-xl mb-12 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            From farm tasting rooms to colonial clubs, Tigoni's dining scene is as layered and flavourful as the highland soil it grows from.
          </p>

          <RestaurantsGrid restaurants={restaurants} />
        </div>
      </section>
    </>
  );
}
