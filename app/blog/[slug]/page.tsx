import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollProgress from "@/components/ScrollProgress";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: `${post.frontMatter.title} | Tigoni Journal`,
      description: post.frontMatter.excerpt,
    };
  } catch (error) {
    return {
      title: "Not Found",
    };
  }
}

const mdxComponents = {
  img: (props: any) => (
    <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden shadow-sm">
      <Image 
        src={props.src} 
        alt={props.alt || "Blog image"} 
        fill 
        className="object-cover hover:scale-105 transition-transform duration-700" 
      />
    </div>
  ),
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);

    return (
      <article className="min-h-screen bg-cream-50 pb-20">
        <ScrollProgress />
        <div className="relative h-[60vh] min-h-[400px] w-full">
          <Image
            src={post.frontMatter.image}
            alt={post.frontMatter.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center pt-20 pointer-events-none">
            <div className="max-w-3xl px-6 text-center">
              <p className="text-cream-300 text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
                {post.frontMatter.category} · {post.frontMatter.date}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                {post.frontMatter.title}
              </h1>
              <p className="text-cream-100 text-lg md:text-xl font-light" style={{ fontFamily: "var(--font-body)" }}>
                {post.frontMatter.readTime}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-16">
          <div className="prose prose-lg prose-stone max-w-none prose-headings:font-display prose-headings:font-normal prose-p:font-body prose-p:font-light prose-a:text-forest-600">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <div className="mt-16 pt-8 border-t border-cream-200">
            <Link href="/blog" className="text-forest-700 hover:text-forest-900 font-body tracking-widest text-sm uppercase transition-colors">
              ← Back to Journal
            </Link>
          </div>
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
