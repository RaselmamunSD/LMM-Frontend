'use client';

import * as React from 'react';
import { GalleryItem, Locale } from '@/types';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  locale: Locale;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  locale,
}: LightboxProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative w-full aspect-16/10 max-h-[70vh] rounded-2xl overflow-hidden bg-neutral-900 border border-white/20 flex flex-col items-center justify-center p-8 text-center text-white">
          <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-[#E58B8F]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold max-w-lg mb-2">
            {currentItem.title[locale]}
          </h3>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white uppercase tracking-wider">
            {currentItem.category}
          </span>
          {currentItem.date && (
            <span className="text-xs text-white/60 mt-2">
              {currentItem.date}
            </span>
          )}
        </div>

        {/* Counter and Title */}
        <div className="mt-4 text-center text-white/80 text-sm">
          <span>{currentIndex + 1}</span> / <span>{items.length}</span>
        </div>
      </div>
    </div>
  );
}
