import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { faqsData } from '@/lib/data/faqs';
import { PageContainer } from '@/components/common/PageContainer';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'সাধারণ প্রশ্নোত্তর (FAQ)' : 'Frequently Asked Questions (FAQ)',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসায় ভর্তি, পাঠ্যক্রম, সময়সূচি ও ফি সংক্রান্ত সচরাচর জিজ্ঞাসিত প্রশ্নাবলী।'
      : 'Find quick answers to common questions about admissions, curriculum, and campus life.',
  };
}

export default async function FAQPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PageContainer>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 text-white shadow-lg mb-12">
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs inline-block">
              {isBn ? 'সচরাচর জিজ্ঞাসিত প্রশ্ন' : 'Common Inquiries'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'সাধারণ জিজ্ঞাসা ও উত্তর (FAQ)' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'ভর্তি প্রক্রিয়া, পাঠ্যক্রম, ফি, ক্লাস শিডিউল ও সার্বিক নিয়মাবলী সংক্রান্ত সাধারণ প্রশ্নের তাৎক্ষণিক উত্তর।'
                : 'Clear, concise answers addressing common queries from parents and prospective students.'}
            </p>
          </div>
        </div>

        <FAQAccordion faqs={faqsData} locale={locale} />

        {/* Still have questions banner */}
        <div className="mt-14 p-8 rounded-3xl bg-surface-alt dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-center space-y-4 max-w-2xl mx-auto card-glow">
          <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] mx-auto flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-text-primary">
            {isBn ? 'আপনার প্রশ্নের উত্তর খুঁজে পাননি?' : 'Still have unanswered questions?'}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary">
            {isBn
              ? 'আমাদের প্রশাসন কার্যালয়ে সরাসরি কল দিন অথবা মেসেজ পাঠিয়ে জেনে নিন।'
              : 'Feel free to contact our administrative desk directly via phone or send an online message.'}
          </p>
          <div className="pt-2">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-[#8B1E24] hover:bg-[#73181D] text-white transition-colors shadow-xs"
            >
              <span>{isBn ? 'যোগাযোগ পেজে যান' : 'Contact Support Desk'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
