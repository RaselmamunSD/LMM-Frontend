import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { academicPrograms } from '@/lib/data/programs';
import { noticesData } from '@/lib/data/notices';
import { eventsData } from '@/lib/data/events';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lalmonirhatmodelmadrasa.edu.bd';
  const routes: MetadataRoute.Sitemap = [];

  const pages = [
    '',
    '/about',
    '/academic-programs',
    '/curriculum',
    '/teachers',
    '/facilities',
    '/notices',
    '/events',
    '/gallery',
    '/admission',
    '/contact',
    '/faq',
  ];

  for (const locale of locales) {
    for (const page of pages) {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1.0 : page === '/admission' ? 0.9 : 0.8,
      });
    }

    // Program detail pages
    for (const prog of academicPrograms) {
      routes.push({
        url: `${baseUrl}/${locale}/academic-programs/${prog.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    // Notices detail pages
    for (const notice of noticesData) {
      routes.push({
        url: `${baseUrl}/${locale}/notices/${notice.id}`,
        lastModified: new Date(notice.publishDate),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }

    // Events detail pages
    for (const ev of eventsData) {
      routes.push({
        url: `${baseUrl}/${locale}/events/${ev.id}`,
        lastModified: new Date(ev.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return routes;
}
