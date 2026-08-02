'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function FaqAccordion({
  items,
}: {
  items: FAQ[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-navy-50/50"
            >
              <span className="font-serif text-base font-semibold text-navy-900 sm:text-lg">
                {item.question}
              </span>
              <span
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                  open
                    ? 'rotate-180 bg-gold-500 text-navy-950'
                    : 'bg-navy-100 text-navy-700',
                )}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                open
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-navy-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
