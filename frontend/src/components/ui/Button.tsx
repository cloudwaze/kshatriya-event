import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  isLoading?: boolean;
}

interface LinkButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Style maps for different button variants and sizes
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#732424] hover:bg-[#9E3030] text-white',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
  outline: 'bg-transparent border border-[#732424] text-[#732424] hover:bg-[#732424] hover:text-white',
  ghost: 'bg-transparent text-[#732424] hover:bg-gray-100'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm py-1 px-3 rounded',
  md: 'py-2 px-4 rounded-lg',
  lg: 'text-lg py-3 px-6 rounded-lg'
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        font-semibold transition-colors
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export function LinkButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  onClick,
  ...props
}: LinkButtonProps) {
  const styles = `
    font-semibold transition-colors inline-block text-center
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${props.disabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${className}
  `;

  if (external) {
    return (
      <a 
        href={href} 
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={styles}
      {...(props as any)}
    >
      {children}
    </Link>
  );
} 