export type Locale = 'bn' | 'en';

export interface SiteConfig {
  name: {
    bn: string;
    en: string;
    ar: string;
  };
  shortName: {
    bn: string;
    en: string;
  };
  subtitle: {
    bn: string;
    en: string;
  };
  tagline: {
    bn: string;
    en: string;
  };
  established: number;
  location: {
    bn: string;
    en: string;
  };
  fullAddress: {
    bn: string;
    en: string;
  };
  phone: string[];
  email: string;
  officeHours: {
    bn: string;
    en: string;
  };
  social: {
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

export interface AcademicProgram {
  id: string;
  slug: string;
  name: {
    bn: string;
    en: string;
  };
  classLevel: {
    bn: string;
    en: string;
  };
  ageEligibility: {
    bn: string;
    en: string;
  };
  duration: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  overview: {
    bn: string;
    en: string;
  };
  learningObjectives: {
    bn: string[];
    en: string[];
  };
  subjects: {
    bn: string[];
    en: string[];
  };
  learningOutcomes: {
    bn: string[];
    en: string[];
  };
  admissionRequirements: {
    bn: string[];
    en: string[];
  };
  iconName: string;
  badge?: {
    bn: string;
    en: string;
  };
}

export interface CurriculumCategory {
  id: string;
  title: {
    bn: string;
    en: string;
  };
  icon: string;
  description: {
    bn: string;
    en: string;
  };
  levels: {
    bn: string;
    en: string;
  };
  highlights: {
    bn: string[];
    en: string[];
  };
  syllabusTopics: {
    bn: string[];
    en: string[];
  };
}

export interface Teacher {
  id: string;
  name: {
    bn: string;
    en: string;
  };
  designation: {
    bn: string;
    en: string;
  };
  department: 'quran' | 'arabic' | 'general' | 'administration';
  qualifications: {
    bn: string;
    en: string;
  };
  subjectsTaught: {
    bn: string[];
    en: string[];
  };
  experience: {
    bn: string;
    en: string;
  };
  bio: {
    bn: string;
    en: string;
  };
  photo: string;
}

export interface Facility {
  id: string;
  title: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  features: {
    bn: string[];
    en: string[];
  };
  icon: string;
  image: string;
}

export interface Notice {
  id: string;
  title: {
    bn: string;
    en: string;
  };
  publishDate: string;
  category: 'admission' | 'examination' | 'holiday' | 'event' | 'general';
  summary: {
    bn: string;
    en: string;
  };
  content: {
    bn: string;
    en: string;
  };
  isUrgent?: boolean;
  downloadUrl?: string;
  attachmentName?: string;
}

export interface EventItem {
  id: string;
  title: {
    bn: string;
    en: string;
  };
  date: string;
  time: {
    bn: string;
    en: string;
  };
  venue: {
    bn: string;
    en: string;
  };
  category: 'academic' | 'islamic' | 'sports' | 'cultural';
  isPast: boolean;
  description: {
    bn: string;
    en: string;
  };
  highlights: {
    bn: string[];
    en: string[];
  };
  image: string;
}

export interface GalleryItem {
  id: string;
  title: {
    bn: string;
    en: string;
  };
  category: 'classroom' | 'quran' | 'activities' | 'events' | 'campus';
  image: string;
  thumbnail?: string;
  date?: string;
}

export interface FAQItem {
  id: string;
  category: 'admission' | 'curriculum' | 'schedule' | 'general';
  question: {
    bn: string;
    en: string;
  };
  answer: {
    bn: string;
    en: string;
  };
}

export interface Testimonial {
  id: string;
  parentName: {
    bn: string;
    en: string;
  };
  childClass: {
    bn: string;
    en: string;
  };
  occupation: {
    bn: string;
    en: string;
  };
  quote: {
    bn: string;
    en: string;
  };
  rating: number;
}
