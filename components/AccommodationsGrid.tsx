"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

type Accommodation = {
  name: string;
  tags: string[];
  image: string;
  href: string;
  description: string;
  priceFrom: string;
};

export default function AccommodationsGrid({ accommodations }: { accommodations: Accommodation[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [quickViewItem, setQuickViewItem] = useState<Accommodation | null>(null);

  const allTags = Array.from(new Set(accommodations.flatMap((a) => a.tags))).sort();
  const categories = ["All", ...allTags];

  const filtered = activeFilter === "All"
    ? accommodations
    : accommodations.filter((a) => a.tags.includes(activeFilter));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-widest transition-colors ${
              activeFilter === cat
                ? "bg-forest-900 text-white"
                : "bg-white text-forest-600 hover:bg-cream-200 border border-cream-200"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filtered.map((acc) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={acc.name}
            >
              <Link
                href={acc.href}
                className="group block rounded-2xl overflow-hidden bg-white shadow-sm card-hover h-full flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={acc.image}
                    alt={acc.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="text-forest-900 text-2xl mb-1 group-hover:text-forest-700 transition-colors"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                      >
                        {acc.name}
                      </h3>
                      <p className="text-forest-500 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
                        {acc.tags.join(" | ")}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-forest-400 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
                        FROM
                      </p>
                      <p
                        className="text-forest-900 text-lg"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                      >
                        {acc.priceFrom}
                      </p>
                    </div>
                  </div>
                  <p className="text-forest-600 text-sm leading-relaxed mb-4 flex-grow" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {acc.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-end">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setQuickViewItem(acc);
                      }}
                      className="text-[10px] uppercase tracking-widest text-forest-500 hover:text-forest-900 px-3 py-1.5 rounded-full border border-forest-200 hover:border-forest-400 hover:bg-forest-50 transition-all"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Quick Info
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Modal isOpen={!!quickViewItem} onClose={() => setQuickViewItem(null)}>
        {quickViewItem && (
          <div>
            <h2 className="text-3xl text-forest-900 mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>{quickViewItem.name}</h2>
            <p className="text-forest-400 text-[10px] mb-6 uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>{quickViewItem.tags.join(" | ")}</p>
            <p className="text-forest-700 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{quickViewItem.description}</p>
            
            <div className="grid grid-cols-1 gap-4 mb-8 bg-white p-5 rounded-xl border border-cream-200 shadow-sm" style={{ fontFamily: "var(--font-body)" }}>
              <div className="flex justify-between items-center">
                <span className="block text-[10px] text-forest-400 uppercase tracking-widest">Starting Price</span>
                <span className="text-forest-900 text-lg font-medium">{quickViewItem.priceFrom}</span>
              </div>
            </div>
            
            <Link 
              href={quickViewItem.href}
              className="block w-full py-3.5 bg-forest-900 hover:bg-forest-800 text-white text-center rounded-xl tracking-widest text-sm transition-colors font-medium shadow-md"
              style={{ fontFamily: "var(--font-body)" }}
            >
              VIEW DETAILS
            </Link>
          </div>
        )}
      </Modal>
    </div>
  );
}
