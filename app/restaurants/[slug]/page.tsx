import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, CheckCircle2 } from "lucide-react";
import { restaurants } from "@/lib/data";

export function generateStaticParams() {
  return restaurants.map((r) => ({ slug: r.slug }));
}

export default function RestaurantBookingPage({ params }: { params: { slug: string } }) {
  const restaurant = restaurants.find((r) => r.slug === params.slug);

  if (!restaurant) {
    notFound();
  }

  const message = encodeURIComponent(`Hello Tigoni, I'd like to book a table/experience at ${restaurant.name}.`);
  const whatsappUrl = `https://wa.me/254740726783?text=${message}`;

  return (
    <article className="min-h-screen bg-cream-50 pb-20">
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto w-full">
          <Link href="/restaurants" className="text-white/70 hover:text-white mb-6 text-sm tracking-widest transition-colors font-medium w-fit" style={{ fontFamily: "var(--font-body)" }}>
            ← BACK TO RESTAURANTS
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {restaurant.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs tracking-widest rounded-full font-medium" style={{ fontFamily: "var(--font-body)" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            {restaurant.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl text-forest-900 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
              About this place
            </h2>
            <p className="text-forest-700 text-lg leading-relaxed mb-10 font-light" style={{ fontFamily: "var(--font-body)" }}>
              {restaurant.description}
            </p>
            
            <h3 className="text-xl text-forest-900 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Dining Highlights
            </h3>
            <ul className="space-y-4 mb-10 text-forest-700" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>Farm-to-table freshness directly from the highlands.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>Dietary accommodations available upon request.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>Spectacular scenic ambiance ideal for groups or couples.</span>
              </li>
            </ul>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-200 sticky top-32">
              <p className="text-forest-400 text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>AVERAGE SPEND</p>
              <p className="text-forest-900 text-4xl mb-8" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                {restaurant.price}
              </p>

              <div className="space-y-6 mb-10" style={{ fontFamily: "var(--font-body)" }}>
                <div className="flex items-center gap-4 text-forest-700">
                  <div className="w-10 h-10 rounded-full bg-forest-50 flex items-center justify-center text-forest-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-forest-400 uppercase tracking-widest mb-1">Opening Hours</p>
                    <p className="font-medium">{restaurant.hours}</p>
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
                Reserve via WhatsApp
              </a>
              <p className="text-center text-forest-400 text-xs mt-4 font-light">
                No payment required now. You will confirm the reservation and time with our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
