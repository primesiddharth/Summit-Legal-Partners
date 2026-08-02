'use client';

import { useState } from 'react';
import { Check, Loader2, Send } from 'lucide-react';
import { PRACTICE_AREAS } from '@/lib/data';

type Status = 'idle' | 'submitting' | 'success';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1200);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-gold-200 bg-gold-50 p-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-navy-950">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-bold text-navy-900">
          Thank You
        </h3>
        <p className="mt-2 max-w-sm text-sm text-navy-600">
          Your enquiry has been received. A member of our team will reach out
          within one working day to schedule your consultation.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-gold-600 hover:text-gold-700"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-navy-100 bg-white p-6 shadow-lg shadow-navy-900/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            type="text"
            required
            placeholder="Your name"
            className="form-input"
          />
        </Field>
        <Field label="Email Address" required>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="form-input"
          />
        </Field>
        <Field label="Phone Number">
          <input
            type="tel"
            placeholder="+91 90000 00000"
            className="form-input"
          />
        </Field>
        <Field label="Area of Concern">
          <select className="form-input" defaultValue="">
            <option value="" disabled>
              Select a practice area
            </option>
            {PRACTICE_AREAS.map((pa) => (
              <option key={pa.slug} value={pa.slug}>
                {pa.title}
              </option>
            ))}
            <option value="other">Other / Not sure</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="How can we help?" required>
          <textarea
            required
            rows={4}
            placeholder="Briefly describe your matter…"
            className="form-input resize-none"
          />
        </Field>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-navy-600">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-navy-300 text-gold-500 focus:ring-gold-400"
        />
        <span>
          I agree that the information provided is for the purpose of seeking
          legal counsel and consent to being contacted by Summit Legal Partners.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-navy-800 to-navy-950 px-6 py-3.5 font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-navy-900/20 disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Enquiry <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid hsl(222 25% 88%);
          background: hsl(42 38% 97%);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: hsl(224 40% 14%);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: hsl(39 72% 50%);
          box-shadow: 0 0 0 3px hsl(39 72% 50% / 0.15);
        }
        :global(.form-input::placeholder) {
          color: hsl(224 12% 60%);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-800">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
