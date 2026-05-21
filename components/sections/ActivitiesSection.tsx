"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { activities } from "@/lib/data";

export default function ActivitiesSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="animate-on-scroll py-20 px-6 bg-cream-50">
      {/* Decorative leaf */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-forest-500 text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Things to do
          </p>
          <h2
            className="text-forest-900 text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Activities in Tigoni
          </h2>
          <p className="text-forest-600 text-base max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Enjoy nature trails, tea tours, e-bike experiences, and scenic outdoor activities in the peaceful highlands of Tigoni.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activities.slice(0, 4).map((activity, i) => (
            <Link
              key={activity.title}
              href={activity.href}
              className="group block rounded-2xl overflow-hidden relative aspect-[3/4] card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3 text-cream-300/70" />
                  <span className="text-cream-300/70 text-xs tracking-wider uppercase" style={{ fontFamily: "var(--font-body)" }}>
                    {activity.category}
                  </span>
                </div>
                <h3
                  className="text-white text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {activity.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/50 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
                      START FROM
                    </span>
                    <p
                      className="text-white text-xl font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {activity.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Blue sky tint overlay for visual interest */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Link
            href="/activities"
            className="group flex items-center gap-3 text-forest-700 text-sm tracking-widest hover:text-forest-900 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            VIEW ALL ACTIVITIES
            <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
