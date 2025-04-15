import React from 'react';

/**
 * Props for the LoadingSpinner component
 */
interface LoadingSpinnerProps {
  /** Size of the spinner: small, medium or large */
  size?: 'sm' | 'md' | 'lg';
  /** Color class for the spinner (Tailwind class) */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

// Size mapping to Tailwind classes
const sizes = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12'
};

/**
 * A spinner component to indicate loading state
 */
export function LoadingSpinner({ 
  size = 'md', 
  color = 'text-[#732424]', 
  className = '',
  ariaLabel = 'Loading'
}: LoadingSpinnerProps) {
  return (
    <svg 
      className={`animate-spin ${sizes[size]} ${color} ${className}`} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
      role="status"
      aria-label={ariaLabel}
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
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/**
 * A full-page loading state with message
 */
export function LoadingState({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12" role="status">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600">{message}</p>
    </div>
  );
}

/**
 * A card-like loading placeholder with animated pulse effect
 */
export function LoadingCard() {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 animate-pulse"
      role="status"
      aria-label="Loading content"
    >
      {/* Title placeholder */}
      <div className="h-7 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        {/* Content placeholders */}
        <div className="h-5 bg-gray-200 rounded w-1/2"></div>
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        <div className="h-5 bg-gray-200 rounded w-2/3"></div>
        <div className="h-5 bg-gray-200 rounded w-1/4"></div>
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
      </div>
      {/* Button placeholder */}
      <div className="h-10 bg-gray-200 rounded w-full mt-6"></div>
    </div>
  );
} 