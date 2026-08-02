import type { Metadata } from 'next';
import { GraduationCap, BadgeCheck, Briefcase } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import LawyerCard from '@/components/site/LawyerCard';
import CtaBand from '@/components/site/CtaBand';
import RevealOnScroll from '@/components/site/RevealOnScroll';
import { LAWYERS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Lawyers',
  description:
    'Meet the partners and senior associates of Summit Legal Partners — senior counsel leading corporate, litigation, criminal, family, property, IP, and tax practice.',
};

export default function OurLawyersPage() {
  return (
    <>
      <RevealOnScroll />
      <PageHero
        eyebrow="Our People"
        title="Counsel Led by Partners, Always"
        description="Every engagement at Summit Legal Partners is led by a senior partner. Meet the counsel who will guide your matter."
        image="https://images.pexels.com/photos/7876197/pexels-photo-7876197.jpeg?auto=compress&cs=tinysrgb&w=1920"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our Lawyers' }]}
      />

      {/* Team grid */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-stagger grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {LAWYERS.map((lawyer) => (
              <LawyerCard key={lawyer.slug} lawyer={lawyer} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed profiles */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In Depth"
            title="Partner Profiles"
            description="The experience, credentials, and philosophy behind every matter we lead."
          />
          {LAWYERS.map((lawyer, idx) => (
            <div
              key={lawyer.slug}
              id={lawyer.slug}
              className="grid scroll-mt-28 items-start gap-10 lg:grid-cols-3"
            >
              <div
                className={`reveal lg:sticky lg:top-28 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>
              <div
                className={`reveal lg:col-span-2 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                  {lawyer.role}
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-navy-900">
                  {lawyer.name}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-navy-600">
                  {lawyer.bio}
                </p>

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-navy-100 bg-cream/40 p-5">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-500">
                      <Briefcase className="h-4 w-4 text-gold-500" />
                      Experience
                    </span>
                    <p className="mt-2 font-serif text-2xl font-bold text-navy-900">
                      {lawyer.experienceYears} years
                    </p>
                  </div>
                  <div className="rounded-xl border border-navy-100 bg-cream/40 p-5">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-500">
                      <BadgeCheck className="h-4 w-4 text-gold-500" />
                      Bar Registration
                    </span>
                    <p className="mt-2 font-serif text-lg font-bold text-navy-900">
                      {lawyer.barId}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-500">
                    <GraduationCap className="h-4 w-4 text-gold-500" />
                    Education
                  </span>
                  <ul className="mt-3 space-y-2">
                    {lawyer.education.map((ed) => (
                      <li
                        key={ed}
                        className="text-sm text-navy-700"
                      >
                        {ed}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                    Areas of Expertise
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {lawyer.expertise.map((e) => (
                      <span
                        key={e}
                        className="rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-gold-400"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
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
