import * as React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickInfoCards } from '@/components/home/QuickInfoCards';
import { WelcomeMessage } from '@/components/home/WelcomeMessage';
import { AboutSummary } from '@/components/home/AboutSummary';
import { ProgramsOverview } from '@/components/home/ProgramsOverview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { QuranHighlights } from '@/components/home/QuranHighlights';
import { TeachersPreview } from '@/components/home/TeachersPreview';
import { FacilitiesPreview } from '@/components/home/FacilitiesPreview';
import { NoticesPreview } from '@/components/home/NoticesPreview';
import { EventsPreview } from '@/components/home/EventsPreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { AdmissionCta } from '@/components/home/AdmissionCta';
import { Testimonials } from '@/components/home/Testimonials';
import { ContactPreview } from '@/components/home/ContactPreview';
import { siteConfig } from '@/lib/data/site-config';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: `${siteConfig.name[locale]} | ${siteConfig.subtitle[locale]}`,
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসা (নূরানী একাডেমি) - প্লে থেকে ৫ম শ্রেণি পর্যন্ত কুরআন হিফজ, সহীহ তাজবীদ ও উন্নত সাধারণ শিক্ষার নির্ভরযোগ্য প্রতিষ্ঠান।'
      : 'Lalmonirhat Model Madrasa (Nurani Academy) - Leading Islamic primary institution from Play Group to Class Five in Sadar, Lalmonirhat.',
    openGraph: {
      title: `${siteConfig.name[locale]} | ${siteConfig.subtitle[locale]}`,
      description: siteConfig.tagline[locale],
      url: `https://lalmonirhatmodelmadrasa.edu.bd/${locale}`,
      siteName: siteConfig.name[locale],
      locale: isBn ? 'bn_BD' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/logo.jpg',
          width: 640,
          height: 640,
          alt: `${siteConfig.name[locale]} Logo`,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${siteConfig.name[locale]} | ${siteConfig.subtitle[locale]}`,
      description: siteConfig.tagline[locale],
      images: ['/images/logo.jpg'],
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';

  return (
    <div className="flex flex-col">
      {/* 1. Hero section with official logo, headline, intro, CTAs */}
      <HeroSection locale={locale} />

      {/* 2. Quick information cards */}
      <QuickInfoCards locale={locale} />

      {/* 3. Welcome message from the Principal */}
      <WelcomeMessage locale={locale} />

      {/* 4. About the madrasa summary */}
      <AboutSummary locale={locale} />

      {/* 5. Academic programs overview */}
      <ProgramsOverview locale={locale} />

      {/* 6. Why Choose Our Madrasa section */}
      <WhyChooseUs locale={locale} />

      {/* 7. Quranic and Islamic education highlights */}
      <QuranHighlights locale={locale} />

      {/* 8. Teachers and staff preview */}
      <TeachersPreview locale={locale} />

      {/* 9. Campus and learning facilities */}
      <FacilitiesPreview locale={locale} />

      {/* 10. Latest notices and announcements */}
      <NoticesPreview locale={locale} />

      {/* 11. Upcoming events and activities */}
      <EventsPreview locale={locale} />

      {/* 12. Photo gallery preview */}
      <GalleryPreview locale={locale} />

      {/* 13. Admission call-to-action section */}
      <AdmissionCta locale={locale} />

      {/* 14. Parent testimonials */}
      <Testimonials locale={locale} />

      {/* 15. Contact information and location preview */}
      <ContactPreview locale={locale} />
    </div>
  );
}
