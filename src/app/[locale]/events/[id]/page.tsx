import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/types';
import { eventsData } from '@/lib/data/events';
import { locales } from '@/lib/i18n';
import { PageContainer } from '@/components/common/PageContainer';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  Share2,
  GraduationCap,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths: { locale: string; id: string }[] = [];
  for (const locale of locales) {
    for (const ev of eventsData) {
      paths.push({ locale, id: ev.id });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const ev = eventsData.find((e) => e.id === id);

  if (!ev) return { title: 'Event Not Found' };

  return {
    title: `${ev.title[locale]} | ইভেন্ট বিস্তারিত`,
    description: ev.description[locale],
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  const ev = eventsData.find((e) => e.id === id);
  if (!ev) notFound();

  return (
    <div className="py-8 sm:py-12 space-y-8">
      <PageContainer size="narrow">

        <div className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-color dark:border-[#2A2A2A] pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] border border-primary/20 dark:border-[#C75B60]/30">
              {ev.category}
            </span>
            <div className="text-xs font-semibold text-text-muted">
              {ev.isPast ? (isBn ? 'সম্পন্ন' : 'Concluded') : (isBn ? 'আসন্ন অনুষ্ঠান' : 'Upcoming Event')}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
            {ev.title[locale]}
          </h1>

          {/* Logistics Strip */}
          <div className="p-4 rounded-2xl bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0" />
              <div>
                <span className="text-text-muted block text-[10px] uppercase font-bold">
                  {isBn ? 'তারিখ' : 'Date'}
                </span>
                <span className="font-semibold text-text-primary">{ev.date}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0" />
              <div>
                <span className="text-text-muted block text-[10px] uppercase font-bold">
                  {isBn ? 'সময়' : 'Time'}
                </span>
                <span className="font-semibold text-text-primary">{ev.time[locale]}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0" />
              <div>
                <span className="text-text-muted block text-[10px] uppercase font-bold">
                  {isBn ? 'স্থান' : 'Venue'}
                </span>
                <span className="font-semibold text-text-primary">{ev.venue[locale]}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-text-primary">
              {isBn ? 'অনুষ্ঠান বিবরণ' : 'Event Description'}
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {ev.description[locale]}
            </p>
          </div>

          {/* Highlights */}
          {ev.highlights[locale].length > 0 && (
            <div className="space-y-3 pt-4 border-t border-border-color dark:border-[#2A2A2A]">
              <h2 className="text-lg font-bold text-text-primary">
                {isBn ? 'অনুষ্ঠানের মূল আকর্ষণসমূহ' : 'Key Highlights'}
              </h2>
              <div className="space-y-2">
                {ev.highlights[locale].map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back navigation */}
        <div className="pt-2">
          <Link
            href={`/${locale}/events`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-[#C75B60] hover:underline"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{isBn ? 'সকল ইভেন্টে ফিরে যান' : 'Back to All Events'}</span>
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
