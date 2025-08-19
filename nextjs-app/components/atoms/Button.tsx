import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  href,
  external = false,
  target,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500 active:bg-gray-800',
    outline: 'border border-gray-600 text-gray-300 bg-transparent hover:bg-gray-800 hover:text-white focus:ring-gray-500',
    ghost: 'text-gray-300 bg-transparent hover:bg-gray-800 hover:text-white focus:ring-gray-500'
  };
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();
  
  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
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
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </>
  );

  // If href is provided, render as a link
  if (href) {
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={target || (external ? '_blank' : undefined)}
          rel={external ? 'noopener noreferrer' : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    } else {
      return (
        <Link href={href} className={combinedClasses} target={target} {...(props as any)}>
          {content}
        </Link>
      );
    }
  }
  
  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;