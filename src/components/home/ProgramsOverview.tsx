import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { academicPrograms } from '@/lib/data/programs';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { ProgramCard } from '../academic/ProgramCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProgramsOverviewProps {
  locale: Locale;
}

export function ProgramsOverview({ locale }: ProgramsOverviewProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-24 bg-surface">
      <PageContainer>
        <SectionHeading
          badge={isBn ? 'শ্রেণিভিত্তিক কার্যক্রম' : 'Academic Classes'}
          title={
            isBn
              ? 'প্লে গ্রুপ থেকে ৫ম শ্রেণি পর্যন্ত শিক্ষা কার্যক্রম'
              : 'Academic Programs: Play Group to Class Five'
          }
          subtitle={
            isBn
              ? 'প্রতিটি শিশুর বয়স, মানসিক সক্ষমতা ও দ্বীনি ভিত্তি বিবেচনায় প্রস্তুতকৃত সমন্বিত শিক্ষাক্রম।'
              : 'A tailored age-appropriate curriculum merging authentic Quranic fluency with comprehensive national primary education.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {academicPrograms.slice(0, 6).map((prog) => (
            <ProgramCard key={prog.id} program={prog} locale={locale} />
          ))}
        </div>

        {/* View all programs footer link */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/academic-programs`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow transition-all"
          >
            <span>{isBn ? 'সকল শ্রেণির পূর্ণ বিবরণ দেখুন' : 'Explore All 7 Class Programs'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
