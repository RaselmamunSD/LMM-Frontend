import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { PageContainer } from '../common/PageContainer';
import { BookOpen, ArrowRight } from 'lucide-react';

interface QuranHighlightsProps {
  locale: Locale;
}

export function QuranHighlights({ locale }: QuranHighlightsProps) {
  const isBn = locale === 'bn';

  const highlights = [
    {
      title: isBn ? '১৭টি মাখরাজের নির্ভুল উচ্চারণ' : 'Accurate 17 Makhaarij Articulation',
      desc: isBn
        ? 'আরবি ২৯টি হরফের প্রতিটি ধ্বনি উচ্চারণের সঠিক মুখবিবর স্থান ও গুণাবলী (সিফাত) শিশুদের নিখুঁতভাবে প্রশিক্ষণ দেওয়া হয়।'
        : 'Systematic phonetics training ensuring every student articulates the 29 Arabic letters with anatomical precision.',
    },
    {
      title: isBn ? 'তাজবীদের বাস্তবায়ন ও গুন্নাহ নিয়ম' : 'Tajweed Mechanics & Ghunnah Mastery',
      desc: isBn
        ? 'ইখফা, ইদগাম, ইজহার, ইকলাব এবং মাদ্দের হুকুমগুলো মুখস্থ করিয়ে সরাসরি কুরআন তিলাওয়াতে প্রয়োগ করানো হয়।'
        : 'Hands-on application of Noon Sakin, Meem Sakin, and Madd elongation rules directly in reading the sacred text.',
    },
    {
      title: isBn ? 'আমপারা মুখস্থ ও সুললিত তারতীল' : 'Juz Amma Memorization & Melodious Tarteel',
      desc: isBn
        ? 'সূরা ফাতিহা থেকে শুরু করে ৩০তম পারার সূরাগুলো অর্থসহ বিশুদ্ধ সুরে তিলাওয়াত ও কণ্ঠে ধারণ করার সুব্যবস্থা।'
        : 'Guiding students to memorize Surahs from Juz Amma while cultivating pleasant, reverent Quranic recitation.',
    },
    {
      title: isBn ? 'দৈনন্দিন ৫০+ মাসনূন দোয়া ও হাদিস' : '50+ Daily Sunnah Duas & Moral Hadiths',
      desc: isBn
        ? 'ঘুম, আহার, ওযু, মসজিদ ও পিতা-মাতার প্রতি করণীয় বিষয়ক সহীহ হাদিস ও দোয়ার নিয়মিত বাস্তব আমল।'
        : 'Inculcating daily supplications for meals, sleep, hygiene, and noble prophetic manners into children’s lifestyles.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 islamic-pattern-bg opacity-40 pointer-events-none" />

      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Core Description & Quranic Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#8B1E24] border border-[#8B1E24]/20 dark:bg-[#2A1416] dark:border-[#8B1E24]/40 dark:text-[#E58B8F] shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
              <span>{isBn ? 'কুরআনিক শিক্ষা ও হিফজ' : 'Quranic Studies'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight">
              {isBn
                ? 'শিশুর অন্তরে কুরআনের আলো ও তাজবীদের অনুপম মাধুর্য'
                : 'Illuminating Hearts with the Splendor of the Holy Quran'}
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {isBn
                ? 'লালমনিরহাট মডেল মাদ্রাসার নূরানী একাডেমিতে কুরআন শিক্ষাকে সর্বোচ্চ অগ্রাধিকার দেওয়া হয়। বিজ্ঞানসম্মত নূরানী কায়দার মাধ্যমে প্রতিটি শিক্ষার্থী অতি অল্প সময়ে সহীহ ও সাবলীলভাবে কুরআন তিলাওয়াতে সক্ষম হয়ে ওঠে।'
                : 'At Lalmonirhat Model Madrasa, Quranic literacy is our crown priority. Through scientifically designed Noorani steps, young learners master fluent, beautiful recitation in record time.'}
            </p>

            {/* Arabic Quranic Verse Card */}
            <div className="p-5 rounded-2xl bg-[#FDF5F5] dark:bg-[#1C1C1C] border border-[#8B1E24]/20 dark:border-[#2A2A2A] space-y-2 shadow-xs">
              <div className="text-right font-arabic text-xl sm:text-2xl text-primary dark:text-[#E58B8F] font-bold leading-loose">
                وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
              </div>
              <div className="text-xs text-text-secondary italic">
                {isBn
                  ? '❝ এবং সুস্পষ্টভাবে ধীরে ধীরে কুরআন তিলাওয়াত করুন। ❞ (সূরা মুযযাম্মিল: ৪)'
                  : '❝ And recite the Quran with measured, rhythmic recitation. ❞ (Surah Al-Muzzammil: 4)'}
              </div>
            </div>

            <div>
              <Link
                href={`/${locale}/curriculum`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary dark:text-[#C75B60] hover:text-primary-hover hover:underline"
              >
                <span>{isBn ? 'আমাদের পূর্ণ পাঠ্যক্রম দেখুন' : 'Explore Complete Curriculum Details'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Highlights Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-2xl p-5 shadow-xs hover:border-primary/40 dark:hover:border-[#C75B60]/50 transition-all card-glow"
              >
                <div className="w-8 h-8 rounded-lg bg-[#8B1E24]/10 dark:bg-[#8B1E24]/20 text-[#8B1E24] dark:text-[#E58B8F] border border-[#8B1E24]/20 dark:border-[#C75B60]/30 flex items-center justify-center font-bold text-xs mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-text-primary mb-2">
                  {h.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
