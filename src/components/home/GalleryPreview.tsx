import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { galleryData } from '@/lib/data/gallery';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { Camera, ArrowRight, Eye } from 'lucide-react';

interface GalleryPreviewProps {
  locale: Locale;
}

export function GalleryPreview({ locale }: GalleryPreviewProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-24 bg-surface-alt border-y border-border-color">
      <PageContainer>
        <SectionHeading
          badge={isBn ? 'চিত্রশালা' : 'Visual Highlights'}
          title={
            isBn
              ? 'ক্যাম্পাস ও শিক্ষার্থীদের কর্মচঞ্চল মুহূর্তগুলো'
              : 'Glimpses of Madrasa Life & Activities'
          }
          subtitle={
            isBn
              ? 'শ্রেণিকক্ষ, কুরআন পাঠ, খেলাধুলা ও সাংস্কৃতিক কর্মকাণ্ডের কিছু বিশেষ মুহূর্ত।'
              : 'Memorable snapshots capturing academic joy, Quran recitation, and camaraderie.'
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryData.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-card-bg border border-border-color shadow-2xs hover:shadow-md transition-all duration-300"
            >
              {/* Image Graphic / Placeholder frame with brand design */}
              <div className="w-full h-full bg-gradient-to-tr from-primary/10 via-surface-subtle to-primary/5 flex flex-col items-center justify-center p-4 text-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-text-primary line-clamp-2 px-2">
                  {item.title[locale]}
                </div>
                <span className="text-[10px] text-text-muted mt-1 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Hover overlay with detail icon */}
              <Link
                href={`/${locale}/gallery`}
                className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-200"
                aria-label={item.title[locale]}
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold bg-white/20 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/40">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isBn ? 'গ্যালারিতে দেখুন' : 'View Gallery'}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-surface hover:bg-surface-subtle border border-border-color text-text-primary shadow-2xs hover:shadow transition-all"
          >
            <span>{isBn ? 'সম্পূর্ণ ফটো গ্যালারি দেখুন' : 'Explore Complete Photo Gallery'}</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}

interface LocaleProps {
  locale: Locale;
}
