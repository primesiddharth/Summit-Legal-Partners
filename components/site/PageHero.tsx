import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  crumbs?: Crumb[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs = [],
}: Props) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden bg-navy-950 pt-28 pb-16">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-950" />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,170,52,0.12),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {crumbs.length > 0 && (
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-navy-300">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold-400">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold-400">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-navy-500" />
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            <span className="h-px w-6 bg-gold-400" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
