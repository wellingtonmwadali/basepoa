"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Destination = {
  slug: string;
  name: string;
  tags: string[];
  image: string;
  href: string;
  description: string;
};

export default function DestinationsGrid({ destinations }: { destinations: Destination[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((dest, i) => (
        <motion.div
          key={dest.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link
            href={dest.href}
            className="group block rounded-2xl overflow-hidden relative card-hover h-full flex flex-col bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden shrink-0">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
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
            <div className="p-5 flex-grow flex flex-col justify-between">
              <p className="text-forest-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                {dest.description}
              </p>
              <div className="flex justify-end">
                <span className="text-[10px] text-forest-500 uppercase tracking-widest group-hover:text-forest-900 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Explore →
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
