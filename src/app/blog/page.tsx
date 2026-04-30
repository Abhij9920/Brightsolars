import Hero from "@/components/Hero";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CalendarDays, User, ArrowRight } from "lucide-react";

export const revalidate = 60;

const BlogPage = async () => {
  const query = `*[_type == "blogPost"] | order(publishedDate desc) {
    title,
    slug,
    category,
    coverImage,
    excerpt,
    publishedDate,
    author
  }`;
  const blogPosts = await client.fetch(query);

  return (
    <div className="overflow-x-hidden">
      <Hero
        Image="images/carousel-2.jpg"
        section="Blog"
        desc="Solar guides, product reviews, rebate updates and industry news to help you make informed decisions."
      />

      <div className="py-10 md:py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto">
          {blogPosts.length === 0 && (
            <p className="text-center text-slate-400 py-20 text-lg">
              No blog posts published yet. Check back soon!
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {blogPosts.map((post: any) => (
              <Link key={post.slug.current} href={`/blog/${post.slug.current}`}>
                <Card className="flex flex-col border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full group">
                  <div className="relative h-52 md:h-60 w-full">
                    {post.coverImage && (
                      <Image
                        src={urlFor(post.coverImage).url()}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#32C36C] text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-5 flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {post.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-black group-hover:text-[#32C36C] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#32C36C] font-semibold text-sm mt-2">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
