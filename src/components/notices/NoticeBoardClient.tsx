'use client';

import * as React from 'react';
import Link from 'next/link';
import { Locale, Notice } from '@/types';
import {
  Search,
  Calendar,
  FileText,
  Download,
  AlertCircle,
  Tag,
  ArrowRight,
} from 'lucide-react';

interface NoticeBoardClientProps {
  notices: Notice[];
  locale: Locale;
}

export function NoticeBoardClient({ notices, locale }: NoticeBoardClientProps) {
  const isBn = locale === 'bn';
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', label: isBn ? 'সকল বিজ্ঞপ্তি' : 'All Notices' },
    { id: 'admission', label: isBn ? 'ভর্তি' : 'Admission' },
    { id: 'examination', label: isBn ? 'পরীক্ষা' : 'Examination' },
    { id: 'holiday', label: isBn ? 'ছুটি' : 'Holidays' },
    { id: 'event', label: isBn ? 'ইভেন্ট' : 'Events' },
    { id: 'general', label: isBn ? 'সাধারণ' : 'General' },
  ];

  const filteredNotices = notices.filter((notice) => {
    const matchesCategory =
      selectedCategory === 'all' || notice.category === selectedCategory;
    const titleText = notice.title[locale].toLowerCase();
    const summaryText = notice.summary[locale].toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      titleText.includes(query) || summaryText.includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] shadow-xs card-glow">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isBn ? 'নোটিশ খুঁজুন...' : 'Search notices...'}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#8B1E24] text-white shadow-xs'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle dark:hover:bg-[#262626] border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notices Count */}
      <div className="text-xs text-text-muted px-1 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#C75B60]" />
        <span>
          {isBn
            ? `মোট নোটিশ প্রদর্শিত হচ্ছে: ${filteredNotices.length} টি`
            : `Showing ${filteredNotices.length} notices`}
        </span>
      </div>

      {/* Notices List */}
      {filteredNotices.length === 0 ? (
        <div className="p-12 text-center bg-card-bg dark:bg-[#1C1C1C] rounded-3xl border border-border-color dark:border-[#2A2A2A] space-y-3 card-glow">
          <FileText className="w-10 h-10 text-text-muted mx-auto opacity-50" />
          <div className="font-bold text-base text-text-primary">
            {isBn ? 'কোনো নোটিশ পাওয়া যায়নি' : 'No notices match your criteria'}
          </div>
          <p className="text-xs text-text-secondary">
            {isBn
              ? 'অনুগ্রহ করে ভিন্ন কোনো শব্দ বা ক্যাটাগরি দিয়ে পুনরায় চেষ্টা করুন।'
              : 'Please refine your search terms or choose a different category.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 shadow-xs hover:shadow-md dark:hover:border-[#C75B60]/40 card-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#FDF2F2] dark:bg-[#2A1416] text-[#8B1E24] dark:text-[#E58B8F] border border-[#8B1E24]/20 dark:border-[#8B1E24]/40 uppercase tracking-wider">
                      {notice.category}
                    </span>
                    {notice.isUrgent && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-accent-red/10 text-accent-red border border-accent-red/20">
                        {isBn ? 'জরুরি' : 'Urgent'}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
                    <span>{notice.publishDate}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-text-primary hover:text-primary dark:hover:text-[#C75B60] transition-colors mb-2.5">
                  <Link href={`/${locale}/notices/${notice.id}`}>
                    {notice.title[locale]}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4">
                  {notice.summary[locale]}
                </p>
              </div>

              <div className="pt-4 border-t border-border-color dark:border-[#2A2A2A] flex items-center justify-between">
                <Link
                  href={`/${locale}/notices/${notice.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-[#C75B60] hover:underline"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isBn ? 'বিস্তারিত পড়ুন' : 'Read Full Notice'}</span>
                </Link>

                {notice.attachmentName && (
                  <span className="text-[11px] text-text-muted flex items-center gap-1">
                    <Download className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
                    <span className="hidden sm:inline">{notice.attachmentName}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
