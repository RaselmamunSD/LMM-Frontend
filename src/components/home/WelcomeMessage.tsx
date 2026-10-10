import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/types';
import { PageContainer } from '../common/PageContainer';
import { siteConfig } from '@/lib/data/site-config';
import { IslamicStar } from '../common/IslamicPattern';
import {
  Quote,
  ArrowRight,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  PhoneCall,
  Award,
  Sparkles,
} from 'lucide-react';

interface WelcomeMessageProps {
  locale: Locale;
}

export function WelcomeMessage({ locale }: WelcomeMessageProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-surface via-[#FDF9F9] to-surface dark:from-[#111111] dark:via-[#161213] dark:to-[#111111] border-y border-border-color dark:border-[#262626] transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Islamic Pattern Watermark & Ambient Radial Glows */}
      <div className="absolute inset-0 islamic-pattern-bg opacity-[0.035] dark:opacity-[0.045] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#8B1E24]/10 dark:bg-[#8B1E24]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#8B1E24]/10 dark:bg-[#8B1E24]/15 rounded-full blur-3xl pointer-events-none" />

      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Column: Muhtamim Executive Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Soft decorative glow behind the card */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#8B1E24] via-[#A52A2A] to-[#050505] rounded-[2.5rem] opacity-25 dark:opacity-35 blur-lg" />

              <div className="relative rounded-[2.2rem] bg-white dark:bg-[#1A1A1A] border-2 border-[#8B1E24]/20 dark:border-[#8B1E24]/40 shadow-xl overflow-hidden">
                {/* Top Brand Ribbon */}
                <div className="h-3 bg-gradient-to-r from-[#050505] via-[#8B1E24] to-[#A52A2A]" />

                {/* Card Header Pattern & Emblem */}
                <div className="pt-8 pb-5 px-6 text-center bg-gradient-to-b from-[#8B1E24]/5 via-transparent to-transparent relative">
                  {/* Subtle decorative Islamic stars on top corners */}
                  <div className="absolute top-3 left-4 opacity-25">
                    <IslamicStar size={16} className="text-[#8B1E24]" />
                  </div>
                  <div className="absolute top-3 right-4 opacity-25">
                    <IslamicStar size={16} className="text-[#8B1E24]" />
                  </div>

                  {/* Muhtamim Medallion with rotating decorative halo */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#8B1E24]/40 dark:border-[#C75B60]/40 animate-[spin_40s_linear_infinite]" />
                    <div className="absolute inset-1.5 rounded-full bg-gradient-to-tr from-[#050505] via-[#8B1E24] to-[#A52A2A] p-0.5 shadow-md">
                      <div className="w-full h-full rounded-full bg-white dark:bg-[#141414] overflow-hidden flex items-center justify-center relative">
                        <Image
                          src="/images/logo.jpg"
                          alt={siteConfig.name[locale]}
                          fill
                          sizes="128px"
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                    {/* Official Verified Seal Icon */}
                    <div
                      className="absolute -bottom-1 -right-1 bg-[#8B1E24] text-white p-1.5 rounded-full shadow-md border-2 border-white dark:border-[#1A1A1A]"
                      title={isBn ? 'অধ্যক্ষের দপ্তর • অনুমোদিত' : 'Office of Principal • Verified'}
                    >
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="space-y-1">
                    <div className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#8B1E24]/10 dark:bg-[#8B1E24]/20 text-[#8B1E24] dark:text-[#E58B8F] border border-[#8B1E24]/20 uppercase tracking-wider mb-1">
                      {isBn ? 'মুহতামিম ও প্রধান শিক্ষক' : 'Principal & Head Teacher'}
                    </div>
                    <h3 className="text-xl font-extrabold text-text-primary tracking-tight">
                      {isBn ? 'মাওলানা মুহাম্মদ আব্দুর রহমান' : 'Mawlana Muhammad Abdur Rahman'}
                    </h3>
                    <p className="text-xs font-semibold text-[#8B1E24] dark:text-[#E58B8F]">
                      {isBn ? 'দাওরায়ে হাদিস (মাস্টার্স)' : 'Dawra-e-Hadith (Master of Islamic Studies)'}
                    </p>
                    <p className="text-[11px] text-text-muted">
                      {siteConfig.name[locale]}
                    </p>
                  </div>
                </div>

                {/* Card Meta & Direct Call */}
                <div className="px-5 sm:px-6 pb-6 space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#FBF7F7] dark:bg-[#222222] border border-[#8B1E24]/15 dark:border-[#333333] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-muted font-medium">
                        {isBn ? 'দাপ্তরিক দায়িত্ব:' : 'Office Role:'}
                      </span>
                      <span className="font-bold text-text-primary">
                        {isBn ? 'সার্বিক দ্বীনি ও প্রশাসনিক নেতৃত্ব' : 'Academic & Religious Leadership'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-border-color dark:border-[#2A2A2A]">
                      <span className="text-text-muted font-medium">
                        {isBn ? 'প্রতিষ্ঠাকাল:' : 'Established:'}
                      </span>
                      <span className="font-bold text-[#8B1E24] dark:text-[#E58B8F]">
                        {isBn ? '২০২৩ খ্রিষ্টাব্দ' : '2023 A.D.'}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`tel:${siteConfig.phone[0]}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface hover:bg-[#8B1E24] text-text-primary hover:text-white border border-[#8B1E24]/20 hover:border-[#8B1E24] text-xs font-bold transition-all duration-200 shadow-2xs group cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#8B1E24] group-hover:text-white transition-colors" />
                    <span>{isBn ? 'অধ্যক্ষের কার্যালয়ে যোগাযোগ' : 'Contact Principal Office'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Message & Academic Highlights */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge & Bismillah Calligraphy */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#8B1E24]/10 text-[#8B1E24] border border-[#8B1E24]/25 dark:bg-[#8B1E24]/20 dark:text-[#E58B8F] dark:border-[#8B1E24]/40 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#8B1E24] dark:text-[#E58B8F]" />
                <span>{isBn ? 'মুহতামিমের বাণী' : 'Message from the Principal'}</span>
              </div>

              <div className="font-arabic text-lg sm:text-xl font-medium text-[#8B1E24] dark:text-[#E58B8F] tracking-wide pt-1">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight tracking-tight">
                {isBn
                  ? 'কুরআনের আলো ও আধুনিক শিক্ষায় আপনার সন্তানের আলোকিত ভবিষ্যৎ গড়ার প্রত্যয়'
                  : 'Nurturing Young Minds with the Light of Quran & Modern Education'}
              </h2>
            </div>

            {/* Speech Parchment Box */}
            <div className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A1A1A] border-l-4 border-l-[#8B1E24] border border-border-color/80 dark:border-[#2A2A2A] shadow-md space-y-4">
              <Quote className="w-10 h-10 text-[#8B1E24]/15 dark:text-[#8B1E24]/25 absolute top-4 right-4 pointer-events-none" />

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                {isBn
                  ? '❝ আসসালামু আলাইকুম ওয়ারাহমাতুল্লাহ। প্রিয় অভিভাবক ও শুভানুধ্যায়ী বৃন্দ, লালমনিরহাট মডেল মাদ্রাসার নূরানী একাডেমির পক্ষ থেকে আপনাদের জানাই আন্তরিক মোবারকবাদ। আমাদের লক্ষ্য শুধুমাত্র পুঁথিগত শিক্ষা দেওয়া নয়; বরং এমন এক প্রজন্ম গড়ে তোলা যারা অন্তরে আল্লাহভীতি, পিতা-মাতার প্রতি শ্রদ্ধা এবং সুন্নাহর শিষ্টাচার লালন করবে—একই সাথে আধুনিক সাধারণ শিক্ষায় প্রথম সারিতে প্রতিযোগিতা করার যোগ্যতা রাখবে। ❞'
                  : '❝ Assalamu Alaikum wa Rahmatullahi wa Barakatuh. Welcome to Lalmonirhat Model Madrasa. Our mission transcends mere textual instruction; we aspire to raise a noble generation deeply rooted in God-consciousness, moral character, and prophetic manners, while simultaneously excelling at the forefront of modern academic disciplines. ❞'}
              </p>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {isBn
                  ? '২০২৩ সালে যাত্রার পর থেকে আমরা প্রতিটি শিশুর জন্য ব্যক্তিগত যত্ন, সহীহ মাখরাজে কুরআন পাঠ এবং প্রাথমিক স্তরের পূর্ণাঙ্গ জাতীয় পাঠ্যক্রম নিশ্চিত করে আসছি। আপনাদের সন্তানদের আমাদের হাতে তুলে দেওয়ার আস্থার মর্যাদা রক্ষা করতে আমরা সদা সচেষ্ট।'
                  : 'Since our establishment in 2023, we have maintained dedicated personal mentorship, accurate phonetic Tajweed recitation, and comprehensive national primary curriculum coverage for every student.'}
              </p>

              {/* Signature Row inside Speech Card */}
              <div className="pt-3 flex items-center justify-between border-t border-border-color/60 dark:border-[#2A2A2A]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#8B1E24]/10 dark:bg-[#8B1E24]/20 flex items-center justify-center text-[#8B1E24] dark:text-[#E58B8F] font-bold text-xs sm:text-sm shadow-2xs">
                    ম.আ
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary">
                      {isBn ? 'মাওলানা মুহাম্মদ আব্দুর রহমান' : 'Mawlana Muhammad Abdur Rahman'}
                    </div>
                    <div className="text-[11px] text-[#8B1E24] dark:text-[#E58B8F] font-medium">
                      {isBn ? 'মুহতামিম, লালমনিরহাট মডেল মাদ্রাসা' : 'Principal, Lalmonirhat Model Madrasa'}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#8B1E24] dark:text-[#E58B8F] bg-[#8B1E24]/5 dark:bg-[#8B1E24]/15 px-3 py-1 rounded-full border border-[#8B1E24]/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E24] animate-pulse" />
                  <span>{isBn ? 'দাপ্তরিক বার্তা • ২০২৩-বর্তমান' : 'Official Statement'}</span>
                </div>
              </div>
            </div>

            {/* 4 Core Pillars Micro-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                {
                  icon: BookOpen,
                  title: isBn ? 'সহীহ মাখরাজ ও তাজবীদ' : 'Pure Tajweed & Nazera',
                  desc: isBn ? 'অভিজ্ঞ কারীদের নিবিড় তত্ত্বাবধান' : 'Taught by certified Qaris',
                },
                {
                  icon: GraduationCap,
                  title: isBn ? 'জাতীয় শিক্ষাক্রমের পূর্ণাঙ্গ পাঠ' : 'National Standard NCTB',
                  desc: isBn ? 'বাংলা, ইংরেজি ও গণিতে শক্ত ভিত' : 'Excellence in core subjects',
                },
                {
                  icon: HeartHandshake,
                  title: isBn ? 'সুন্নাহ শিষ্টাচার ও তারবিয়াত' : 'Sunnah Etiquettes & Tarbiyah',
                  desc: isBn ? 'ব্যবহারিক দোয়া ও নামাজ শিক্ষা' : 'Practical Salah & moral values',
                },
                {
                  icon: ShieldCheck,
                  title: isBn ? 'স্নেহময় ও সুশৃঙ্খল পরিবেশ' : 'Safe & Nurturing Campus',
                  desc: isBn ? 'সীমিত আসনে ব্যক্তিগত পরিচর্যা' : 'Small batches & caring staff',
                },
              ].map((card, i) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-surface dark:bg-[#1A1A1A] border border-border-color dark:border-[#262626] hover:border-[#8B1E24]/40 hover:shadow-xs transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#8B1E24]/10 dark:bg-[#8B1E24]/20 flex items-center justify-center text-[#8B1E24] dark:text-[#E58B8F] shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-text-primary group-hover:text-[#8B1E24] dark:group-hover:text-[#E58B8F] transition-colors leading-tight">
                        {card.title}
                      </div>
                      <div className="text-[11px] text-text-muted truncate mt-0.5">
                        {card.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/about`}
                prefetch={true}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B1E24] hover:bg-[#72181D] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all duration-150 active:scale-95 cursor-pointer"
              >
                <span>{isBn ? 'আমাদের ইতিহাস ও লক্ষ্য জানুন' : 'Explore Our Vision & History'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href={`/${locale}/contact`}
                prefetch={true}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface hover:bg-surface-alt dark:bg-[#1C1C1C] dark:hover:bg-[#252525] text-text-primary border border-border-color text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer"
              >
                <span>{isBn ? 'সরাসরি যোগাযোগ করুন' : 'Contact Our Office'}</span>
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

