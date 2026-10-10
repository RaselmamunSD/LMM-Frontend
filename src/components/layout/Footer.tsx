'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/types';
import { siteConfig } from '@/lib/data/site-config';
import { academicPrograms } from '@/lib/data/programs';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  GraduationCap,
  Heart,
  MessageCircle,
} from 'lucide-react';
import { IslamicStar } from '../common/IslamicPattern';
import { FacebookIcon, YoutubeIcon, WhatsappIcon } from '../common/SocialIcons';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: `/${locale}/about`, label: locale === 'bn' ? 'আমাদের পরিচিতি' : 'About Us' },
    { href: `/${locale}/curriculum`, label: locale === 'bn' ? 'পাঠ্যক্রম বিবরণ' : 'Curriculum' },
    { href: `/${locale}/teachers`, label: locale === 'bn' ? 'শিক্ষকমণ্ডলী' : 'Teachers Directory' },
    { href: `/${locale}/facilities`, label: locale === 'bn' ? 'ক্যাম্পাস সুবিধা' : 'Campus Facilities' },
    { href: `/${locale}/notices`, label: locale === 'bn' ? 'নোটিশ বোর্ড' : 'Notice Board' },
    { href: `/${locale}/events`, label: locale === 'bn' ? 'ইভেন্টস ও সম্মেলন' : 'Events & Seminars' },
    { href: `/${locale}/gallery`, label: locale === 'bn' ? 'চিত্রশালা (গ্যালারি)' : 'Photo Gallery' },
    { href: `/${locale}/faq`, label: locale === 'bn' ? 'সাধারণ প্রশ্নাবলী (FAQ)' : 'Frequently Asked Questions' },
  ];

  return (
    <footer className="bg-[#E2F5E7] dark:bg-[#0A170F] text-[#244B33] dark:text-[#E2F5E7] border-t border-[#C3E6CF] dark:border-[#193B26] pt-16 pb-8 transition-colors relative overflow-hidden">
      {/* Top green accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#087A35] dark:via-[#4ADE80] to-transparent pointer-events-none" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-[0.04] dark:opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#C3E6CF] dark:border-[#193B26]">
          {/* Column 1: Institution Info & Logo */}
          <div className="space-y-4">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-14 h-14 shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-[#087A35] via-[#A8B923] to-[#087A35] shadow-xs transition-transform duration-200 group-hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/logo.jpg"
                    alt={siteConfig.name[locale]}
                    fill
                    className="object-contain p-0.5"
                    sizes="56px"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B2917] dark:text-white leading-tight group-hover:text-[#087A35] dark:group-hover:text-[#4ADE80] transition-colors">
                  {siteConfig.name[locale]}
                </h3>
                <p className="text-xs text-[#087A35] dark:text-[#4ADE80] font-semibold">
                  {siteConfig.subtitle[locale]}
                </p>
              </div>
            </Link>

            <p className="text-sm text-[#385E46] dark:text-[#A7C8B3] leading-relaxed">
              {siteConfig.tagline[locale]}
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold text-[#0B2917] dark:text-white uppercase tracking-wider mb-2">
                {locale === 'bn' ? 'আমাদের সামাজিক যোগাযোগ' : 'Connect With Us'}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#122419] border border-[#C3E6CF] dark:border-[#1E3E2A] flex items-center justify-center text-[#244B33] dark:text-[#A7C8B3] hover:text-[#087A35] dark:hover:text-[#4ADE80] hover:border-[#087A35] transition-colors shadow-2xs"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#122419] border border-[#C3E6CF] dark:border-[#1E3E2A] flex items-center justify-center text-[#244B33] dark:text-[#A7C8B3] hover:text-[#087A35] dark:hover:text-[#4ADE80] hover:border-[#087A35] transition-colors shadow-2xs"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#122419] border border-[#C3E6CF] dark:border-[#1E3E2A] flex items-center justify-center text-[#244B33] dark:text-[#A7C8B3] hover:text-[#087A35] dark:hover:text-[#4ADE80] hover:border-[#087A35] transition-colors shadow-2xs"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#0B2917] dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <IslamicStar size={14} className="text-[#087A35] dark:text-[#4ADE80]" />
              <span>{locale === 'bn' ? 'প্রয়োজনীয় পেইজসমূহ' : 'Important Pages'}</span>
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#385E46] dark:text-[#A7C8B3] hover:text-[#087A35] dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#087A35] dark:text-[#4ADE80] text-xs font-bold">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div>
            <h4 className="text-sm font-bold text-[#0B2917] dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#087A35] dark:text-[#4ADE80]" />
              <span>{locale === 'bn' ? 'একাডেমিক ক্লাস' : 'Academic Classes'}</span>
            </h4>
            <ul className="space-y-2 text-sm">
              {academicPrograms.map((prog) => (
                <li key={prog.id}>
                  <Link
                    href={`/${locale}/academic-programs/${prog.slug}`}
                    className="text-[#385E46] dark:text-[#A7C8B3] hover:text-[#087A35] dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#087A35] dark:text-[#4ADE80] text-xs">●</span>
                    <span>{prog.name[locale]}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={`/${locale}/admission`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#087A35] dark:text-[#4ADE80] hover:underline"
                >
                  <span>{locale === 'bn' ? 'অনলাইন ভর্তি তথ্য ও ফরম →' : 'Online Admission Info →'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#0B2917] dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <IslamicStar size={14} className="text-[#087A35] dark:text-[#4ADE80]" />
              <span>{locale === 'bn' ? 'যোগাযোগের তথ্য' : 'Contact Information'}</span>
            </h4>

            <div className="space-y-3 text-sm text-[#385E46] dark:text-[#A7C8B3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087A35] dark:text-[#4ADE80] shrink-0 mt-0.5" />
                <span>{siteConfig.fullAddress[locale]}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#087A35] dark:text-[#4ADE80] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {siteConfig.phone.map((ph, idx) => (
                    <a key={idx} href={`tel:${ph}`} className="hover:text-[#087A35] dark:hover:text-white">
                      {ph}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#087A35] dark:text-[#4ADE80] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#087A35] dark:hover:text-white truncate"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#087A35] dark:text-[#4ADE80] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-[#4A725A] dark:text-[#8EAE99]">
                  {siteConfig.officeHours[locale]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Links, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A725A] dark:text-[#8EAE99]">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© 2026 {siteConfig.name[locale]}।</span>
            <span className="hidden sm:inline">
              {locale === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href={`/${locale}/admission`}
              className="hover:text-[#087A35] dark:hover:text-white transition-colors"
            >
              {locale === 'bn' ? 'ভর্তি নীতি' : 'Admission Policy'}
            </Link>
            <span>•</span>
            <Link
              href={`/${locale}/contact`}
              className="hover:text-[#087A35] dark:hover:text-white transition-colors"
            >
              {locale === 'bn' ? 'সহায়তা' : 'Support'}
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#087A35] dark:text-[#4ADE80] hover:text-[#0B2917] dark:hover:text-white font-semibold transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <span>{locale === 'bn' ? 'শীর্ষে যান' : 'Back to top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
