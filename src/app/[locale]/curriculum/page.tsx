import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { curriculumCategories } from '@/lib/data/curriculum';
import { PageContainer } from '@/components/common/PageContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  BookOpen,
  Sparkles,
  Languages,
  ShieldCheck,
  HeartHandshake,
  PenTool,
  Globe,
  Calculator,
  Lightbulb,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'পাঠ্যক্রম ও সিলেবাস বিবরণ' : 'Curriculum & Academic Syllabus',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার ৯টি মূল বিষয়ে সমৃদ্ধ দ্বীনি ও সাধারণ পাঠ্যক্রম।'
      : 'Comprehensive dual-track curriculum across Quran, Tajweed, Arabic, and General NCTB subjects.',
  };
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Sparkles,
  Languages,
  ShieldCheck,
  HeartHandshake,
  PenTool,
  Globe,
  Calculator,
  Lightbulb,
};

export default async function CurriculumPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PageContainer>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 text-white shadow-lg mb-12">
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs inline-block shadow-xs">
              {isBn ? 'সমন্বিত দ্বৈত কারিকুলাম' : 'Integrated Dual Curriculum'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'আমাদের পাঠ্যক্রম ও শিক্ষাক্রম' : 'Our Comprehensive Curriculum'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'পবিত্র কুরআনুল কারীমের নূরানী তাজবীদ ও হিফজের সাথে জাতীয় শিক্ষাক্রমের আধুনিক সাধারণ শিক্ষার এক চমৎকার সমন্বয়।'
                : 'A cohesive synthesis of authentic Quranic phonetics, Arabic fluency, and national standard primary academics.'}
            </p>
          </div>
        </div>

        {/* Subject Categories Grid */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {curriculumCategories.map((cat, idx) => {
              const Icon = iconMap[cat.icon] || BookOpen;
              return (
                <div
                  key={cat.id}
                  className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md dark:hover:border-[#C75B60]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-[#8B1E24]/20 border border-primary/20 dark:border-[#C75B60]/30 flex items-center justify-center text-primary dark:text-[#C75B60] shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold text-text-primary">
                            {cat.title[locale]}
                          </h2>
                          <span className="text-xs font-semibold text-primary dark:text-[#C75B60]">
                            {cat.levels[locale]}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-text-muted">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                      {cat.description[locale]}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                        {isBn ? 'প্রধান পাঠ্য বৈশিষ্ট্য:' : 'Key Instructional Focus:'}
                      </div>
                      <div className="space-y-1.5">
                        {cat.highlights[locale].map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Syllabus Topics */}
                    <div className="pt-4 border-t border-border-color dark:border-[#2A2A2A]">
                      <div className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                        {isBn ? 'সিলেবাসের আলোচিত অধ্যায়:' : 'Syllabus Highlights:'}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.syllabusTopics[locale].map((topic, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-text-secondary"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Admission CTA at bottom of Curriculum */}
        <div className="mt-14 p-8 rounded-3xl bg-surface-alt dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-center space-y-4">
          <h3 className="text-xl font-bold text-text-primary">
            {isBn
              ? 'আপনার সন্তানের জন্য যুগোপযোগী পাঠ্যক্রম বেছে নিন'
              : 'Choose a Future-Proof Curriculum for Your Child'}
          </h3>
          <p className="text-sm text-text-secondary max-w-xl mx-auto">
            {isBn
              ? '২০২৬ শিক্ষাবর্ষে প্লে থেকে ৫ম শ্রেণিতে আপনার পছন্দের শ্রেণিতে আজই ভর্তির আবেদন জমা দিন।'
              : 'Enroll your child in Play Group through Class Five for the 2026 academic session.'}
          </p>
          <div className="pt-2">
            <Link
              href={`/${locale}/admission`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white shadow-sm dark:shadow-[0_0_20px_rgba(139,30,36,0.3)] transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-white" />
              <span>{isBn ? 'অনলাইনে ভর্তি আবেদন' : 'Apply for Admission'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
