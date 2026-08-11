import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHeading from "@/components/site/SectionHeading";
import ContactForm from "@/components/site/ContactForm";
import RevealOnScroll from "@/components/site/RevealOnScroll";
import { FIRM } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Summit Legal Partners in Banjara Hills, Hyderabad. Schedule a confidential consultation with our team.",
};

export default function ContactPage() {
  return (
    <>
      <RevealOnScroll />
      <PageHero
        eyebrow="Get in Touch"
        title="Schedule a Confidential Consultation"
        description="Tell us about your matter. We will respond within one working day to schedule a consultation — in person at our Banjara Hills office or virtually."
        image="https://images.pexels.com/photos/946310/pexels-photo-946310.jpeg?auto=compress&cs=tinysrgb&w=1920"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Form + info */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="Enquiry"
                title="Send Us a Message"
                align="left"
              />
              <div className="reveal mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Details"
                title="Visit or Call"
                align="left"
              />
              <div className="reveal mt-8 space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Office",
                    value: `${FIRM.address.line1}, ${FIRM.address.line2}`,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: FIRM.phone,
                    href: FIRM.phoneHref,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: FIRM.email,
                    href: `mailto:${FIRM.email}`,
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: (
                      <ul className="space-y-1">
                        {FIRM.hours.map((h) => (
                          <li key={h.day} className="text-sm">
                            <span className="font-semibold text-navy-900">
                              {h.day}:
                            </span>{" "}
                            {h.time}
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 rounded-xl border border-navy-100 bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm font-medium text-navy-800 hover:text-gold-700"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="mt-1 text-sm font-medium text-navy-800">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-white py-0">
        <div className="relative h-[380px] w-full overflow-hidden border-y border-navy-100 sm:h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.654298898535!2d78.43567405!3d17.415934749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9728e7c230a5%3A0xbf59752f5f7caa0!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1786454767060!5m2!1sen!2sin"
            title="Summit Legal Partners location"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating address card */}
          <div className="absolute bottom-5 left-5 max-w-sm rounded-xl border border-white/20 bg-navy-950/90 p-5 text-white shadow-2xl backdrop-blur-md sm:left-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-navy-950">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="font-serif text-base font-bold">{FIRM.name}</p>

                <p className="mt-1 text-xs leading-5 text-white/70">
                  {FIRM.address.line1}, {FIRM.address.line2}
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Banjara+Hills+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 px-4 py-2 text-xs font-semibold text-navy-950 transition-all hover:brightness-110"
            >
              <MapPin className="h-3.5 w-3.5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
