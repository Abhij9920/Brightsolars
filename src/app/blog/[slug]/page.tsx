import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

// Generate static params for all blog posts
export async function generateStaticParams() {
  const query = `*[_type == "blogPost"] { slug }`;
  const posts = await client.fetch(query);
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const query = `*[_type == "blogPost" && slug.current == $slug][0] { title, excerpt }`;
  const post = await client.fetch(query, { slug });
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Brightsolars Blog`,
    description: post.excerpt,
  };
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    title,
    slug,
    category,
    coverImage,
    excerpt,
    body,
    publishedDate,
    author
  }`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  // Find related posts (same category, exclude current)
  const relatedQuery = `*[_type == "blogPost" && category == $category && slug.current != $slug][0...2] {
    title,
    slug,
    coverImage,
    publishedDate
  }`;
  const relatedPosts = await client.fetch(relatedQuery, { category: post.category, slug });

  return (
    <div className="overflow-x-hidden">
      {/* Hero Image */}
      <div className="relative h-[350px] md:h-[450px]">
        {post.coverImage && (
          <Image
            src={urlFor(post.coverImage).url()}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-[#32C36C] text-white text-xs font-semibold rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {post.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-10 md:py-16 px-4 font-sans">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#32C36C] font-semibold mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Content */}
          <article className="prose prose-slate prose-lg max-w-none prose-headings:text-black prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-black prose-a:text-[#32C36C]">
            <PortableText value={post.body} />
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 bg-slate-50 rounded-xl text-center">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
              Ready to go solar?
            </h3>
            <p className="text-slate-500 mb-6">
              Get a free, no-obligation quote from our team today.
            </p>
            <Button
              size="lg"
              className="bg-[#32C36C] hover:bg-[#2B9A5A] rounded-full"
              asChild
            >
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-black mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related: any) => (
                  <Link key={related.slug.current} href={`/blog/${related.slug.current}`}>
                    <div className="flex gap-4 items-start group">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        {related.coverImage && (
                          <Image
                            src={urlFor(related.coverImage).url()}
                            alt={related.title}
                            fill
                            sizes="96px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-400">{related.publishedDate}</span>
                        <h4 className="text-sm font-bold text-black group-hover:text-[#32C36C] transition-colors duration-300">
                          {related.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
