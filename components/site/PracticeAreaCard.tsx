import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PracticeIcon } from '@/components/site/PracticeIcon';
import type { PracticeArea } from '@/lib/data';

export default function PracticeAreaCard({
  area,
  compact = false,
}: {
  area: PracticeArea;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/practice-areas#${area.slug}`}
      id={area.slug}
      className="reveal group relative flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-navy-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
        <PracticeIcon name={area.icon} className="h-7 w-7" />
      </div>
      <h3 className="font-serif text-xl font-bold text-navy-900">
        {area.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
        {compact ? area.short : area.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-colors group-hover:text-gold-700">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
