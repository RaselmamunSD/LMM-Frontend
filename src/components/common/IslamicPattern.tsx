import * as React from 'react';

interface IslamicPatternProps {
  className?: string;
  size?: number;
}

export function IslamicStar({ className = 'text-primary', size = 24 }: IslamicPatternProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 0L28.5 15.5L44 11L32.5 24L44 37L28.5 32.5L24 48L19.5 32.5L4 37L15.5 24L4 11L19.5 15.5L24 0Z"
        opacity="0.85"
      />
      <circle cx="24" cy="24" r="5" fill="#8B1E24" />
    </svg>
  );
}

export function IslamicDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-primary opacity-40"></span>
      <IslamicStar size={18} className="text-primary" />
      <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-primary opacity-40"></span>
    </div>
  );
}
