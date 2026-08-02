import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/data';

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-950/90 px-3 py-1 text-xs font-semibold text-gold-400 backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-navy-500">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-gold-700">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
          <span className="text-xs font-medium text-navy-500">
            By {post.author}
          </span>
          <Link
            href={`/blog#${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
          >
            Read article
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
