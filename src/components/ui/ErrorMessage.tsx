import React from 'react';
import { LinkButton } from './Button';

/**
 * Props for the ErrorMessage component
 */
interface ErrorMessageProps {
  /** Title to display above the error message */
  title?: string;
  /** The error message to display */
  message: string;
  /** Label for the action button */
  actionLabel?: string;
  /** If provided, the action button will navigate to this link */
  actionLink?: string;
  /** If provided, this function will be called when the action button is clicked */
  onAction?: () => void;
}

/**
 * A component to display error messages with an optional action button
 */
export function ErrorMessage({
  title = 'Error',
  message,
  actionLabel = 'Try Again',
  actionLink,
  onAction
}: ErrorMessageProps) {
  // Safely handle potentially undefined error messages
  const errorMessage = typeof message === 'string' ? message : 'An unknown error occurred';

  return (
    <div 
      className="text-center py-10" 
      role="alert"
      aria-live="assertive"
    >
      <h1 className="text-2xl font-bold text-red-600 mb-4">{title}</h1>
      <p className="text-gray-700 mb-6">{errorMessage}</p>
      
      {actionLink ? (
        <LinkButton href={actionLink}>
          {actionLabel}
        </LinkButton>
      ) : onAction ? (
        <LinkButton
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onAction();
          }}
        >
          {actionLabel}
        </LinkButton>
      ) : null}
    </div>
  );
} 