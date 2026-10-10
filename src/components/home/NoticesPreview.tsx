import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { noticesData } from '@/lib/data/notices';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { Bell, Calendar, ArrowRight, FileText } from 'lucide-react';

interface NoticesPreviewProps {
  locale: Locale;
}

export function NoticesPreview({ locale }: NoticesPreviewProps) {
  const isBn = locale === 'bn';

  const categoryLabels: Record<string, { bn: string; en: string }> = {
    admission: { bn: 'ভর্তি', en: 'Admission' },
    examination: { bn: 'পরীক্ষা', en: 'Exam' },
    holiday: { bn: 'ছুটি', en: 'Holiday' },
    event: { bn: 'অনুষ্ঠান', en: 'Event' },
    general: { bn: 'সাধারণ', en: 'General' },
  };

  return (
    <section className="py-16 sm:py-24 bg-surface-alt border-y border-border-color">
      <PageContainer>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-badge-bg text-badge-text border border-primary/20 mb-3">
              <Bell className="w-3.5 h-3.5 text-primary" />
              <span>{isBn ? 'নোটিশ ও বিজ্ঞপ্তি' : 'Latest Circulars'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
              {isBn ? 'মাদ্রাসার সাম্প্রতিক নোটিশ বোর্ড' : 'Recent Announcements & Notices'}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              {isBn
                ? 'ভর্তি, পরীক্ষা, ছুটির তালিকা ও জরুরি প্রাতিষ্ঠানিক নির্দেশনাসমূহ।'
                : 'Crucial dates, examination timetables, holiday calendars, and administrative updates.'}
            </p>
          </div>

          <Link
            href={`/${locale}/notices`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover hover:underline shrink-0"
          >
            <span>{isBn ? 'সকল নোটিশ দেখুন' : 'View All Notices'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {noticesData.slice(0, 3).map((notice) => (
            <div
              key={notice.id}
              className="bg-card-bg border border-border-color rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 card-glow"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                    {categoryLabels[notice.category]?.[locale] || notice.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{notice.publishDate}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-3">
                  {notice.title[locale]}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4">
                  {notice.summary[locale]}
                </p>
              </div>

              <div className="pt-3 border-t border-border-color flex items-center justify-between">
                <Link
                  href={`/${locale}/notices/${notice.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{isBn ? 'সম্পূর্ণ নোটিশ' : 'Read Notice'}</span>
                </Link>
                {notice.isUrgent && (
                  <span className="text-[10px] font-bold text-accent-red px-2 py-0.5 rounded bg-accent-red/10 border border-accent-red/20">
                    {isBn ? 'জরুরি' : 'Urgent'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
