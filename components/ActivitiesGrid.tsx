"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

type Activity = {
  title: string;
  category: string;
  price: string;
  duration: string;
  groupSize: string;
  image: string;
  description: string;
  href: string;
};

export default function ActivitiesGrid({ activities }: { activities: Activity[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [quickViewItem, setQuickViewItem] = useState<Activity | null>(null);

  const categories = ["All", ...Array.from(new Set(activities.map((a) => a.category)))];

  const filteredActivities = activeFilter === "All" 
    ? activities 
    : activities.filter((a) => a.category === activeFilter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-colors ${
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

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredActivities.map((act) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={act.title}
            >
              <Link
                href={act.href}
                className="group h-full flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm card-hover"
              >
                <div className="relative w-full md:w-56 aspect-[4/3] md:aspect-auto shrink-0 overflow-hidden">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between w-full">
                  <div>
                    <p className="text-forest-400 text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-body)" }}>
                      {act.category.toUpperCase()}
                    </p>
                    <h3
                      className="text-forest-900 text-2xl mb-2 group-hover:text-forest-700 transition-colors"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      {act.title}
                    </h3>
                    <p className="text-forest-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                      {act.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-forest-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {act.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" /> {act.groupSize}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Tigoni
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-forest-400 text-[10px] tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
                        START FROM
                      </p>
                      <p
                        className="text-forest-900 text-xl"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                      >
                        {act.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setQuickViewItem(act);
                        }}
                        className="text-[10px] uppercase tracking-widest text-forest-500 hover:text-forest-900 px-3 py-1.5 rounded-full border border-forest-200 hover:border-forest-400 hover:bg-forest-50 transition-all"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Quick Info
                      </button>
                      <span className="text-xs text-forest-600 group-hover:text-forest-900 tracking-widest transition-colors font-medium" style={{ fontFamily: "var(--font-body)" }}>
                        BOOK →
                      </span>
                    </div>
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
            <h2 className="text-3xl text-forest-900 mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>{quickViewItem.title}</h2>
            <p className="text-forest-400 text-[10px] mb-6 uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>{quickViewItem.category}</p>
            <p className="text-forest-700 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{quickViewItem.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 bg-white p-5 rounded-xl border border-cream-200 shadow-sm" style={{ fontFamily: "var(--font-body)" }}>
              <div>
                <span className="block text-[10px] text-forest-400 uppercase tracking-widest mb-1.5">Duration</span>
                <span className="flex items-center gap-2 text-forest-800 text-sm"><Clock className="w-4 h-4" /> {quickViewItem.duration}</span>
              </div>
              <div>
                <span className="block text-[10px] text-forest-400 uppercase tracking-widest mb-1.5">Group Size</span>
                <span className="flex items-center gap-2 text-forest-800 text-sm"><Users className="w-4 h-4" /> {quickViewItem.groupSize}</span>
              </div>
              <div>
                <span className="block text-[10px] text-forest-400 uppercase tracking-widest mb-1.5">Location</span>
                <span className="flex items-center gap-2 text-forest-800 text-sm"><MapPin className="w-4 h-4" /> Tigoni, Kenya</span>
              </div>
              <div>
                <span className="block text-[10px] text-forest-400 uppercase tracking-widest mb-1.5">Price</span>
                <span className="flex items-center gap-2 text-forest-800 text-sm font-medium">{quickViewItem.price}</span>
              </div>
            </div>
            
            <Link 
              href={quickViewItem.href}
              className="block w-full py-3.5 bg-forest-900 hover:bg-forest-800 text-white text-center rounded-xl tracking-widest text-sm transition-colors font-medium shadow-md"
              style={{ fontFamily: "var(--font-body)" }}
            >
              PROCEED TO BOOKING
            </Link>
          </div>
        )}
      </Modal>
    </div>
  );
}
