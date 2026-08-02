import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/data';

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="reveal flex h-full flex-col rounded-xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/10">
      <Quote className="h-8 w-8 text-gold-400" />
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy-700">
        “{testimonial.quote}”
      </blockquote>
      <div className="mt-5 flex items-center gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-gold-400 text-gold-400"
          />
        ))}
      </div>
      <figcaption className="mt-4 border-t border-navy-100 pt-4">
        <p className="font-serif font-bold text-navy-900">
          {testimonial.name}
        </p>
        <p className="text-sm text-navy-500">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}
