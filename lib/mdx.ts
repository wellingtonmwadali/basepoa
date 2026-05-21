import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export type BlogPostFrontMatter = {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
  draft?: boolean;
};

export type BlogPost = {
  slug: string;
  frontMatter: BlogPostFrontMatter;
  content: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  return fs.readdirSync(blogDirectory);
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(blogDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontMatter: data as BlogPostFrontMatter,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // filter out drafts for production
    .filter((post) => post.frontMatter.draft !== true)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
  return posts;
}
