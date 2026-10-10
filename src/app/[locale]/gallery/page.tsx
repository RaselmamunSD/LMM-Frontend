import * as React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { galleryData } from '@/lib/data/gallery';
import { PageContainer } from '@/components/common/PageContainer';
import { GalleryClient } from '@/components/gallery/GalleryClient';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'ফটো গ্যালারি ও চিত্রশালা' : 'Photo Gallery & Campus Moments',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার শ্রেণিকক্ষ, কুরআন তিলাওয়াত, ক্রীড়া ও সাংস্কৃতিক কর্মকাণ্ডের মনোরম স্থিরচিত্র।'
      : 'Visual gallery capturing moments of academic learning, sports, and spiritual life at Lalmonirhat Model Madrasa.',
  };
}

export default async function GalleryPage({ params }: PageProps) {
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
              {isBn ? 'চিত্রশালা' : 'Visual Showcase'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'মাদ্রাসা ফটো গ্যালারি' : 'Campus Photo Gallery'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'আমাদের শ্রেণিকক্ষের প্রাণবন্ত মুহূর্ত, কুরআন তিলাওয়াত প্রশিক্ষণ, শিশুতোষ ক্রীড়া উৎসব ও বার্ষিক আয়োজনের বিশেষ দৃশ্য।'
                : 'Snapshots of children thriving in a joyful, values-grounded Islamic learning atmosphere.'}
            </p>
          </div>
        </div>

        <GalleryClient items={galleryData} locale={locale} />
      </PageContainer>
    </div>
  );
}
