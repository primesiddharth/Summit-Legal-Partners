import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import ContactForm from '@/components/site/ContactForm';
import RevealOnScroll from '@/components/site/RevealOnScroll';
import { FIRM } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Summit Legal Partners in Banjara Hills, Hyderabad. Schedule a confidential consultation with our team.',
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
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
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
                    label: 'Office',
                    value: `${FIRM.address.line1}, ${FIRM.address.line2}`,
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: FIRM.phone,
                    href: FIRM.phoneHref,
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: FIRM.email,
                    href: `mailto:${FIRM.email}`,
                  },
                  {
                    icon: Clock,
                    label: 'Hours',
                    value: (
                      <ul className="space-y-1">
                        {FIRM.hours.map((h) => (
                          <li key={h.day} className="text-sm">
                            <span className="font-semibold text-navy-900">
                              {h.day}:
                            </span>{' '}
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

      {/* Map placeholder */}
      <section className="bg-white py-0">
        <div className="relative h-[420px] w-full overflow-hidden border-y border-navy-100 bg-navy-100">
          {/* Stylized map placeholder */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_30%_92%),hsl(222_30%_86%))]">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(hsl(222 25% 80%) 1px, transparent 1px), linear-gradient(90deg, hsl(222 25% 80%) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 shadow-lg">
              <MapPin className="h-7 w-7" />
            </span>
            <p className="mt-4 font-serif text-lg font-bold text-navy-900">
              {FIRM.name}
            </p>
            <p className="mt-1 text-sm text-navy-600">
              {FIRM.address.line1}, {FIRM.address.line2}
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Banjara+Hills+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
