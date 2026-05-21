"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, Heart } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { accommodations as dataAccommodations } from "@/lib/data";

export default function AccommodationsSection() {
  const ref = useScrollAnimation();

  const accommodations = dataAccommodations.slice(0, 3).map(acc => ({
    ...acc,
    featured: acc.slug === "siri"
  }));

  return (
    <section ref={ref} className="animate-on-scroll py-20 px-6 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-forest-500 text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Where to stay
          </p>
          <h2
            className="text-forest-900 text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Accommodations in Tigoni
          </h2>
          <p className="text-forest-600 text-base max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Explore top-rated accommodations offering comfort, style, and exceptional hospitality for your next trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accommodations.map((acc, i) => (
            <Link
              key={acc.name}
              href={acc.href}
              className="group block rounded-2xl overflow-hidden relative card-hover bg-white shadow-sm"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={acc.image}
                  alt={acc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Action buttons */}
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  {acc.featured && (
                    <button
                      className="w-8 h-8 rounded-full bg-forest-800/80 backdrop-blur-sm flex items-center justify-center text-red-400"
                      aria-label="Favorited"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Heart className="w-3.5 h-3.5 fill-red-400" />
                    </button>
                  )}
                  <button
                    className="w-8 h-8 rounded-full bg-forest-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-forest-700 transition-colors"
                    aria-label="Save"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/10 transition-colors duration-300" />
              </div>

              <div className="p-5">
                <h3
                  className="text-forest-900 text-xl mb-2 group-hover:text-forest-700 transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {acc.name}
                </h3>
                <p className="text-forest-500 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
                  {acc.tags.join(" | ")}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/accommodations"
            className="group flex items-center gap-3 text-forest-700 text-sm tracking-widest hover:text-forest-900 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            VIEW MORE
            <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
