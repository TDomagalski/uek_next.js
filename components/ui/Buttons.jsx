'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Uniwersalny komponent Button z animacjami i accessibility
 * forwardRef pozwala na przekazywanie ref - ważne dla form libraries i focus management
 */
const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      disabled,
      loading = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles z focus management dla accessibility
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      'active:scale-[0.98] shadow-lg hover:shadow-xl',

      // Variants - różne style wizualne
      {
        'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500':
          variant === 'primary',
        'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white focus:ring-orange-500':
          variant === 'cta',
        'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 focus:ring-blue-500':
          variant === 'secondary',
      },

      // Sizes
      {
        'px-4 py-2 text-sm h-10': size === 'sm',
        'px-6 py-3 text-base h-12': size === 'md',
        'px-8 py-4 text-lg h-14': size === 'lg',
      },

      className
    );

    return (
      <button
        ref={ref}
        className={baseStyles}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
