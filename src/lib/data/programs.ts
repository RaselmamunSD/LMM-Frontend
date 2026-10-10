import { AcademicProgram } from '@/types';

export const academicPrograms: AcademicProgram[] = [
  {
    id: 'play-group',
    slug: 'play-group',
    name: {
      bn: 'প্লে গ্রুপ (Play Group)',
      en: 'Play Group',
    },
    classLevel: {
      bn: 'প্রাক-প্রাথমিক ১ম স্তর',
      en: 'Pre-Primary Level 1',
    },
    ageEligibility: {
      bn: '৩.৫ - ৪.৫ বছর',
      en: '3.5 - 4.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    description: {
      bn: 'খেলার ছলে আরবি বর্ণমালা পরিচিতি, সহীহ মাখরাজ অনুশীলন, ছোট ছোট দোয়া এবং মৌলিক বাংলা ও ইংরেজি অক্ষরের হাতেখড়ি।',
      en: 'Playful introduction to Arabic alphabets, correct Makhaarij phonetics, daily supplications, and foundational Bengali & English letters.',
    },
    overview: {
      bn: 'প্লে গ্রুপ হলো শিশুদের শিক্ষাজীবনের প্রথম স্নেহময় ধাপ। এখানে শিশুরা খেলাধুলা, ছবি, ছড়া ও অনুকরণের মাধ্যমে আরবি, বাংলা এবং ইংরেজি হরফের সাথে পরিচিত হয়। শৃঙ্খলা, শিষ্টাচার এবং আল্লাহভীতির প্রাথমিক বীজ এখানে শিশুদের অন্তরে বপন করা হয়।',
      en: 'Play Group is the tender first step of educational life. Children familiarize themselves with Arabic, Bengali, and English letters through playful activities, imagery, rhymes, and interactive learning in a caring environment.',
    },
    learningObjectives: {
      bn: [
        'আরবি ২৯টি হরফের সঠিক উচ্চারণ ও চিত্রভিত্তিক রূপ চেনা',
        'বাংলা ও ইংরেজি বর্ণমালার প্রাথমিক পরিচিতি ও দাগ টানা অনুশীলন',
        'দৈনন্দিন ৩টি গুরুত্বপূর্ণ মাসনূন দোয়া ও সালাম বিনিময়ের অভ্যাস',
        'সহজ ইসলামিক ছড়া ও পরিষ্কার-পরিচ্ছন্নতার মৌলিক পাঠ',
      ],
      en: [
        'Recognize all 29 Arabic letters with correct phonetic pronunciation',
        'Introductory recognition of Bengali and English alphabets with tracing skills',
        'Daily practice of 3 essential Masnoon duas and Islamic greeting etiquettes',
        'Memorization of short Islamic rhymes and fundamental cleanliness habits',
      ],
    },
    subjects: {
      bn: ['নূরানী কায়দা (আরবি হরফ পরিচিতি)', 'মৌলিক বাংলা ছড়া ও বর্ণমালা', 'মৌলিক ইংরেজি অক্ষর', 'দৈনন্দিন মাসনূন দোয়া ও আদব', 'চিত্রাঙ্কন ও চারুকলা'],
      en: ['Noorani Qaida (Arabic Alphabet)', 'Basic Bengali Rhymes & Letters', 'Basic English Alphabet', 'Daily Duas & Manners', 'Drawing & Coloring'],
    },
    learningOutcomes: {
      bn: [
        'আরবি হরফ স্পষ্টভাবে চিহ্নিত করতে পারা',
        'পেন্সিল ধরা এবং স্বাধীনভাবে সরল রেখা টানতে সক্ষম হওয়া',
        'খাওয়ার আগে ও পরের দোয়া এবং সালাম দেওয়া স্বতঃস্ফূর্তভাবে বলা',
      ],
      en: [
        'Able to identify isolated Arabic letters correctly',
        'Develop proper pencil grip and motor coordination',
        'Spontaneously recite daily meal duas and Islamic greetings',
      ],
    },
    admissionRequirements: {
      bn: [
        'শিশুর ডিজিটাল জন্ম নিবন্ধন সনদের ফটোকপি',
        'পাসপোর্ট সাইজের রঙিন ছবি (২ কপি)',
        'পিতা ও মাতার জাতীয় পরিচয়পত্রের ফটোকপি',
        'অভিভাবক ও শিশুর মৌখিক সাধারণ পরিচিতি',
      ],
      en: [
        'Photocopy of child digital birth registration certificate',
        '2 passport-size color photographs',
        'Photocopy of parents National ID cards',
        'Friendly informal interaction with child and guardians',
      ],
    },
    iconName: 'Baby',
    badge: {
      bn: 'প্রাক-প্রাথমিক',
      en: 'Pre-Primary',
    },
  },
  {
    id: 'nursery',
    slug: 'nursery',
    name: {
      bn: 'নার্সারি (Nursery)',
      en: 'Nursery',
    },
    classLevel: {
      bn: 'প্রাক-প্রাথমিক ২য় স্তর',
      en: 'Pre-Primary Level 2',
    },
    ageEligibility: {
      bn: '৪.৫ - ৫.৫ বছর',
      en: '4.5 - 5.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    description: {
      bn: 'নূরানী কায়দার হরকত ও তানভীনের নিয়মাবলী, প্রাথমিক শব্দ গঠন, সংখ্যা গণনা এবং সুন্দর হস্তাক্ষরের প্রশিক্ষণ।',
      en: 'Harakat and Tanween principles in Noorani Qaida, preliminary word construction, basic numbering, and neat handwriting training.',
    },
    overview: {
      bn: 'নার্সারি শ্রেণিতে শিক্ষার্থীরা হরকত, তানভীন ও মাখরাজের মাধ্যমে আরবি শব্দ গঠনের প্রাথমিক কলাকৌশল আয়ত্ত করে। পাশাপাশি বাংলা বর্ণ দিয়ে শব্দ তৈরি, ইংরেজি ছোট-বড় হাতের অক্ষর লেখা এবং ১ থেকে ৫০ পর্যন্ত গণনা শেখানো হয়।',
      en: 'In the Nursery class, students master the fundamentals of Arabic word formation through Harakat and Tanween. Concurrently, they learn Bengali word formation, English upper and lowercase writing, and numbers up to 50.',
    },
    learningObjectives: {
      bn: [
        'হরকত, তানভীন ও জযমযুক্ত আরবি শব্দ সঠিক মাখরাজে উচ্চারণ করা',
        'বাংলা স্বরবর্ণ ও ব্যঞ্জনবর্ণ দিয়ে দুই অক্ষরের শব্দ গঠন',
        'ইংরেজি Capital ও Small letters নিখুঁতভাবে লেখা',
        '১ থেকে ৫০ এবং 1 to 50 গণনা ও সহজ যোগের ধারণা লাভ',
        '১০টি মাসনূন দোয়া ও নামাজের সংক্ষিপ্ত প্রাথমিক প্রস্তুতি',
      ],
      en: [
        'Pronounce Arabic words with Harakat, Tanween, and Jazm accurately',
        'Form simple 2-letter Bengali words',
        'Write uppercase and lowercase English alphabets neatly',
        'Count 1 to 50 in Bengali and English with foundational addition',
        'Memorize 10 essential Masnoon supplications and Salah etiquettes',
      ],
    },
    subjects: {
      bn: ['নূরানী কায়দা (হরকত ও জযম অংশ)', 'বাংলা বর্ণ ও শব্দপাঠ', 'English Alphabet & Vocabulary', 'গণিত ও গণনাবিদ্যা', 'ইসলামিক আদব ও মাসনূন দোয়া'],
      en: ['Noorani Qaida (Vowels & Joining)', 'Bengali Reading & Words', 'English Alphabet & Vocabulary', 'Mathematics & Counting', 'Islamic Etiquettes & Duas'],
    },
    learningOutcomes: {
      bn: [
        'যুক্ত হরফে নূরানী কায়দার শব্দ স্বাচ্ছন্দ্যে পড়তে পারা',
        'বাংলা ও ইংরেজি ৩ অক্ষরের পরিচিত শব্দ লিখতে ও পড়তে সক্ষম হওয়া',
        'ইসলামিক শিষ্টাচার ও ওযুর প্রাথমিক নিয়ম প্রদর্শন করতে পারা',
      ],
      en: [
        'Read joined Arabic letter combinations from Noorani Qaida smoothly',
        'Read and write 3-letter familiar Bengali and English words',
        'Demonstrate practical Islamic manners and basic Wudhu steps',
      ],
    },
    admissionRequirements: {
      bn: [
        'শিশুর জন্ম নিবন্ধন সনদ ও ২ কপি রঙিন ছবি',
        'পূর্ববর্তী প্লে শ্রেণির মূল্যায়নপত্র (প্রযোজ্য ক্ষেত্রে)',
        'পিতা-মাতার জাতীয় পরিচয়পত্রের কপি',
      ],
      en: [
        'Child birth registration and 2 color photos',
        'Previous Play Group evaluation report (if applicable)',
        'Photocopy of parents National ID cards',
      ],
    },
    iconName: 'BookOpen',
    badge: {
      bn: 'প্রাক-প্রাথমিক',
      en: 'Pre-Primary',
    },
  },
  {
    id: 'class-one',
    slug: 'class-one',
    name: {
      bn: 'প্রথম শ্রেণি (Class One)',
      en: 'Class One (Grade 1)',
    },
    classLevel: {
      bn: 'প্রাথমিক ১ম স্তর',
      en: 'Primary Level 1',
    },
    ageEligibility: {
      bn: '৫.৫ - ৬.৫ বছর',
      en: '5.5 - 6.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    description: {
      bn: 'পবিত্র কুরআন নাজেরা পাঠের সূচনা, আমপারা থেকে সূরা মুখস্থকরণ, জাতীয় পাঠ্যক্রমের প্রথম শ্রেণির পূর্ণ বিষয়ভিত্তিক পাঠদান।',
      en: 'Commencement of Holy Quran Nazera recitation, Surah memorization from Juz Amma, and full Class 1 National Curriculum coverage.',
    },
    overview: {
      bn: '১ম শ্রেণিতে শিক্ষার্থীরা সরাসরি পবিত্র কুরআনের শেষ পারা (আমপারা) ও নাজেরা পাঠ শুরু করে। পাশাপাশি জাতীয় শিক্ষাক্রম অনুসারে বাংলা, ইংরেজি ও প্রাথমিক গণিতের সমন্বিত পাঠ নিশ্চিত করা হয়, যেন শিক্ষার্থী দ্বীনি ও সাধারণ উভয় জ্ঞানে উজ্জ্বল ভিত্তি লাভ করে।',
      en: 'In Class One, students embark directly upon Holy Quran Nazera recitation and memorizing Surahs from Juz Amma. Balanced alongside is the national standard curriculum for Bengali, English, and Mathematics.',
    },
    learningObjectives: {
      bn: [
        'পবিত্র কুরআনের আমপারা দেখে দেখে সহীহ তিলাওয়াত অনুশীলন',
        'সূরা ফাতিহা ও শেষ ১০টি সূরা তাজবীদসহ মুখস্থকরণ',
        'বাংলা পূর্ণ বাক্য পঠন ও সহজ অনুচ্ছেদ রচনা',
        'English simple sentence construction and spelling',
        '১ থেকে ১০০ গণনা ও মৌলিক যোগ-বিয়োগ সমাধান',
      ],
      en: [
        'Practice fluent Quran Nazera recitation from Juz Amma',
        'Memorize Surah Al-Fatihah and the last 10 Surahs with Tajweed',
        'Read complete Bengali sentences and short paragraphs',
        'Construct simple English sentences and vocabulary building',
        'Numbers 1 to 100 with foundational addition and subtraction',
      ],
    },
    subjects: {
      bn: ['পবিত্র কুরআন নাজেরা ও হিফজুল কুরআন', 'সহীহ তাজবীদ ও মাখরাজ', 'আমার বাংলা বই (১ম শ্রেণি)', 'English for Today (Class 1)', 'প্রাথমিক গণিত', 'ইসলাম ও নৈতিক শিক্ষা'],
      en: ['Holy Quran Nazera & Hifz', 'Tajweed Principles', 'Bengali Literature', 'English for Today', 'Elementary Mathematics', 'Islamic & Moral Studies'],
    },
    learningOutcomes: {
      bn: [
        'আমপারার আয়াতসমূহ মাখরাজ মেনে তিলাওয়াত করতে সক্ষম হওয়া',
        'নামাজের সকল আরকান ও আহকাম সঠিকভাবে বলতে ও প্রদর্শন করতে পারা',
        'বাংলা ও ইংরেজিতে সহজ গল্পের ভাবার্থ বুঝতে পারা',
      ],
      en: [
        'Recite Juz Amma verses complying with fundamental Tajweed rules',
        'Perform practical Salah movements with correct recitation',
        'Comprehend elementary story passages in Bengali and English',
      ],
    },
    admissionRequirements: {
      bn: [
        'নূরানী কায়দা সমাপ্তির মৌখিক মূল্যায়ন অথবা নার্সারি সমাপন সনদ',
        'জন্ম নিবন্ধন ও পাসপোর্ট সাইজের ২ কপি ছবি',
        'অভিভাবকের অঙ্গীকারনামা ফরম',
      ],
      en: [
        'Noorani Qaida completion assessment or Nursery transcript',
        'Birth certificate copy and 2 passport photos',
        'Parental commitment and admission agreement form',
      ],
    },
    iconName: 'GraduationCap',
  },
  {
    id: 'class-two',
    slug: 'class-two',
    name: {
      bn: 'দ্বিতীয় শ্রেণি (Class Two)',
      en: 'Class Two (Grade 2)',
    },
    classLevel: {
      bn: 'প্রাথমিক ২য় স্তর',
      en: 'Primary Level 2',
    },
    ageEligibility: {
      bn: '৬.৫ - ৭.৫ বছর',
      en: '6.5 - 7.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    description: {
      bn: 'পূর্ণ কুরআনুল কারীম নাজেরা পঠন, মৌলিক আরবি ব্যাকরণ পরিচিতি, প্রাতিষ্ঠানিক বাংলা-ইংরেজি ব্যাকরণ ও গুণ-ভাগের গণিত।',
      en: 'Comprehensive Quran Nazera fluency, introductory Arabic grammar, grammar in Bengali and English, multiplication and division.',
    },
    overview: {
      bn: '২য় শ্রেণিতে কুরআন শিক্ষার গতি ও শুদ্ধতা উল্লেখযোগ্যভাবে বাড়ে। তাজবীদের বিভিন্ন গুন্নাহ ও মাদ্দের প্রায়োগিক অনুশীলন সম্পন্ন করা হয়। একই সাথে সাধারণ শিক্ষায় নামতা, গুণ, ভাগ এবং ইংরেজি ভাষার মৌলিক ব্যাকরণ শেখানো হয়।',
      en: 'In Class Two, Quran recitation fluency reaches a new milestone. Tajweed rules including Ghunnah and Madd are reinforced practically. Academic curriculum includes multiplication tables, division, and basic English grammar.',
    },
    learningObjectives: {
      bn: [
        'কুরআন মজিদের যেকোনো পৃষ্ঠা দেখে সাবলীলভাবে নাজেরা পড়া',
        'নামাজের সকল দোয়া, সানা, তাশাহহুদ, দরূদ ও দোয়া মাসুরা কণ্ঠস্থকরণ',
        'বাংলা ব্যাকরণের পদ পরিচয় ও বানান শুদ্ধিকরণ',
        'English nouns, verbs, and conversational phrases',
        'নামতা ১ থেকে ২০ পর্যন্ত মুখস্থ ও প্রয়োগ',
      ],
      en: [
        'Read any page of the Holy Quran with Nazera fluency',
        'Memorize complete Salah recitations including Tashahhud, Durood, and Dua Masura',
        'Bengali parts of speech and spelling accuracy',
        'English nouns, verbs, and daily conversational phrases',
        'Multiplication tables up to 20 with problem solving',
      ],
    },
    subjects: {
      bn: ['পবিত্র কুরআন নাজেরা (নিয়মিত খতম পাঠ)', 'তাজবীদুল কুরআন ও হাদিস পাঠ', 'মৌলিক আরবি ভাষা', 'বাংলা সাহিত্য ও ব্যাকরণ', 'English Reading & Writing', 'প্রাথমিক গণিত', 'ইসলাম শিক্ষা ও সীরাতুন্নবী (সা.)'],
      en: ['Quran Nazera Recitation', 'Tajweed & Hadith', 'Elementary Arabic', 'Bengali Language & Literature', 'English Reading & Writing', 'Elementary Mathematics', 'Islamic Studies & Seerat'],
    },
    learningOutcomes: {
      bn: [
        'পূর্ণ গতিতে কুরআন তিলাওয়াত করতে সক্ষম হওয়া',
        '৪০টি গুরুত্বপূর্ণ দৈনন্দিন হাদিস ও অর্থ বলতে পারা',
        'গণিতের দ্বি-অঙ্কবিশিষ্ট গুণ ও ভাগ সমাধান করা',
      ],
      en: [
        'Fluently recite Quranic pages without hesitation',
        'Recite 40 short moral Hadiths with basic meanings',
        'Solve 2-digit multiplication and division problems',
      ],
    },
    admissionRequirements: {
      bn: [
        '১ম শ্রেণি উত্তীর্ণের সনদপত্র বা সমমানের যোগ্যতা মূল্যায়ন',
        'কুরআন নাজেরা পাঠের মৌখিক পরীক্ষা',
        'প্রয়োজনীয় দাপ্তরিক কাগজপত্র',
      ],
      en: [
        'Class 1 completion certificate or equivalent placement assessment',
        'Oral test on Quran Nazera reading',
        'Official registration documentation',
      ],
    },
    iconName: 'Award',
  },
  {
    id: 'class-three',
    slug: 'class-three',
    name: {
      bn: 'তৃতীয় শ্রেণি (Class Three)',
      en: 'Class Three (Grade 3)',
    },
    classLevel: {
      bn: 'প্রাথমিক ৩য় স্তর',
      en: 'Primary Level 3',
    },
    ageEligibility: {
      bn: '৭.৫ - ৮.৫ বছর',
      en: '7.5 - 8.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    description: {
      bn: 'কুরআন মুখস্থের বিশেষ পর্ব (হিফজ প্রস্তুতি), আরবি কথোপকথন, প্রাথমিক বিজ্ঞান, বাংলাদেশ ও বিশ্বপরিচয় এবং আইসিটি ধারণা।',
      en: 'Specialized Hifz preparatory track, Arabic conversation, Elementary Science, Social Studies, and introductory ICT concepts.',
    },
    overview: {
      bn: '৩য় শ্রেণিতে শিক্ষার্থীরা কুরআন হিফজ কিংবা পূর্ণাঙ্গ নাজেরা পাঠের সাথে সাথে সাধারণ বিজ্ঞানের চমৎকার অনুসন্ধানী ধারণা লাভ করে। বিজ্ঞানের পাশাপাশি সমাজ, নৈতিকতা ও আইসিটির প্রাথমিক ধারণার মাধ্যমে শিক্ষার্থীদের ভবিষ্যৎমুখী করে তোলা হয়।',
      en: 'Class Three students advance into specialized Hifz preparatory lessons alongside Elementary Science, Social Studies, and digital literacy, building a well-rounded foundation for modern times.',
    },
    learningObjectives: {
      bn: [
        'আমপারা সম্পূর্ণ মুখস্থকরণ ও তাজবীদের সূক্ষ্ম নিয়ম আয়ত্তকরণ',
        'আরবিতে সহজ কথোপকথন ও পরিচিত বাক্যাংশ চর্চা',
        'প্রাথমিক বিজ্ঞানের প্রাকৃতিক পরিবেশ ও জীবজগতের পাঠ',
        'বাংলাদেশ ও বিশ্বপরিচয়ের মাধ্যমে দেশপ্রেম ও ইতিহাস ধারণা',
        'কম্পিউটারের মৌলিক যন্ত্রাংশ ও কীবোর্ড পরিচিতি',
      ],
      en: [
        'Complete memorization of Juz Amma with nuanced Tajweed application',
        'Daily spoken Arabic dialogues and vocabulary practice',
        'Elementary Science focusing on living organisms and natural environment',
        'Social Studies nurturing patriotism and national history',
        'Foundational computer hardware and typing awareness',
      ],
    },
    subjects: {
      bn: ['কুরআনুল কারীম হিফজ ও নাজেরা', 'তাজবীদ ও তারতীল', 'সহজ আরবি ভাষা ও সংলাপ', 'আমার বাংলা বই (৩য় শ্রেণি)', 'English for Today (Class 3)', 'প্রাথমিক গণিত', 'প্রাথমিক বিজ্ঞান', 'বাংলাদেশ ও বিশ্বপরিচয়', 'ইসলাম ও নৈতিক শিক্ষা'],
      en: ['Quran Memorization & Recitation', 'Tajweed & Tarteel', 'Spoken Arabic & Dialogue', 'Bengali Literature (Class 3)', 'English for Today (Class 3)', 'Mathematics', 'Elementary Science', 'Bangladesh & Global Studies', 'Islamic Studies'],
    },
    learningOutcomes: {
      bn: [
        'আমপারা দেখে ছাড়া তারতীলের সাথে তিলাওয়াত করতে সক্ষম হওয়া',
        'দৈনন্দিন আরবি ও ইংরেজিতে শুভেচ্ছা বিনিময় ও নিজের পরিচয় দেওয়া',
        'বিজ্ঞানের মৌলিক বিষয়াবলি বিশ্লেষণ ও গণিতের কথার অংক সমাধান',
      ],
      en: [
        'Recite Juz Amma from memory in melodious Tarteel',
        'Introduce themselves and converse in basic Arabic and English',
        'Analyze elementary scientific concepts and solve applied math word problems',
      ],
    },
    admissionRequirements: {
      bn: ['২য় শ্রেণি উত্তীর্ণ সনদপত্র', 'নাজেরা তিলাওয়াত ও সাধারণ বিষয়ের লিখিত-মৌখিক মূল্যায়ন', 'ছবি ও জন্ম নিবন্ধন সনদ'],
      en: ['Class 2 completion mark sheet', 'Written and oral test on Quran and academic subjects', 'Photos and birth certificate'],
    },
    iconName: 'Compass',
  },
  {
    id: 'class-four',
    slug: 'class-four',
    name: {
      bn: 'চতুর্থ শ্রেণি (Class Four)',
      en: 'Class Four (Grade 4)',
    },
    classLevel: {
      bn: 'উচ্চ প্রাথমিক স্তর',
      en: 'Upper Primary Level 1',
    },
    ageEligibility: {
      bn: '৮.৫ - ৯.৫ বছর',
      en: '8.5 - 9.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    description: {
      bn: 'নির্বাচিত গুরুত্বপূর্ণ সূরা হিফজ, আরবি ব্যাকরণ (নাহু ও ছরফ সূচনা), গণিতের জ্যামিতি ও ভগ্নাংশ, বিজ্ঞান ও সমাজবিদ্যা।',
      en: 'Selected essential Surah memorization, Arabic Grammar foundations (Nahw & Sarf), Fractions & Geometry, Science & Social Studies.',
    },
    overview: {
      bn: '৪র্থ শ্রেণিতে শিক্ষার্থীরা জটিলতর দ্বীনি মাসআলা, আকাইদ ও ফিকহের মৌলিক বিধানগুলো শেখে। জাতীয় পাঠ্যক্রমের কঠিনতর বিষয় যেমন ভগ্নাংশ, ঐকিক নিয়ম, জ্যামিতি এবং ইংরেজি গ্রামারে বিশেষ যত্ন নেওয়া হয়।',
      en: 'Class Four exposes students to fundamental Fiqh, Islamic jurisprudence, and deeper academic logic such as fractions, unitary method, geometry, and structured English grammar.',
    },
    learningObjectives: {
      bn: [
        'সূরা ইয়াসীন, সূরা আর-রহমান ও ওয়াকিয়া তিলাওয়াত ও হিফজ প্রস্তুতি',
        'আরবি প্রাথমিক পদ প্রকরণ ও শব্দ রূপান্তর (নাহু-ছরফ)',
        'গণিতের ভগ্নাংশ, দশমিক, ঐকিক নিয়ম ও পরিমাপ দক্ষতা',
        'English descriptive paragraph writing and grammar mastery',
        'বিজ্ঞানের শক্তি, স্বাস্থ্যবিধি ও জলবায়ু পরিবর্তনের মূল পাঠ',
      ],
      en: [
        'Recitation and memorization track for Surah Yaseen, Ar-Rahman, and Al-Waqiah',
        'Introductory Arabic morphology and syntax (Nahw & Sarf)',
        'Mathematical mastery of fractions, decimals, unitary method, and measurements',
        'Descriptive paragraph composition and grammar mastery in English',
        'Scientific exploration of energy, personal hygiene, and climate awareness',
      ],
    },
    subjects: {
      bn: ['কুরআনুল কারীম হিফজ/নাজেরা', 'তাজবীদ ও হাদিস শরীফ', 'আরবি ব্যাকরণ ও ভাষা', 'বাংলা সাহিত্য ও রচনা', 'English Grammar & Composition', 'প্রাথমিক গণিত', 'প্রাথমিক বিজ্ঞান', 'বাংলাদেশ ও বিশ্বপরিচয়', 'ইসলাম ও নৈতিক শিক্ষা'],
      en: ['Quran Memorization/Fluency', 'Tajweed & Hadith Studies', 'Arabic Grammar & Language', 'Bengali Literature & Essay', 'English Grammar & Composition', 'Mathematics', 'Elementary Science', 'Bangladesh & Global Studies', 'Islamic Ethics'],
    },
    learningOutcomes: {
      bn: [
        'কুরআনুল কারীমের অর্থ ও তাফসিরের প্রাথমিক ভাব অনুধাবন',
        'আরবি ও ইংরেজি সহজ অনুচ্ছেদ পড়ে তাৎক্ষণিক প্রশ্নোত্তর দেওয়া',
        'জ্যামিতিক চিত্র অঙ্কন ও ব্যবহারিক গণিত সমাধান করতে পারা',
      ],
      en: [
        'Understand thematic meanings and lessons of key Quranic chapters',
        'Answer reading comprehension exercises in Arabic and English',
        'Construct geometric diagrams and apply mathematical logic in daily scenarios',
      ],
    },
    admissionRequirements: {
      bn: ['৩য় শ্রেণির ট্রান্সক্রিপ্ট ও প্রশংসাপত্র', 'ভর্তি মূল্যায়ন পরীক্ষায় উত্তীর্ণ হওয়া', 'পাসপোর্ট সাইজের ছবি ও জন্ম সনদ'],
      en: ['Class 3 transcript and testimonial', 'Pass in admission evaluation test', 'Passport photos and birth certificate'],
    },
    iconName: 'Sparkles',
  },
  {
    id: 'class-five',
    slug: 'class-five',
    name: {
      bn: 'পঞ্চম শ্রেণি (Class Five)',
      en: 'Class Five (Grade 5)',
    },
    classLevel: {
      bn: 'প্রাথমিক সমাপনী স্তর',
      en: 'Primary Graduation Level',
    },
    ageEligibility: {
      bn: '৯.৫ - ১১ বছর',
      en: '9.5 - 11 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    description: {
      bn: 'প্রাথমিক সমাপনী ও স্কলারশিপ প্রস্তুতি, পূর্ণ কুরআন সুন্দর তারতীলে তিলাওয়াত, আরবি রচনা, গণিত ও বিজ্ঞানের সর্বোচ্চ প্রস্তুতি।',
      en: 'Primary graduation & scholarship preparation, melodious Quran Tarteel, Arabic composition, advanced Math and Science readiness.',
    },
    overview: {
      bn: '৫ম শ্রেণি হলো নূরানী একাডেমির সম্মানজনক সমাপনী ধাপ। শিক্ষার্থীরা এখান থেকে দ্বীনি বিষয়ে সুদৃঢ় ভিত্তি লাভ করে আলিয়া নেসাবের ৬ষ্ঠ শ্রেণিতে উত্তীর্ণ হতে পারে অথবা সাধারণ স্কুল-কলেজে সমান সফলতায় ভর্তি হতে পারে। এখানে তাদের নৈতিকতা, নেতৃত্ব ও পরীক্ষার পূর্ণ প্রস্তুতি নিশ্চিত করা হয়।',
      en: 'Class Five represents the prestigious graduating milestone of our Nurani Academy. Graduates emerge with steadfast Islamic character and academic prowess, smoothly transitioning into Aliya Section (Grade 6) or leading secondary schools.',
    },
    learningObjectives: {
      bn: [
        'পূর্ণ কুরআনুল কারীম সুললিত কণ্ঠে সহীহ তারতীলসহ পাঠ সম্পন্নকরণ',
        'নামাজের ইমামতি, আজান ও জুমার আদব সম্পর্কিত ব্যবহারিক প্রশিক্ষণ',
        '৫ম শ্রেণির জাতীয় পাঠ্যক্রমের সকল বিষয়ে শতভাগ প্রস্তুতি ও মেধা যাচাই',
        'ইংরেজি ও বাংলায় উন্মুক্ত রচনা ও সৃজনশীল ভাবপ্রকাশ',
        'জটিল গাণিতিক সমস্যা, শতকড়া, অনুপাত ও জ্যামিতিক প্রমাণ সমাধান',
      ],
      en: [
        'Complete melodious Tarteel recitation of the entire Holy Quran',
        'Practical leadership training in Salah leading, Adhan, and Friday etiquettes',
        '100% comprehensive mastery across all Grade 5 National Curriculum subjects',
        'Creative essay writing and spontaneous public speaking in Bengali and English',
        'Solving advanced mathematical problems: percentages, ratios, and geometry proofs',
      ],
    },
    subjects: {
      bn: ['কুরআনুল কারীম হিফজ/খতম', 'তাজবীদুল কুরআন ও হাদিস সংকলন', 'আরবি ভাষা ও রচনা', 'বাংলা সাহিত্য ও ব্যাকরণ', 'English Language & Creative Writing', 'গণিত (সমাপনী মান)', 'প্রাথমিক বিজ্ঞান', 'বাংলাদেশ ও বিশ্বপরিচয়', 'ইসলাম ও নৈতিক শিক্ষা'],
      en: ['Quran Memorization/Khatam', 'Tajweed & Selected Hadiths', 'Arabic Language & Composition', 'Bengali Literature & Grammar', 'English Language & Creative Writing', 'Mathematics (Graduation Level)', 'Elementary Science', 'Bangladesh & Global Studies', 'Islamic Values & Leadership'],
    },
    learningOutcomes: {
      bn: [
        'কুরআন ও সুন্নাহর ভিত্তিতে আলোকিত নৈতিক চরিত্র ও মানবিক মূল্যবোধ ধারণ',
        'যেকোনো প্রাথমিক সমাপনী বা বৃত্তি পরীক্ষায় শীর্ষ ফলাফল অর্জনের যোগ্যতা',
        'পরবর্তী ৬ষ্ঠ শ্রেণিতে (আলিয়া কিংবা সাধারণ) শীর্ষস্থানীয় সাফল্যের নিশ্চয়তা',
      ],
      en: [
        'Embody steadfast Islamic moral integrity and compassionate social responsibility',
        'Achieve stellar results in primary scholarship and board graduation examinations',
        'Seamlessly excel in Class Six (Aliya Section or leading secondary schools)',
      ],
    },
    admissionRequirements: {
      bn: ['৪র্থ শ্রেণির সমাপনী মার্কশিট ও প্রশংসাপত্র', 'ভর্তি পরীক্ষা ও মৌখিক ভাইভায় কৃতকার্য হওয়া', 'পিতা-মাতার জাতীয় পরিচয়পত্র ও শিক্ষার্থীর জন্ম সনদ'],
      en: ['Class 4 completion mark sheet and recommendation', 'Pass admission exam and formal interview', 'Parents NID and student birth registration'],
    },
    iconName: 'Trophy',
    badge: {
      bn: 'সমাপনী স্তর',
      en: 'Graduation Level',
    },
  },
];
