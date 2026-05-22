"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function MembershipBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="animate-on-scroll relative overflow-hidden py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=70"
          alt="Tigoni highlands"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-cream-300/60 text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
          Join the Community
        </p>
        <h2
          className="text-white text-4xl md:text-5xl mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          Become a{" "}
          <em className="not-italic font-semibold text-cream-300">Tigoni Member</em>
        </h2>
        <p
          className="text-white/60 text-base mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Get exclusive access to activities, early-bird offers, curated itineraries, and personalised highland experiences — delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="bg-forest-700/40 border border-forest-500/40 rounded-2xl px-8 py-6 text-white">
            <p className="text-lg" style={{ fontFamily: "var(--font-display)" }}>
              Welcome to Tigoni! ✦
            </p>
            <p className="text-white/60 text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>
              We&apos;ll be in touch with exclusive experiences soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-forest-400 transition-colors text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button
              type="submit"
              className="bg-cream-100 text-forest-900 px-7 py-3.5 rounded-xl text-xs font-bold tracking-widest hover:bg-white transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)" }}
            >
              JOIN NOW
            </button>
          </form>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
          {[
            { num: "2,400+", label: "Members" },
            { num: "12+", label: "Activities" },
            { num: "4.9★", label: "on Tripadvisor" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-white text-3xl mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {stat.num}
              </p>
              <p className="text-white/40 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
