import React from 'react';

export interface ChromeIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export const ChromeIcon: React.FC<ChromeIconProps> = ({
  className = 'w-5 h-5',
  size,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google Chrome"
      role="img"
      {...props}
    >
      {/* Red Section */}
      <path
        d="M24 12H44.7812a23.9939 23.9939 0 0 0-41.5639.0029L13.6079 30l.0093-.0024A11.9852 11.9852 0 0 1 24 12Z"
        fill="#EA4335"
      />
      {/* Yellow Section */}
      <path
        d="M34.3913 30.0029L24.0007 48A23.994 23.994 0 0 0 44.78 12.0031H23.9989l-.0025.0093A11.985 11.985 0 0 1 34.3913 30.0029Z"
        fill="#FBBC04"
      />
      {/* Green Section */}
      <path
        d="M13.6086 30.0031L3.218 12.006A23.994 23.994 0 0 0 24.0025 48L34.3931 30.0029l-.0067-.0068a11.9852 11.9852 0 0 1-10.7778 5.9939Z"
        fill="#34A853"
      />
      {/* Inner White Ring Boundary */}
      <circle cx="24" cy="24" r="12" fill="#FFFFFF" />
      {/* Central Blue Core */}
      <circle cx="24" cy="24" r="9.5" fill="#1A73E8" />
    </svg>
  );
};
