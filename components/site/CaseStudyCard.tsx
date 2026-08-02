import Link from 'next/link';
import { ArrowUpRight, Trophy } from 'lucide-react';
import type { CaseStudy } from '@/lib/data';

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-950">
          {study.practiceArea}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg font-bold leading-snug text-navy-900">
          {study.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
          {study.summary}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-navy-900">
            <Trophy className="h-4 w-4 text-gold-500" />
            {study.result}
          </span>
          <Link
            href={`/case-studies#${study.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
          >
            Read case
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
