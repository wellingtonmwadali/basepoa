import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences in Tigoni | Activities & Dining",
  description: "Discover all the ways to experience the magic of Tigoni, from e-biking to farm-to-table dining.",
};

const categories = [
  {
    label: "Activities",
    href: "/activities",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
    description: "E-bike tours, farm walks & hiking trails",
  },
  {
    label: "Restaurants",
    href: "/restaurants",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    description: "Farm-to-table dining & highland cuisine",
  },
  {
    label: "Accommodations",
    href: "/accommodations",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Cottages, cabins & luxury retreats",
  },
  {
    label: "Destinations",
    href: "/destinations",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    description: "Spas, golf clubs & hidden gems",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&q=85"
          alt="Experiences in Tigoni"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest-950/60" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16 max-w-7xl mx-auto w-full">
          <p className="text-cream-300/70 text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Discover Tigoni
          </p>
          <h1
            className="text-white text-5xl md:text-7xl mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Experiences
          </h1>
          <p className="text-white/80 text-lg max-w-xl font-light" style={{ fontFamily: "var(--font-body)" }}>
            Whether you're looking for an adrenaline-pumping trail, a serene farm-to-table lunch, or a cozy highland retreat, find your perfect experience here.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] block shadow-sm border border-cream-200"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent group-hover:from-forest-950/80 transition-all duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/60 text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  EXPLORE
                </p>
                <h3
                  className="text-white text-3xl mb-2 group-hover:text-cream-200 transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {cat.label}
                </h3>
                <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors font-light" style={{ fontFamily: "var(--font-body)" }}>
                  {cat.description}
                </p>
              </div>
              
              {/* Corner arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                <svg className="w-5 h-5 text-white" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
