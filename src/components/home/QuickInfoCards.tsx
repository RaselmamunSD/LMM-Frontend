import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { Baby, BookOpen, Languages, GraduationCap, ArrowRight } from 'lucide-react';
import { PageContainer } from '../common/PageContainer';

interface QuickInfoCardsProps {
  locale: Locale;
}

export function QuickInfoCards({ locale }: QuickInfoCardsProps) {
  const isBn = locale === 'bn';

  const cards = [
    {
      id: 'classes',
      icon: Baby,
      title: isBn ? 'প্লে শ্রেণি থেকে ৫ম শ্রেণি' : 'Play Group to Class Five',
      desc: isBn
        ? 'কোমলমতি শিশুদের মানসিক বিকাশের সাথে সামঞ্জস্য রেখে শিশুবান্ধব আনন্দঘন পরিবেশে প্রাক-প্রাথমিক ও প্রাথমিক পাঠদান।'
        : 'Affectionate and stress-free foundational education nurturing emotional and cognitive growth for early ages.',
      linkText: isBn ? 'শ্রেণি বিস্তারিত' : 'View Classes',
      href: `/${locale}/academic-programs`,
      colorClass: 'text-[#8B1E24] bg-[#FDF2F2] border-[#8B1E24]/20 dark:bg-[#2A1416] dark:text-[#E58B8F] dark:border-[#8B1E24]/40',
    },
    {
      id: 'quran',
      icon: BookOpen,
      title: isBn ? 'কুরআন ও নূরানী শিক্ষা' : 'Quranic & Noorani Studies',
      desc: isBn
        ? 'বিজ্ঞানসম্মত নূরানী পদ্ধতিতে সহীহ মাখরাজ ও তাজবীদসহ পবিত্র কুরআন তিলাওয়াত, নাজেরা ও নির্বাচিত সূরার হিফজুল কুরআন।'
        : 'Scientific Noorani methodology ensuring accurate Makhaarij phonetics, fluent Nazera, and selected Surah memorization.',
      linkText: isBn ? 'কারিকুলাম দেখুন' : 'Explore Tajweed',
      href: `/${locale}/curriculum`,
      colorClass: 'text-[#A52A2A] bg-[#FDF5F5] border-[#A52A2A]/20 dark:bg-[#261516] dark:text-[#EAA5A8] dark:border-[#A52A2A]/40',
    },
    {
      id: 'arabic',
      icon: Languages,
      title: isBn ? 'আরবি ভাষা ও কথপোকথন' : 'Arabic Language Learning',
      desc: isBn
        ? 'কুরআনের ভাষা আরবিকে সহজ ও সাবলীলভাবে আয়ত্ত করতে দৈনন্দিন শব্দভাণ্ডার, সম্ভাষণ ও ক্লাসরুম সংলাপের নিয়মিত অনুশীলন।'
        : 'Fostering deep love for the language of the Quran through everyday vocabulary, dialogue, and foundational grammar.',
      linkText: isBn ? 'আরবি পাঠ বিবরণ' : 'Arabic Syllabus',
      href: `/${locale}/curriculum`,
      colorClass: 'text-[#171717] bg-[#F5F5F5] border-[#E5E5E5] dark:bg-[#222222] dark:text-[#F5F5F5] dark:border-[#333333]',
    },
    {
      id: 'academics',
      icon: GraduationCap,
      title: isBn ? 'আধুনিক সাধারণ শিক্ষা' : 'General Academic Education',
      desc: isBn
        ? 'জাতীয় পাঠ্যক্রমের (NCTB) আলোকে বাংলা, ইংরেজি, গণিত ও বিজ্ঞানের গভীর জ্ঞান ও সমাপনী পরীক্ষার শতভাগ প্রস্তুতি।'
        : 'Top-tier NCTB national curriculum coverage across Bengali, English, Mathematics, and Elementary Science.',
      linkText: isBn ? 'সাধারণ বিষয়সমূহ' : 'General Subjects',
      href: `/${locale}/curriculum`,
      colorClass: 'text-[#8B1E24] bg-[#FDF2F2] border-[#8B1E24]/20 dark:bg-[#2A1416] dark:text-[#E58B8F] dark:border-[#8B1E24]/40',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-surface dark:bg-[#111111] transition-colors duration-300">
      <PageContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 card-glow"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${card.colorClass}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-primary-hover group-hover:underline pt-2"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
