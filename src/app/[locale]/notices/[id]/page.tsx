import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/types';
import { noticesData } from '@/lib/data/notices';
import { locales } from '@/lib/i18n';
import { PageContainer } from '@/components/common/PageContainer';
import {
  Calendar,
  Download,
  Printer,
  ChevronLeft,
  FileText,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/lib/data/site-config';

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths: { locale: string; id: string }[] = [];
  for (const locale of locales) {
    for (const notice of noticesData) {
      paths.push({ locale, id: notice.id });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const notice = noticesData.find((n) => n.id === id);

  if (!notice) return { title: 'Notice Not Found' };

  return {
    title: `${notice.title[locale]} | নোটিশ`,
    description: notice.summary[locale],
  };
}

export default async function NoticeDetailPage({ params }: PageProps) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  const notice = noticesData.find((n) => n.id === id);
  if (!notice) notFound();

  return (
    <div className="py-8 sm:py-12 space-y-8">
      <PageContainer size="narrow">

        {/* Notice Card Container */}
        <div className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          {/* Header */}
          <div className="border-b border-border-color dark:border-[#2A2A2A] pb-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] border border-primary/20 dark:border-[#C75B60]/30 uppercase tracking-wider">
                {notice.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <Calendar className="w-4 h-4 text-primary dark:text-[#C75B60]" />
                <span>
                  {isBn ? 'প্রকাশের তারিখ:' : 'Published Date:'} {notice.publishDate}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
              {notice.title[locale]}
            </h1>
          </div>

          {/* Full Notice Content Body */}
          <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-text-primary leading-relaxed whitespace-pre-line py-2">
            {notice.content[locale]}
          </div>

          {/* Institutional Signature stamp preview */}
          <div className="pt-6 border-t border-border-color dark:border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-text-secondary">
              <div className="font-bold text-text-primary">{siteConfig.name[locale]}</div>
              <div>{siteConfig.location[locale]}</div>
              <div>{siteConfig.email}</div>
            </div>

            <div className="flex items-center gap-3">
              {notice.attachmentName && (
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-surface dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-text-primary hover:bg-surface-subtle dark:hover:bg-[#2A2A2A] transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
                  <span>{isBn ? 'সংযুক্তি ডাউনলোড' : 'Download File'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-4 flex justify-between items-center">
          <Link
            href={`/${locale}/notices`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-[#C75B60] hover:underline"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{isBn ? 'সকল নোটিশে ফিরে যান' : 'Back to All Notices'}</span>
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
