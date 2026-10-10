'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { admissionFormSchema, AdmissionFormValues } from '@/lib/validations';
import { Locale } from '@/types';
import { academicPrograms } from '@/lib/data/programs';
import {
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  Building,
  FileText,
  Lock,
  Printer,
  Sparkles,
} from 'lucide-react';

interface AdmissionFormProps {
  locale: Locale;
  preselectedClass?: string;
}

export function AdmissionForm({ locale, preselectedClass }: AdmissionFormProps) {
  const isBn = locale === 'bn';
  const searchParams = useSearchParams();
  const classFromUrl = searchParams.get('class');
  const targetClass = classFromUrl || preselectedClass || 'play-group';

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState<{
    applicationNo: string;
    studentName: string;
    desiredClass: string;
    guardianPhone: string;
    submittedAt: string;
  } | null>(null);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      studentName: '',
      dateOfBirth: '',
      desiredClass: targetClass,
      gender: 'male',
      fatherName: '',
      motherName: '',
      guardianPhone: '',
      guardianEmail: '',
      presentAddress: '',
      previousInstitute: '',
      additionalRemarks: '',
    },
  });

  React.useEffect(() => {
    if (classFromUrl) {
      setValue('desiredClass', classFromUrl);
    }
  }, [classFromUrl, setValue]);

  const onSubmit = async (values: AdmissionFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit admission application');
      }

      setSubmitSuccess({
        applicationNo: result.applicationNo,
        studentName: result.studentName,
        desiredClass: result.desiredClass,
        guardianPhone: result.guardianPhone,
        submittedAt: result.submittedAt,
      });
      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred';
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // If application is successfully submitted, show confirmation state
  if (submitSuccess) {
    return (
      <div className="bg-card-bg dark:bg-[#1C1C1C] border border-[#8B1E24]/30 dark:border-[#C75B60]/30 rounded-3xl p-6 sm:p-10 shadow-xl max-w-2xl mx-auto text-center space-y-6 card-glow">
        <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FDF2F2] text-[#8B1E24] border border-[#8B1E24]/20 dark:bg-[#2A1416] dark:text-[#E58B8F] dark:border-[#8B1E24]/40">
            {isBn ? 'আবেদন সফল হয়েছে' : 'Application Submitted'}
          </span>
          <h3 className="text-2xl font-extrabold text-text-primary">
            {isBn ? 'ভর্তির অনলাইন আবেদন সফলভাবে গৃহীত হয়েছে!' : 'Online Admission Form Successfully Received!'}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed max-w-lg mx-auto">
            {isBn
              ? 'আলহামদুলিল্লাহ! আপনার আবেদনটি লালমনিরহাট মডেল মাদ্রাসা ভর্তি বিভাগে নিবন্ধিত হয়েছে। নিচের রোল ও রেফারেন্স নম্বরটি সংরক্ষণ করুন।'
              : 'Alhamdulillah! Your application has been logged with the Admissions Office. Please note your application reference number below.'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-left space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-border-color dark:border-[#2A2A2A]">
            <span className="text-xs text-text-muted uppercase font-bold">
              {isBn ? 'ট্র্যাকিং নম্বর' : 'Reference Number'}
            </span>
            <span className="text-xl font-mono font-extrabold text-primary dark:text-[#C75B60]">
              {submitSuccess.applicationNo}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-text-muted">{isBn ? 'শিক্ষার্থীর নাম:' : 'Student Name:'}</span>
              <div className="font-semibold text-text-primary">{submitSuccess.studentName}</div>
            </div>
            <div>
              <span className="text-text-muted">{isBn ? 'আবেদিত শ্রেণি:' : 'Target Class:'}</span>
              <div className="font-semibold text-text-primary capitalize">{submitSuccess.desiredClass}</div>
            </div>
            <div>
              <span className="text-text-muted">{isBn ? 'অভিভাবকের ফোন:' : 'Guardian Phone:'}</span>
              <div className="font-semibold text-text-primary">{submitSuccess.guardianPhone}</div>
            </div>
            <div>
              <span className="text-text-muted">{isBn ? 'আবেদনের তারিখ:' : 'Date:'}</span>
              <div className="font-semibold text-text-primary">
                {new Date(submitSuccess.submittedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FDF5F5] dark:bg-[#161616] border border-[#8B1E24]/20 dark:border-[#2A2A2A] text-xs text-text-secondary text-left space-y-1">
          <div className="font-bold text-text-primary dark:text-[#E58B8F]">
            {isBn ? 'পরবর্তী করণীয়:' : 'Next Steps:'}
          </div>
          <p>
            {isBn
              ? '১. ভর্তি শাখা থেকে আগামী ২ কার্যদিবসের মধ্যে এসএমএস বা কলের মাধ্যমে মৌখিক সাক্ষাতের সময় জানানো হবে।'
              : '1. Our admissions office will contact you within 2 working days via phone/SMS to schedule the interview.'}
          </p>
          <p>
            {isBn
              ? '২. মৌখিক সাক্ষাতের দিন শিক্ষার্থীর অনলাইন জন্ম নিবন্ধন সনদ ও ২ কপি ছবি সঙ্গে আনতে হবে।'
              : '2. Please bring the birth registration certificate and 2 photos on interview day.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] text-text-primary hover:bg-surface-subtle dark:hover:bg-[#262626] transition-colors shadow-2xs"
          >
            <Printer className="w-4 h-4 text-primary dark:text-[#C75B60]" />
            <span>{isBn ? 'রশিদ প্রিন্ট করুন' : 'Print Slip'}</span>
          </button>
          <button
            type="button"
            onClick={() => setSubmitSuccess(null)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-primary hover:bg-primary-hover text-white transition-colors"
          >
            <span>{isBn ? 'নতুন আরেকটি আবেদন করুন' : 'Submit Another Form'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 card-glow relative"
      noValidate
    >
      <div className="border-b border-border-color dark:border-[#2A2A2A] pb-4">
        <h3 className="text-xl font-bold text-text-primary">
          {isBn ? 'অনলাইন ভর্তি আবেদন ফরম' : 'Online Admission Application Form'}
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary mt-1">
          {isBn
            ? 'তারকাচিহ্নিত (*) ঘরগুলো আবশ্যিকভাবে পূরণ করুন। সঠিক তথ্য প্রদান করে সহযোগিতা করুন।'
            : 'All starred (*) fields are mandatory. Please provide authentic and accurate details.'}
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-accent-red/10 border border-accent-red/30 flex items-center gap-3 text-accent-red text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Section 1: Student Details */}
      <div className="space-y-4">
        <div className="text-xs font-bold text-primary dark:text-[#C75B60] uppercase tracking-wider flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{isBn ? '১. শিক্ষার্থীর তথ্য' : '1. Student Information'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Student Full Name */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'শিক্ষার্থীর পূর্ণ নাম *' : 'Student Full Name *'}
            </label>
            <input
              type="text"
              {...register('studentName')}
              placeholder={isBn ? 'যেমন: মুহাম্মদ সালমান' : 'e.g. Muhammad Salman'}
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
                errors.studentName ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
              } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
            />
            {errors.studentName && (
              <span className="text-[11px] text-accent-red mt-1 block">
                {errors.studentName.message}
              </span>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'জন্ম তারিখ *' : 'Date of Birth *'}
            </label>
            <input
              type="date"
              {...register('dateOfBirth')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
                errors.dateOfBirth ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
              } text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
            />
            {errors.dateOfBirth && (
              <span className="text-[11px] text-accent-red mt-1 block">
                {errors.dateOfBirth.message}
              </span>
            )}
          </div>

          {/* Desired Class */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'কাঙ্ক্ষিত শ্রেণি *' : 'Desired Class *'}
            </label>
            <select
              {...register('desiredClass')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
                errors.desiredClass ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
              } text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
            >
              {academicPrograms.map((prog) => (
                <option key={prog.id} value={prog.slug} className="dark:bg-[#161616] dark:text-white">
                  {prog.name[locale]} ({prog.ageEligibility[locale]})
                </option>
              ))}
            </select>
            {errors.desiredClass && (
              <span className="text-[11px] text-accent-red mt-1 block">
                {errors.desiredClass.message}
              </span>
            )}
          </div>

          {/* Gender */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'লিঙ্গ *' : 'Gender *'}
            </label>
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="male"
                  {...register('gender')}
                  className="accent-primary text-primary focus:ring-primary"
                />
                <span className="text-text-primary">{isBn ? 'ছাত্র (Male)' : 'Male (Boy)'}</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="female"
                  {...register('gender')}
                  className="accent-primary text-primary focus:ring-primary"
                />
                <span className="text-text-primary">{isBn ? 'ছাত্রী (Female)' : 'Female (Girl)'}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Guardian Details */}
      <div className="space-y-4 pt-4 border-t border-border-color dark:border-[#2A2A2A]">
        <div className="text-xs font-bold text-primary dark:text-[#C75B60] uppercase tracking-wider flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{isBn ? '২. পিতা, মাতা ও অভিভাবকের তথ্য' : '2. Parents & Guardian Details'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Father Name */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'পিতার নাম *' : 'Father’s Name *'}
            </label>
            <input
              type="text"
              {...register('fatherName')}
              placeholder={isBn ? 'পিতার পূর্ণ নাম' : 'Father’s Full Name'}
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
                errors.fatherName ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
              } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
            />
            {errors.fatherName && (
              <span className="text-[11px] text-accent-red mt-1 block">
                {errors.fatherName.message}
              </span>
            )}
          </div>

          {/* Mother Name */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'মাতার নাম *' : 'Mother’s Name *'}
            </label>
            <input
              type="text"
              {...register('motherName')}
              placeholder={isBn ? 'মাতার পূর্ণ নাম' : 'Mother’s Full Name'}
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
                errors.motherName ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
              } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
            />
            {errors.motherName && (
              <span className="text-[11px] text-accent-red mt-1 block">
                {errors.motherName.message}
              </span>
            )}
          </div>

          {/* Guardian Mobile Phone */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'অভিভাবকের মোবাইল নম্বর *' : 'Guardian Mobile Phone *'}
            </label>
            <input
              type="tel"
              {...register('guardianPhone')}
              placeholder="017xxxxxxxx"
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
                errors.guardianPhone ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
              } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
            />
            {errors.guardianPhone && (
              <span className="text-[11px] text-accent-red mt-1 block">
                {errors.guardianPhone.message}
              </span>
            )}
          </div>

          {/* Email (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'ইমেইল ঠিকানা (ঐচ্ছিক)' : 'Email Address (Optional)'}
            </label>
            <input
              type="email"
              {...register('guardianEmail')}
              placeholder="example@mail.com"
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
                errors.guardianEmail ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
              } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
            />
            {errors.guardianEmail && (
              <span className="text-[11px] text-accent-red mt-1 block">
                {errors.guardianEmail.message}
              </span>
            )}
          </div>

          {/* Present Address */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'বর্তমান ঠিকানা *' : 'Present Residence Address *'}
            </label>
            <textarea
              rows={2}
              {...register('presentAddress')}
              placeholder={
                isBn
                  ? 'গ্রাম/মহল্লা, ডাকঘর, থানা ও জেলা বিস্তারিত লিখুন'
                  : 'Village/Street, Post Office, Police Station & District'
              }
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
                errors.presentAddress ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
              } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
            />
            {errors.presentAddress && (
              <span className="text-[11px] text-accent-red mt-1 block">
                {errors.presentAddress.message}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Section 3: Educational Background & Remarks */}
      <div className="space-y-4 pt-4 border-t border-border-color dark:border-[#2A2A2A]">
        <div className="text-xs font-bold text-primary dark:text-[#C75B60] uppercase tracking-wider flex items-center gap-2">
          <Building className="w-4 h-4" />
          <span>{isBn ? '৩. পূর্ববর্তী শিক্ষা ও মন্তব্য' : '3. Previous Education & Remarks'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'পূর্ববর্তী প্রতিষ্ঠান (ঐচ্ছিক)' : 'Previous School / Madrasa (Optional)'}
            </label>
            <input
              type="text"
              {...register('previousInstitute')}
              placeholder={isBn ? 'পূর্ববর্তী স্কুল/মাদ্রাসার নাম' : 'Name of previous school'}
              className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1">
              {isBn ? 'অতিরিক্ত তথ্য / বিশেষ মন্তব্য (ঐচ্ছিক)' : 'Additional Remarks (Optional)'}
            </label>
            <input
              type="text"
              {...register('additionalRemarks')}
              placeholder={isBn ? 'যদি কোনো বিশেষ তথ্য থাকে' : 'Any special health or learning note'}
              className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]"
            />
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="p-3.5 rounded-xl bg-surface-subtle dark:bg-[#161616] border border-border-color dark:border-[#2A2A2A] flex items-center gap-2.5 text-xs text-text-secondary">
        <Lock className="w-4 h-4 text-primary dark:text-[#C75B60] shrink-0" />
        <span>
          {isBn
            ? 'গোপনীয়তা রক্ষা: আপনার ও আপনার সন্তানের ব্যক্তিগত তথ্য সম্পূর্ণ নিরাপদ থাকবে এবং কখনোই জনসম্মুখে প্রকাশ করা হবে না।'
            : 'Privacy Assurance: Student and guardian information is strictly confidential and protected from public exposure.'}
        </span>
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#8B1E24] hover:bg-[#73181D] text-white transition-all shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>{isBn ? 'আবেদন পাঠানো হচ্ছে...' : 'Submitting Application...'}</span>
            </>
          ) : (
            <>
              <GraduationCap className="w-5 h-5 text-white" />
              <span>{isBn ? 'ভর্তি আবেদন জমা দিন' : 'Submit Admission Application'}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
