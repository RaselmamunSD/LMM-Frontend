import { EventItem } from '@/types';

export const eventsData: EventItem[] = [
  {
    id: 'event-quran-mahfil-2026',
    title: {
      bn: 'বার্ষিক কুরআন তিলাওয়াত মাহফিল ও দোয়া মাহফিল ২০২৬',
      en: 'Annual Quran Recitation & Blessing Ceremony 2026',
    },
    date: '2026-11-20',
    time: {
      bn: 'সকাল ৯:০০টা - দুপুর ১:০০টা',
      en: '9:00 AM - 1:00 PM',
    },
    venue: {
      bn: 'মাদ্রাসা মিলনায়তন, সদর, লালমনিরহাট',
      en: 'Madrasa Auditorium, Sadar, Lalmonirhat',
    },
    category: 'islamic',
    isPast: false,
    description: {
      bn: 'নূরানী একাডেমি ও হিফজ বিভাগের শিক্ষার্থীদের সুললিত কণ্ঠে কুরআন তিলাওয়াত, তাজবীদের প্রদর্শনী এবং দেশ ও জাতির কল্যাণে বিশেষ দোয়া মোনাজাত।',
      en: 'An uplifting gathering featuring Quranic recitations by our young students, demonstrations of Tajweed rules, and communal prayers for prosperity.',
    },
    highlights: {
      bn: [
        'আন্তর্জাতিক খ্যাতিসম্পন্ন ক্বারীদের বিশেষ তিলাওয়াত',
        'প্লে থেকে ৫ম শ্রেণির শিক্ষার্থীদের নূরানী কায়দা ও আমপারা পাঠের জীবন্ত উপস্থাপনা',
        'কুরআন ও হাদিস হিফজকারী কৃতি শিক্ষার্থীদের সম্মাননা স্মারক প্রদান',
        'তাবাররুক বিতরণ ও বিশেষ মুনাজাত',
      ],
      en: [
        'Guest recitations by renowned international Qaris',
        'Live demonstrations of Noorani reading from Play to Grade 5 students',
        'Award ceremony celebrating outstanding memorizers of Quran and Hadith',
        'Communal feast distribution and closing supplication',
      ],
    },
    image: '/images/events/quran-mahfil.jpg',
  },
  {
    id: 'event-sports-day-2026',
    title: {
      bn: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ও শারীরিক কসরত ২০২৬',
      en: 'Annual Sports Day & Physical Fitness Meet 2026',
    },
    date: '2026-12-05',
    time: {
      bn: 'সকাল ৮:৩০টা - বিকাল ৩:৩০টা',
      en: '8:30 AM - 3:30 PM',
    },
    venue: {
      bn: 'মাদ্রাসা সংলগ্ন খেলার মাঠ, লালমনিরহাট',
      en: 'Madrasa Playgrounds, Lalmonirhat',
    },
    category: 'sports',
    isPast: false,
    description: {
      bn: 'শিশুদের শারীরিক সুস্থতা, মানসিক প্রফুল্লতা এবং দলগত শৃঙ্খলা বৃদ্ধির জন্য আনন্দমুখর বার্ষিক ক্রীড়া উৎসব।',
      en: 'A joyous annual athletic meet promoting teamwork, cardiovascular fitness, and healthy sportsmanship among young learners.',
    },
    highlights: {
      bn: [
        'ছোটদের ১০০ মিটার ও ৫০ মিটার দৌড় প্রতিযোগিতা',
        'বিস্কুট দৌড়, মার্বেল দৌড় ও যেমন খুশি তেমন সাজো',
        'ইসলামী কুইজ ও স্মৃতিশক্তি পরীক্ষা প্রতিযোগিতা',
        'অভিভাবক ও শিক্ষকদের জন্য প্রীতি ক্রীড়া পর্ব',
      ],
      en: [
        '100m and 50m sprint events across junior grades',
        'Fun obstacle runs, marble races, and character dress-ups',
        'Islamic trivia, puzzle hunts, and mental agility games',
        'Friendly guardian and faculty exhibition matches',
      ],
    },
    image: '/images/events/sports-day.jpg',
  },
  {
    id: 'event-calligraphy-expo',
    title: {
      bn: 'আরবি ক্যালিগ্রাফি ও হস্তাক্ষর প্রদর্শনী',
      en: 'Arabic Calligraphy & Penmanship Exhibition',
    },
    date: '2026-08-15',
    time: {
      bn: 'সকাল ১০:০০টা - দুপুর ২:০০টা',
      en: '10:00 AM - 2:00 PM',
    },
    venue: {
      bn: 'কেন্দ্রীয় আর্ট গ্যালারি কর্নার, লালমনিরহাট',
      en: 'Central Art Gallery Corner, Lalmonirhat',
    },
    category: 'cultural',
    isPast: true,
    description: {
      bn: 'মাদ্রাসার শিক্ষার্থীদের নিজ হাতে অঙ্কিত মনোরম আরবি চারুলিপি, পবিত্র কুরআনের আয়াত লিখন ও সুন্দর বাংলা হস্তাক্ষরের প্রকাশ্য প্রদর্শনী।',
      en: 'An inspiring public showcase displaying students’ handwritten Arabic calligraphy artworks, Quranic verses, and neat Bengali penmanship.',
    },
    highlights: {
      bn: [
        'শিক্ষার্থীদের ৫০টির অধিক ক্যালিগ্রাফি ফ্রেম প্রদর্শিত',
        'লাইভ ক্যালিগ্রাফি ও হরফ অঙ্কনের বিশেষ ওয়ার্কশপ',
        'অভিভাবক ও সুধীজনদের ভূয়সী প্রশংসা ও উৎসাহ',
      ],
      en: [
        'Over 50 student calligraphy pieces framed and displayed',
        'Live brush and reed pen calligraphy demonstration workshops',
        'Heartwarming appreciation by parents and local scholars',
      ],
    },
    image: '/images/events/calligraphy.jpg',
  },
];
