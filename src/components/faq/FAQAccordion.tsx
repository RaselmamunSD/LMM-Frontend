'use client';

import * as React from 'react';
import { FAQItem, Locale } from '@/types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  faqs: FAQItem[];
  locale: Locale;
}

export function FAQAccordion({ faqs, locale }: FAQAccordionProps) {
  const isBn = locale === 'bn';
  const [openIds, setOpenIds] = React.useState<string[]>(['faq-1', 'faq-3']);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', label: isBn ? 'সকল প্রশ্ন' : 'All FAQs' },
    { id: 'admission', label: isBn ? 'ভর্তি সংক্রান্ত' : 'Admissions' },
    { id: 'curriculum', label: isBn ? 'কারিকুলাম ও পাঠ' : 'Curriculum' },
    { id: 'schedule', label: isBn ? 'সময়সূচি' : 'Timings & Schedule' },
    { id: 'general', label: isBn ? 'সাধারণ ও প্রশাসন' : 'General & Security' },
  ];

  const filteredFaqs =
    selectedCategory === 'all'
      ? faqs
      : faqs.filter((f) => f.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] max-w-2xl mx-auto shadow-2xs card-glow">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              selectedCategory === cat.id
                ? 'bg-[#8B1E24] text-white shadow-xs'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle dark:hover:bg-[#262626]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className={`rounded-2xl border ${
                isOpen
                  ? 'border-primary/40 dark:border-[#C75B60]/40 bg-card-bg dark:bg-[#1C1C1C]'
                  : 'border-border-color dark:border-[#2A2A2A] bg-card-bg dark:bg-[#161616]'
              } overflow-hidden shadow-2xs transition-all duration-200 card-glow`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-surface-subtle/50 dark:hover:bg-[#222222] transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                  <span className="font-bold text-sm sm:text-base text-text-primary leading-tight">
                    {faq.question[locale]}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-primary dark:text-[#C75B60]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-color/60 dark:border-[#2A2A2A] pt-4">
                  {faq.answer[locale]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
