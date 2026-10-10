import * as React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { teachersData } from '@/lib/data/teachers';
import { PageContainer } from '@/components/common/PageContainer';
import { TeachersDirectory } from '@/components/teachers/TeachersDirectory';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'শিক্ষকমণ্ডলী তালিকা' : 'Faculty & Teachers Directory',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার সম্মানিত শিক্ষকমণ্ডলীর পরিচিতি, যোগ্যতা ও অভিজ্ঞতা।'
      : 'Profiles, qualifications, and teaching portfolios of faculty members at Lalmonirhat Model Madrasa.',
  };
}

export default async function TeachersPage({ params }: PageProps) {
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
              {isBn ? 'দক্ষ ও নিবেদিতপ্রাণ শিক্ষক' : 'Qualified & Caring Mentors'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'সম্মানিত শিক্ষকমণ্ডলী' : 'Our Respected Faculty Members'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'উচ্চতর দ্বীনি ডিগ্রি ও সাধারণ শিক্ষায় পারদর্শী এমন অভিজ্ঞ শিক্ষকবৃন্দের স্নেহময় পরিচর্যায় গড়ে উঠছে প্রতিটি শিক্ষার্থী।'
                : 'Guided by certified Qaris, Islamic scholars, and seasoned graduate educators with boundless dedication to child education.'}
            </p>
          </div>
        </div>

        <TeachersDirectory teachers={teachersData} locale={locale} />
      </PageContainer>
    </div>
  );
}
