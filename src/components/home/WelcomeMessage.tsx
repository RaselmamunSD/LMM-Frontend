import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/types';
import { PageContainer } from '../common/PageContainer';
import { siteConfig } from '@/lib/data/site-config';
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WelcomeMessageProps {
  locale: Locale;
}

export function WelcomeMessage({ locale }: WelcomeMessageProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-14 sm:py-20 bg-surface-alt dark:bg-[#161616] border-y border-border-color dark:border-[#262626] transition-colors duration-300">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Photo / Logo Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="relative rounded-3xl overflow-hidden border border-[#8B1E24]/20 dark:border-[#8B1E24]/40 shadow-md bg-card-bg dark:bg-[#1C1C1C] p-2 card-glow">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-gradient-to-b from-[#8B1E24]/5 to-[#8B1E24]/15 dark:from-[#261516] dark:to-[#1C1C1C] flex items-center justify-center p-6 text-center">
                  <div className="space-y-4">
                    <div className="relative w-28 h-28 mx-auto rounded-full p-1 bg-white shadow-xs">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/images/logo.jpg"
                          alt={siteConfig.name[locale]}
                          fill
                          sizes="112px"
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-text-primary">
                        {isBn ? 'মাওলানা মুহাম্মদ আব্দুর রহমান' : 'Mawlana Muhammad Abdur Rahman'}
                      </div>
                      <div className="text-xs font-semibold text-primary">
                        {isBn ? 'মুহতামিম ও প্রধান শিক্ষক' : 'Principal & Head Teacher'}
                      </div>
                      <div className="text-[11px] text-text-muted">
                        {siteConfig.name[locale]}
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 bg-surface dark:bg-[#222222] rounded-full text-xs text-text-secondary border border-border-color dark:border-[#333333]">
                      {isBn ? 'স্থাপিত: ২০২৩ খ্রি.' : 'Established 2023'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#8B1E24] border border-[#8B1E24]/20 dark:bg-[#2A1416] dark:border-[#8B1E24]/40 dark:text-[#E58B8F] shadow-2xs">
              <span>★</span>
              <span>{isBn ? 'মুহতামিমের বাণী' : 'Welcome from Principal'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
              {isBn
                ? 'আল্লাহর কালামের নুর ও সুন্নাহর সুবাসে শিশুদের ভবিষ্যৎ গড়াই আমাদের প্রত্যয়'
                : 'Illuminating Young Hearts with the Light of the Holy Quran & Sunnah'}
            </h2>

            <div className="relative p-5 rounded-2xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] text-text-secondary italic text-sm leading-relaxed shadow-xs">
              <Quote className="w-6 h-6 text-primary/30 absolute -top-3 -left-2 fill-primary/10" />
              {isBn
                ? '❝ বিসমিল্লাহির রাহমানির রাহীম। লালমনিরহাট মডেল মাদ্রাসার নূরানী একাডেমির পক্ষ থেকে আপনাদের জানাই আন্তরিক মোবারকবাদ। আমাদের লক্ষ্য কেবল প্রাতিষ্ঠানিক ডিগ্রি নয়, বরং এমন এক প্রজন্ম উপহার দেওয়া যারা অন্তরে আল্লাহভীতি রাখবে এবং আধুনিক জ্ঞানে বিশ্বমানের প্রতিযোগী হবে। ❞'
                : '❝ In the name of Allah, the Most Merciful. Welcome to Lalmonirhat Model Madrasa. Our mission transcends mere academic instruction; we aspire to raise a generation rooted in God-consciousness, moral grace, and cutting-edge academic excellence. ❞'}
            </div>

            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                {isBn
                  ? '২০২৩ সালে প্রতিষ্ঠিত হওয়ার পর থেকে আমাদের প্রতিষ্ঠানটি সদর লালমনিরহাটে প্রাক-প্রাথমিক ও প্রাথমিক স্তরে কুরআন শিক্ষা ও সাধারণ শিক্ষার মধ্যে এক আদর্শ সমন্বয় তৈরি করে আসছে। প্রতিটি ক্লাসে সীমিত সংখ্যক শিক্ষার্থী নিয়ে আমাদের শিক্ষকমণ্ডলী অত্যন্ত ধৈর্য ও ভালোবাসার সাথে পাঠদান করেন।'
                  : 'Since our establishment in 2023, our institution has been providing an exemplary synthesis between foundational Quranic studies and national curriculum subjects in Sadar, Lalmonirhat. With strictly managed class sizes, our faculty teaches with boundless affection and patience.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                isBn ? '১০০% বিশুদ্ধ মাখরাজ ও তাজবীদ' : '100% Accurate Tajweed Mastery',
                isBn ? 'জাতীয় শিক্ষাক্রমের পূর্ণাঙ্গ পাঠ' : 'Full National Primary Curriculum',
                isBn ? 'নৈতিক মূল্যবোধ ও শিষ্টাচার' : 'Noble Character & Sunnah Values',
                isBn ? 'নিরাপদ ও সুশৃঙ্খল ক্যাম্পাস' : 'Secure & Disciplined Environment',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover hover:underline"
              >
                <span>{isBn ? 'আমাদের ইতিহাস ও লক্ষ্য সম্পর্কে জানুন' : 'Learn More About Our Institution'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
