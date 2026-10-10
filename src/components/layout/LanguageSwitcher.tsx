'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/types';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
  onSelect?: () => void;
}

export function LanguageSwitcher({ currentLocale, className = '', onSelect }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    if (segments[1] === 'bn' || segments[1] === 'en') {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }
    return segments.join('/') || `/${targetLocale}`;
  };

  const bnPath = getLocalePath('bn');
  const enPath = getLocalePath('en');

  return (
    <div
      className={`inline-flex items-center p-1 rounded-2xl border border-[#D1D5DB] dark:border-[#333333] bg-white dark:bg-[#1C1C1C] shadow-2xs ${className}`}
    >
      <Link
        href={bnPath}
        prefetch={true}
        onClick={onSelect}
        className={`px-3.5 py-1 text-xs sm:text-[13px] font-bold rounded-xl transition-all duration-150 cursor-pointer min-w-[40px] text-center ${
          currentLocale === 'bn'
            ? 'bg-[#8B1E24] text-white shadow-2xs'
            : 'text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#8B1E24] dark:hover:text-[#C75B60]'
        }`}
        aria-label="বাংলা ভাষায় দেখুন"
      >
        বাং
      </Link>
      <Link
        href={enPath}
        prefetch={true}
        onClick={onSelect}
        className={`px-3.5 py-1 text-xs sm:text-[13px] font-bold rounded-xl transition-all duration-150 cursor-pointer min-w-[40px] text-center ${
          currentLocale === 'en'
            ? 'bg-[#8B1E24] text-white shadow-2xs'
            : 'text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#8B1E24] dark:hover:text-[#C75B60]'
        }`}
        aria-label="View in English"
      >
        EN
      </Link>
    </div>
  );
}
