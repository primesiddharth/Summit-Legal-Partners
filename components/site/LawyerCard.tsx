import Link from 'next/link';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import type { Lawyer } from '@/lib/data';

export default function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  return (
    <Link
      href={`/our-lawyers#${lawyer.slug}`}
      id={lawyer.slug}
      className="reveal group relative block overflow-hidden rounded-xl bg-navy-900 shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

        {/* Expertise tags */}
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {lawyer.expertise.slice(0, 2).map((e) => (
            <span
              key={e}
              className="rounded-full bg-gold-500/90 px-2.5 py-1 text-[0.65rem] font-semibold text-navy-950"
            >
              {e}
            </span>
          ))}
        </div>
      </div>

      <div className="relative -mt-16 px-5 pb-5">
        <h3 className="font-serif text-xl font-bold text-white">
          {lawyer.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-gold-400">{lawyer.role}</p>
        <p className="mt-2 text-xs text-navy-200">
          {lawyer.experienceYears} years at the Bar
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 transition-colors group-hover:text-gold-300">
            View Profile
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-navy-200 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
            <Linkedin className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
