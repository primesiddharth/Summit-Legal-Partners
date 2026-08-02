import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'reveal max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]',
            light ? 'text-gold-300' : 'text-gold-600',
          )}
        >
          <span className={cn('h-px w-6', light ? 'bg-gold-400' : 'bg-gold-500')} />
          {eyebrow}
          <span className={cn('h-px w-6', light ? 'bg-gold-400' : 'bg-gold-500')} />
        </span>
      )}
      <h2
        className={cn(
          'font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]',
          light ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            light ? 'text-navy-200' : 'text-navy-600',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
