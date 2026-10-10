import * as React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/types';
import { siteConfig } from '@/lib/data/site-config';
import { PageContainer } from '@/components/common/PageContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  Target,
  Compass,
  Shield,
  Heart,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Calendar,
  MapPin,
  GraduationCap,
  Quote,
} from 'lucide-react';
import { IslamicStar } from '@/components/common/IslamicPattern';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return {
    title: isBn ? 'আমাদের পরিচিতি | লক্ষ্য ও উদ্দেশ্য' : 'About Us | Mission & Vision',
    description: isBn
      ? 'লালমনিরহাট মডেল মাদ্রাসার ইতিহাস, লক্ষ্য, রূপকল্প, শিক্ষাদর্শন ও প্রাতিষ্ঠানিক মূল্যবোধ।'
      : 'History, educational philosophy, mission, vision, and core values of Lalmonirhat Model Madrasa.',
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';
  const isBn = locale === 'bn';

  return (
    <div className="py-8 sm:py-12 space-y-16">
      <PageContainer>

        {/* Hero Banner for About */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#050505] via-[#4A0E12] to-[#8B1E24] dark:from-[#050505] dark:via-[#2F0B0E] dark:to-[#4A0E12] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 p-8 sm:p-12 text-white shadow-lg mb-12">
          <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs inline-block shadow-xs">
              {isBn ? 'প্রতিষ্ঠিত: ২০২৩ খ্রি.' : 'Established: 2023'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {isBn ? 'লালমনিরহাট মডেল মাদ্রাসা পরিচিতি' : 'About Lalmonirhat Model Madrasa'}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {siteConfig.tagline[locale]}
            </p>
          </div>
        </div>

        {/* Section 1: Introduction & Establishment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F2] text-[#8B1E24] border border-[#8B1E24]/20 dark:bg-[#2A1416] dark:text-[#E58B8F] dark:border-[#8B1E24]/40">
              <Calendar className="w-3.5 h-3.5 text-primary dark:text-[#C75B60]" />
              <span>{isBn ? 'প্রতিষ্ঠা ও পটভূমি' : 'History & Establishment'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
              {isBn
                ? 'আদর্শ দ্বীনি ও নৈতিক শিক্ষার বাতিঘর হিসেবে আমাদের আত্মপ্রকাশ'
                : 'Pioneering Integrated Islamic & Primary Education in Sadar'}
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {isBn
                ? 'লালমনিরহাট মডেল মাদ্রাসা ২০২৩ সালে লালমনিরহাট জেলা সদরে প্রতিষ্ঠিত হয়। এলাকার সচেতন ও দ্বীনদরদী অভিভাবকদের একটি আধুনিক দ্বীনি শিক্ষাপ্রতিষ্ঠানের দীর্ঘদিনের দাবির প্রেক্ষিতে এই প্রতিষ্ঠানটির সূচনা।'
                : 'Lalmonirhat Model Madrasa was founded in 2023 in the heart of Sadar, Lalmonirhat. Initiated in response to parents seeking an authentic Islamic sanctuary with standard national academic rigor.'}
            </p>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {isBn
                ? 'আমাদের প্রাথমিক শাখা "নূরানী একাডেমি" প্লে গ্রুপ থেকে ৫ম শ্রেণি পর্যন্ত কোমলমতি শিশুদের পরম স্নেহে পাঠদান করে আসছে। এখানে কুরআনুল কারীমের সহীহ মাখরাজ ও তাজবীদ চর্চার পাশাপাশি জাতীয় শিক্ষাক্রমের বাংলা, ইংরেজি, গণিত ও বিজ্ঞানের পাঠদান শতভাগ নিশ্চিত করা হয়।'
                : 'Our primary wing, "Nurani Academy", nurtures young students from Play Group through Class Five. Students master accurate Tajweed and Quran memorization while simultaneously mastering the national standard NCTB curriculum.'}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] card-glow">
                <div className="text-2xl font-bold text-primary dark:text-[#C75B60]">২০২৩</div>
                <div className="text-xs text-text-secondary mt-0.5">{isBn ? 'প্রতিষ্ঠা সাল' : 'Year Founded'}</div>
              </div>
              <div className="p-4 rounded-xl bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] card-glow">
                <div className="text-2xl font-bold text-primary dark:text-[#C75B60]">প্লে - ৫ম</div>
                <div className="text-xs text-text-secondary mt-0.5">{isBn ? 'নূরানী একাডেমি' : 'Nurani Academy'}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm p-6 rounded-3xl bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] shadow-md card-glow text-center space-y-4">
              <div className="relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#050505] via-[#8B1E24] to-[#A52A2A] shadow-md">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white p-2">
                  <Image
                    src="/images/logo.jpg"
                    alt={siteConfig.name[locale]}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">{siteConfig.name[locale]}</h3>
                <p className="text-xs text-primary dark:text-[#C75B60] font-medium">{siteConfig.subtitle[locale]}</p>
                <p className="text-xs text-text-muted mt-1">{siteConfig.location[locale]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="p-8 rounded-3xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] shadow-xs card-glow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B1E24]/10 dark:bg-[#8B1E24]/20 border border-[#8B1E24]/20 dark:border-[#C75B60]/30 flex items-center justify-center text-primary dark:text-[#C75B60]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-text-primary">
              {isBn ? 'আমাদের লক্ষ্য (Our Mission)' : 'Our Mission'}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {isBn
                ? 'কুরআন ও সুন্নাহর আলোকে তাকওয়াসম্পন্ন, নৈতিক মূল্যবোধে বলীয়ান এবং দেশপ্রেমিক আদর্শ নাগরিক গড়ে তোলা। যারা বিশুদ্ধ কুরআন তিলাওয়াত জানবে এবং আধুনিক বিশ্বের প্রতিটি পদক্ষেপে ঈমান ও মেধা দিয়ে সফল নেতৃত্ব দেবে।'
                : 'To cultivate God-conscious, morally refined, and patriotic youth through the pure light of the Holy Quran and Sunnah, equipping them with the academic prowess to lead with faith and intellect in modern society.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] shadow-xs card-glow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B1E24]/10 dark:bg-[#8B1E24]/20 border border-[#8B1E24]/20 dark:border-[#C75B60]/30 flex items-center justify-center text-primary dark:text-[#C75B60]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-text-primary">
              {isBn ? 'আমাদের রূপকল্প (Our Vision)' : 'Our Vision'}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {isBn
                ? 'উত্তরবঙ্গের অন্যতম শীর্ষস্থানীয় আদর্শ দ্বীনি মডেল বিদ্যাপীঠ হিসেবে রূপ নেওয়া, যেখান থেকে প্রাথমিক শিক্ষা সমাপনকারী প্রতিটি শিক্ষার্থী দ্বীনি ও সাধারণ উভয় অঙ্গনে ঈর্ষণীয় মেধা ও চারিত্রিক দৃষ্টান্ত স্থাপন করবে।'
                : 'To be celebrated as the premier integrated Islamic model primary institution across northern Bangladesh, inspiring students who stand as towering moral benchmarks and academic achievers.'}
            </p>
          </div>
        </div>

        {/* Section 3: Educational Philosophy & Core Values */}
        <div className="space-y-8 pt-6">
          <SectionHeading
            badge={isBn ? 'মূল্যবোধ ও দর্শন' : 'Values & Philosophy'}
            title={
              isBn
                ? 'আমাদের শিক্ষাদর্শন ও মূল ইসলামিক মূল্যবোধ'
                : 'Our Educational Philosophy & Core Islamic Values'
            }
            subtitle={
              isBn
                ? 'আমরা বিশ্বাস করি প্রতিটি শিশুই এক অমূল্য আমানত, যাদের চরিত্র ও মেধা সঠিক পরিচর্যায় বিকশিত হয়।'
                : 'We believe every child is a divine trust (Amanah) endowed with limitless potential for righteousness.'
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: isBn ? 'তাকওয়া ও ইখলাস' : 'Taqwa & Sincerity',
                desc: isBn
                  ? 'সকল কাজের পেছনে একমাত্র আল্লাহর সন্তুষ্টি অর্জন ও অন্তরে আল্লাহভীতি জাগ্রত রাখা।'
                  : 'Cultivating pure God-consciousness and seeking divine pleasure in every endeavor.',
              },
              {
                icon: Sparkles,
                title: isBn ? 'উত্তম চরিত্র (হুসনুল খুলুক)' : 'Noble Character',
                desc: isBn
                  ? 'সত্যবাদিতা, বিনয়, নম্রতা এবং অপরের প্রতি সহমর্মিতা প্রদর্শন করা।'
                  : 'Nurturing truthfulness, humility, courtesy, and compassionate service.',
              },
              {
                icon: Heart,
                title: isBn ? 'আদব ও শ্রদ্ধা' : 'Reverence & Etiquette',
                desc: isBn
                  ? 'পিতা-মাতা, শিক্ষকমণ্ডলী ও বয়োজ্যেষ্ঠদের সম্মান এবং ছোটদের প্রতি স্নেহ প্রদর্শন।'
                  : 'Deep filial love, reverence for teachers, and gentle affection toward juniors.',
              },
              {
                icon: BookOpen,
                title: isBn ? 'শৃঙ্খলা ও জ্ঞানান্বেষণ' : 'Discipline & Knowledge',
                desc: isBn
                  ? 'সময়নিষ্ঠতা, দায়িত্বশীলতা এবং জ্ঞানার্জনের আজীবন সাধনায় ব্রতী হওয়া।'
                  : 'Commitment to punctuality, diligence, and continuous lifelong learning.',
              },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-2xl p-6 shadow-xs card-glow text-center space-y-3 transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-text-primary">{v.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Message from the Principal */}
        <div className="rounded-3xl bg-surface-alt dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] p-8 sm:p-12 space-y-6 card-glow">
          <div className="flex items-center gap-3">
            <Quote className="w-8 h-8 text-primary dark:text-[#C75B60]" />
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
              {isBn ? 'মুহতামিমের বিশেষ বার্তা' : 'Message from the Principal'}
            </h3>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            <p>
              {isBn
                ? 'পবিত্র কুরআনুল কারীমে মহান আল্লাহ তায়ালা ইরশাদ করেছেন: "পড় তোমার রবের নামে, যিনি সৃষ্টি করেছেন।" লালমনিরহাট মডেল মাদ্রাসার পথচলা এই ঐশী নির্দেশনার আলোকেই আবর্তিত। আমাদের লক্ষ্য কোমলমতি শিশুদের এমন একটি পরিবেশ দেওয়া যেখানে তারা হাসিমুখে কুরআন শিখবে, নামাজ কায়েম করবে এবং সাধারণ শিক্ষায় শীর্ষ মেধার স্বাক্ষর রাখবে।'
                : 'In the Holy Quran, Almighty Allah commands: "Read in the name of your Lord who created." Our journey at Lalmonirhat Model Madrasa revolves around this divine mandate. We are dedicated to providing a serene haven where children joyfully learn the Quran, establish Salah, and excel in modern academics.'}
            </p>
            <p>
              {isBn
                ? 'আমরা অভিভাবকদের সক্রিয় সহযোগিতা ও পরামর্শকে আন্তরিকভাবে স্বাগত জানাই। আল্লাহ আমাদের সন্তানদের উভয় জাহানের কল্যাণ নসীব করুন।'
                : 'We warmly welcome parents’ active partnerships and constructive suggestions. May Allah grant our children triumph in both worlds.'}
            </p>
          </div>

          <div className="pt-4 border-t border-border-color dark:border-[#2A2A2A] flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-bold text-base text-text-primary">
                {isBn ? 'মাওলানা মুহাম্মদ আব্দুর রহমান' : 'Mawlana Muhammad Abdur Rahman'}
              </div>
              <div className="text-xs text-primary dark:text-[#C75B60] font-medium">
                {isBn ? 'মুহতামিম ও প্রধান শিক্ষক' : 'Principal & Head Teacher'}
              </div>
            </div>
            <Link
              href={`/${locale}/admission`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#8B1E24] hover:bg-[#73181D] text-white shadow-xs transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-white" />
              <span>{isBn ? 'ভর্তির তথ্য দেখুন' : 'Admission Details'}</span>
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
