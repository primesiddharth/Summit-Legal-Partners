import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  Scale,
  Star,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import RevealOnScroll from '@/components/site/RevealOnScroll';
import SectionHeading from '@/components/site/SectionHeading';
import AnimatedCounter from '@/components/site/AnimatedCounter';
import PracticeAreaCard from '@/components/site/PracticeAreaCard';
import LawyerCard from '@/components/site/LawyerCard';
import CaseStudyCard from '@/components/site/CaseStudyCard';
import TestimonialCard from '@/components/site/TestimonialCard';
import BlogCard from '@/components/site/BlogCard';
import FaqAccordion from '@/components/site/FaqAccordion';
import CtaBand from '@/components/site/CtaBand';
import { PracticeIcon } from '@/components/site/PracticeIcon';
import {
  PRACTICE_AREAS,
  LAWYERS,
  CASE_STUDIES,
  TESTIMONIALS,
  BLOG_POSTS,
  FAQS,
  METRICS,
  FIRM_HIGHLIGHTS,
  WHY_CHOOSE,
  FIRM,
} from '@/lib/data';

export default function Home() {
  return (
    <>
      <RevealOnScroll />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100vh] justify-center overflow-hidden bg-navy-950">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/6593883/pexels-photo-6593883.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Lady Justice statue symbolizing law and fairness"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/92 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,170,52,0.12),transparent_55%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className="mb-3 inline-flex animate-fade-in items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-gold-400"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              <Scale className="h-2 w-2" />
              Trusted Legal Counsel Since {FIRM.founded}
            </span>

            <h1
              className="animate-fade-up font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Counsel Built on Trust.
              <br />
              <span className="text-gold-gradient">Results Built on Principle.</span>
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-navy-200"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              Summit Legal Partners is a premier law firm in Banjara Hills,
              Hyderabad — delivering decisive, principled counsel across
              corporate, litigation, and dispute resolution practice nationwide.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 px-7 py-3.5 font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-all hover:scale-[1.02] hover:brightness-110"
              >
                Book a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-gold-400 hover:text-gold-400"
              >
                Explore Practice Areas
              </Link>
            </div>

            {/* Trust line */}
            <div
              className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6"
              style={{ animationDelay: '0.65s', opacity: 0 }}
            >
              {[
                '27+ Years at the Bar',
                '1200+ Cases Won',
                'Partner-Led Service',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-navy-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-gold-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
          </div>
        </div>
      </section>

      {/* ============ FIRM HIGHLIGHTS ============ */}
      <section className="border-b border-navy-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FIRM_HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="group flex flex-col rounded-xl border border-navy-100 bg-cream/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <PracticeIcon name={h.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRACTICE AREAS ============ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Practice Areas Built for Modern India"
            description="Eight focused practice areas, each led by a partner who has spent a career mastering it. We bring depth where it matters most."
          />
          <div className="reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICE_AREAS.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 font-semibold text-navy-900 transition-all hover:border-gold-400 hover:text-gold-700"
            >
              View All Practice Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,170,52,0.1),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Why Summit"
                title="The Difference Is in the Discipline"
                description="We do not measure success in hours billed. We measure it in outcomes secured, relationships earned, and trust preserved — one matter at a time."
                align="left"
                light
              />
              <div className="reveal-stagger mt-10 grid gap-5 sm:grid-cols-2">
                {WHY_CHOOSE.map((w) => (
                  <div
                    key={w.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-gold-400/40"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/15 text-gold-400">
                      <PracticeIcon name={w.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-white">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-200">
                      {w.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/7875996/pexels-photo-7875996.jpeg"
                  alt="Legal professionals in consultation"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-6 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950">
                    <Star className="h-6 w-6 fill-navy-950" />
                  </span>
                  <div>
                    <p className="font-serif text-2xl font-bold text-navy-900">
                      4.9 / 5
                    </p>
                    <p className="text-xs text-navy-500">Client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MEET OUR LAWYERS ============ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our People"
            title="Meet the Partners"
            description="Senior counsel who lead by preparation and judgment. Every engagement is led by a partner — never handed off to juniors."
          />
          <div className="reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LAWYERS.slice(0, 3).map((lawyer) => (
              <LawyerCard key={lawyer.slug} lawyer={lawyer} />
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link
              href="/our-lawyers"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 font-semibold text-navy-900 transition-all hover:border-gold-400 hover:text-gold-700"
            >
              Meet All Lawyers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SUCCESS METRICS ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-950 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,170,52,0.1),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-stagger grid grid-cols-2 gap-8 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-gold-gradient sm:text-5xl lg:text-6xl">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-navy-200">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Voices"
            title="Trusted by Those We Serve"
            description="The measure of our work is the trust our clients place in us — and return with."
          />
          <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 font-semibold text-navy-900 transition-all hover:border-gold-400 hover:text-gold-700"
            >
              Read All Testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CASE STUDIES PREVIEW ============ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Results"
            title="Selected Case Studies"
            description="Outcomes speak louder than promises. A selection of matters that show how we work."
          />
          <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 font-semibold text-navy-900 transition-all hover:border-gold-400 hover:text-gold-700"
            >
              View All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ BLOG PREVIEW ============ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legal Insights"
            title="Latest from Our Lawyers"
            description="Analysis and guidance from our partners on the legal developments shaping Indian business and personal matters."
          />
          <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="reveal mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 font-semibold text-navy-900 transition-all hover:border-gold-400 hover:text-gold-700"
            >
              Read the Blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            description="Answers to the questions we hear most often. If yours is not here, we are a phone call away."
          />
          <div className="mt-14">
            <FaqAccordion items={FAQS.slice(0, 6)} />
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-semibold text-gold-600 hover:text-gold-700"
            >
              See all questions
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <CtaBand />
    </>
  );
}
