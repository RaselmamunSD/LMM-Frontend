'use client';

import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { noticesData } from '@/lib/data/notices';
import { Megaphone, ChevronRight } from 'lucide-react';

interface NoticeTickerProps {
  locale: Locale;
}

export function NoticeTicker({ locale }: NoticeTickerProps) {
  const isBn = locale === 'bn';

  // Take top active notices for ticker
  const tickerNotices = noticesData.slice(0, 6);

  return (
    <div className="relative w-full bg-[#FDF2F2] dark:bg-[#181213] border-b border-[#8B1E24]/20 dark:border-[#38181A] transition-colors overflow-hidden z-30 select-none">
      <div className="max-w-7xl mx-auto flex items-center h-9 sm:h-10 px-2 sm:px-4">
        {/* Left Badge: Latest Notice */}
        <div className="flex items-center shrink-0 z-10 pr-2 sm:pr-3">
          <Link
            href={`/${locale}/notices`}
            prefetch={true}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#8B1E24] hover:bg-[#73181D] text-white text-[11px] sm:text-xs font-bold shadow-2xs transition-transform active:scale-95 cursor-pointer"
          >
            <Megaphone className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce shrink-0" />
            <span className="whitespace-nowrap">
              {isBn ? 'জরুরি নোটিশ' : 'Notice'}
            </span>
          </Link>
        </div>

        {/* Center: Infinite Seamless Scrolling Ticker */}
        <div className="relative flex-1 overflow-hidden h-full flex items-center">
          {/* Subtle gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-r from-[#FDF2F2] dark:from-[#181213] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-l from-[#FDF2F2] dark:from-[#181213] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track (Repeated twice for seamless infinite loop) */}
          <div
            className="animate-marquee-continuous flex items-center py-1 cursor-pointer"
            title={isBn ? 'নোটিশ পড়তে মাউস রাখুন' : 'Hover to pause'}
          >
            {[...tickerNotices, ...tickerNotices].map((notice, idx) => (
              <Link
                key={`${notice.id}-${idx}`}
                href={`/${locale}/notices/${notice.id}`}
                prefetch={true}
                className="inline-flex items-center gap-2 px-3 sm:px-4 text-xs sm:text-[13px] font-medium text-text-primary hover:text-[#8B1E24] dark:hover:text-[#E58B8F] transition-colors whitespace-nowrap group"
              >
                {notice.isUrgent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E24] dark:bg-[#E58B8F] animate-pulse shrink-0" />
                )}
                <span className="group-hover:underline">
                  {notice.title[locale]}
                </span>
                <span className="text-[#8B1E24]/40 dark:text-[#C75B60]/40 pl-2">
                  ✦
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Action: All Notices Link */}
        <div className="hidden sm:flex items-center shrink-0 pl-2 z-10">
          <Link
            href={`/${locale}/notices`}
            prefetch={true}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B1E24] dark:text-[#E58B8F] hover:underline whitespace-nowrap cursor-pointer"
          >
            <span>{isBn ? 'সকল নোটিশ' : 'All Notices'}</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
