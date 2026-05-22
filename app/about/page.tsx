import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tigoni | Our Story",
  description: "Learn about Tigoni — Kenya's highland gem perched in the Aberdare foothills.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1600&q=85"
          alt="Tigoni countryside"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest-950/60" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16">
          <p className="text-cream-300/70 text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Who we are
          </p>
          <h1
            className="text-white text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Our Story
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-forest-400 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>Our Story</p>
              <h2
                className="text-forest-900 text-3xl md:text-4xl mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Perched in the Aberdare Foothills
              </h2>
              <p className="text-forest-700 text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                Tigoni is a captivating highland destination in Kiambu County, nestled at 2,200m above sea level in the lush foothills of the Aberdare Ranges. The area is best known for its sweeping tea estates, cool misty mornings, and a way of life that moves at nature&apos;s pace.
              </p>
              <p className="text-forest-700 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                We created Experience Tigoni to curate the very best of what this hidden highland gem has to offer — from e-bike tours through the tea fields to sunset hikes along the Limuru ridgeline.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=85"
                alt="Tigoni landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Region Section */}
      <section id="region" className="py-24 px-6 bg-white border-t border-forest-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-forest-400 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>The Region</p>
            <h2
              className="text-forest-900 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              What Makes Tigoni Special
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "The Land",
                body: "Rolling tea fields, indigenous forest patches, and dramatic escarpment views define Tigoni's landscape. Every direction offers a postcard.",
              },
              {
                title: "The People",
                body: "Warm Kikuyu highland hospitality meets a creative community of farmers, artists, and entrepreneurs who are proudly reshaping Tigoni's identity.",
              },
              {
                title: "The Experience",
                body: "We curate authentic, unhurried experiences that connect you to the land and people — far from the ordinary tourist trail.",
              },
            ].map((val) => (
              <div key={val.title} className="space-y-4">
                <div className="w-12 h-px bg-forest-400" />
                <h3
                  className="text-forest-900 text-xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {val.title}
                </h3>
                <p className="text-forest-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-24 px-6 bg-cream-100 border-t border-forest-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-forest-400 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>Our Team</p>
            <h2
              className="text-forest-900 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Meet the Local Experts
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kamau Njoroge",
                role: "Lead Guide",
                image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&q=80",
              },
              {
                name: "Wanjiku Karanja",
                role: "Experience Curator",
                image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=500&q=80",
              },
              {
                name: "Ochieng Otieno",
                role: "E-Bike Specialist",
                image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&q=80",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                  />
                </div>
                <h3
                  className="text-forest-900 text-xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {member.name}
                </h3>
                <p className="text-forest-500 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
