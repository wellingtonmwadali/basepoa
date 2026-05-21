import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

const weeklyActivities = [
  { label: "E-bike Tours", href: "/activities" },
  { label: "Farm Tours", href: "/activities" },
  { label: "Hiking", href: "/activities" },
  { label: "Weekly Calendar", href: "/activities#calendar" },
];

const monthlyActivities = [
  { label: "E-bike Tours", href: "/activities" },
  { label: "Farm Tours", href: "/activities" },
  { label: "Hiking", href: "/activities" },
  { label: "Monthly Calendar", href: "/activities#calendar" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2
                className="text-3xl text-white mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.05em" }}
              >
                Tigoni
              </h2>
              <div className="w-8 h-px bg-cream-300/50 mt-2" />
            </div>

            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <span>Tigoni, Kiambu — Limuru Road, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-forest-400 shrink-0" />
                <a href="tel:+254740726783" className="hover:text-white transition-colors">
                  +254 740 726 783
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest-400 shrink-0" />
                <a href="mailto:experiencetigoni@gmail.com" className="hover:text-white transition-colors">
                  experiencetigoni@gmail.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Weekly Activities */}
          <div>
            <h3
              className="text-lg text-white mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Weekly Activities
            </h3>
            <ul className="space-y-3">
              {weeklyActivities.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Monthly Activities */}
          <div>
            <h3
              className="text-lg text-white mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Monthly Activities
            </h3>
            <ul className="space-y-3">
              {monthlyActivities.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-lg text-white mb-3"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Become a Member
            </h3>
            <p className="text-sm text-white/60 mb-5 leading-relaxed">
              Join our community to access exclusive activities, offers, and personalized experiences.
            </p>
            <NewsletterForm />

            {/* TripAdvisor */}
            <div className="mt-6">
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-cream-100 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#00AA6C" />
                  <circle cx="8" cy="12" r="3" fill="white" />
                  <circle cx="16" cy="12" r="3" fill="white" />
                  <circle cx="8" cy="12" r="1.5" fill="#00AA6C" />
                  <circle cx="16" cy="12" r="1.5" fill="#00AA6C" />
                </svg>
                Tripadvisor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span
            className="text-sm text-white/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tigoni
          </span>
          <span
            className="text-sm text-white/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Copyright © {new Date().getFullYear()}. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}


function TikTokIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l.04-8.56a8.28 8.28 0 004.84 1.54V4.84a4.85 4.85 0 01-1.11-.15z" />
    </svg>
  );
}
