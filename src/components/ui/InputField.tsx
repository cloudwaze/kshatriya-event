import { InputHTMLAttributes, forwardRef } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  helpText?: string;
  required?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ 
    label, 
    error, 
    className = '', 
    containerClassName = '',
    labelClassName = '',
    helpText,
    required,
    id,
    ...props 
  }, ref) => {
    const inputId = id || props.name;
    
    return (
      <div className={`mb-4 ${containerClassName}`}>
        {label && (
          <label 
            htmlFor={inputId} 
            className={`block text-gray-700 font-medium mb-1 ${labelClassName}`}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <input
          id={inputId}
          ref={ref}
          className={`
            w-full px-4 py-2 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#732424]
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        
        {error && (
          <p 
            id={`${inputId}-error`} 
            className="text-red-500 text-sm mt-1"
          >
            {error}
          </p>
        )}
        
        {helpText && !error && (
          <p className="text-gray-500 text-sm mt-1">{helpText}</p>
        )}
      </div>
    );
  }
); 