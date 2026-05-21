"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <p className="text-sm text-forest-300" style={{ fontFamily: "var(--font-body)" }}>
        ✓ Welcome! We'll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email Address"
        required
        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-forest-400 transition-colors"
        style={{ fontFamily: "var(--font-body)" }}
      />
      <button
        type="submit"
        className="bg-cream-100 text-forest-900 px-4 py-2.5 rounded-xl text-xs font-bold tracking-widest hover:bg-white transition-colors whitespace-nowrap"
        style={{ fontFamily: "var(--font-body)" }}
      >
        JOIN NOW
      </button>
    </form>
  );
}
