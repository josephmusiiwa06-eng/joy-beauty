import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'bloom' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'bloom',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const base = clsx(
      'relative inline-flex items-center justify-center',
      'font-body font-medium tracking-widest uppercase',
      'transition-all duration-300 overflow-hidden',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom focus-visible:ring-offset-2 focus-visible:ring-offset-void',
      'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
      fullWidth && 'w-full'
    );

    const variants = {
      bloom: clsx(
        'bg-gradient-bloom text-cream',
        'hover:shadow-bloom-lg hover:-translate-y-0.5',
        'before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300'
      ),
      outline: clsx(
        'bg-transparent text-cream border border-bloom/40',
        'hover:border-bloom hover:bg-bloom/5 hover:text-bloom',
        'hover:shadow-bloom'
      ),
      ghost: clsx(
        'bg-transparent text-cream-dim',
        'hover:text-cream hover:bg-white/5'
      ),
      gold: clsx(
        'bg-gradient-gold text-obsidian font-semibold',
        'hover:shadow-gold hover:-translate-y-0.5',
        'before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300'
      ),
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs gap-2',
      md: 'px-6 py-3 text-xs gap-2.5',
      lg: 'px-8 py-4 text-sm gap-3',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </span>
        )}
        <span className={clsx(isLoading && 'invisible')}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
