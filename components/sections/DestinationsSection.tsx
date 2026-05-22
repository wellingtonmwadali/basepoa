"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, Heart, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { destinations } from "@/lib/data";

export default function DestinationsSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="animate-on-scroll py-20 px-6 bg-white border-t border-forest-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-forest-500 text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Explore More
            </p>
            <h2
              className="text-forest-900 text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Other Destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="group flex items-center gap-3 text-forest-700 text-sm tracking-widest hover:text-forest-900 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            VIEW ALL
            <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.slice(0, 3).map((dest, i) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group block rounded-2xl overflow-hidden relative card-hover"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />

                {/* Buttons */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <button
                    className="w-8 h-8 rounded-full bg-cream-50/90 backdrop-blur-sm flex items-center justify-center"
                    aria-label="Favorited"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  </button>
                </div>
                <div className="absolute top-3 right-3">
                  <button
                    className="w-8 h-8 rounded-full bg-cream-50/90 backdrop-blur-sm flex items-center justify-center"
                    aria-label="Save"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Bookmark className="w-3.5 h-3.5 text-forest-800" />
                  </button>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="text-white text-xl mb-1 group-hover:text-cream-200 transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    {dest.name}
                  </h3>
                  <p className="text-white/60 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
                    {dest.tags.join(" | ")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/destinations"
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
