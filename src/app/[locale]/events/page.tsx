import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { eventsData } from '@/lib/data/events';
import { PageContainer } from '@/components/common/PageContainer';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'ইভেন্টস ও সম্মেলন সমূহ' : 'Events & Academic Gatherings',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার বার্ষিক ক্রীড়া, কুরআন তিলাওয়াত মাহফিল ও শিক্ষামূলক অনুষ্ঠান।'
      : 'Upcoming and celebrated events, sports meets, and Quran recitation assemblies.',
  };
}

export default async function EventsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  const upcomingEvents = eventsData.filter((e) => !e.isPast);
  const pastEvents = eventsData.filter((e) => e.isPast);

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PageContainer>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 text-white shadow-lg mb-12">
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs inline-block shadow-xs">
              {isBn ? 'সহপাঠ্যক্রমিক কার্যক্রম' : 'Co-Curricular Life'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'ইভেন্টস ও সম্মেলন' : 'School Events & Gatherings'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'বার্ষিক ক্রীড়া প্রতিযোগিতা, কুরআন তিলাওয়াত মাহফিল, ক্যালিগ্রাফি প্রদর্শনী ও অভিভাবক সমাবেশের বিস্তারিত তথ্য।'
                : 'Fostering public speaking, athletic vigor, and artistic expression through dynamic school events.'}
            </p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary dark:bg-[#C75B60]" />
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
              {isBn ? 'আসন্ন অনুষ্ঠানসমূহ' : 'Upcoming Events'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md dark:hover:border-[#C75B60]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] border border-primary/20 dark:border-[#C75B60]/30">
                      {ev.category}
                    </span>
                    <span className="text-xs text-primary dark:text-[#C75B60] font-bold">
                      {isBn ? 'আসন্ন' : 'Upcoming'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3">
                    {ev.title[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {ev.description[locale]}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border-color dark:border-[#2A2A2A] text-xs text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0" />
                      <span className="font-semibold text-text-primary">{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0" />
                      <span>{ev.time[locale]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0" />
                      <span>{ev.venue[locale]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border-color dark:border-[#2A2A2A] flex justify-end">
                  <Link
                    href={`/${locale}/events/${ev.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-[#C75B60] hover:underline"
                  >
                    <span>{isBn ? 'বিস্তারিত সূচি দেখুন' : 'View Event Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-border-color dark:border-[#2A2A2A]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-text-muted" />
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                {isBn ? 'বিগত অনুষ্ঠানসমূহ' : 'Past Celebrations'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-8 shadow-xs opacity-90"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface-subtle dark:bg-[#161616] text-text-secondary border border-border-color dark:border-[#2A2A2A]">
                      {ev.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {isBn ? 'সম্পন্ন হয়েছে' : 'Concluded'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {ev.title[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {ev.description[locale]}
                  </p>

                  <div className="pt-3 border-t border-border-color dark:border-[#2A2A2A] flex items-center justify-between text-xs text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{ev.date}</span>
                    </div>
                    <Link
                      href={`/${locale}/events/${ev.id}`}
                      className="text-primary dark:text-[#C75B60] font-semibold hover:underline"
                    >
                      {isBn ? 'স্মৃতি ও সারসংক্ষেপ' : 'Event Summary'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </PageContainer>
    </div>
  );
}
