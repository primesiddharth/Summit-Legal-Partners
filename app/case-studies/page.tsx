import type { Metadata } from 'next';
import { Trophy, Target, TrendingUp } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import CaseStudyCard from '@/components/site/CaseStudyCard';
import CtaBand from '@/components/site/CtaBand';
import RevealOnScroll from '@/components/site/RevealOnScroll';
import { CASE_STUDIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Selected case studies from Summit Legal Partners — proven results across corporate, litigation, IP, tax, family, and real estate law.',
};

const STATS = [
  { icon: Trophy, label: 'Favorable Outcomes', value: '92%' },
  { icon: Target, label: 'Avg. Trial Prep Hours', value: '180+' },
  { icon: TrendingUp, label: 'Combined Value Secured', value: '₹500Cr+' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <RevealOnScroll />
      <PageHero
        eyebrow="Proven Results"
        title="Case Studies That Speak for Themselves"
        description="A selection of matters that show how we prepare, how we strategy, and the outcomes we secure for our clients."
        image="https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1920"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}
      />

      {/* Stats band */}
      <section className="border-b border-navy-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-stagger grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-xl bg-cream/50 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <s.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-serif text-2xl font-bold text-navy-900">
                    {s.value}
                  </p>
                  <p className="text-sm text-navy-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case grid */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-stagger grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed case write-ups */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl space-y-16 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In Depth"
            title="How We Worked These Matters"
            description="The challenge, our strategy, and the outcome — in each client's words, anonymized where required."
          />
          {CASE_STUDIES.map((study) => (
            <article
              key={study.slug}
              id={study.slug}
              className="reveal scroll-mt-28 overflow-hidden rounded-2xl border border-navy-100 shadow-sm"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-950">
                    {study.practiceArea}
                  </span>
                  <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                    {study.title}
                  </h2>
                </div>
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-sm font-semibold text-navy-500">
                  Client: {study.client}
                </p>
                <p className="mt-3 text-base leading-relaxed text-navy-700">
                  {study.summary}
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-600">
                      Challenge
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-600">
                      Strategy
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">
                      {study.strategy}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-600">
                      Outcome
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">
                      {study.outcome}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-lg bg-gold-50 px-5 py-4">
                  <Trophy className="h-6 w-6 shrink-0 text-gold-500" />
                  <p className="font-serif text-lg font-bold text-navy-900">
                    {study.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
