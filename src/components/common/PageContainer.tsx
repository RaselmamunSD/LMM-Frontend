import * as React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export function PageContainer({
  children,
  className = '',
  size = 'default',
}: PageContainerProps) {
  const maxWidth =
    size === 'narrow'
      ? 'max-w-4xl'
      : size === 'wide'
      ? 'max-w-7xl'
      : 'max-w-6xl';

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
}
