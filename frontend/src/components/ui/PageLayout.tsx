'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { LinkButton } from './Button';

/**
 * Props for the PageLayout component
 */
interface PageLayoutProps {
  /** The content to be rendered within the layout */
  children: ReactNode;
  /** Maximum width constraint for the content container */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Optional URL for a back navigation link */
  backLink?: string;
  /** Label for the back link button */
  backLabel?: string;
  /** Additional CSS classes to apply to the layout */
  className?: string;
}

// Mapping of size names to Tailwind CSS classes
const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full'
};

/**
 * PageLayout component that provides consistent page structure with fade-in transition
 */
export function PageLayout({
  children,
  maxWidth = '2xl',
  backLink,
  backLabel = 'Back',
  className = ''
}: PageLayoutProps) {
  // State to control fade-in animation
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set content to visible immediately after component mounts
    // This creates a smooth fade-in effect
    setIsVisible(true);
    
    return () => {};
  }, []);
  
  return (
    <div 
      className={`w-full bg-white p-6 transition-opacity duration-100 ease-in ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div className={`container mx-auto ${maxWidthClasses[maxWidth]}`}>
        {backLink && (
          <div className="mb-6">
            <LinkButton href={backLink} variant="ghost">
              ← {backLabel}
            </LinkButton>
          </div>
        )}
        
        {children}
      </div>
    </div>
  );
} 