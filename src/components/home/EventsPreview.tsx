import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { eventsData } from '@/lib/data/events';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';

interface EventsPreviewProps {
  locale: Locale;
}

export function EventsPreview({ locale }: EventsPreviewProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-24 bg-surface">
      <PageContainer>
        <SectionHeading
          badge={isBn ? 'ইভেন্টস ও কার্যক্রম' : 'School Events'}
          title={
            isBn
              ? 'আসন্ন অনুষ্ঠান ও শিক্ষামূলক কার্যক্রম'
              : 'Upcoming Gatherings & Co-Curricular Events'
          }
          subtitle={
            isBn
              ? 'শিশুদের মেধা বিকাশ, আত্মবিশ্বাস বৃদ্ধি ও দ্বীনি চেতনাসমৃদ্ধ বিভিন্ন উৎসব।'
              : 'Enriching celebrations designed to cultivate public confidence and spiritual unity.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsData.slice(0, 2).map((ev) => (
            <div
              key={ev.id}
              className="bg-card-bg border border-border-color rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 card-glow"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    {ev.category === 'islamic'
                      ? isBn
                        ? 'ইসলামিক সমাবেশ'
                        : 'Islamic Gathering'
                      : isBn
                      ? 'ক্রীড়া ও সংস্কৃতি'
                      : 'Sports & Culture'}
                  </span>
                  <span className="text-xs text-text-muted">
                    {ev.isPast ? (isBn ? 'সম্পন্ন' : 'Completed') : (isBn ? 'আসন্ন' : 'Upcoming')}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-3">
                  {ev.title[locale]}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                  {ev.description[locale]}
                </p>

                <div className="space-y-2 pt-3 border-t border-border-color text-xs text-text-secondary">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-semibold text-text-primary">{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>{ev.time[locale]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{ev.venue[locale]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border-color flex justify-end">
                <Link
                  href={`/${locale}/events/${ev.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline"
                >
                  <span>{isBn ? 'বিস্তারিত সূচি' : 'Event Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/events`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover hover:underline"
          >
            <span>{isBn ? 'সকল বিগত ও আসন্ন ইভেন্ট দেখুন' : 'Explore All Past & Upcoming Events'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
