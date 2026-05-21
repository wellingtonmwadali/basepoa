"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { restaurants } from "@/lib/data";

export default function RestaurantsSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="animate-on-scroll py-20 px-6 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-forest-500 text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Dining & More
          </p>
          <h2
            className="text-forest-900 text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Restaurants in Tigoni
          </h2>
          <p className="text-forest-600 text-base max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Discover the best dining spots offering unique flavours, stunning ambience, and unforgettable culinary experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurants.slice(0, 3).map((r, i) => (
            <Link
              key={r.name}
              href={r.href}
              className="group block rounded-2xl overflow-hidden relative card-hover bg-white shadow-sm"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Bookmark */}
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-forest-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-forest-700 transition-colors z-10"
                  aria-label="Save"
                  onClick={(e) => e.preventDefault()}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-forest-900 text-xl mb-2 group-hover:text-forest-700 transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {r.name}
                </h3>
                <p className="text-forest-500 text-xs tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
                  {r.tags.join(" | ")}
                </p>
                <p className="text-forest-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  {r.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/restaurants"
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
