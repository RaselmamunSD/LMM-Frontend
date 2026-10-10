import { Facility } from '@/types';

export const facilitiesData: Facility[] = [
  {
    id: 'classrooms',
    title: {
      bn: 'সুপরিসর ও স্বাস্থ্যসম্মত শ্রেণিকক্ষ',
      en: 'Spacious & Well-Ventilated Classrooms',
    },
    description: {
      bn: 'শিশুদের পড়ালেখার উপযোগী পর্যাপ্ত আলো-বাতাসপূর্ণ ক্লাসরুম, উপযুক্ত সাইজের ডেস্ক-বেঞ্চ এবং আধুনিক হোয়াইটবোর্ড সংবলিত মনোরম পরিবেশ।',
      en: 'Bright, airy, and ergonomic classrooms tailored for primary students with age-appropriate seating and modern teaching boards.',
    },
    features: {
      bn: [
        'পর্যাপ্ত প্রাকৃতিক আলো ও সিলিং ফ্যানের সুব্যবস্থা',
        'শিশুবান্ধব ও আরামদায়ক কাঠের আধুনিক ডেস্ক-বেঞ্চ',
        'চোখের সুরক্ষায় অ্যান্টি-গ্লেয়ার হোয়াইটবোর্ড',
        'প্রতিটি ক্লাসে নির্দিষ্ট সংখ্যক সীমিত শিক্ষার্থী ধারণক্ষমতা',
      ],
      en: [
        'Abundant natural lighting and pleasant ventilation',
        'Ergonomic child-friendly wooden furniture',
        'Anti-glare eye-protective presentation boards',
        'Strictly limited student-teacher ratio per section',
      ],
    },
    icon: 'School',
    image: '/images/facilities/classroom.jpg',
  },
  {
    id: 'quran-hall',
    title: {
      bn: 'কুরআন তিলাওয়াত ও নূরানী মাহল',
      en: 'Serene Quran Learning Environment',
    },
    description: {
      bn: 'পবিত্র কুরআন তিলাওয়াত ও হিফজের জন্য নিস্তব্ধ, ভাবগম্ভীর ও আধ্যাত্মিক সুবাসিত আলাদা পরিবেশ যা শিক্ষার্থীর একাগ্রতা বহুগুণ বাড়ায়।',
      en: 'A quiet, reverent spiritual sanctuary designed specifically for Quran memorization, Nazera contemplation, and focused Tarteel.',
    },
    features: {
      bn: [
        'আরামদায়ক গালিচা ও রেহাল (রিহাল) সংবলিত বসার ব্যবস্থা',
        'শব্দহীন ও শান্ত পরিবেশ যাতে তিলাওয়াতে একাগ্রতা বজায় থাকে',
        'উন্নত সাউন্ড সিস্টেমে আন্তর্জাতিক কারীদের কেরাত শ্রবণ',
        'ছোটদের উপযোগী বিশুদ্ধ উচ্চারণের বিশেষ মাইক্রো-গ্রুপ স্পেস',
      ],
      en: [
        'Padded carpets with traditional wooden book rests (Rehal)',
        'Acoustically buffered quiet zone for deep contemplation',
        'High-fidelity sound system for listening to world-renowned Qaris',
        'Micro-group pods for focused one-on-one pronunciation drills',
      ],
    },
    icon: 'BookOpen',
    image: '/images/facilities/quran-hall.jpg',
  },
  {
    id: 'prayer-hall',
    title: {
      bn: 'নামাজ ও ওযু সুবিধা (Prayer & Wudhu Facilities)',
      en: 'Prayer Hall & Dedicated Wudhu Area',
    },
    description: {
      bn: 'নিয়মিত জামাতে পাঁচ ওয়াক্ত নামাজের বাস্তব শিক্ষা প্রদানের জন্য পরিচ্ছন্ন নামাজের স্থান এবং শিশুদের সুবিধাজনক আধুনিক ওযুখানা।',
      en: 'Clean, dedicated prayer hall to nurture daily congregational Salah habits alongside modern height-appropriate Wudhu stations.',
    },
    features: {
      bn: [
        'ছোট শিশুদের সুবিধাজনক উচ্চতার সুপরিসর ওযুখানা',
        'পরিচ্ছন্ন ও জীবাণুমুক্ত নামাজের সুসজ্জিত গালিচা',
        'প্রতিদিন জোহর ও আসরের নামাজের সরাসরি জামাত অনুশীলন',
        'আজান ও ইমামতির ব্যবহারিক দায়িত্ব পালনের সুযোগ',
      ],
      en: [
        'Height-adjusted Wudhu taps customized for young children',
        'Regularly sanitized carpets and clean prayer space',
        'Daily supervised congregational Dhuhr & Asr prayers',
        'Practical rotation for boys to deliver Adhan and Iqamah',
      ],
    },
    icon: 'Moon',
    image: '/images/facilities/prayer.jpg',
  },
  {
    id: 'safety-security',
    title: {
      bn: 'শিক্ষার্থী নিরাপত্তা ও সার্বক্ষণিক তদারকি',
      en: 'Student Safety & Continuous Supervision',
    },
    description: {
      bn: 'মাদ্রাসায় শিক্ষার্থীদের পূর্ণ মানসিক ও শারীরিক নিরাপত্তা নিশ্চিত করতে সিসিটিভি ক্যামেরা ও সার্বক্ষণিক দায়িত্বশীল তত্ত্বাবধান।',
      en: 'Comprehensive physical safety protocols, guarded entry points, CCTV surveillance, and compassionate adult supervision.',
    },
    features: {
      bn: [
        'ক্যাম্পাসের মূল ফটক ও চত্বরে সিসিটিভি ক্যামেরা পর্যবেক্ষণ',
        'ক্লাস শুরুর পর ফটক বন্ধ ও দায়িত্বপ্রাপ্ত প্রহরী মোতায়েন',
        'নিরাপদ অভিভাবক পিক-আপ ও ড্রপ নিশ্চিতকরণ কার্ড ব্যবস্থা',
        'প্রাথমিক চিকিৎসার জন্য সাজানো ফার্স্ট-এইড বক্স ও জরুরি সেবা',
      ],
      en: [
        'Full perimeter CCTV monitoring across campus gates and corridors',
        'Guarded access gates during classroom and recess hours',
        'Secure guardian pickup & drop authorization system',
        'Equipped first-aid clinic with immediate medical contacts',
      ],
    },
    icon: 'Shield',
    image: '/images/facilities/safety.jpg',
  },
  {
    id: 'library',
    title: {
      bn: 'শিশুতোষ লাইব্রেরি ও ইসলামিক কুতুবখানা',
      en: 'Children’s Library & Reading Corner',
    },
    description: {
      bn: 'ইসলামী ইতিহাস, নবীদের জীবনী, সায়েন্স ফিকশন ও শিশুতোষ রঙিন গল্পের বইয়ের সমৃদ্ধ সংগ্রহশালা যা পাঠাভ্যাস গড়ে তোলে।',
      en: 'An engaging collection of illustrated Islamic history, prophetic stories, science adventures, and moral storybooks.',
    },
    features: {
      bn: [
        'নবী-রাসূল ও সাহাবাদের সচিত্র শিশুবান্ধব জীবনচরিত',
        'বাংলা ও ইংরেজি শিশুতোষ জ্ঞানকোষ ও সাধারণ জ্ঞান বই',
        'সাপ্তাহিক লাইব্রেরি পিরিয়ড ও গল্প বলার আসর',
        'বই বাসায় নিয়ে পড়ার বিশেষ ইস্যু সুবিধা',
      ],
      en: [
        'Illustrated biographies of the Prophets and Companions',
        'Bilingual encyclopedias, picture books, and STEM readers',
        'Weekly dedicated storytelling and book reading periods',
        'Lending library access for weekend reading at home',
      ],
    },
    icon: 'Library',
    image: '/images/facilities/library.jpg',
  },
  {
    id: 'hygiene',
    title: {
      bn: 'বিশুদ্ধ পানীয় জল ও স্বাস্থ্যবিধি',
      en: 'Pure Drinking Water & Hygiene Care',
    },
    description: {
      bn: 'শিক্ষার্থীদের সুস্থতা রক্ষায় গভীর নলকূপ ও ফিল্টারেশনের মাধ্যমে ১০০% বিশুদ্ধ নিরাপদ খাবার পানি এবং নিয়মিত জীবাণুমুক্ত পরিচ্ছন্ন পরিবেশ।',
      en: 'Multi-stage filtered pure drinking water and strict sanitation schedules to preserve student health and energy.',
    },
    features: {
      bn: [
        'আধুনিক আল্ট্রা-ফিল্ট্রেশন ও পিউরিফাইড খাবার পানির ব্যবস্থা',
        'প্রতিদিন ক্লাসরুম ও ওয়াশরুম জীবাণুনাশক দিয়ে পরিষ্কার',
        'খাওয়ার আগে ও পরে সাবান দিয়ে হাত ধোয়ার সুনির্দিষ্ট স্টেশন',
        'নিয়মিত হাত-পায়ের নখ ও চুল পরীক্ষার স্বাস্থ্য সচেতনতা দিবস',
      ],
      en: [
        'Advanced water filtration dispensaries for pure hydration',
        'Daily deep cleaning and disinfection of washrooms',
        'Dedicated handwashing stations with liquid antiseptic soap',
        'Routine health and nail hygiene check days',
      ],
    },
    icon: 'Droplets',
    image: '/images/facilities/hygiene.jpg',
  },
];
