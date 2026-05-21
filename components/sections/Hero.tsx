"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 10;
      const img = hero.querySelector(".parallax-img") as HTMLElement;
      if (img) img.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=85"
          alt="Tigoni lush green highlands"
          fill
          className="parallax-img object-cover transition-transform duration-700 ease-out scale-105"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-transparent to-forest-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/50 to-transparent" />
      </div>

      {/* Social icons — right side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="TikTok"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l.04-8.56a8.28 8.28 0 004.84 1.54V4.84a4.85 4.85 0 01-1.11-.15z" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-6 bottom-10 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-16 bg-white/30" />
        <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 max-w-4xl">
        <div
          className="mb-3 text-cream-200/70 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Kiambu, Kenya
        </div>
        <h1
          className="text-white text-5xl md:text-7xl leading-tight mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Embark on Your
          <br />
          <em className="not-italic font-semibold">Tigoni Experience</em>
        </h1>
        <p
          className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-8"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Perched in the scenic foothills of the Aberdare Ranges, Tigoni is a captivating destination where
          stunning landscapes, rich cultural heritage, and outdoor adventures come together.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/activities"
            className="bg-white text-forest-900 px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest hover:bg-cream-100 transition-all hover:shadow-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            EXPLORE ACTIVITIES
          </Link>
          <Link
            href="/about"
            className="border border-white/50 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
