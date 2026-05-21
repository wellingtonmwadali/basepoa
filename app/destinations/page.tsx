import Image from "next/image";
import type { Metadata } from "next";
import DestinationsGrid from "@/components/DestinationsGrid";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations near Tigoni | Hidden Gems",
  description: "Explore spas, golf clubs, outdoor adventures and more around the Tigoni highlands.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85"
          alt="Destinations near Tigoni"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 to-forest-950/75" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16">
          <p className="text-cream-300/70 text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Explore More
          </p>
          <h1
            className="text-white text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Other Destinations
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-forest-600 text-base max-w-xl mb-12 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Discover more hidden gems, relaxation spots, and leisure activities in and around Tigoni.
          </p>

          <DestinationsGrid destinations={destinations} />
        </div>
      </section>
    </>
  );
}
