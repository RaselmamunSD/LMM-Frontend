import * as React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { facilitiesData } from '@/lib/data/facilities';
import { PageContainer } from '@/components/common/PageContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  School,
  BookOpen,
  Moon,
  Shield,
  Library,
  Droplets,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'ক্যাম্পাস সুযোগ-সুবিধা' : 'Campus Facilities & Environment',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার স্বাস্থ্যসম্মত ক্লাসরুম, কুরআন তিলাওয়াত পরিবেশ, নিরাপত্তা ও ওযু সুবিধা।'
      : 'Explore the modern, secure, and clean facilities provided at Lalmonirhat Model Madrasa.',
  };
}

const iconMap: Record<string, React.ElementType> = {
  School,
  BookOpen,
  Moon,
  Shield,
  Library,
  Droplets,
};

export default async function FacilitiesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PageContainer>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 text-white shadow-lg mb-12">
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs inline-block shadow-xs">
              {isBn ? 'আধুনিক অবকাঠামো' : 'Modern Infrastructure'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'ক্যাম্পাস ও সুযোগ-সুবিধা' : 'Campus Amenities & Learning Spaces'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'শিশুদের সুস্থ মানসিক বিকাশ, দ্বীনি পরিবেশ এবং স্বাস্থ্য সুরক্ষায় নিবেদিত আধুনিক ও রুচিশীল সুযোগ-সুবিধা।'
                : 'Designed to foster physical well-being, spiritual contemplation, and safe, comfortable primary study.'}
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {facilitiesData.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || School;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={fac.id}
                className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-10 shadow-xs hover:shadow-md dark:hover:border-[#C75B60]/40 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Text Content */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:col-start-6' : ''}`}>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-[#8B1E24]/20 border border-primary/20 dark:border-[#C75B60]/30 flex items-center justify-center text-primary dark:text-[#C75B60]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                      {fac.title[locale]}
                    </h2>

                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {fac.description[locale]}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                        {isBn ? 'প্রধান সুবিধাসমূহ:' : 'Key Highlights:'}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {fac.features[locale].map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Graphic / Image Representation */}
                  <div
                    className={`lg:col-span-5 flex justify-center ${
                      isEven ? 'lg:col-start-1' : ''
                    }`}
                  >
                    <div className="relative w-full aspect-16/11 rounded-2xl overflow-hidden bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] flex flex-col items-center justify-center p-6 text-center group">
                      <div className="w-14 h-14 rounded-full bg-primary/15 dark:bg-[#8B1E24]/25 text-primary dark:text-[#C75B60] flex items-center justify-center mb-3">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="font-bold text-sm text-text-primary">
                        {fac.title[locale]}
                      </div>
                      <span className="text-[11px] text-text-muted mt-1">
                        {isBn ? 'সদর, লালমনিরহাট ক্যাম্পাস' : 'Sadar, Lalmonirhat Campus'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </div>
  );
}
