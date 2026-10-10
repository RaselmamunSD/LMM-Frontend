'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/types';
import { siteConfig, statsData } from '@/lib/data/site-config';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { IslamicStar } from '../common/IslamicPattern';

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const isBn = locale === 'bn';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface via-surface-alt to-surface-alt dark:from-[#111111] dark:via-[#161616] dark:to-[#111111] border-b border-border-color pt-8 pb-16 lg:pt-14 lg:pb-24 transition-colors duration-300">
      {/* Decorative Islamic Geometric background accents */}
      <div className="absolute inset-0 islamic-pattern-bg opacity-70 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#8B1E24]/5 dark:bg-[#C75B60]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#A52A2A]/5 dark:bg-[#8B1E24]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#8B1E24] border border-[#8B1E24]/20 dark:bg-[#2A1416] dark:border-[#8B1E24]/40 dark:text-[#E58B8F] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8B1E24] dark:text-[#C75B60] shrink-0" />
              <span>
                {isBn
                  ? '২০২৬ শিক্ষাবর্ষে নূরানী একাডেমিতে ভর্তি চলছে'
                  : 'Admissions Open for Academic Year 2026'}
              </span>
            </div>

            {/* Arabic calligraphy line */}
            <div className="text-primary font-medium text-sm sm:text-base tracking-widest font-arabic opacity-95">
              بِسْمِ اللَّهِ الرَّحْمَٰনِ الرَّحِيمِ
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.2]">
              <span>{isBn ? 'আলোকিত মানুষ গড়ার প্রত্যয়ে' : 'Nurturing Future Scholars at'}{' '}</span>
              <span className="text-primary block mt-1">
                {siteConfig.name[locale]}
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary block mt-1.5">
                {isBn ? 'নূরানী একাডেমি (প্লে শ্রেণি থেকে ৫ম শ্রেণি)' : 'Nurani Academy (Play to Grade 5)'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {isBn
                ? 'পবিত্র কুরআনুল কারীম সহীহ তারতীলে হিফজ ও নাজেরা পাঠ, আরবি ভাষা এবং জাতীয় শিক্ষাক্রমের আধুনিক সাধারণ শিক্ষার এক পূর্ণাঙ্গ ও সুশৃঙ্খল পরিবেশ।'
                : 'A disciplined, loving sanctuary integrating authentic Quranic recitation, Noorani Qaida, conversational Arabic, and modern primary academic excellence.'}
            </p>

            {/* Key feature pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {[
                isBn ? 'প্লে থেকে ৫ম শ্রেণি' : 'Play to Class 5',
                isBn ? 'বিশুদ্ধ মাখরাজ ও তাজবীদ' : 'Accurate Tajweed',
                isBn ? 'আরবি ও ইংরেজি চর্চা' : 'Arabic & English',
                isBn ? 'নৈতিক চরিত্র গঠন' : 'Moral Character',
              ].map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] text-text-secondary shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <Link
                href={`/${locale}/admission`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#8B1E24] hover:bg-[#73181D] text-white shadow-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <GraduationCap className="w-5 h-5 text-white" />
                <span>{isBn ? 'ভর্তির জন্য আবেদন করুন' : 'Apply for Admission'}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
              <Link
                href={`/${locale}/academic-programs`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-surface dark:bg-[#1C1C1C] hover:bg-surface-alt dark:hover:bg-[#262626] text-text-primary border border-border-color dark:border-[#2A2A2A] shadow-2xs transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-primary" />
                <span>{isBn ? 'একাডেমিক প্রোগ্রামসমূহ' : 'Explore Our Programs'}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual with Circular Logo & Islamic Card Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1E24]/15 via-[#A52A2A]/10 to-transparent dark:from-[#C75B60]/20 rounded-3xl transform rotate-3 scale-105 filter blur-lg" />

              {/* Main Visual Showcase Card */}
              <div className="relative bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-8 shadow-md text-center space-y-6 card-glow">
                {/* Madrasa Official Logo Display */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#050505] via-[#8B1E24] to-[#A52A2A] shadow-xs">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white p-2">
                    <Image
                      src="/images/logo.jpg"
                      alt={siteConfig.name[locale]}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 144px, 176px"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-text-primary">
                    {siteConfig.name[locale]}
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {siteConfig.subtitle[locale]}
                  </div>
                  <div className="text-xs text-text-muted">
                    {isBn ? 'সদর, লালমনিরহাট | স্থাপিত: ২০২৩ খ্রি.' : 'Sadar, Lalmonirhat | Est. 2023'}
                  </div>
                </div>

                {/* Islamic Card Divider */}
                <div className="flex items-center justify-center gap-2">
                  <span className="w-12 h-px bg-primary/30 dark:bg-[#C75B60]/40" />
                  <IslamicStar size={16} className="text-primary dark:text-[#C75B60]" />
                  <span className="w-12 h-px bg-primary/30 dark:bg-[#C75B60]/40" />
                </div>

                {/* Value Proposition snippet */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed bg-surface-subtle dark:bg-[#161616] p-3 rounded-xl border border-border-color dark:border-[#2A2A2A]">
                  {isBn
                    ? '❝ রাসুলুল্লাহ (সা.) ইরশাদ করেন: তোমাদের মধ্যে সর্বোত্তম ব্যক্তি সে, যে কুরআন শিক্ষা করে এবং অন্যকে শিক্ষা দেয়। ❞'
                    : '❝ The best of you are those who learn the Quran and teach it to others. (Bukhari) ❞'}
                </p>

                {/* Badge of Excellence */}
                <div className="flex items-center justify-center gap-4 text-xs text-text-secondary pt-1">
                  <div className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-primary dark:text-[#C75B60]" />
                    <span>{isBn ? 'নিরাপদ ক্যাম্পাস' : 'Secure Campus'}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 text-[#8B1E24] dark:text-[#C75B60]" />
                    <span>{isBn ? 'স্নেহময় তদারকি' : 'Caring Guidance'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="mt-14 pt-8 border-t border-border-color/80 dark:border-[#2A2A2A] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((st) => (
            <div
              key={st.id}
              className="p-4 rounded-2xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] text-center hover:border-primary/40 dark:hover:border-[#C75B60]/50 dark:hover:shadow-[0_0_15px_rgba(199,91,96,0.15)] transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-[#C75B60] tracking-tight">
                {st.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-text-secondary mt-1">
                {st.label[locale]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
