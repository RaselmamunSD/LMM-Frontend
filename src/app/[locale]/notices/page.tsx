import * as React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { noticesData } from '@/lib/data/notices';
import { PageContainer } from '@/components/common/PageContainer';
import { NoticeBoardClient } from '@/components/notices/NoticeBoardClient';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'নোটিশ বোর্ড ও দাপ্তরিক বিজ্ঞপ্তি' : 'Notice Board & Official Circulars',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার সকল প্রাতিষ্ঠানিক নোটিশ, পরীক্ষার সময়সূচি ও ভর্তি বিজ্ঞপ্তি।'
      : 'Official notices, exam schedules, and circulars for Lalmonirhat Model Madrasa.',
  };
}

export default async function NoticesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PageContainer>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 text-white shadow-lg mb-12">
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs inline-block">
              {isBn ? 'দাপ্তরিক নোটিশ ও সার্কুলার' : 'Official Announcements'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'নোটিশ বোর্ড' : 'Madrasa Notice Board'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'ভর্তি, পরীক্ষা, ছুটির তালিকা, অনুষ্ঠান এবং প্রাতিষ্ঠানিক সকল নির্দেশনাবলী জানতে চোখ রাখুন।'
                : 'Stay informed with current timetables, academic circulars, vacation notifications, and administrative guidelines.'}
            </p>
          </div>
        </div>

        <NoticeBoardClient notices={noticesData} locale={locale} />
      </PageContainer>
    </div>
  );
}
