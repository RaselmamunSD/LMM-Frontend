import type { Metadata, Viewport } from 'next';
import { Hind_Siliguri, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/common/ThemeProvider';

const hindSiliguri = Hind_Siliguri({
  variable: '--font-hind-siliguri',
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lalmonirhatmodelmadrasa.edu.bd'),
  title: {
    template: '%s | লালমনিরহাট মডেল মাদ্রাসা (নূরানী একাডেমি)',
    default: 'লালমনিরহাট মডেল মাদ্রাসা | Lalmonirhat Model Madrasa',
  },
  description:
    'প্লে গ্রুপ থেকে ৫ম শ্রেণি পর্যন্ত কুরআন হিফজ, সহীহ তাজবীদ ও উন্নত সাধারণ শিক্ষার সমন্বিত প্রতিষ্ঠান। সদর, লালমনিরহাট।',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export const viewport: Viewport = {
  themeColor: '#8B1E24',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${hindSiliguri.variable} ${plusJakarta.variable} font-bangla min-h-screen flex flex-col bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
