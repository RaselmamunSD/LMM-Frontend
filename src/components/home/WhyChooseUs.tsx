import * as React from 'react';
import { Locale } from '@/types';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import {
  BookCheck,
  UserCheck,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Users,
} from 'lucide-react';

interface WhyChooseUsProps {
  locale: Locale;
}

export function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const isBn = locale === 'bn';

  const reasons = [
    {
      icon: BookCheck,
      title: isBn ? 'দ্বৈত শিক্ষাক্রমের অপূর্ব সমন্বয়' : 'Harmonious Dual Curriculum',
      desc: isBn
        ? 'কুরআন হিফজ ও সহীহ নাজেরার পাশাপাশি জাতীয় শিক্ষাক্রমের (NCTB) বাংলা, ইংরেজি, গণিত ও বিজ্ঞানের সর্বোচ্চ পাঠদান।'
        : 'Integrates sacred Quran Nazera and Hifz alongside standard NCTB primary subjects: English, Bengali, Math, and Science.',
    },
    {
      icon: UserCheck,
      title: isBn ? 'সনদপ্রাপ্ত ও স্নেহময় শিক্ষকমণ্ডলী' : 'Qualified & Caring Educators',
      desc: isBn
        ? 'আন্তর্জাতিক ক্বারী, কামিল ও সাধারণ শিক্ষায় পারদর্শী গ্র্যাজুয়েটদের তত্ত্বাবধানে শিশুদের পরম যত্নে পাঠদান।'
        : 'Taught by certified Qaris, Islamic scholars, and seasoned graduate educators with boundless dedication.',
    },
    {
      icon: Sparkles,
      title: isBn ? 'বিজ্ঞানসম্মত নূরানী তাজবীদ' : 'Scientific Noorani Phonetics',
      desc: isBn
        ? 'মাখরাজ ও সিফাতের ব্যবহারিক অনুশীলনের মাধ্যমে শতভাগ শুদ্ধ ও সুললিত কুরআন পাঠের নিশ্চয়তা।'
        : 'Guaranteed 100% accurate articulation through the proven step-by-step Noorani methodology.',
    },
    {
      icon: ShieldCheck,
      title: isBn ? 'নিরাপদ ও স্বাস্থ্যসম্মত ক্যাম্পাস' : 'Safe & Hygienic Campus',
      desc: isBn
        ? 'সিসিটিভি নিয়ন্ত্রিত সংরক্ষিত চত্বর, বিশুদ্ধ খাবার পানি এবং নিয়মিত জীবাণুমুক্ত শিশুবান্ধব পরিবেশ।'
        : '24/7 CCTV surveillance, secured entry gates, ultra-purified drinking water, and sanitized classrooms.',
    },
    {
      icon: HeartHandshake,
      title: isBn ? 'বাস্তব সুন্নাহ ও নামাজ প্রশিক্ষণ' : 'Hands-on Sunnah & Prayer Practice',
      desc: isBn
        ? 'প্রতিদিন জামাতে নামাজ আদায়, ওযু অনুশীলন এবং দৈনন্দিন জীবনে ইসলামী শিষ্টাচার ও আদব চর্চা।'
        : 'Daily supervised congregational Dhuhr prayer, hands-on Wudhu instruction, and routine Sunnah etiquettes.',
    },
    {
      icon: Users,
      title: isBn ? 'সীমিত আসন ও নিবিড় যত্ন' : 'Limited Seats & Individual Care',
      desc: isBn
        ? 'প্রতিটি সেকশনে নির্দিষ্ট সংখ্যক শিক্ষার্থী রেখে দুর্বল শিক্ষার্থীদের বিশেষ তদারকির মাধ্যমে এগিয়ে নেওয়া।'
        : 'Strict student-teacher ratio guaranteeing focused attention and supportive coaching for every single child.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-alt dark:bg-[#161616] border-y border-border-color dark:border-[#2A2A2A] transition-colors duration-300">
      <PageContainer>
        <SectionHeading
          badge={isBn ? 'আমাদের বিশেষত্ব' : 'Why Choose Us'}
          title={
            isBn
              ? 'কেন লালমনিরহাট মডেল মাদ্রাসায় আপনার সন্তানকে ভর্তি করবেন?'
              : 'Why Choose Lalmonirhat Model Madrasa?'
          }
          subtitle={
            isBn
              ? 'সন্তানের দ্বীনি ভিত্তি এবং পার্থিব সাফল্যের জন্য এক নির্ভরযোগ্য শিক্ষালয়।'
              : 'A trusted sanctuary ensuring both spiritual enlightenment and high academic accomplishment.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-2xl p-6 shadow-xs hover:shadow-md dark:hover:border-[#C75B60]/40 transition-all duration-200 card-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B1E24]/10 dark:bg-[#8B1E24]/20 border border-[#8B1E24]/20 dark:border-[#C75B60]/30 flex items-center justify-center text-primary dark:text-[#C75B60] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
