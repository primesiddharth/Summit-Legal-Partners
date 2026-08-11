import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import CtaBand from '@/components/site/CtaBand';
import RevealOnScroll from '@/components/site/RevealOnScroll';
import { PracticeIcon } from '@/components/site/PracticeIcon';
import { PRACTICE_AREAS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'Eight focused practice areas led by senior partners: Corporate Law, Civil Litigation, Criminal Defense, Family Law, Property, IP, Taxation, and Arbitration.',
};

export default function PracticeAreasPage() {
  return (
    <>
      <RevealOnScroll />
      <PageHero
        eyebrow="Our Expertise"
        title="Practice Areas Built for Modern India"
        description="Eight focused practice areas, each led by a partner who has spent a career mastering it. We bring depth where it matters most."
        image="https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1920"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Practice Areas' }]}
      />

      {/* Quick nav grid */}
      <section className="border-b border-navy-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {PRACTICE_AREAS.map((area) => (
              <a
                key={area.slug}
                href={`#${area.slug}`}
                className="reveal group flex flex-col items-center gap-2 rounded-lg border border-navy-100 bg-cream/40 p-4 text-center transition-all hover:border-gold-300 hover:bg-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <PracticeIcon name={area.icon} className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-navy-700">
                  {area.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed areas */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {PRACTICE_AREAS.map((area, idx) => (
            <div
              key={area.slug}
              id={area.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={`reveal ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <PracticeIcon name={area.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-serif text-3xl font-bold text-navy-900">
                  {area.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-600">
                  {area.description}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {area.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-sm text-navy-700"
                    >
                      <Check className="h-4 w-4 shrink-0 text-gold-500" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-800"
                >
                  Discuss a {area.title} matter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div
                className={`reveal ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PRACTICE_IMAGES[area.slug] ?? DEFAULT_PRACTICE_IMAGE}
                    alt={area.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

const DEFAULT_PRACTICE_IMAGE =
  'https://images.pexels.com/photos/7876197/pexels-photo-7876197.jpeg?auto=compress&cs=tinysrgb&w=1200';

const PRACTICE_IMAGES: Record<string, string> = {
  'corporate-law':
    'https://images.pexels.com/photos/7875996/pexels-photo-7875996.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'civil-litigation':
    'https://images.pexels.com/photos/7876144/pexels-photo-7876144.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'criminal-defense':
    'https://imgs.search.brave.com/GIZDfsOdPWRwpIgs1Uq-QwI5SgPyKdL7pj251zbUKsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzg1Lzc5LzY0/LzM2MF9GXzExODU3/OTY0NjdfNWpkZFY1/b2hUd1Q1Z0FaYXQ1/aEtkZjBmUDIzUmF3/UnAuanBn',
  'family-law':
    'https://images.pexels.com/photos/8112231/pexels-photo-8112231.jpeg',
  'property-real-estate':
    'https://imgs.search.brave.com/GMrckx0yPMIsauQs_1xFlC1jhvfMosmS3OI-xCcW1sU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYxLzUwLzIw/LzM2MF9GXzQ2MTUw/MjAyOV8ya1oxSGJu/WDFJQzFjdGdqQkNS/NkJZNG9zUURFZVF1/eC5qcGc',
  'intellectual-property':
    'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'taxation':
    'https://images.pexels.com/photos/7876093/pexels-photo-7876093.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'arbitration-mediation':
    'https://imgs.search.brave.com/vPbHj0CQPMbJLvKN1kefyMUXws3mwsB2THgHbM4MkjM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXJlbmVzc2xhdy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTAvcG9zdC1p/bW1nZy5wbmc',
};
