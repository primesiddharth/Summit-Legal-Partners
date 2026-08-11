"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { FIRM, NAV_LINKS, PRACTICE_AREAS } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      {/* decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Stay Informed on What Matters
            </h3>
            <p className="mt-3 max-w-xl text-sm text-navy-200">
              Subscribe to our newsletter for legal insights, regulatory
              updates, and analysis from our partners — delivered monthly.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-navy-300 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-br from-gold-400 to-gold-600 px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:brightness-110"
            >
              {subscribed ? (
                <>
                  <Check className="h-4 w-4" /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link
            href="/"
            className="group flex items-center gap-3 pr-2"
            aria-label="Summit Legal Partners home"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Summit Legal Partners"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-serif text-sm font-bold text-white">
                Summit Legal
              </span>

              <span className="mt-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-gold-400">
                Partners
              </span>
            </div>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
            A premier law firm based in Banjara Hills, Hyderabad — delivering
            trusted counsel and decisive results across India since{" "}
            {FIRM.founded}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Linkedin, href: FIRM.social.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: FIRM.social.twitter, label: "Twitter" },
              { icon: Facebook, href: FIRM.social.facebook, label: "Facebook" },
              {
                icon: Instagram,
                href: FIRM.social.instagram,
                label: "Instagram",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-navy-100 transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-400">
            Firm
          </h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-navy-200 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice areas */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-400">
            Practice Areas
          </h4>
          <ul className="mt-4 space-y-2.5">
            {PRACTICE_AREAS.slice(0, 6).map((pa) => (
              <li key={pa.slug}>
                <Link
                  href={`/practice-areas#${pa.slug}`}
                  className="text-sm text-navy-200 transition-colors hover:text-gold-400"
                >
                  {pa.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-4 text-sm text-navy-200">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {FIRM.address.line1}
                <br />
                {FIRM.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={FIRM.phoneHref} className="hover:text-gold-400">
                {FIRM.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${FIRM.email}`} className="hover:text-gold-400">
                {FIRM.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                Mon–Fri: 9:30 AM – 7:00 PM
                <br />
                Sat: 10:00 AM – 2:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-navy-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
          <p className="text-navy-400">
            The content on this site is for informational purposes only and does
            not constitute legal advice.
          </p>
          {/* Credit */}
          <p className="flex flex-wrap font-body text-xs text-navy-300 text-muted-foreground items-center justify-center gap-1.5 lg:justify-start">
            <span>Made with</span>
            <span className="animate-pulse text-red-500">❤</span>
            <span>by</span>
            <a
              href="https://creyotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-semibold hover:underline  transition-colors duration-300 hover:text-gold-400"
            >
              Creyotech IT Services
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
