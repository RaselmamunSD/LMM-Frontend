import { Locale } from '@/types';
import bnMessages from '@/messages/bn.json';
import enMessages from '@/messages/en.json';

export const defaultLocale: Locale = 'bn';
export const locales: Locale[] = ['bn', 'en'];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: Locale) {
  if (locale === 'en') {
    return enMessages;
  }
  return bnMessages;
}

export type Dictionary = typeof bnMessages;
