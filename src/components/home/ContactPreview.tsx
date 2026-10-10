import * as React from 'react';
import Link from 'next/link';
import { Locale } from '@/types';
import { siteConfig } from '@/lib/data/site-config';
import { PageContainer } from '../common/PageContainer';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare } from 'lucide-react';

interface ContactPreviewProps {
  locale: Locale;
}

export function ContactPreview({ locale }: ContactPreviewProps) {
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-24 bg-surface dark:bg-[#111111] transition-colors duration-300">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Contact details card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#8B1E24] border border-[#8B1E24]/20 dark:bg-[#2A1416] dark:border-[#8B1E24]/40 dark:text-[#E58B8F] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
              <span>{isBn ? 'সরাসরি যোগাযোগ' : 'Direct Campus Contact'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
              {isBn
                ? 'মাদ্রাসা ক্যাম্পাসে আপনার উপস্থিতি সাদরে আমন্ত্রিত'
                : 'Visit Our Campus in Sadar, Lalmonirhat'}
            </h2>

            <p className="text-sm text-text-secondary leading-relaxed">
              {isBn
                ? 'ভর্তি সংক্রান্ত যেকোনো তথ্য বা পরামর্শের জন্য সরাসরি আমাদের অফিসে যোগাযোগ করুন অথবা আমাদের হটলাইনে কল দিন।'
                : 'For admission inquiries or campus tours, visit our administration office or reach out via phone or email.'}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-subtle dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] card-glow">
                <MapPin className="w-5 h-5 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs uppercase text-text-primary">
                    {isBn ? 'ক্যাম্পাস ঠিকানা' : 'Campus Location'}
                  </div>
                  <div className="text-sm text-text-secondary mt-0.5">
                    {siteConfig.fullAddress[locale]}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-subtle dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] card-glow">
                <Phone className="w-5 h-5 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs uppercase text-text-primary">
                    {isBn ? 'হটলাইন নম্বর' : 'Hotline Numbers'}
                  </div>
                  <div className="text-sm text-text-secondary mt-0.5 flex flex-wrap gap-x-4">
                    {siteConfig.phone.map((ph, idx) => (
                      <a key={idx} href={`tel:${ph}`} className="hover:text-primary dark:hover:text-[#C75B60] font-medium">
                        {ph}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-subtle dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] card-glow">
                <Mail className="w-5 h-5 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs uppercase text-text-primary">
                    {isBn ? 'ইমেইল যোগাযোগ' : 'Official Email'}
                  </div>
                  <div className="text-sm text-text-secondary mt-0.5">
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-primary dark:hover:text-[#C75B60] font-medium">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#8B1E24] hover:bg-[#73181D] text-white transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>{isBn ? 'বার্তা পাঠান (Contact Form)' : 'Send Online Inquiry'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Google Maps / Campus Card Box */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-border-color dark:border-[#2A2A2A] overflow-hidden bg-card-bg dark:bg-[#1C1C1C] shadow-md p-6 sm:p-8 space-y-6 card-glow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-primary dark:text-[#C75B60] uppercase">
                    {isBn ? 'অফিস খোলা থাকার সময়' : 'Office Working Hours'}
                  </div>
                  <div className="text-sm font-semibold text-text-primary mt-1">
                    {siteConfig.officeHours[locale]}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-[#8B1E24]/20 flex items-center justify-center text-primary dark:text-[#C75B60]">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              {/* Map Preview Graphic */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary dark:bg-[#8B1E24] text-white flex items-center justify-center mb-3 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="font-bold text-sm text-text-primary">
                  {siteConfig.name[locale]}
                </div>
                <div className="text-xs text-text-muted mt-1">
                  {isBn ? 'সদর, লালমনিরহাট, রংপুর বিভাগ' : 'Sadar, Lalmonirhat, Rangpur Division'}
                </div>
                <div className="mt-4">
                  <a
                    href="https://maps.google.com/?q=Lalmonirhat+Sadar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] text-primary dark:text-[#C75B60] hover:bg-primary dark:hover:bg-[#8B1E24] hover:text-white dark:hover:text-white transition-colors"
                  >
                    <span>{isBn ? 'গুগল ম্যাপে লোকেশন দেখুন' : 'Open in Google Maps'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FDF5F5] dark:bg-[#161616] border border-[#8B1E24]/20 dark:border-[#2A2A2A] text-xs text-text-secondary leading-relaxed">
                {isBn
                  ? '💡 পরামর্শ: অভিভাবকগণ সকাল ৯:০০টা থেকে দুপুর ১২:০০টার মধ্যে সরাসরি প্রধান শিক্ষকের সাথে সাক্ষাতের সুযোগ পাবেন।'
                  : '💡 Note: Guardians may consult directly with the Principal between 9:00 AM and 12:00 PM.'}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
