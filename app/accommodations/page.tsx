import Image from "next/image";
import type { Metadata } from "next";
import AccommodationsGrid from "@/components/AccommodationsGrid";
import { accommodations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Accommodations in Tigoni | Highland Stays",
  description: "Find the perfect highland stay in Tigoni — from cottages to luxury retreat cabins.",
};

export default function AccommodationsPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=85"
          alt="Accommodation in Tigoni"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 to-forest-950/75 pointer-events-none" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16 pointer-events-none">
          <p className="text-cream-300/70 text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Where to stay
          </p>
          <h1
            className="text-white text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Accommodations in Tigoni
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-forest-600 text-base max-w-xl mb-12 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Explore top-rated accommodations offering comfort, style, and exceptional hospitality for your next highland escape.
          </p>

          <AccommodationsGrid accommodations={accommodations} />
        </div>
      </section>
    </>
  );
}
