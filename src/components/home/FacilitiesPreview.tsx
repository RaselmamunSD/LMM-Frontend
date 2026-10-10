import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { facilitiesData } from '@/lib/data/facilities';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import {
  School,
  BookOpen,
  Moon,
  Shield,
  Library,
  Droplets,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface FacilitiesPreviewProps {
  locale: Locale;
}

const iconMap: Record<string, React.ElementType> = {
  School,
  BookOpen,
  Moon,
  Shield,
  Library,
  Droplets,
};

export function FacilitiesPreview({ locale }: FacilitiesPreviewProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-24 bg-surface">
      <PageContainer>
        <SectionHeading
          badge={isBn ? 'ক্যাম্পাস সুবিধা' : 'Campus Infrastructure'}
          title={
            isBn
              ? 'শিক্ষার চমৎকার ও শিশুবান্ধব আধুনিক সুযোগ-সুবিধা'
              : 'Modern & Child-Friendly Campus Facilities'
          }
          subtitle={
            isBn
              ? 'শিক্ষার্থীদের শারীরিক সুস্থতা, মানসিক একাগ্রতা এবং নিরাপদ পড়াশোনার পূর্ণ প্রস্তুতি।'
              : 'Engineered for physical wellness, mental concentration, and secure study spaces.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilitiesData.slice(0, 6).map((fac) => {
            const Icon = iconMap[fac.icon] || School;
            return (
              <div
                key={fac.id}
                className="bg-card-bg border border-border-color rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 card-glow"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {fac.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {fac.description[locale]}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border-color">
                    {fac.features[locale].slice(0, 2).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-text-secondary"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border-color flex justify-end">
                  <Link
                    href={`/${locale}/facilities`}
                    className="text-xs font-bold text-primary group-hover:underline inline-flex items-center gap-1"
                  >
                    <span>{isBn ? 'বিস্তারিত দেখুন' : 'Explore'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/facilities`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow transition-all"
          >
            <span>{isBn ? 'সকল সুবিধা ও পরিবেশ পরিদর্শন করুন' : 'View Full Campus Amenities'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
