"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Phone, Scale } from "lucide-react";
import { NAV_LINKS, FIRM } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || !isHome
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/20 py-3"
          : "bg-transparent py-5",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
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

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-300",
                    active ? "text-gold-400" : "text-navy-100 hover:text-white",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gold-400 transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={FIRM.phoneHref}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-navy-100 transition-colors hover:text-gold-400 xl:flex"
          >
            <Phone className="h-4 w-4" />
            {FIRM.phone}
          </a>
          <Link
            href="/contact"
            className="hidden rounded-md bg-gradient-to-br from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-md transition-all duration-300 hover:shadow-gold-500/30 hover:brightness-110 md:inline-block"
          >
            Book Consultation
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 bg-navy-950/98 backdrop-blur-lg transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pt-24 pb-8">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-4 py-3.5 font-serif text-lg font-medium transition-colors",
                      active
                        ? "bg-white/5 text-gold-400"
                        : "text-white hover:bg-white/5 hover:text-gold-400",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 text-sm flex flex-col gap-3 border-t border-white/10 pt-6">
            <a
              href={FIRM.phoneHref}
              className="flex items-center gap-3 text-white"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              {FIRM.phone}
            </a>
            <Link
              href="/contact"
              className="mt-2 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 px-5 py-3.5 text-center font-semibold text-navy-950"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
