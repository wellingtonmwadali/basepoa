import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog | Tigoni Stories",
  description: "Stories, guides, and inspiration from the highlands of Tigoni.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  if (!posts || posts.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">No posts found.</div>;
  }

  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&q=85"
          alt="Tigoni stories"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 to-forest-950/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 md:px-16">
          <p className="text-cream-300/70 text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Stories & Guides
          </p>
          <h1
            className="text-white text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            The Tigoni Journal
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-16"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src={featured.frontMatter.image}
                    alt={featured.frontMatter.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="py-4">
                  <p className="text-forest-500 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    {featured.frontMatter.category} · {featured.frontMatter.date} · {featured.frontMatter.readTime}
                  </p>
                  <h2
                    className="text-forest-900 text-3xl md:text-4xl mb-4 group-hover:text-forest-700 transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {featured.frontMatter.title}
                  </h2>
                  <p className="text-forest-600 text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {featured.frontMatter.excerpt}
                  </p>
                  <span
                    className="text-forest-700 text-xs tracking-widest group-hover:text-forest-900 transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    READ ARTICLE →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm card-hover"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.frontMatter.image}
                    alt={post.frontMatter.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-forest-400 text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>
                    {post.frontMatter.category} · {post.frontMatter.readTime}
                  </p>
                  <h3
                    className="text-forest-900 text-lg leading-snug mb-3 group-hover:text-forest-700 transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    {post.frontMatter.title}
                  </h3>
                  <p className="text-forest-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {post.frontMatter.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
