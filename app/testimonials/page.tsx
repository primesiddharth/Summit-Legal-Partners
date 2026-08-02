import type { Metadata } from 'next';
import { Star, Quote } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import TestimonialCard from '@/components/site/TestimonialCard';
import CtaBand from '@/components/site/CtaBand';
import RevealOnScroll from '@/components/site/RevealOnScroll';
import { TESTIMONIALS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Client testimonials for Summit Legal Partners — what our clients say about working with our team.',
};

export default function TestimonialsPage() {
  return (
    <>
      <RevealOnScroll />
      <PageHero
        eyebrow="Client Voices"
        title="Trusted by Those We Serve"
        description="The measure of our work is the trust our clients place in us — and return with. Here is what they say."
        image="https://images.pexels.com/photos/7876203/pexels-photo-7876203.jpeg?auto=compress&cs=tinysrgb&w=1920"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
      />

      {/* Rating summary */}
      <section className="border-b border-navy-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col items-center gap-4 rounded-2xl bg-cream/50 px-8 py-8 text-center sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-3">
              <span className="font-serif text-5xl font-bold text-navy-900">
                4.9
              </span>
              <div className="text-left">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <p className="mt-1 text-xs text-navy-500">
                  Average rating
                </p>
              </div>
            </div>
            <div className="hidden h-12 w-px bg-navy-200 sm:block" />
            <p className="text-sm text-navy-600">
              Based on feedback from{' '}
              <span className="font-bold text-navy-900">850+</span> clients
              served since 1998.
            </p>
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured quote */}
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,170,52,0.1),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Quote className="reveal mx-auto h-12 w-12 text-gold-400" />
          <blockquote className="reveal mt-6 font-serif text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-4xl">
            “Professional, responsive, and genuinely invested in our outcome.
            Summit Legal Partners feels less like an outside firm and more like
            part of our team.”
          </blockquote>
          <div className="reveal mt-6 flex flex-col items-center gap-1">
            <p className="font-serif text-lg font-bold text-gold-400">
              Pooja Malhotra
            </p>
            <p className="text-sm text-navy-300">
              General Counsel, NorthStar Tech
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
