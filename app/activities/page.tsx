import Image from "next/image";
import type { Metadata } from "next";
import ActivitiesGrid from "@/components/ActivitiesGrid";
import { activities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Activities in Tigoni | E-bike, Farm & Hiking Tours",
  description: "Book e-bike tours, farm walks, hiking adventures and custom experiences in the highlands of Tigoni, Kenya.",
};

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600&q=85"
          alt="Outdoor activities in Tigoni"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 to-forest-950/70 pointer-events-none" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16 pointer-events-none">
          <p className="text-cream-300/70 text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Things to do
          </p>
          <h1
            className="text-white text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Activities in Tigoni
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-forest-600 text-base max-w-xl mb-12 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Enjoy nature trails, tea tours, e-bike experiences, and scenic outdoor activities in the peaceful highlands of Tigoni.
          </p>

          <ActivitiesGrid activities={activities} />
        </div>
      </section>
    </>
  );
}
