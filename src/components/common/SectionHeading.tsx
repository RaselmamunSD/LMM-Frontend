import * as React from 'react';
import { IslamicDivider } from './IslamicPattern';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-badge-bg text-badge-text border border-primary/20 mb-3 shadow-xs">
          <span>★</span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-tight">
        {title}
      </h2>
      {centered && <IslamicDivider className="my-3" />}
      {subtitle && (
        <p className="text-base sm:text-lg text-text-secondary mt-3 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
