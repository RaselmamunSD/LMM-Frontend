'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/validations';
import { Locale } from '@/types';
import { CheckCircle2, AlertCircle, Send, User, Phone, Mail, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  locale: Locale;
}

export function ContactForm({ locale }: ContactFormProps) {
  const isBn = locale === 'bn';
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successTicket, setSuccessTicket] = React.useState<string | null>(null);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit contact message');
      }

      setSuccessTicket(result.ticketId);
      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred';
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successTicket) {
    return (
      <div className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-sm card-glow">
        <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-[#8B1E24]/20 text-primary dark:text-[#C75B60] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-bold text-text-primary">
          {isBn ? 'আপনার বার্তা সফলভাবে গৃহীত হয়েছে!' : 'Message Received Successfully!'}
        </h4>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          {isBn
            ? 'ধন্যবাদ। আমাদের মাদ্রাসা প্রশাসন খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।'
            : 'Thank you. Our administration will get in touch with you shortly.'}
        </p>
        <div className="text-xs text-text-muted font-mono bg-surface-subtle dark:bg-[#161616] py-2 px-3 rounded-lg border border-border-color dark:border-[#2A2A2A] inline-block">
          {isBn ? 'ট্র্যাকিং টিকিট নম্বর:' : 'Tracking Ticket:'} <span className="font-bold text-primary dark:text-[#C75B60]">{successTicket}</span>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSuccessTicket(null)}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-surface dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] text-text-primary hover:bg-surface-subtle dark:hover:bg-[#262626] transition-colors"
          >
            {isBn ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card-bg dark:bg-[#1C1C1C] border border-border-color dark:border-[#2A2A2A] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs card-glow relative"
      noValidate
    >
      <h3 className="text-lg font-bold text-text-primary pb-3 border-b border-border-color dark:border-[#2A2A2A] flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-primary dark:text-[#C75B60]" />
        <span>{isBn ? 'সরাসরি বার্তা পাঠান' : 'Send Us an Inquiry'}</span>
      </h3>

      {serverError && (
        <div className="p-3 rounded-xl bg-accent-red/10 border border-accent-red/30 flex items-center gap-2 text-accent-red text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-text-primary mb-1">
          {isBn ? 'আপনার পূর্ণ নাম *' : 'Your Full Name *'}
        </label>
        <div className="relative">
          <input
            type="text"
            {...register('name')}
            placeholder={isBn ? 'যেমন: আব্দুল্লাহ আল মামুন' : 'e.g. Abdullah Al Mamun'}
            className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
              errors.name ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
            } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
          />
        </div>
        {errors.name && (
          <span className="text-[11px] text-accent-red mt-1 block">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-text-primary mb-1">
            {isBn ? 'মোবাইল নম্বর *' : 'Phone Number *'}
          </label>
          <input
            type="tel"
            {...register('phone')}
            placeholder="017xxxxxxxx"
            className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
              errors.phone ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
            } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
          />
          {errors.phone && (
            <span className="text-[11px] text-accent-red mt-1 block">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-text-primary mb-1">
            {isBn ? 'ইমেইল (ঐচ্ছিক)' : 'Email (Optional)'}
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="mail@example.com"
            className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
              errors.email ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
            } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
          />
          {errors.email && (
            <span className="text-[11px] text-accent-red mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-text-primary mb-1">
          {isBn ? 'বিষয় *' : 'Subject *'}
        </label>
        <input
          type="text"
          {...register('subject')}
          placeholder={isBn ? 'যেমন: প্লে শ্রেণিতে ভর্তি তথ্য' : 'e.g. Play Group admission inquiry'}
          className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
            errors.subject ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
          } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
        />
        {errors.subject && (
          <span className="text-[11px] text-accent-red mt-1 block">
            {errors.subject.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-text-primary mb-1">
          {isBn ? 'বার্তা বিস্তারিত *' : 'Your Message *'}
        </label>
        <textarea
          rows={4}
          {...register('message')}
          placeholder={isBn ? 'আপনার প্রশ্ন বা বক্তব্য লিখুন...' : 'Write your detailed message here...'}
          className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface dark:bg-[#161616] border ${
            errors.message ? 'border-accent-red' : 'border-border-color dark:border-[#2A2A2A]'
          } text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:ring-[#C75B60]/30 dark:focus:border-[#C75B60]`}
        />
        {errors.message && (
          <span className="text-[11px] text-accent-red mt-1 block">
            {errors.message.message}
          </span>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#8B1E24] hover:bg-[#73181D] text-white transition-all shadow-xs disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>{isBn ? 'বার্তা পাঠানো হচ্ছে...' : 'Sending Message...'}</span>
          ) : (
            <>
              <Send className="w-4 h-4 text-white" />
              <span>{isBn ? 'বার্তা প্রেরণ করুন' : 'Submit Message'}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
