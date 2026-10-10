import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { teachersData } from '@/lib/data/teachers';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { User, ArrowRight, Award, GraduationCap } from 'lucide-react';

interface TeachersPreviewProps {
  locale: Locale;
}

export function TeachersPreview({ locale }: TeachersPreviewProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-24 bg-surface-alt border-y border-border-color">
      <PageContainer>
        <SectionHeading
          badge={isBn ? 'শিক্ষকমণ্ডলী' : 'Dedicated Faculty'}
          title={
            isBn
              ? 'আমাদের অভিজ্ঞ ও স্নেহময় শিক্ষকমণ্ডলী'
              : 'Our Qualified & Compassionate Educators'
          }
          subtitle={
            isBn
              ? 'উচ্চতর দ্বীনি সনদে ভূষিত এবং শিশু শিক্ষাদানে দক্ষ শিক্ষকমণ্ডলীর সার্বক্ষণিক তত্ত্বাবধান।'
              : 'Scholars and specialized educators dedicated to inspiring your child’s spiritual and academic growth.'
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachersData.slice(0, 4).map((teacher) => (
            <div
              key={teacher.id}
              className="bg-card-bg border border-border-color rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 card-glow"
            >
              <div>
                {/* Avatar Placeholder / Photo */}
                <div className="relative w-20 h-20 mx-auto rounded-full bg-surface-subtle border-2 border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:border-primary transition-colors">
                  <User className="w-10 h-10 text-primary/70" />
                </div>

                <div className="text-center space-y-1 mb-3">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                    {teacher.name[locale]}
                  </h3>
                  <div className="text-xs font-semibold text-primary">
                    {teacher.designation[locale]}
                  </div>
                </div>

                <div className="pt-2 border-t border-border-color text-xs text-text-secondary space-y-2">
                  <div className="flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{teacher.qualifications[locale]}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Award className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{teacher.experience[locale]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-border-color/60 text-center">
                <Link
                  href={`/${locale}/teachers`}
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>{isBn ? 'প্রোফাইল দেখুন' : 'View Profile'}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/teachers`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-surface hover:bg-surface-subtle border border-border-color text-text-primary shadow-xs hover:shadow transition-all"
          >
            <span>{isBn ? 'সকল শিক্ষকের বিস্তারিত পরিচিতি দেখুন' : 'Meet All Faculty Members'}</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
