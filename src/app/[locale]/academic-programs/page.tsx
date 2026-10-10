import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { academicPrograms } from '@/lib/data/programs';
import { PageContainer } from '@/components/common/PageContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProgramCard } from '@/components/academic/ProgramCard';
import { GraduationCap, BookOpen, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'একাডেমিক প্রোগ্রামসমূহ (প্লে - ৫ম শ্রেণি)' : 'Academic Programs (Play to Grade 5)',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার প্লে গ্রুপ, নার্সারি এবং ১ম থেকে ৫ম শ্রেণির শিক্ষা কার্যক্রম ও পাঠ্যসূচি।'
      : 'Comprehensive academic programs from Play Group to Class Five at Lalmonirhat Model Madrasa.',
  };
}

export default async function AcademicProgramsPage({ params }: PageProps) {
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
              {isBn ? 'নূরানী একাডেমি শাখা' : 'Nurani Academy Wing'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'একাডেমিক প্রোগ্রামসমূহ' : 'Academic Programs'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'প্লে গ্রুপ থেকে শুরু করে পঞ্চম শ্রেণি পর্যন্ত প্রতিটি স্তরের জন্য বিজ্ঞানসম্মত নূরানী কুরআন শিক্ষা এবং জাতীয় কারিকুলামের পূর্ণাঙ্গ বিষয়ভিত্তিক পাঠদান।'
                : 'Balanced dual-track academic offerings from Play Group through Class Five, fostering Quranic literacy and modern academic mastery.'}
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {academicPrograms.map((prog) => (
            <ProgramCard key={prog.id} program={prog} locale={locale} />
          ))}
        </div>

        {/* Secondary Alia Wing Upcoming Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-surface-alt dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] card-glow space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-primary dark:text-[#C75B60] uppercase">
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-[#C75B60]" />
            <span>{isBn ? 'পরবর্তী সম্প্রসারণ পরিকল্পনা' : 'Upcoming Expansion'}</span>
          </div>
          <h3 className="text-xl font-bold text-text-primary">
            {isBn
              ? 'আলিয়া নেসাব: ৬ষ্ঠ শ্রেণি থেকে ১০ম শ্রেণি (পর্যায়ক্রমে)'
              : 'Alia Section: Grade 6 to Grade 10 (In Phased Expansion)'}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {isBn
              ? 'নূরানী একাডেমি থেকে ৫ম শ্রেণি উত্তীর্ণ শিক্ষার্থীদের দ্বীনি ধারাবাহিকতা বজায় রাখতে এবং দাখিল স্তরে উত্তীর্ণ করার লক্ষ্যে আমাদের আলিয়া নেসাব শাখা পর্যায়ক্রমে চালু হবে। ইনশাআল্লাহ।'
              : 'To enable graduates of our Nurani Academy to continue their secondary Islamic studies and board examinations, our Alia secondary wing will unfold progressively.'}
          </p>
          <div className="pt-2">
            <Link
              href={`/${locale}/admission`}
              className="inline-flex items-center gap-2 text-xs font-bold text-primary dark:text-[#C75B60] hover:underline"
            >
              <span>{isBn ? 'ভর্তির নিয়মাবলী ও তথ্য জানুন' : 'Check Admission Guidelines'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
