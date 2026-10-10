import * as React from 'react';
import { Locale } from '@/types';
import { locales } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'en' ? 'en' : 'bn';

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
