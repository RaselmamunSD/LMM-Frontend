import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/types';
import { academicPrograms } from '@/lib/data/programs';
import { locales } from '@/lib/i18n';
import { PageContainer } from '@/components/common/PageContainer';
import {
  Clock,
  Calendar,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Target,
  Sparkles,
  Award,
  ArrowRight,
  ChevronLeft,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const prog of academicPrograms) {
      paths.push({ locale, slug: prog.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const program = academicPrograms.find((p) => p.slug === slug);

  if (!program) return { title: 'Program Not Found' };

  return {
    title: `${program.name[locale]} | পাঠ্যক্রম ও বিবরণ`,
    description: program.description[locale],
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  const program = academicPrograms.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PageContainer>

        {/* Header Hero */}
        <div className="bg-surface-alt dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-10 shadow-xs card-glow space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#FDF2F2] text-[#8B1E24] dark:bg-[#2A1416] dark:text-[#E58B8F] border border-[#8B1E24]/20 dark:border-[#8B1E24]/40">
              <GraduationCap className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
              <span>{program.classLevel[locale]}</span>
            </div>
            {program.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#8B1E24] dark:bg-[#2A1416] dark:text-[#E58B8F] border border-[#8B1E24]/20 dark:border-[#8B1E24]/40">
                {program.badge[locale]}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
            {program.name[locale]}
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
            {program.description[locale]}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-text-muted border-t border-border-color dark:border-[#2A2A2A]">
            <div className="flex items-center gap-1.5 font-medium text-text-primary">
              <Clock className="w-4 h-4 text-primary dark:text-[#C75B60]" />
              <span>
                {isBn ? 'বয়সসীমা:' : 'Age Eligibility:'} {program.ageEligibility[locale]}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-text-primary">
              <Calendar className="w-4 h-4 text-primary dark:text-[#C75B60]" />
              <span>
                {isBn ? 'কোর্স মেয়াদ:' : 'Duration:'} {program.duration[locale]}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left 8 Cols: Overview, Objectives, Subjects, Outcomes */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary dark:text-[#C75B60]" />
                <span>{isBn ? 'শ্রেণির সংক্ষিপ্ত সারসংক্ষেপ' : 'Program Overview'}</span>
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed bg-surface dark:bg-[#1C1C1C] p-6 rounded-2xl border border-border-color dark:border-[#2A2A2A] card-glow">
                {program.overview[locale]}
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary flex items-center gap-2">
                <Target className="w-5 h-5 text-primary dark:text-[#C75B60]" />
                <span>{isBn ? 'প্রধান শিক্ষণীয় উদ্দেশ্যসমূহ' : 'Learning Objectives'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.learningObjectives[locale].map((obj, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] flex items-start gap-3 shadow-2xs card-glow"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {obj}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subjects Taught */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary dark:text-[#C75B60]" />
                <span>{isBn ? 'পাঠ্য বিষয়সমূহ' : 'Subjects Taught'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {program.subjects[locale].map((sub, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 rounded-xl bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-xs sm:text-sm font-semibold text-text-primary flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary dark:bg-[#C75B60]" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary flex items-center gap-2">
                <Award className="w-5 h-5 text-primary dark:text-[#C75B60]" />
                <span>{isBn ? 'শিক্ষণের ফলাফল ও অর্জন' : 'Expected Learning Outcomes'}</span>
              </h2>
              <div className="space-y-3">
                {program.learningOutcomes[locale].map((out, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] flex items-start gap-3 card-glow"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {out}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 4 Cols: Admission Box & Other Classes */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Admission CTA */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 text-white space-y-4 shadow-lg card-glow">
              <h3 className="text-lg font-bold">
                {isBn ? 'এই শ্রেণিতে ভর্তি আবেদন' : 'Apply for this Class'}
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                {isBn
                  ? '২০২৬ শিক্ষাবর্ষের জন্য সীমিত আসনে সরাসরি আবেদন করুন। আসন পূরণ সাপেক্ষে ভর্তি বন্ধ হবে।'
                  : 'Submit your admission application now for academic year 2026. Limited seats available.'}
              </p>
              <Link
                href={`/${locale}/admission?class=${program.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-white text-[#8B1E24] hover:bg-neutral-100 dark:bg-[#8B1E24] dark:hover:bg-[#73181D] dark:text-white transition-colors shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-[#8B1E24] dark:text-white" />
                <span>{isBn ? 'অনলাইনে আবেদন ফরম পূরণ' : 'Fill Application Form'}</span>
              </Link>
            </div>

            {/* Admission Requirements */}
            <div className="p-6 rounded-3xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] space-y-4 shadow-xs card-glow">
              <h3 className="font-bold text-sm text-text-primary uppercase tracking-wider">
                {isBn ? 'ভর্তির জন্য আবশ্যকীয় শর্ত' : 'Admission Requirements'}
              </h3>
              <ul className="space-y-2.5 text-xs text-text-secondary">
                {program.admissionRequirements[locale].map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* All Classes Navigation */}
            <div className="p-6 rounded-3xl bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] space-y-3 shadow-xs card-glow">
              <h3 className="font-bold text-sm text-text-primary uppercase tracking-wider">
                {isBn ? 'অন্যান্য শ্রেণিসমূহ' : 'Explore Other Classes'}
              </h3>
              <div className="space-y-1 text-xs">
                {academicPrograms.map((p) => {
                  const isCurrent = p.slug === program.slug;
                  return (
                    <Link
                      key={p.id}
                      href={`/${locale}/academic-programs/${p.slug}`}
                      className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                        isCurrent
                          ? 'bg-[#8B1E24] text-white font-bold shadow-xs'
                          : 'text-text-secondary hover:bg-surface-subtle dark:hover:bg-[#262626] hover:text-text-primary'
                      }`}
                    >
                      <span>{p.name[locale]}</span>
                      <span className="text-[11px] opacity-80">{p.ageEligibility[locale]}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
