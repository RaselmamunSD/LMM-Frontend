import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { siteConfig } from '@/lib/data/site-config';
import { ArrowRight, Compass, Target, Shield, Heart } from 'lucide-react';

interface AboutSummaryProps {
  locale: Locale;
}

export function AboutSummary({ locale }: AboutSummaryProps) {
  const isBn = locale === 'bn';

  const pillars = [
    {
      icon: Target,
      title: isBn ? 'আমাদের লক্ষ্য (Mission)' : 'Our Mission',
      desc: isBn
        ? 'কুরআন ও সুন্নাহর সুমহান শিক্ষায় আলোকিত, চারিত্রিক মাধুর্যে সমৃদ্ধ এবং আধুনিক জ্ঞানে দক্ষ এক অনন্য ভবিষ্যৎ প্রজন্ম বিনির্মাণ।'
        : 'To nurture righteous, articulate scholars anchored in Quranic morals and adept in modern academic competencies.',
    },
    {
      icon: Compass,
      title: isBn ? 'আমাদের রূপকল্প (Vision)' : 'Our Vision',
      desc: isBn
        ? 'উত্তরবঙ্গের অন্যতম শীর্ষস্থানীয় দ্বীনি ও সাধারণ শিক্ষার মডেল প্রতিষ্ঠান হিসেবে নিজেকে প্রতিষ্ঠিত করা।'
        : 'To stand as the leading benchmark of integrated Islamic and primary academic excellence in northern Bangladesh.',
    },
    {
      icon: Shield,
      title: isBn ? 'মূল মূল্যবোধ (Core Values)' : 'Core Islamic Values',
      desc: isBn
        ? 'তাকওয়া (আল্লাহভীতি), সত্যবাদিতা, শৃঙ্খলাবোধ, অহিংসা, এবং পিতা-মাতা ও শিক্ষকমণ্ডলীর প্রতি গভীর শ্রদ্ধা।'
        : 'God-consciousness (Taqwa), veracity, self-discipline, compassion, and profound filial and academic respect.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface">
      <PageContainer>
        <SectionHeading
          badge={isBn ? 'প্রতিষ্ঠান পরিচিতি' : 'About Our Madrasa'}
          title={
            isBn
              ? 'ঐতিহ্য ও আধুনিকতার মেলবন্ধনে লালমনিরহাট মডেল মাদ্রাসা'
              : 'Tradition Meets Excellence at Lalmonirhat Model Madrasa'
          }
          subtitle={
            isBn
              ? '২০২৩ সালে প্রতিষ্ঠিত হয়ে নূরানী একাডেমি শাখার মাধ্যমে শিশুদের সুষ্ঠু দ্বীনি ভিত্তির নিশ্চয়তা দিচ্ছে।'
              : 'Founded in 2023, offering a steadfast Quranic bedrock and primary academic foundation.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-card-bg border border-border-color rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-surface hover:bg-surface-subtle border border-border-color text-text-primary shadow-xs hover:shadow transition-all"
          >
            <span>{isBn ? 'আমাদের পূর্ণ ইতিহাস ও দর্শন পড়ুন' : 'Read Full History & Institutional Philosophy'}</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
