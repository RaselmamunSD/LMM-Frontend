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
  applicationName: 'লালমনিরহাট মডেল মাদ্রাসা',
  authors: [{ name: 'লালমনিরহাট মডেল মাদ্রাসা' }],
  creator: 'লালমনিরহাট মডেল মাদ্রাসা',
  publisher: 'লালমনিরহাট মডেল মাদ্রাসা',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/logo.jpg', type: 'image/jpeg', sizes: '640x640' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/logo.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: ['en_US'],
    url: 'https://lalmonirhatmodelmadrasa.edu.bd',
    siteName: 'লালমনিরহাট মডেল মাদ্রাসা (নূরানী একাডেমি)',
    title: 'লালমনিরহাট মডেল মাদ্রাসা | Lalmonirhat Model Madrasa',
    description:
      'প্লে গ্রুপ থেকে ৫ম শ্রেণি পর্যন্ত কুরআন হিফজ, সহীহ তাজবীদ ও উন্নত সাধারণ শিক্ষার সমন্বিত দ্বীনি শিক্ষা প্রতিষ্ঠান। সদর, লালমনিরহাট।',
    images: [
      {
        url: '/images/logo.jpg',
        width: 640,
        height: 640,
        alt: 'লালমনিরহাট মডেল মাদ্রাসা লোগো',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'লালমনিরহাট মডেল মাদ্রাসা (নূরানী একাডেমি)',
    description:
      'কুরআনের আলো, নৈতিক চরিত্র ও যুগোপযোগী আধুনিক শিক্ষার সমন্বিত প্রতিষ্ঠান। সদর, লালমনিরহাট।',
    images: ['/images/logo.jpg'],
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
