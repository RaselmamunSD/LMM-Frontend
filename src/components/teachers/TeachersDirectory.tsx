'use client';

import * as React from 'react';
import { Locale, Teacher } from '@/types';
import { User, GraduationCap, Award, BookOpen, Clock } from 'lucide-react';

interface TeachersDirectoryProps {
  teachers: Teacher[];
  locale: Locale;
}

export function TeachersDirectory({ teachers, locale }: TeachersDirectoryProps) {
  const isBn = locale === 'bn';
  const [selectedDept, setSelectedDept] = React.useState<string>('all');

  const departments = [
    { id: 'all', label: isBn ? 'সকল শিক্ষক' : 'All Faculty' },
    { id: 'administration', label: isBn ? 'প্রশাসন ও মুহতামিম' : 'Administration' },
    { id: 'quran', label: isBn ? 'কুরআন ও তাজবীদ' : 'Quran & Tajweed' },
    { id: 'arabic', label: isBn ? 'আরবি ও ইসলামিয়াত' : 'Arabic Studies' },
    { id: 'general', label: isBn ? 'সাধারণ শিক্ষা (ইংরেজি ও গণিত)' : 'General Academics' },
  ];

  const filteredTeachers =
    selectedDept === 'all'
      ? teachers
      : teachers.filter((t) => t.department === selectedDept);

  return (
    <div className="space-y-8">
      {/* Department Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] max-w-2xl mx-auto shadow-2xs card-glow">
        {departments.map((dept) => (
          <button
            key={dept.id}
            type="button"
            onClick={() => setSelectedDept(dept.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              selectedDept === dept.id
                ? 'bg-[#8B1E24] text-white shadow-xs'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle dark:hover:bg-[#262626]'
            }`}
          >
            {dept.label}
          </button>
        ))}
      </div>

      {/* Teachers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md dark:hover:border-[#C75B60]/40 card-glow transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Teacher Avatar & Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-full bg-surface-subtle dark:bg-[#161616] border-2 border-primary/20 dark:border-[#C75B60]/30 flex items-center justify-center text-primary dark:text-[#C75B60] shrink-0 shadow-2xs">
                  <User className="w-8 h-8 text-primary/70 dark:text-[#C75B60]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary leading-tight">
                    {teacher.name[locale]}
                  </h3>
                  <div className="text-xs font-semibold text-primary dark:text-[#C75B60] mt-1">
                    {teacher.designation[locale]}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                {teacher.bio[locale]}
              </p>

              {/* Details List */}
              <div className="space-y-2.5 text-xs text-text-secondary pt-4 border-t border-border-color dark:border-[#2A2A2A]">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      {isBn ? 'শিক্ষাগত যোগ্যতা:' : 'Qualifications:'}
                    </span>{' '}
                    <span>{teacher.qualifications[locale]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      {isBn ? 'অভিজ্ঞতা:' : 'Experience:'}
                    </span>{' '}
                    <span>{teacher.experience[locale]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      {isBn ? 'পাঠদান বিষয়:' : 'Subjects:'}
                    </span>{' '}
                    <span>{teacher.subjectsTaught[locale].join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
