import { CurriculumCategory } from '@/types';

export const curriculumCategories: CurriculumCategory[] = [
  {
    id: 'quran-recitation',
    title: {
      bn: 'কুরআন তিলাওয়াত ও হিফজ (Quran Recitation & Hifz)',
      en: 'Quran Recitation & Hifz',
    },
    icon: 'BookOpen',
    description: {
      bn: 'তাজবীদের কঠোর নিয়ম অনুসরণ করে মাখরাজ, সিফাত, গুন্নাহ ও তারতীলের সাথে সহীহ কুরআন তিলাওয়াত ও মুখস্থকরণ।',
      en: 'Mastery of Holy Quran recitation and memorization with rigorous Tajweed, precise phonetics (Makhaarij), and melodious Tarteel.',
    },
    levels: {
      bn: '১ম শ্রেণি থেকে ৫ম শ্রেণি পর্যন্ত',
      en: 'Class 1 to Class 5',
    },
    highlights: {
      bn: [
        '১৭টি মাখরাজের নিখুঁত বাস্তব অনুশীলন',
        'গুন্নাহ, ইখফা, ইদগাম ও ওয়াকফের বিধান',
        'আমপারা ও গুরুত্বপূর্ণ সূরার নিয়মিত হিফজ',
        'সুললিত কণ্ঠে তারতীলের সাথে তিলাওয়াত প্রতিযোগিতা',
      ],
      en: [
        'Practical articulation of all 17 Makhaarij',
        'Rules of Ghunnah, Ikhfa, Idgham, and Waqf',
        'Consistent memorization of Juz Amma and special Surahs',
        'Melodious recitation training and competitions',
      ],
    },
    syllabusTopics: {
      bn: [
        'মাখরাজ ও সিফাত পরিচিতি',
        'নূন সাকিন ও তানভীনের ৪টি বিধান',
        'মীম সাকিনের ৩টি বিধান',
        'মাদ্দের প্রকারভেদ (আসলী ও ফারঈ)',
        'কুরআনী ওয়াকফের চিহ্ন ও নিয়মাবলী',
      ],
      en: [
        'Introduction to Makhaarij & Sifaat',
        '4 Rules of Noon Sakin & Tanween',
        '3 Rules of Meem Sakin',
        'Classification of Madd (Asli & Far-i)',
        'Rules of Waqf (Punctuation and Pausing)',
      ],
    },
  },
  {
    id: 'noorani-qaida',
    title: {
      bn: 'নূরানী কায়দা (Noorani Qaida)',
      en: 'Noorani Qaida',
    },
    icon: 'Sparkles',
    description: {
      bn: 'কুরআন শিক্ষার প্রমাণিত সর্বশ্রেষ্ঠ বিজ্ঞানসম্মত পদ্ধতি। শিশুদের আরবি হরফ চেনা থেকে বাক্য পড়া পর্যন্ত ধাপে ধাপে দক্ষ করে তোলে।',
      en: 'The scientifically proven foundation for Quranic literacy, guiding youngsters from individual Arabic letters to full fluid phrases.',
    },
    levels: {
      bn: 'প্লে গ্রুপ ও নার্সারি',
      en: 'Play Group & Nursery',
    },
    highlights: {
      bn: [
        'পৃথক ও যুক্ত হরফের নিখুঁত চিত্রায়ন',
        'হরকত (যবর, যের, পেশ) এর দ্রুত উচ্চারণ',
        'তানভীন ও জযমের ব্যবহারিক নিয়ম',
        'তাশদীদযুক্ত হরফের অনুশীলন ও বানানরীতি',
      ],
      en: [
        'Isolated and joined letter identification',
        'Vowelization marks (Zabar, Zer, Pesh) with rapid clarity',
        'Hands-on rules of Tanween and Sukoon/Jazm',
        'Tashdeed pronunciation mechanics and spelling structure',
      ],
    },
    syllabusTopics: {
      bn: [
        'আরবি ২৯টি মুফরাদাত (পৃথক হরফ)',
        'মুরাক্কাবাত (যুক্ত হরফের রূপ)',
        'হরকত ও তিন হরফে হরকত',
        'খাড়া যবর, খাড়া যের, উল্টো পেশ',
        'হরফে লীন ও মাদ্দের হরফ',
      ],
      en: [
        '29 Mufradat (Isolated Arabic Letters)',
        'Murakkabat (Joined letter structures)',
        'Harakat mechanics & 3-letter combinations',
        'Standing vowels (Alif/Ya/Waw Sagheerah)',
        'Letters of Leen and basic elongation',
      ],
    },
  },
  {
    id: 'basic-arabic',
    title: {
      bn: 'মৌলিক আরবি ভাষা (Basic Arabic Language)',
      en: 'Basic Arabic Language',
    },
    icon: 'Languages',
    description: {
      bn: 'আরবি ভাষার প্রতি ভালোবাসা সৃষ্টি, সহজ শব্দভাণ্ডার বৃদ্ধি, দৈনন্দিন ছোট ছোট বাক্যে কথপোকথন ও প্রাথমিক ব্যাকরণ পাঠ।',
      en: 'Fostering love for the language of the Quran through rich vocabulary, conversational dialogues, and foundational grammar.',
    },
    levels: {
      bn: 'নার্সারি থেকে ৫ম শ্রেণি',
      en: 'Nursery to Class 5',
    },
    highlights: {
      bn: [
        'দৈনন্দিন ব্যবহৃত ২০০+ আরবি শব্দের চিত্রভিত্তিক পাঠ',
        'সহজ আরবি সম্ভাষণ ও ক্লাসরুম নির্দেশনা',
        'ছোট ছোট আরবি গল্প ও ছড়া পাঠ',
        'মৌলিক শব্দরূপ (ইসম, ফেল ও হরফ ধারণা)',
      ],
      en: [
        '200+ illustrated everyday Arabic vocabulary terms',
        'Classroom dialogue and polite conversational greetings',
        'Short moral Arabic stories and rhythmic chants',
        'Foundational parts of speech: Ism, Fi-l, and Harf',
      ],
    },
    syllabusTopics: {
      bn: [
        'আমার পরিচয় ও পরিবার (التعارف والأسرة)',
        'শ্রেণিকক্ষ ও পাঠ্যসামগ্রী (الفصل والأدوات)',
        'ফলমূল ও খাদ্যসামগ্রী (الفواكه والأطعمة)',
        'সহজ প্রশ্নবোধক বাক্য (মা, মান, কাইফা, আইনা)',
        'নাহু ও ছরফের প্রাথমিক ধারণা (Class 4-5)',
      ],
      en: [
        'Self Introduction & Family (At-Ta-aruf)',
        'Classroom & Stationery Vocabulary',
        'Fruits, Animals & Food Terminology',
        'Interrogative Words (Maa, Man, Kayfa, Ayna)',
        'Introductory Nahw and Sarf syntax (Classes 4-5)',
      ],
    },
  },
  {
    id: 'islamic-studies',
    title: {
      bn: 'ইসলামিয়াত ও আকাইদ (Islamic Studies & Aqeedah)',
      en: 'Islamic Studies & Aqeedah',
    },
    icon: 'ShieldCheck',
    description: {
      bn: 'বিশুদ্ধ ইসলামী বিশ্বাস, ঈমানের মূল স্তম্ভ, রাসুলুল্লাহ (সা.)-এর সুমহান সীরাত এবং সাহাবায়ে কেরামের গৌরবোজ্জ্বল জীবনাদর্শ।',
      en: 'Pure Islamic monotheistic creed (Tawheed), pillars of Iman, prophetic Seerah, and inspiring biographies of the Sahabah.',
    },
    levels: {
      bn: '১ম শ্রেণি থেকে ৫ম শ্রেণি',
      en: 'Class 1 to Class 5',
    },
    highlights: {
      bn: [
        'তাওহীদ, রিসালাত ও আখেরাতের সুদৃঢ় ভিত্তি',
        'কালিমায়ে তায়্যিবা, শাহাদাত ও ঈমানে মুজমাল/মুফাসসাল',
        'রাসূল (সা.)-এর শৈশব, নবুয়ত ও মদিনার জীবন',
        'খোলাফায়ে রাশেদীন ও আশারায়ে মুবাশশারাহর আদর্শ',
      ],
      en: [
        'Firm grounding in Tawheed, Risalah, and Akhirah',
        'Kalima Tayyibah, Shahadah, Iman Mujmal & Mufassal',
        'The Prophet’s (PBUH) noble childhood, mission, and life in Madinah',
        'Exemplary legacy of the Righteous Caliphs and Companions',
      ],
    },
    syllabusTopics: {
      bn: [
        'ঈমানের ৬টি মূল স্তম্ভ',
        'আল্লাহর গুণবাচক ৯৯টি সুন্দর নাম ও অর্থ',
        'আসমানী কিতাব ও সম্মানিত ফেরেশতাগণের পরিচয়',
        'নবী-রাসূলগণের সংক্ষিপ্ত শিক্ষণীয় ঘটনা',
        'ইসলামে পিতা-মাতা ও শিক্ষকের মর্যাদা',
      ],
      en: [
        'The 6 Articles of Faith in Islam',
        '99 Beautiful Names of Allah (Asma-ul-Husna)',
        'Divine Scriptures and Noble Angels',
        'Moral narratives from the lives of the Prophets',
        'Rights and respect of parents and teachers in Islam',
      ],
    },
  },
  {
    id: 'daily-duas-manners',
    title: {
      bn: 'মাসনূন দোয়া ও শিষ্টাচার (Daily Duas & Islamic Manners)',
      en: 'Daily Duas & Islamic Manners',
    },
    icon: 'HeartHandshake',
    description: {
      bn: 'প্রতিদিনের প্রতিটি কাজে সুন্নাহ অনুসরণ, সকালে-সন্ধ্যায় মাসনূন জিকির, খাবারের আদব, সালাম ও সুন্দর ব্যবহারের বাস্তব প্রশিক্ষণ।',
      en: 'Infusing daily life with prophetic Sunnah, morning and evening supplications, dining etiquettes, greetings, and courteous manners.',
    },
    levels: {
      bn: 'প্লে গ্রুপ থেকে ৫ম শ্রেণি',
      en: 'Play Group to Class 5',
    },
    highlights: {
      bn: [
        'ঘুম থেকে ওঠা, ঘুমানো ও ঘরে প্রবেশের দোয়া',
        'খাবার গ্রহণের সুন্নাত ও দোয়া',
        'মসজিদে প্রবেশ ও বের হওয়ার আদব',
        'হাঁচি ও হাই তোলার আদব এবং জবাবদান',
        'দৈনন্দিন জীবনের ৫০+ প্রয়োজনীয় সহীহ দোয়া',
      ],
      en: [
        'Supplications for waking up, sleeping, and entering home',
        'Sunnah etiquettes and prayers before and after meals',
        'Etiquettes of entering and exiting the mosque',
        'Manners of sneezing, yawning, and respectful response',
        '50+ authentic supplications for children’s daily routine',
      ],
    },
    syllabusTopics: {
      bn: [
        'সালামের ব্যাপক প্রচার ও হ্যান্ডশেক শিষ্টাচার',
        'ওযু ও পবিত্রতার বাস্তব মহড়া',
        'পিতা-মাতা, ভাই-বোন ও প্রতিবেশীর প্রতি সদ্ব্যবহার',
        'মিথ্যা বলা বর্জন ও সত্যবাদিতার পুরস্কার',
        'পরিষ্কার-পরিচ্ছন্নতা ঈমানের অঙ্গ (বাস্তব চর্চা)',
      ],
      en: [
        'Universal spreading of Salam and handshake courtesy',
        'Practical Wudhu and cleanliness demonstrations',
        'Benevolence towards parents, siblings, and neighbors',
        'Shunning falsehood and cultivating truthfulness',
        'Cleanliness is half of faith (hands-on madrasa practice)',
      ],
    },
  },
  {
    id: 'bangla',
    title: {
      bn: 'বাংলা ভাষা ও সাহিত্য (Bangla Language & Literature)',
      en: 'Bangla Language & Literature',
    },
    icon: 'PenTool',
    description: {
      bn: 'মাতৃভাষার প্রতি গভীর শ্রদ্ধা, শুদ্ধ উচ্চারণ, সুন্দর হাতের লেখা, ব্যাকরণগত নির্ভুলতা ও জাতীয় পাঠ্যক্রমভিত্তিক সাহিত্য পাঠ।',
      en: 'Fostering deep love for the mother tongue, impeccable pronunciation, neat handwriting, grammatical precision, and national literature.',
    },
    levels: {
      bn: 'প্লে থেকে ৫ম শ্রেণি',
      en: 'Play Group to Class 5',
    },
    highlights: {
      bn: [
        'এনসিটিবি (NCTB) পাঠ্যবইয়ের শতভাগ পাঠদান',
        'বর্ণমালা থেকে অনুচ্ছেদ রচনা ও চিঠি লিখন',
        'সুন্দর ও দ্রুত হস্তাক্ষর প্রতিযোগিতা',
        'বাংলা ব্যাকরণ ও বানান শুদ্ধিকরণ কর্মশালা',
      ],
      en: [
        '100% thorough coverage of standard NCTB curriculum',
        'From alphabetic tracing to creative paragraphs and letter writing',
        'Calligraphy and neat penmanship training',
        'Spelling accuracy workshops and grammar fundamentals',
      ],
    },
    syllabusTopics: {
      bn: [
        'স্বরবর্ণ, ব্যঞ্জনবর্ণ ও যুক্তবর্ণ রূপ',
        'বিরাম চিহ্নের সঠিক ব্যবহার',
        'বিপরীত শব্দ, সমার্থক শব্দ ও এককথায় প্রকাশ',
        'সৃজনশীল অনুচ্ছেদ ও আবেদনপত্র লিখন',
        'জাতীয় কবি ও সাহিত্যিকদের শিশুতোষ রচনা',
      ],
      en: [
        'Vowels, consonants, and conjunct letter formations',
        'Proper usage of punctuation marks',
        'Antonyms, synonyms, and single-word substitutions',
        'Creative paragraph writing and formal application drafting',
        'Selected children’s literature by prominent national writers',
      ],
    },
  },
  {
    id: 'english',
    title: {
      bn: 'ইংরেজি ভাষা ও যোগাযোগ (English Language & Communication)',
      en: 'English Language & Communication',
    },
    icon: 'Globe',
    description: {
      bn: 'আধুনিক বিশ্বের চ্যালেঞ্জ মোকাবেলায় ইংরেজি ভাষার চারটি দক্ষতা—Listening, Speaking, Reading ও Writing এর নিবিড় প্রশিক্ষণ।',
      en: 'Equipping young scholars with the four vital language skills—Listening, Speaking, Reading, and Writing—for confident modern communication.',
    },
    levels: {
      bn: 'প্লে থেকে ৫ম শ্রেণি',
      en: 'Play Group to Class 5',
    },
    highlights: {
      bn: [
        'English for Today পাঠ্যবইয়ের অনুশীলন',
        'ধ্বনিবিজ্ঞানসম্মত Phonics পদ্ধতিতে রিডিং শেখানো',
        'শ্রেণিকক্ষে স্পোকেন ইংলিশের সহজ অনুশীলন',
        'মৌলিক গ্রামার: Parts of Speech, Tense ও Sentence',
      ],
      en: [
        'Complete mastery of standard English for Today textbooks',
        'Phonics-based reading methodology for natural accent and fluency',
        'Interactive daily spoken English practice in classrooms',
        'Grammar foundation: Parts of Speech, Tenses, and Syntax',
      ],
    },
    syllabusTopics: {
      bn: [
        'Phonics & Sound Blending',
        'Everyday Conversational English Phrases',
        'Noun, Pronoun, Verb, Adjective, Preposition',
        'Present, Past & Future Simple Tenses',
        'Short Paragraph Writing & Story Comprehension',
      ],
      en: [
        'Phonics & Sound Blending mechanics',
        'Everyday Conversational English Phrases',
        'Noun, Pronoun, Verb, Adjective, Preposition',
        'Present, Past & Future Simple Tenses',
        'Short Paragraph Writing & Story Comprehension',
      ],
    },
  },
  {
    id: 'mathematics',
    title: {
      bn: 'গণিত ও যুক্তিবিদ্যা (Mathematics & Logical Thinking)',
      en: 'Mathematics & Logical Thinking',
    },
    icon: 'Calculator',
    description: {
      bn: 'ভীতিহীন পরিবেশে আনন্দের সাথে গণিত শিক্ষা। সংখ্যার ধারণা থেকে শুরু করে জ্যামিতি, পরিমাপ ও বিশ্লেষণমূলক সমস্যা সমাধান।',
      en: 'Inspiring joy and eliminating math phobia through intuitive numbers, arithmetic operations, geometry, and problem-solving logic.',
    },
    levels: {
      bn: 'প্লে থেকে ৫ম শ্রেণি',
      en: 'Play Group to Class 5',
    },
    highlights: {
      bn: [
        'বাস্তব উপকরণের সাহায্যে গণনা ও ধারণা তৈরি',
        'নামতা মুখস্থ ও দ্রুত মানসিক গণনা (Mental Math)',
        'ভগ্নাংশ, দশমিক ও শতকরার বাস্তব প্রয়োগ',
        'জ্যামিতিক আকার ও চিত্রাঙ্কন দক্ষতা',
      ],
      en: [
        'Concept building using concrete learning aids and manipulatives',
        'Multiplication tables and lightning Mental Math techniques',
        'Practical applications of fractions, decimals, and percentages',
        'Geometric shapes, perimeter, area, and compass construction',
      ],
    },
    syllabusTopics: {
      bn: [
        'যোগ, বিয়োগ, গুণ ও ভাগ এর কথার অংক',
        'লসাগু ও গসাগু নির্ণয় (Class 4-5)',
        'সাধারণ ও দশমিক ভগ্নাংশের সমাধান',
        'পরিমাপ (দৈর্ঘ্য, ওজন, তরল ও সময় গণনা)',
        'ত্রিভুজ, চতুর্ভুজ ও বৃত্তের জ্যামিতিক বৈশিষ্ট্য',
      ],
      en: [
        'Applied word problems in the four basic operations',
        'LCM and HCF determinations (Classes 4-5)',
        'Operations on common and decimal fractions',
        'Units of measurement (length, weight, volume, and time)',
        'Geometric characteristics of triangles, quadrilaterals, and circles',
      ],
    },
  },
  {
    id: 'general-knowledge',
    title: {
      bn: 'সাধারণ জ্ঞান ও বিজ্ঞান (General Knowledge & Science)',
      en: 'General Knowledge & Science',
    },
    icon: 'Lightbulb',
    description: {
      bn: 'বিশ্বব্রহ্মাণ্ডে আল্লাহর সৃষ্টির অপার মহিমা দর্শন, প্রাথমিক বিজ্ঞান, দেশ-বিদেশের ইতিহাস এবং ডিজিটাল সচেতনতা।',
      en: 'Reflecting on the splendor of Allah’s creation, elementary science explorations, national and world heritage, and digital awareness.',
    },
    levels: {
      bn: '১ম থেকে ৫ম শ্রেণি',
      en: 'Class 1 to Class 5',
    },
    highlights: {
      bn: [
        'আল্লাহর সৃষ্টিজগৎ ও প্রকৃতির বৈজ্ঞানিক অনুধাবন',
        'বাংলাদেশের স্বাধীনতা ও মুক্তিযুদ্ধের সঠিক ইতিহাস',
        'মানবদেহ, স্বাস্থ্যবিধি ও প্রাথমিক চিকিৎসা',
        'কম্পিউটার ও ডিজিটাল প্রযুক্তির প্রাথমিক পাঠ',
      ],
      en: [
        'Scientific contemplation of Allah’s natural cosmos',
        'Authentic history of Bangladesh independence and heritage',
        'Human anatomy, personal hygiene, and elementary first aid',
        'Foundational lessons in computers and technological literacy',
      ],
    },
    syllabusTopics: {
      bn: [
        'আমাদের সৌরজগৎ ও মহাবিশ্বের বিস্ময়',
        'উদ্ভিদ ও প্রাণিজগতের খাদ্যশৃঙ্খল',
        'বাংলাদেশের মানচিত্র, জেলা ও ঐতিহ্য',
        'ইসলামী বিশ্বের ইতিহাস ও মনীষীদের অবদান',
        'দৈনন্দিন প্রযুক্তির ইতিবাচক ব্যবহার',
      ],
      en: [
        'Our Solar System & Wonders of the Universe',
        'Plant biology, food chains, and ecology',
        'Map of Bangladesh, districts, and cultural heritage',
        'Contributions of great Islamic scientists and scholars',
        'Safe and constructive use of modern technology',
      ],
    },
  },
];
