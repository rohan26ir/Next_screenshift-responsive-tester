'use client';

import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'neomorphic' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * Reusable polymorphic Button component adhering strictly to ScreenShift design tokens:
 * - 'primary': #9D4E7C background, white text, subtle hover lift
 * - 'secondary': #E8A0BF background, dark mauve text (#4A1D36)
 * - 'neomorphic': #FFFFFF background with soft inset/outset shadow
 * - 'outline': 1.5px border in #9D4E7C, transparent background
 * - 'ghost': transparent background, hover state with soft blush tint
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  onClick,
  className = '',
  fullWidth = false,
  disabled = false,
  type = 'button',
  ...rest
}) => {
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-[#9D4E7C] text-white hover:bg-[#8A3F6C] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_rgba(157,78,124,0.35)]',
    secondary:
      'bg-[#E8A0BF] text-[#4A1D36] hover:bg-[#df91b2] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_12px_rgba(232,160,191,0.3)]',
    neomorphic:
      'bg-[#FFFFFF] text-[#4A1D36] border border-[#F3E8EE] shadow-[4px_4px_10px_rgba(157,78,124,0.12),-4px_-4px_10px_#FFFFFF] hover:shadow-[2px_2px_6px_rgba(157,78,124,0.14),-2px_-2px_6px_#FFFFFF] hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'bg-transparent text-[#9D4E7C] border-[1.5px] border-[#9D4E7C] hover:bg-[#9D4E7C] hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'bg-transparent text-[#9D4E7C] hover:bg-[#FDF2F8] hover:text-[#4A1D36] border border-transparent',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5 font-medium',
    md: 'text-sm px-4 py-2.5 rounded-xl gap-2 font-semibold',
    lg: 'text-base px-6 py-3.5 rounded-2xl gap-2.5 font-bold',
  };

  const iconSize = size === 'lg' ? 'w-5 h-5' : size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9D4E7C] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {Icon && iconPosition === 'left' && <Icon className={`${iconSize} shrink-0`} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={`${iconSize} shrink-0`} />}
    </button>
  );
};
