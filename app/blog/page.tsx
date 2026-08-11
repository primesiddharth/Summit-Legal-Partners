import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import BlogCard from "@/components/site/BlogCard";
import CtaBand from "@/components/site/CtaBand";
import RevealOnScroll from "@/components/site/RevealOnScroll";
import { BLOG_POSTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Legal insights and analysis from the partners of Summit Legal Partners — covering corporate, litigation, real estate, IP, tax, and family law.",
};

export default function BlogPage() {
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
  const [featured, ...rest] = BLOG_POSTS;
  const date = new Date(featured.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <RevealOnScroll />
      <PageHero
        eyebrow="Legal Insights"
        title="Analysis from Our Partners"
        description="Guidance and commentary on the legal developments shaping Indian business and personal matters — written by the lawyers who practice them."
        image="https://images.pexels.com/photos/7876088/pexels-photo-7876088.jpeg?auto=compress&cs=tinysrgb&w=1920"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      {/* Featured post */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog#${featured.slug}`}
            id={featured.slug}
            className="reveal group grid scroll-mt-28 items-center gap-10 overflow-hidden rounded-2xl border border-navy-100 bg-cream/30 p-6 transition-all hover:shadow-xl lg:grid-cols-2 lg:p-8"
          >
            <div className="overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-950">
                  Featured
                </span>
                <span className="text-xs font-medium text-navy-500">
                  {featured.category}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-navy-900 transition-colors group-hover:text-gold-700 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-navy-500">
                <span>By {featured.author}</span>
                <span>{date}</span>
                <span>{featured.readTime}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-600">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories filter (UI only) */}
      <section className="border-y border-navy-100 bg-cream py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-navy-500">Topics:</span>
          {["All", ...categories].map((cat) => (
            <span
              key={cat}
              className="cursor-default rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* All posts */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-stagger grid gap-7 md:grid-cols-6">
            {rest.map((post, index) => (
              <div
                key={post.slug}
                className={cn(
                  "md:col-span-2",
                  index === 3 && "md:col-start-2",
                  index === 4 && "md:col-start-4",
                )}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter inline */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Stay Updated"
            title="Never Miss an Insight"
            description="Our newsletter delivers analysis from our partners — once a month, no noise."
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
