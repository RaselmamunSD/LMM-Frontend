import * as React from 'react';
import { Locale } from '@/types';
import { testimonialsData } from '@/lib/data/testimonials';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  locale: Locale;
}

export function Testimonials({ locale }: TestimonialsProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-24 bg-surface-alt dark:bg-[#161616] border-y border-border-color dark:border-[#2A2A2A] transition-colors duration-300">
      <PageContainer>
        <SectionHeading
          badge={isBn ? 'অভিভাবকদের মন্তব্য' : 'Guardian Feedback'}
          title={
            isBn
              ? 'সম্মানিত অভিভাবকবৃন্দের অনুভূতি ও অভিজ্ঞতা'
              : 'What Our Respected Guardians Say'
          }
          subtitle={
            isBn
              ? 'সন্তানের দ্বীনি শিষ্টাচার ও পাঠোন্নতিতে আমাদের আন্তরিক প্রচেষ্টার বাস্তব প্রতিফলন।'
              : 'Real guardian reflections on their children’s character, Quranic progress, and learning joy.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md dark:hover:border-[#C75B60]/40 transition-all duration-300 flex flex-col justify-between card-glow"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#8B1E24] dark:text-[#C75B60]">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8B1E24] dark:fill-[#C75B60]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/20 dark:text-[#C75B60]/30" />
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 italic">
                  ❝{item.quote[locale]}❞
                </p>
              </div>

              <div className="pt-4 border-t border-border-color dark:border-[#2A2A2A]">
                <div className="font-bold text-sm text-text-primary">
                  {item.parentName[locale]}
                </div>
                <div className="text-xs text-primary dark:text-[#C75B60] font-medium mt-0.5">
                  {item.childClass[locale]}
                </div>
                <div className="text-[11px] text-text-muted mt-0.5">
                  {item.occupation[locale]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
