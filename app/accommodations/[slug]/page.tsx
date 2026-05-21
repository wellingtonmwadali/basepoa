import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, CheckCircle2, BedDouble } from "lucide-react";
import { accommodations } from "@/lib/data";

export function generateStaticParams() {
  return accommodations.map((a) => ({ slug: a.slug }));
}

export default function AccommodationBookingPage({ params }: { params: { slug: string } }) {
  const acc = accommodations.find((a) => a.slug === params.slug);

  if (!acc) {
    notFound();
  }

  const message = encodeURIComponent(`Hello Tigoni, I'm interested in booking a stay at ${acc.name}.`);
  const whatsappUrl = `https://wa.me/254740726783?text=${message}`;

  return (
    <article className="min-h-screen bg-cream-50 pb-20">
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={acc.image}
          alt={acc.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto w-full">
          <Link href="/accommodations" className="text-white/70 hover:text-white mb-6 text-sm tracking-widest transition-colors font-medium w-fit" style={{ fontFamily: "var(--font-body)" }}>
            ← BACK TO ACCOMMODATIONS
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {acc.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs tracking-widest rounded-full font-medium" style={{ fontFamily: "var(--font-body)" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            {acc.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl text-forest-900 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
              About this property
            </h2>
            <p className="text-forest-700 text-lg leading-relaxed mb-10 font-light" style={{ fontFamily: "var(--font-body)" }}>
              {acc.description}
            </p>
            
            <h3 className="text-xl text-forest-900 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Amenities & Details
            </h3>
            <ul className="space-y-4 mb-10 text-forest-700" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>Immersive highland experience surrounded by nature.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>Close proximity to hiking trails, tea farms, and restaurants.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>Premium hospitality and comfort guaranteed.</span>
              </li>
            </ul>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-200 sticky top-32">
              <p className="text-forest-400 text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>STARTING FROM</p>
              <p className="text-forest-900 text-4xl mb-8" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                {acc.priceFrom}
              </p>

              <div className="space-y-6 mb-10" style={{ fontFamily: "var(--font-body)" }}>
                <div className="flex items-center gap-4 text-forest-700">
                  <div className="w-10 h-10 rounded-full bg-forest-50 flex items-center justify-center text-forest-600 shrink-0">
                    <BedDouble className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-forest-400 uppercase tracking-widest mb-1">Accommodation Type</p>
                    <p className="font-medium">{acc.tags.includes("HOTEL") ? "Hotel Suite" : "Private Stay"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-forest-700">
                  <div className="w-10 h-10 rounded-full bg-forest-50 flex items-center justify-center text-forest-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-forest-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="font-medium">Tigoni, Kenya</p>
                  </div>
                </div>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-medium tracking-wide transition-colors shadow-md"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Inquire on WhatsApp
              </a>
              <p className="text-center text-forest-400 text-xs mt-4 font-light">
                Secure your booking dates, arrange payment, and ask any questions through our WhatsApp concierge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
