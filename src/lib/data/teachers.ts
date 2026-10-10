import { Teacher } from '@/types';

export const teachersData: Teacher[] = [
  {
    id: 't-1',
    name: {
      bn: 'মাওলানা মুহাম্মদ আব্দুর রহমান',
      en: 'Mawlana Muhammad Abdur Rahman',
    },
    designation: {
      bn: 'মুহতামিম / প্রধান শিক্ষক (Principal)',
      en: 'Principal / Head Teacher',
    },
    department: 'administration',
    qualifications: {
      bn: 'দাওরায়ে হাদিস (মাস্টার্স সমমান), এম.এ (ইসলামিক স্টাডিজ)',
      en: 'Dawra-e-Hadith (Master’s Equivalent), M.A. in Islamic Studies',
    },
    subjectsTaught: {
      bn: ['কুরআন ও হাদিস', 'আকাইদ ও ফিকহ', 'প্রাতিষ্ঠানিক নৈতিকতা'],
      en: ['Quran & Hadith', 'Aqeedah & Fiqh', 'Institutional Ethics'],
    },
    experience: {
      bn: '১২+ বছর দ্বীনি ও সাধারণ শিক্ষাদানে অভিজ্ঞতা',
      en: '12+ Years in Islamic & General Educational Leadership',
    },
    bio: {
      bn: 'লালমনিরহাট মডেল মাদ্রাসার প্রতিষ্ঠাতা ও প্রধান শিক্ষক হিসেবে শিশুদের যুগোপযোগী শিক্ষা ও নৈতিক চরিত্রের সমন্বয়ে নিরলসভাবে নেতৃত্ব দিচ্ছেন।',
      en: 'As Founder and Principal of Lalmonirhat Model Madrasa, he passionately leads the integration of modern education and steadfast Islamic character.',
    },
    photo: '/images/teachers/principal.jpg',
  },
  {
    id: 't-2',
    name: {
      bn: 'হাফেজ ক্বারী নূরুল ইসলাম',
      en: 'Hafez Qari Nurul Islam',
    },
    designation: {
      bn: 'প্রধান ক্বারী ও হিফজ বিভাগীয় প্রধান',
      en: 'Chief Qari & Head of Quranic Department',
    },
    department: 'quran',
    qualifications: {
      bn: 'হিফজুল কুরআন সনদ, আন্তর্জাতিক কেরাত ও তাজবীদ প্রশিক্ষণপ্রাপ্ত',
      en: 'Sanad in Hifz-ul-Quran, Certified International Tajweed Trainer',
    },
    subjectsTaught: {
      bn: ['পবিত্র কুরআন নাজেরা ও হিফজ', 'সহীহ মাখরাজ ও তাজবীদ'],
      en: ['Quran Nazera & Hifz', 'Tajweed & Phonics'],
    },
    experience: {
      bn: '৯ বছর নূরানী ও হিফজ শিক্ষাদানে শিক্ষকতা',
      en: '9 Years teaching Noorani Method and Quran memorization',
    },
    bio: {
      bn: 'সুললিত কণ্ঠ ও বিশুদ্ধ উচ্চারণে শিশুদের কুরআন শিক্ষা প্রদানে বিশেষ পারদর্শী। শত শত শিশুকে নূরানী কায়দা থেকে নাজেরা ও হিফজে সফল করেছেন।',
      en: 'Renowned for his melodious recitation and precise phonetic training, successfully guiding hundreds of young minds into fluent Quranic reading.',
    },
    photo: '/images/teachers/qari.jpg',
  },
  {
    id: 't-3',
    name: {
      bn: 'মাওলানা আবু বকর সিদ্দিক',
      en: 'Mawlana Abu Bakr Siddique',
    },
    designation: {
      bn: 'সিনিয়র আরবি শিক্ষক ও সহ-সমন্বয়ক',
      en: 'Senior Arabic Teacher & Academic Coordinator',
    },
    department: 'arabic',
    qualifications: {
      bn: 'কামিল (হাদিস), আরবি ভাষায় ডিপ্লোমা',
      en: 'Kamil in Hadith, Diploma in Spoken Arabic',
    },
    subjectsTaught: {
      bn: ['মৌলিক আরবি ভাষা', 'ইসলাম ও নৈতিক শিক্ষা', 'মাসনূন দোয়া ও আদব'],
      en: ['Basic Arabic', 'Islamic Studies', 'Daily Duas & Etiquettes'],
    },
    experience: {
      bn: '৭ বছর প্রাতিষ্ঠানিক অভিজ্ঞতা',
      en: '7 Years of teaching experience',
    },
    bio: {
      bn: 'সহজ ও প্রাণবন্ত পদ্ধতিতে শিশুদের আরবি ভাষার প্রতি আগ্রহ সৃষ্টি করেন এবং শ্রেণিকক্ষে ব্যবহারিক ইসলামিক আদব ও শিষ্টাচার চর্চায় নিয়োজিত।',
      en: 'Specializes in making the Arabic language enjoyable and accessible for primary students through storytelling and practical conversational methods.',
    },
    photo: '/images/teachers/arabic.jpg',
  },
  {
    id: 't-4',
    name: {
      bn: 'জনাব মাহমুদুল হাসান',
      en: 'Mr. Mahmudul Hasan',
    },
    designation: {
      bn: 'সিনিয়র শিক্ষক (ইংরেজি ও সাধারণ শিক্ষা)',
      en: 'Senior Teacher (English & General Studies)',
    },
    department: 'general',
    qualifications: {
      bn: 'বি.এ (অনার্স), এম.এ (ইংরেজি সাহিত্য), বি.এড',
      en: 'B.A. (Honours), M.A. in English Literature, B.Ed',
    },
    subjectsTaught: {
      bn: ['English for Today', 'Grammar & Spoken English'],
      en: ['English for Today', 'Grammar & Spoken English'],
    },
    experience: {
      bn: '৬ বছর প্রাইমারি ও জুনিয়র ইংলিশ প্রশিক্ষণ',
      en: '6 Years primary and junior English coaching',
    },
    bio: {
      bn: 'ইংরেজি ভীতি দূর করে ফনিক্স এবং সৃজনশীল অ্যাক্টিভিটির মাধ্যমে শিশুদের আত্মবিশ্বাসী ইংরেজি স্পিকার ও রাইটার হিসেবে গড়ে তোলেন।',
      en: 'Dedicated to eliminating English anxiety and nurturing articulate communication through Phonics and interactive classroom activities.',
    },
    photo: '/images/teachers/english.jpg',
  },
  {
    id: 't-5',
    name: {
      bn: 'জনাব রবিউল ইসলাম',
      en: 'Mr. Rabiul Islam',
    },
    designation: {
      bn: 'সহকারী শিক্ষক (গণিত ও বিজ্ঞান)',
      en: 'Assistant Teacher (Math & Science)',
    },
    department: 'general',
    qualifications: {
      bn: 'বি.এস.সি (অনার্স) গণিত',
      en: 'B.Sc (Honours) in Mathematics',
    },
    subjectsTaught: {
      bn: ['প্রাথমিক গণিত', 'প্রাথমিক বিজ্ঞান', 'সাধারণ জ্ঞান'],
      en: ['Elementary Mathematics', 'General Science', 'General Knowledge'],
    },
    experience: {
      bn: '৫ বছর গণিত ও বিজ্ঞান শিক্ষাদান',
      en: '5 Years teaching Mathematics and Science',
    },
    bio: {
      bn: 'বাস্তব উদাহরণ ও খেলার মাধ্যমে কঠিন গাণিতিক সমস্যা শিশুদের কাছে অতি সহজ ও উপভোগ্য করে তুলে ধরেন।',
      en: 'Simplifies mathematical and scientific logic using tangible visual demonstrations and engaging student interaction.',
    },
    photo: '/images/teachers/math.jpg',
  },
  {
    id: 't-6',
    name: {
      bn: 'মাওলানা জাহিদ হাসান',
      en: 'Mawlana Zahid Hasan',
    },
    designation: {
      bn: 'নূরানী বিভাগীয় ইনচার্জ ও ক্যালিগ্রাফার',
      en: 'Noorani Section In-Charge & Calligrapher',
    },
    department: 'quran',
    qualifications: {
      bn: 'নূরানী মুয়াল্লিম প্রশিক্ষণ সনদ (ফার্স্ট ক্লাস), আরবি ও বাংলা চারুলিপি বিশেষজ্ঞ',
      en: 'Certified Noorani Instructor (First Class), Arabic & Bengali Calligrapher',
    },
    subjectsTaught: {
      bn: ['নূরানী কায়দা', 'সুন্দর হস্তাক্ষর ও চারুলিপি', 'বাংলা পাঠ'],
      en: ['Noorani Qaida', 'Neat Penmanship & Calligraphy', 'Bengali Reading'],
    },
    experience: {
      bn: '৮ বছর নূরানী প্রশিক্ষণ ও চারুলিপি পরিচালনা',
      en: '8 Years specialized in Noorani early childhood phonetics',
    },
    bio: {
      bn: 'ছোট শিশুদের প্রতি অকৃত্রিম স্নেহ ও চমৎকার ধৈর্য্যের সাথে নূরানী কায়দার মৌলিক পাঠ ও মুক্তার মতো সুন্দর হস্তাক্ষর প্রশিক্ষণ দেন।',
      en: 'Passionate and infinitely patient with toddlers, crafting pearl-like handwriting and solid phonetic foundations in Noorani Qaida.',
    },
    photo: '/images/teachers/noorani.jpg',
  },
];
