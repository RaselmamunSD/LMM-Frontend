import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { siteConfig } from '@/lib/data/site-config';
import { PageContainer } from '@/components/common/PageContainer';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { FacebookIcon, YoutubeIcon, WhatsappIcon } from '@/components/common/SocialIcons';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'যোগাযোগের ঠিকানা ও বার্তা' : 'Contact Information & Inquiries',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার সাথে যোগাযোগের ফোন নম্বর, ইমেইল, অফিস সময় এবং ক্যাম্পাস ঠিকানা।'
      : 'Reach out to Lalmonirhat Model Madrasa via phone, email, or online message.',
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PageContainer>

        {/* Hero Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 text-white shadow-lg mb-12">
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs inline-block shadow-xs">
              {isBn ? 'সরাসরি যোগাযোগ' : 'Direct Campus Connect'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'যোগাযোগ ও অনুসন্ধানের ঠিকানা' : 'Contact Us & Campus Inquiry'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'ভর্তি, সিলেবাস বা যেকোনো তথ্যের জন্য আমাদের প্রশাসন কার্যালয়ে যোগাযোগ করুন অথবা নিচের ফরম পূরণ করে পাঠান।'
                : 'Have questions or need assistance? Reach out to our campus office or send a direct inquiry below.'}
            </p>
          </div>
        </div>

        {/* Contact Info Grid + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Cards & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-8 shadow-xs card-glow space-y-5">
              <h2 className="text-xl font-bold text-text-primary">
                {isBn ? 'অফিসিয়াল যোগাযোগের তথ্য' : 'Campus Office Details'}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-text-secondary">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-text-primary block text-xs uppercase">
                      {isBn ? 'ঠিকানা' : 'Address'}
                    </span>
                    <span className="text-text-secondary leading-relaxed">
                      {siteConfig.fullAddress[locale]}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-text-primary block text-xs uppercase">
                      {isBn ? 'ফোন নম্বর' : 'Phone Numbers'}
                    </span>
                    <div className="space-y-0.5">
                      {siteConfig.phone.map((ph, idx) => (
                        <a
                          key={idx}
                          href={`tel:${ph}`}
                          className="hover:text-primary dark:hover:text-[#C75B60] block font-medium"
                        >
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-text-primary block text-xs uppercase">
                      {isBn ? 'অফিসিয়াল ইমেইল' : 'Email Address'}
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-primary dark:hover:text-[#C75B60] font-medium"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-text-primary block text-xs uppercase">
                      {isBn ? 'অফিস সময়' : 'Office Hours'}
                    </span>
                    <span>{siteConfig.officeHours[locale]}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border-color dark:border-[#2A2A2A]">
                <span className="text-xs font-bold text-text-primary uppercase tracking-wider block mb-2">
                  {isBn ? 'সামাজিক যোগাযোগ' : 'Social Media'}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-surface dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] flex items-center justify-center text-text-secondary hover:text-primary dark:hover:text-[#C75B60] hover:border-primary dark:hover:border-[#C75B60] transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-surface dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] flex items-center justify-center text-text-secondary hover:text-accent-red hover:border-accent-red transition-colors"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-surface dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] flex items-center justify-center text-text-secondary hover:text-primary dark:hover:text-[#C75B60] hover:border-primary dark:hover:border-[#C75B60] transition-colors"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="rounded-3xl border border-border-color dark:border-[#2A2A2A] bg-card-bg dark:bg-[#1C1C1C] p-6 text-center space-y-3 card-glow">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] mx-auto flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-text-primary">
                {isBn ? 'গুগল ম্যাপে মাদ্রাসার অবস্থান' : 'Find Us on Google Maps'}
              </h3>
              <p className="text-xs text-text-secondary">
                {siteConfig.fullAddress[locale]}
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Lalmonirhat+Sadar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#8B1E24] hover:bg-[#73181D] text-white transition-colors"
                >
                  <span>{isBn ? 'গুগল ম্যাপ খুলুন' : 'Open in Google Maps'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm locale={locale} />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
