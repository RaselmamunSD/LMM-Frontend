import * as React from 'react';
import Link from 'next/link';
import { AcademicProgram, Locale } from '@/types';
import {
  Baby,
  BookOpen,
  GraduationCap,
  Award,
  Compass,
  Sparkles,
  Trophy,
  ArrowRight,
  Clock,
  Calendar,
} from 'lucide-react';

interface ProgramCardProps {
  program: AcademicProgram;
  locale: Locale;
}

const iconMap: Record<string, React.ElementType> = {
  Baby,
  BookOpen,
  GraduationCap,
  Award,
  Compass,
  Sparkles,
  Trophy,
};

export function ProgramCard({ program, locale }: ProgramCardProps) {
  const isBn = locale === 'bn';
  const Icon = iconMap[program.iconName] || BookOpen;

  return (
    <div className="group relative bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-2xl p-6 shadow-xs hover:shadow-md dark:hover:border-[#C75B60]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 card-glow">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-[#8B1E24]/20 border border-primary/20 dark:border-[#C75B60]/30 flex items-center justify-center text-primary dark:text-[#C75B60] group-hover:bg-primary dark:group-hover:bg-[#8B1E24] group-hover:text-white transition-colors duration-200">
            <Icon className="w-6 h-6" />
          </div>
          {program.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FDF2F2] dark:bg-[#2A1416] text-[#8B1E24] dark:text-[#E58B8F] border border-[#8B1E24]/20 dark:border-[#8B1E24]/40">
              {program.badge[locale]}
            </span>
          )}
        </div>

        {/* Title & Level */}
        <h3 className="text-lg font-bold text-text-primary group-hover:text-primary dark:group-hover:text-[#C75B60] transition-colors">
          {program.name[locale]}
        </h3>
        <p className="text-xs font-semibold text-primary dark:text-[#C75B60] mb-3">
          {program.classLevel[locale]}
        </p>

        {/* Metadata info */}
        <div className="flex items-center gap-3 text-xs text-text-muted mb-4 pb-3 border-b border-border-color dark:border-[#2A2A2A]">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
            <span>{program.ageEligibility[locale]}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
            <span>{program.duration[locale]}</span>
          </div>
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
          {program.description[locale]}
        </p>

        {/* Subjects snapshot */}
        <div className="mb-4">
          <div className="text-[11px] font-bold text-text-primary uppercase tracking-wider mb-1.5">
            {isBn ? 'প্রধান পাঠ্য বিষয়:' : 'Key Subjects:'}
          </div>
          <div className="flex flex-wrap gap-1">
            {program.subjects[locale].slice(0, 3).map((sub, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-text-secondary"
              >
                {sub}
              </span>
            ))}
            {program.subjects[locale].length > 3 && (
              <span className="text-[11px] px-1.5 py-0.5 text-text-muted">
                +{program.subjects[locale].length - 3} {isBn ? 'আরও' : 'more'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="pt-3 border-t border-border-color dark:border-[#2A2A2A] flex items-center justify-between">
        <Link
          href={`/${locale}/academic-programs/${program.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-[#C75B60] group-hover:text-primary-hover group-hover:underline"
        >
          <span>{isBn ? 'বিস্তারিত পাঠ্যক্রম' : 'Full Syllabus'}</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href={`/${locale}/admission?class=${program.slug}`}
          className="text-[11px] font-semibold text-text-secondary hover:text-primary dark:hover:text-[#C75B60] px-2.5 py-1 rounded border border-border-color dark:border-[#2A2A2A] hover:border-primary dark:hover:border-[#C75B60] transition-colors"
        >
          {isBn ? 'ভর্তি হন' : 'Apply'}
        </Link>
      </div>
    </div>
  );
}
