'use client';

import * as React from 'react';
import { GalleryItem, Locale } from '@/types';
import { Lightbox } from '@/components/common/Lightbox';
import { Camera, Eye, Filter } from 'lucide-react';

interface GalleryClientProps {
  items: GalleryItem[];
  locale: Locale;
}

export function GalleryClient({ items, locale }: GalleryClientProps) {
  const isBn = locale === 'bn';
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const categories = [
    { id: 'all', label: isBn ? 'সকল ছবি' : 'All Photos' },
    { id: 'quran', label: isBn ? 'কুরআন ও নূরানী পাঠ' : 'Quran & Tajweed' },
    { id: 'classroom', label: isBn ? 'শ্রেণিকক্ষ পাঠদান' : 'Classroom' },
    { id: 'activities', label: isBn ? 'ক্যালিগ্রাফি ও চারুকলা' : 'Calligraphy & Arts' },
    { id: 'events', label: isBn ? 'অনুষ্ঠান ও পুরস্কার' : 'Events & Awards' },
    { id: 'campus', label: isBn ? 'ক্যাম্পাস ও নামাজ' : 'Campus & Prayer' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] max-w-3xl mx-auto shadow-2xs card-glow">
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative rounded-3xl overflow-hidden aspect-4/3 bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] shadow-2xs hover:shadow-lg dark:hover:border-[#C75B60]/40 card-glow transition-all duration-300 cursor-pointer"
          >
            {/* Visual Graphic Representation */}
            <div className="w-full h-full bg-gradient-to-tr from-primary/10 via-surface-subtle to-primary/5 dark:from-[#2A1416]/50 dark:via-[#161616] dark:to-[#1C1C1C] flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-[#8B1E24]/25 text-primary dark:text-[#C75B60] flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-[#8B1E24] dark:group-hover:text-white transition-colors">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-text-primary line-clamp-2 px-2">
                {item.title[locale]}
              </h3>
              <span className="text-[10px] font-semibold text-primary dark:text-[#C75B60] mt-1 uppercase tracking-wider">
                {item.category}
              </span>
            </div>

            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-primary/70 dark:bg-[#050505]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-200">
              <div className="flex items-center gap-1.5 text-xs font-bold bg-white/20 dark:bg-[#8B1E24]/40 backdrop-blur-xs px-4 py-2 rounded-full border border-white/40 dark:border-[#C75B60]/50">
                <Eye className="w-4 h-4 text-white" />
                <span>{isBn ? 'বড় করে দেখুন' : 'Enlarge Image'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        locale={locale}
      />
    </div>
  );
}
