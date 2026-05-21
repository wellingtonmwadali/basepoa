"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "The Region", href: "/about#region" },
      { label: "Our Team", href: "/about#team" },
    ],
  },
  {
    label: "Experiences",
    href: "/experiences",
    children: [
      { label: "Activities", href: "/activities" },
      { label: "Restaurants", href: "/restaurants" },
      { label: "Accommodations", href: "/accommodations" },
      { label: "Destinations", href: "/destinations" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (link: any) => {
    if (link.href === "/") return pathname === "/";
    if (link.href !== "#" && pathname.startsWith(link.href)) return true;
    if (link.children && link.children.some((child: any) => pathname.startsWith(child.href.split("#")[0]))) {
      return true;
    }
    return false;
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#1c3620]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <LeafIcon className="w-8 h-8 text-cream-100 transition-transform group-hover:rotate-12 duration-300" />
          <span
            className="text-2xl text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.05em" }}
          >
            Tigoni
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 py-1.5">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      "flex items-center gap-1 text-sm font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-200",
                      active
                        ? "bg-white/20 text-white shadow-inner"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                    style={{ fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
                  >
                    {link.label.toUpperCase()}
                    {link.children && <ChevronDown className="w-3 h-3 opacity-70" />}
                  </Link>

                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#1c3620] rounded-xl shadow-2xl border border-forest-700/30 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-forest-800 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </nav>

        {/* Phone CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+254740726783"
            className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-white transition-colors shadow-md group"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4 text-forest-800 group-hover:text-forest-900" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1c3620]/98 backdrop-blur-md border-t border-white/10 mt-2">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-white/90 hover:text-white text-sm tracking-widest border-b border-white/10"
                  style={{ fontFamily: "var(--font-body)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label.toUpperCase()}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-white/60 hover:text-white/90 text-xs tracking-wider"
                        onClick={() => setMobileOpen(false)}
                      >
                        — {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+254740726783"
              className="flex items-center gap-2 py-3 text-cream-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              +254 740 726 783
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 4C16 4 8 8 8 18C8 23 11.5 27 16 28C20.5 27 24 23 24 18C24 8 16 4 16 4Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      <path d="M16 28V18M16 18L11 13M16 18L21 13" stroke="#1c3620" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
