import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Phone, Mail } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import FaqAccordion from '@/components/site/FaqAccordion';
import CtaBand from '@/components/site/CtaBand';
import RevealOnScroll from '@/components/site/RevealOnScroll';
import { FAQS, FIRM } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about engaging Summit Legal Partners — consultations, fees, practice areas, and confidentiality.',
};

export default function FaqPage() {
  const categories = Array.from(new Set(FAQS.map((f) => f.category)));

  return (
    <>
      <RevealOnScroll />
      <PageHero
        eyebrow="Questions"
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most often. If yours is not covered here, our team is a phone call away."
        image="https://images.pexels.com/photos/6077381/pexels-photo-6077381.jpeg?auto=compress&cs=tinysrgb&w=1920"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      {/* Category chips */}
      <section className="border-b border-navy-100 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              {cat}
            </a>
          ))}
        </div>
      </section>

      {/* FAQs grouped by category */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-16 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => {
            const items = FAQS.filter((f) => f.category === cat);
            return (
              <div
                key={cat}
                id={cat.toLowerCase()}
                className="scroll-mt-28"
              >
                <SectionHeading
                  eyebrow={cat}
                  title={`${cat} Questions`}
                  align="left"
                />
                <div className="mt-8">
                  <FaqAccordion items={items} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="reveal font-serif text-2xl font-bold text-navy-900 sm:text-3xl">
            Still Have Questions?
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-navy-600">
            We are happy to discuss your matter directly. Reach out and a member
            of our team will respond within one working day.
          </p>
          <div className="reveal mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={FIRM.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white transition-all hover:bg-navy-800"
            >
              <Phone className="h-5 w-5" />
              {FIRM.phone}
            </a>
            <a
              href={`mailto:${FIRM.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 px-6 py-3 font-semibold text-navy-900 transition-all hover:border-gold-400 hover:text-gold-700"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
