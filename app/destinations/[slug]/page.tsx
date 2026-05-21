import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, CheckCircle2 } from "lucide-react";
import { destinations } from "@/lib/data";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default function DestinationBookingPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  const message = encodeURIComponent(`Hello Tigoni, I'd like to inquire about visiting ${destination.name}.`);
  const whatsappUrl = `https://wa.me/254740726783?text=${message}`;

  return (
    <article className="min-h-screen bg-cream-50 pb-20">
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto w-full">
          <Link href="/destinations" className="text-white/70 hover:text-white mb-6 text-sm tracking-widest transition-colors font-medium w-fit" style={{ fontFamily: "var(--font-body)" }}>
            ← BACK TO DESTINATIONS
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {destination.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs tracking-widest rounded-full font-medium" style={{ fontFamily: "var(--font-body)" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            {destination.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl text-forest-900 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
              About this destination
            </h2>
            <p className="text-forest-700 text-lg leading-relaxed mb-10 font-light" style={{ fontFamily: "var(--font-body)" }}>
              {destination.description}
            </p>
            
            <h3 className="text-xl text-forest-900 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
              What to expect
            </h3>
            <ul className="space-y-4 mb-10 text-forest-700" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>Breathtaking highland scenery and fresh air.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>A perfect getaway from the hustle and bustle of the city.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>Opportunities for relaxation, photography, and nature walks.</span>
              </li>
            </ul>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-200 sticky top-32">
              <p className="text-forest-900 text-3xl mb-8" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                Plan your visit
              </p>

              <div className="space-y-6 mb-10" style={{ fontFamily: "var(--font-body)" }}>
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
                Inquire via WhatsApp
              </a>
              <p className="text-center text-forest-400 text-xs mt-4 font-light">
                Get more information on directions, entry fees, and operating hours from our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
