import { z } from 'zod';

export const admissionFormSchema = z.object({
  studentName: z
    .string()
    .min(2, { message: 'শিক্ষার্থীর পূর্ণ নাম অন্তত ২ অক্ষরের হতে হবে / Student name is required' }),
  dateOfBirth: z
    .string()
    .min(1, { message: 'জন্ম তারিখ প্রদান করুন / Date of birth is required' }),
  desiredClass: z
    .string()
    .min(1, { message: 'কাঙ্ক্ষিত শ্রেণি নির্বাচন করুন / Please select desired class' }),
  gender: z
    .string()
    .min(1, { message: 'লিঙ্গ নির্বাচন করুন / Please select gender' }),
  fatherName: z
    .string()
    .min(2, { message: 'পিতার নাম অন্তত ২ অক্ষরের হতে হবে / Father’s name is required' }),
  motherName: z
    .string()
    .min(2, { message: 'মাতার নাম অন্তত ২ অক্ষরের হতে হবে / Mother’s name is required' }),
  guardianPhone: z
    .string()
    .regex(/^(\+?880|0)?1[3-9]\d{8}$/, {
      message: 'সঠিক বাংলাদেশি ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017xxxxxxxx) / Invalid phone number',
    }),
  guardianEmail: z
    .string()
    .email({ message: 'সঠিক ইমেইল ঠিকানা দিন / Invalid email address' })
    .optional()
    .or(z.literal('')),
  presentAddress: z
    .string()
    .min(5, { message: 'বর্তমান ঠিকানা বিস্তারিত লিখুন / Full address is required' }),
  previousInstitute: z.string().optional().or(z.literal('')),
  additionalRemarks: z.string().optional().or(z.literal('')),
});

export type AdmissionFormValues = z.infer<typeof admissionFormSchema>;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'আপনার নাম অন্তত ২ অক্ষরের হতে হবে / Name is required' }),
  phone: z
    .string()
    .regex(/^(\+?880|0)?1[3-9]\d{8}$/, {
      message: 'সঠিক মোবাইল নম্বর প্রদান করুন / Invalid phone number',
    }),
  email: z
    .string()
    .email({ message: 'সঠিক ইমেইল দিন / Invalid email address' })
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(3, { message: 'বিষয় অন্তত ৩ অক্ষরের হতে হবে / Subject is required' }),
  message: z
    .string()
    .min(10, { message: 'বার্তা অন্তত ১০ অক্ষরের হতে হবে / Message must be at least 10 characters' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
