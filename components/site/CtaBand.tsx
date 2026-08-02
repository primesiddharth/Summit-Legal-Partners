import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { FIRM } from '@/lib/data';

type Props = {
  title?: string;
  description?: string;
};

export default function CtaBand({
  title = 'Ready to Discuss Your Matter?',
  description = 'Schedule a confidential consultation with our team. We will assess your position and chart the clearest path forward — with clarity and discretion.',
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,170,52,0.12),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          <span className="h-px w-6 bg-gold-400" />
          Let&apos;s Talk
          <span className="h-px w-6 bg-gold-400" />
        </span>
        <h2 className="reveal font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
          {description}
        </p>
        <div className="reveal mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 px-8 py-3.5 font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-all hover:scale-[1.02] hover:brightness-110"
          >
            Book a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={FIRM.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 font-semibold text-white transition-all hover:border-gold-400 hover:text-gold-400"
          >
            <Phone className="h-5 w-5" />
            {FIRM.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
