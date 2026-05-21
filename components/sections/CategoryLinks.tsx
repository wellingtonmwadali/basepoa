"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const categories = [
  {
    label: "Activities",
    href: "/activities",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
    description: "E-bike tours, farm walks & hiking trails",
  },
  {
    label: "Accommodation",
    href: "/accommodations",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Cottages, cabins & luxury retreats",
  },
  {
    label: "Restaurants",
    href: "/restaurants",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    description: "Farm-to-table dining & highland cuisine",
  },
];

export default function CategoryLinks() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="animate-on-scroll bg-forest-900 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent group-hover:from-forest-950/70 transition-all duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white/60 text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-body)" }}>
                EXPLORE
              </p>
              <h3
                className="text-white text-2xl group-hover:text-cream-200 transition-colors"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {cat.label}
              </h3>
              <p className="text-white/50 text-sm mt-1 group-hover:text-white/70 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                {cat.description}
              </p>
            </div>

            {/* Corner arrow */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
              <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
