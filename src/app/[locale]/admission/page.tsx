import * as React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { PageContainer } from '@/components/common/PageContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { AdmissionForm } from '@/components/admission/AdmissionForm';
import {
  GraduationCap,
  Calendar,
  FileCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  Phone,
} from 'lucide-react';
import { siteConfig } from '@/lib/data/site-config';
import { academicPrograms } from '@/lib/data/programs';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'ভর্তি তথ্য ও অনলাইন আবেদন' : 'Admission Guidelines & Online Application',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার ২০২৬ শিক্ষাবর্ষে প্লে থেকে ৫ম শ্রেণি পর্যন্ত নতুন ভর্তির যাবতীয় তথ্য ও অনলাইন আবেদন ফরম।'
      : 'Official admissions portal for academic year 2026 at Lalmonirhat Model Madrasa. Apply online.',
  };
}

export default async function AdmissionPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  const admissionSteps = [
    {
      step: '০১',
      title: isBn ? 'ফরম পূরণ' : 'Fill Application',
      desc: isBn
        ? 'অনলাইন ভর্তি ফরম নির্ভুল তথ্য দিয়ে পূরণ করে সাবমিট করুন অথবা সরাসরি মাদ্রাসা অফিস থেকে ফরম সংগ্রহ করুন।'
        : 'Complete the online application form with verified details or collect physical form from campus office.',
    },
    {
      step: '০২',
      title: isBn ? 'মৌখিক মূল্যায়ন / ভাইভা' : 'Oral Interaction',
      desc: isBn
        ? 'আবেদনের পর নির্দিষ্ট তারিখে শিক্ষার্থী ও অভিভাবকের সাথে আনন্দময় অনানুষ্ঠানিক মৌখিক মূল্যায়ন অনুষ্ঠিত হয়।'
        : 'Attend a friendly informal assessment assessing foundational readiness and child disposition.',
    },
    {
      step: '০৩',
      title: isBn ? 'সনদপত্র জমা ও নিশ্চয়ন' : 'Document Submission',
      desc: isBn
        ? 'জন্ম নিবন্ধন সনদ ও ২ কপি ছবি জমা দিয়ে নির্ধারিত ফি পরিশোধ সাপেক্ষে চূড়ান্ত ভর্তি নিশ্চিত করুন।'
        : 'Submit birth registration photocopy, 2 passport photos, and complete tuition clearance for confirmation.',
    },
    {
      step: '০৪',
      title: isBn ? 'ক্লাস কার্যক্রম শুরু' : 'Class Commencement',
      desc: isBn
        ? 'বই ও রুটিন সংগ্রহ করে নতুন শিক্ষাবর্ষের প্রাণবন্ত ক্লাসে অংশগ্রহণ করুন।'
        : 'Collect academic textbooks, uniform guidelines, and class timetable to commence joyous classes.',
    },
  ];

  return (
    <div className="py-8 sm:py-12 space-y-14">
      <PageContainer>

        {/* Hero Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 text-white shadow-lg mb-12">
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs inline-block shadow-xs">
              {isBn ? '২০২৬ শিক্ষাবর্ষে ভর্তি চলছে' : 'Admissions Open 2026'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'ভর্তি তথ্য ও অনলাইন আবেদন' : 'Admissions & Online Enrollment'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? 'প্লে গ্রুপ, নার্সারি এবং ১ম শ্রেণি থেকে ৫ম শ্রেণি পর্যন্ত সীমিত আসনে মেধা ও আগ্রহের ভিত্তিতে ছাত্র ও ছাত্রী ভর্তি নেওয়া হচ্ছে।'
                : 'Limited seats available across Play Group, Nursery, and Classes 1 to 5. Empower your child with dual-track excellence.'}
            </p>
          </div>
        </div>

        {/* Admission Process Steps */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
              {isBn ? 'ভর্তি প্রক্রিয়া সহজ ৪টি ধাপে' : 'Admission Process in 4 Simple Steps'}
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              {isBn ? 'স্বচ্ছ ও সহজ প্রক্রিয়ায় সম্পন্ন করুন' : 'Straightforward and parent-friendly enrollment'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((s, i) => (
              <div
                key={i}
                className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-2xl p-6 shadow-xs relative card-glow"
              >
                <div className="text-2xl font-mono font-extrabold text-primary dark:text-[#C75B60] mb-3">
                  {s.step}
                </div>
                <h3 className="font-bold text-base text-text-primary mb-2">{s.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents & Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Required Documents Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-alt dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] space-y-4 card-glow">
            <div className="flex items-center gap-2.5 text-primary dark:text-[#C75B60]">
              <FileCheck className="w-6 h-6" />
              <h3 className="text-lg font-bold text-text-primary">
                {isBn ? 'ভর্তির জন্য আবশ্যকীয় কাগজপত্র' : 'Required Admission Documents'}
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
              {[
                isBn
                  ? 'শিক্ষার্থীর ডিজিটাল জন্ম নিবন্ধন সনদের স্পষ্ট ফটোকপি'
                  : 'Verified photocopy of child digital birth registration certificate',
                isBn
                  ? 'শিক্ষার্থীর পাসপোর্ট সাইজের ২ কপি সদ্য তোলা ল্যাবপ্রিন্ট ছবি'
                  : '2 recent passport-size color photographs of the student',
                isBn
                  ? 'পিতা ও মাতার জাতীয় পরিচয়পত্রের (NID) ফটোকপি'
                  : 'Photocopies of father’s and mother’s National ID cards',
                isBn
                  ? '১ম থেকে ৫ম শ্রেণিতে ভর্তির ক্ষেত্রে পূর্ববর্তী স্কুলের প্রশংসাপত্র/ছাড়পত্র'
                  : 'Transfer certificate / report card from previous school (Classes 1-5)',
              ].map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates & Eligibility */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-alt dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] space-y-4 card-glow">
            <div className="flex items-center gap-2.5 text-primary dark:text-[#C75B60]">
              <Calendar className="w-6 h-6" />
              <h3 className="text-lg font-bold text-text-primary">
                {isBn ? 'গুরুত্বপূর্ণ সময়সূচি ও তথ্য' : 'Key Dates & Timetable'}
              </h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-text-secondary">
              <div className="flex items-start justify-between pb-2 border-b border-border-color dark:border-[#2A2A2A]">
                <span className="font-semibold text-text-primary">
                  {isBn ? 'আবেদন শুরুর তারিখ:' : 'Applications Open:'}
                </span>
                <span>{isBn ? 'চলমান (সীমিত আসন)' : 'Ongoing (Limited Seats)'}</span>
              </div>
              <div className="flex items-start justify-between pb-2 border-b border-border-color dark:border-[#2A2A2A]">
                <span className="font-semibold text-text-primary">
                  {isBn ? 'অফিস থেকে ফরম সংগ্রহ:' : 'Office Collection Hours:'}
                </span>
                <span>{isBn ? 'সকাল ৮:০০টা - বিকাল ৪:০০টা' : '8:00 AM - 4:00 PM (Sat-Thu)'}</span>
              </div>
              <div className="flex items-start justify-between pb-2 border-b border-border-color dark:border-[#2A2A2A]">
                <span className="font-semibold text-text-primary">
                  {isBn ? 'ভর্তি হেল্পলাইন:' : 'Admissions Helpline:'}
                </span>
                <span className="font-semibold text-primary dark:text-[#C75B60]">{siteConfig.phone[0]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: The Live Interactive Admission Form */}
        <div className="pt-4" id="application-form">
          <SectionHeading
            badge={isBn ? 'অনলাইন ফরম' : 'Application Portal'}
            title={
              isBn
                ? 'অনলাইন ভর্তি আবেদন ফরম ২০২৬'
                : 'Online Admission Application Form 2026'
            }
            subtitle={
              isBn
                ? 'নিচের ঘরে আপনার সন্তানের তথ্য প্রদান করুন। আবেদন সফল হলে তাৎক্ষণিক একটি রেফারেন্স কোড পাবেন।'
                : 'Provide accurate applicant credentials. A tracking reference code will be generated upon submission.'
            }
          />

          <React.Suspense
            fallback={
              <div className="p-12 text-center text-text-muted bg-card-bg dark:bg-[#1C1C1C] rounded-3xl border border-border-color dark:border-[#2A2A2A]">
                <span className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin inline-block mr-2" />
                <span>{isBn ? 'আবেদন ফরম লোড হচ্ছে...' : 'Loading application form...'}</span>
              </div>
            }
          >
            <AdmissionForm locale={locale} />
          </React.Suspense>
        </div>
      </PageContainer>
    </div>
  );
}
