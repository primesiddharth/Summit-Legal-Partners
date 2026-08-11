import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Handshake,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

import RevealOnScroll from "@/components/site/RevealOnScroll";
import SectionHeading from "@/components/site/SectionHeading";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <RevealOnScroll />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-36">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Modern legal firm architecture"
            fill
            priority
            className="object-cover object-center opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-transparent" />
        </div>

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.15),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 backdrop-blur-sm">
              About Our Firm
            </span>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Trusted Legal Counsel.
              <span className="mt-2 block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Built Around Your Interests.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-navy-200 sm:text-lg">
              Summit Legal Partners provides thoughtful, strategic legal counsel
              to individuals, businesses, and institutions across India. We
              combine legal expertise with a practical understanding of the
              people and businesses behind every matter.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 px-7 py-3.5 font-semibold text-navy-950 shadow-lg shadow-gold-500/10 transition-all hover:-translate-y-0.5 hover:shadow-gold-500/25 hover:brightness-110"
              >
                Speak With Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/our-lawyers"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-400"
              >
                Meet Our Lawyers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Who We Are"
                title="A modern law firm grounded in experience"
                description="We believe effective legal representation begins with understanding the full picture."
              />

              <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-600">
                <p>
                  Summit Legal Partners was established with a clear purpose: to
                  provide high-quality legal representation that is accessible,
                  responsive, and focused on meaningful outcomes.
                </p>

                <p>
                  Our lawyers bring experience across commercial, corporate,
                  dispute resolution, property, employment, and personal legal
                  matters. We approach every engagement with careful analysis,
                  clear communication, and a strong understanding of our
                  client's objectives.
                </p>

                <p>
                  Whether advising a growing business, representing a client in
                  a dispute, or helping an individual navigate a complex legal
                  matter, our role remains the same: protect your interests and
                  help you move forward with confidence.
                </p>
              </div>
            </div>

            {/* Visual Column: Image + Stats */}
            <div className="space-y-6">
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl shadow-xl sm:h-[320px]">
                <Image
                  src="https://imgs.search.brave.com/aA7gNecPh8BaWOMn21OpR-es_dYgul3TlccdCNg-P1I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vanVkZ2UtZ2F2/ZWwtd2l0aC1qdXN0/aWNlLWxhd3llcnMt/aGF2aW5nLXRlYW0t/bWVldGluZy1sYXct/ZmlybS1iYWNrZ3Jv/dW5kLWNvbmNlcHRz/LWxhd18yNjUwMjIt/NjAwMTAuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw"
                  alt="Legal books and balance scale representing justice"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Firm Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "15+",
                    label: "Years of Experience",
                  },
                  {
                    value: "500+",
                    label: "Matters Handled",
                  },
                  {
                    value: "25+",
                    label: "Practice Areas",
                  },
                  {
                    value: "98%",
                    label: "Client Satisfaction",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-navy-100 bg-cream/50 p-6 transition-all duration-300 hover:border-gold-400/40 hover:bg-white hover:shadow-md"
                  >
                    <p className="font-serif text-3xl font-bold text-navy-950 transition-colors group-hover:text-gold-600 sm:text-4xl">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm font-medium text-navy-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-cream/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Legal advice with a practical perspective"
            description="Good legal counsel is not only about knowing the law. It is about understanding what the law means for you."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Scale,
                title: "Strategic Thinking",
                description:
                  "We look beyond the immediate issue to understand risks, opportunities, and the wider legal landscape.",
                image:
                  "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=800&auto=format&fit=crop",
              },
              {
                icon: Handshake,
                title: "Personal Partnership",
                description:
                  "We work closely with our clients, maintaining open communication and making complex legal matters easier to understand.",
                image:
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
              },
              {
                icon: ShieldCheck,
                title: "Focused Representation",
                description:
                  "Every matter receives careful preparation, attention to detail, and representation aligned with the client's objectives.",
                image:
                  "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-gold-600 shadow-md backdrop-blur-md">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-serif text-xl font-bold text-navy-950 transition-colors group-hover:text-gold-600">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-navy-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 mb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our Values"
                title="Principles that guide our work"
                description="Our reputation is built not only on results, but on how we achieve them."
              />
              <div className="relative mt-8 hidden h-64 w-full overflow-hidden rounded-2xl shadow-md lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                  alt="Law firm meeting room interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  text: "We hold ourselves to high professional standards in every matter.",
                },
                {
                  icon: ShieldCheck,
                  title: "Integrity",
                  text: "We provide honest, transparent advice, even when the answer is difficult.",
                },
                {
                  icon: Users,
                  title: "Client First",
                  text: "Our recommendations begin with understanding the client's priorities.",
                },
                {
                  icon: CheckCircle2,
                  title: "Accountability",
                  text: "We take responsibility for our work and remain committed throughout the matter.",
                },
              ].map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="group flex gap-4 rounded-xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:border-gold-400/40 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-400/10 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-navy-950">
                        {value.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                        {value.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Why Summit Legal Partners
              </span>

              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                Experienced counsel with a clear focus on your goals.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-200">
                From the first consultation to the resolution of your matter, we
                believe you should always know where you stand, what your
                options are, and what comes next.
              </p>

              <div className="relative mt-8 h-56 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
                  alt="Lawyer analyzing strategic documentation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              {[
                "Experienced lawyers across multiple practice areas",
                "Clear and practical legal communication",
                "Strong attention to detail and preparation",
                "Responsive and accessible client service",
                "Strategic approach to negotiation and disputes",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3.5 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-white/90 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Let's Talk
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-navy-950 sm:text-4xl">
            Have a legal matter that needs attention?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-600">
            Speak with our team to understand your legal options and determine
            the right way forward.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 px-8 py-4 font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-all hover:-translate-y-0.5 hover:shadow-gold-500/30 hover:brightness-110"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
