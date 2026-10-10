import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { siteConfig } from '@/lib/data/site-config';
import { PageContainer } from '../common/PageContainer';
import { GraduationCap, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { IslamicStar } from '../common/IslamicPattern';

interface AdmissionCtaProps {
  locale: Locale;
}

export function AdmissionCta({ locale }: AdmissionCtaProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-20 bg-surface dark:bg-[#111111] transition-colors duration-300">
      <PageContainer>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 lg:p-16 text-white shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Subtle Islamic background aura */}
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#C75B60]/20 dark:bg-[#8B1E24]/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E58B8F]" />
              <span>{isBn ? '২০২৬ শিক্ষাবর্ষে ভর্তি চলছে' : 'Admissions Open 2026'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              {isBn
                ? 'আপনার সন্তানের আলোকিত দ্বীনি ভবিষ্যতের সূচনা হোক আজই'
                : 'Empower Your Child with Quranic Wisdom & Academic Mastery'}
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
              {isBn
                ? 'প্লে গ্রুপ, নার্সারি এবং ১ম থেকে ৫ম শ্রেণি পর্যন্ত সীমিত আসনে ছাত্র ও ছাত্রী ভর্তি নেওয়া হচ্ছে। দ্রুত অনলাইনে আবেদন করুন অথবা মাদ্রাসার অফিসে যোগাযোগ করুন।'
                : 'Limited seats available across Play Group through Class Five. Submit your online application today or visit our campus office in Sadar, Lalmonirhat.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href={`/${locale}/admission`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white text-[#8B1E24] hover:bg-neutral-100 dark:bg-[#8B1E24] dark:hover:bg-[#73181D] dark:text-white dark:border dark:border-[#C75B60]/40 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none"
              >
                <GraduationCap className="w-5 h-5 text-[#8B1E24] dark:text-white" />
                <span>{isBn ? 'অনলাইনে ভর্তি ফরম পূরণ করুন' : 'Apply Online Now'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <a
                href={`tel:${siteConfig.phone[0]}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>{siteConfig.phone[0]}</span>
              </a>
            </div>

            <div className="text-xs text-white/80 pt-2 flex items-center justify-center gap-2">
              <IslamicStar size={14} className="text-[#E58B8F]" />
              <span>
                {isBn
                  ? 'সরাসরি অফিস থেকে আবেদনপত্র সংগ্রহ: সকাল ৮:০০টা - বিকাল ৪:০০টা'
                  : 'Campus Office Hours: Saturday to Thursday, 8:00 AM - 4:00 PM'}
              </span>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
