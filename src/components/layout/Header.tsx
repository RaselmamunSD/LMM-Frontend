'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Locale } from '@/types';
import { siteConfig } from '@/lib/data/site-config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileNavigation } from './MobileNavigation';
import { NoticeTicker } from './NoticeTicker';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  ChevronDown,
  Building2,
  Users,
  GraduationCap,
} from 'lucide-react';

export interface NavChildItem {
  href: string;
  label: string;
  description?: string;
  icon?: React.ElementType;
}

export interface NavLinkItem {
  href: string;
  label: string;
  children?: NavChildItem[];
}

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = React.useState(false);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    setAboutDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLinkItem[] = [
    { href: `/${locale}`, label: locale === 'bn' ? 'হোম' : 'Home' },
    {
      href: `/${locale}/about`,
      label: locale === 'bn' ? 'পরিচিতি' : 'About',
      children: [
        {
          href: `/${locale}/about`,
          label: locale === 'bn' ? 'আমাদের পরিচিতি' : 'About Madrasa',
          description: locale === 'bn' ? 'মাদ্রাসার ইতিহাস, লক্ষ্য ও দর্শন' : 'History, vision & academic mission',
          icon: Building2,
        },
        {
          href: `/${locale}/teachers`,
          label: locale === 'bn' ? 'শিক্ষকমণ্ডলী (Teachers)' : 'Teachers Directory',
          description: locale === 'bn' ? 'দক্ষ ও নিবেদিত শিক্ষকবৃন্দ' : 'Our qualified mentors & faculty',
          icon: Users,
        },
        {
          href: `/${locale}/admission`,
          label: locale === 'bn' ? 'ভর্তি তথ্য (Admission)' : 'Admission & Enrollment',
          description: locale === 'bn' ? 'ভর্তি প্রক্রিয়া ও যোগ্যতা' : 'Eligibility & online application',
          icon: GraduationCap,
        },
      ],
    },
    {
      href: `/${locale}/academic-programs`,
      label: locale === 'bn' ? 'একাডেমিক' : 'Programs',
    },
    {
      href: `/${locale}/curriculum`,
      label: locale === 'bn' ? 'পাঠ্যক্রম' : 'Curriculum',
    },
    { href: `/${locale}/facilities`, label: locale === 'bn' ? 'সুযোগ-সুবিধা' : 'Facilities' },
    { href: `/${locale}/notices`, label: locale === 'bn' ? 'নোটিশ' : 'Notices' },
    { href: `/${locale}/events`, label: locale === 'bn' ? 'ইভেন্টস' : 'Events' },
    { href: `/${locale}/gallery`, label: locale === 'bn' ? 'গ্যালারি' : 'Gallery' },
    { href: `/${locale}/contact`, label: locale === 'bn' ? 'যোগাযোগ' : 'Contact' },
    { href: `/${locale}/faq`, label: locale === 'bn' ? 'FAQ' : 'FAQ' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#050505] text-white text-xs py-1.5 px-4 hidden md:block border-b border-[#222222] transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-arabic tracking-wider text-[#C75B60] font-medium">
              بِسْمِ اللَّهِ الرَّحْمَٰনِ الرَّحِيمِ
            </span>
            <span className="hidden lg:inline text-white/40">|</span>
            <div className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#C75B60]" />
              <span>{siteConfig.location[locale]}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90">
              <Mail className="w-3.5 h-3.5 text-[#C75B60]" />
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-white/90">
              <Phone className="w-3.5 h-3.5 text-[#C75B60]" />
              <a href={`tel:${siteConfig.phone[0]}`} className="hover:underline">
                {siteConfig.phone[0]}
              </a>
            </div>
            <span className="text-white/40">|</span>
            <span className="bg-[#8B1E24] text-white font-bold px-2.5 py-0.5 rounded text-[11px] shadow-2xs">
              {locale === 'bn' ? 'স্থাপিত: ২০২৩ খ্রি.' : 'Est. 2023'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/95 dark:bg-[#161616]/95 backdrop-blur-md shadow-xs dark:shadow-black/70 border-b border-border-color py-2.5'
            : 'bg-surface dark:bg-[#161616] border-b border-border-color/80 py-3.5'
        }`}
      >
        {/* Madrasa Brand Ribbon: Black -> Deep Maroon -> Burgundy */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#050505] via-[#8B1E24] to-[#A52A2A] opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo and Madrasa Branding */}
            <Link
              href={`/${locale}`}
              prefetch={true}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none cursor-pointer"
              aria-label={siteConfig.name[locale]}
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-[#050505] via-[#8B1E24] to-[#A52A2A] shadow-xs transition-transform duration-200 group-hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/logo.jpg"
                    alt={siteConfig.name[locale]}
                    fill
                    className="object-contain p-0.5"
                    sizes="56px"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg md:text-xl font-bold text-text-primary tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {siteConfig.name[locale]}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-primary flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8B1E24] animate-pulse"></span>
                  {siteConfig.subtitle[locale]}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
              {navLinks.map((link) => {
                if (link.children && link.children.length > 0) {
                  const isAnyChildActive =
                    link.children.some(
                      (child) => pathname === child.href || pathname.startsWith(child.href + '/')
                    ) || pathname === link.href;

                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setAboutDropdownOpen((prev) => !prev)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs lg:text-[13px] font-medium transition-all duration-150 relative cursor-pointer active:scale-95 ${
                          isAnyChildActive
                            ? 'text-primary font-bold bg-[#8B1E24]/10 dark:bg-[#C75B60]/15 shadow-2xs'
                            : 'text-text-secondary hover:text-primary hover:bg-surface-alt'
                        }`}
                        aria-expanded={aboutDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            aboutDropdownOpen ? 'rotate-180 text-primary' : 'text-text-muted'
                          }`}
                        />
                        {isAnyChildActive && (
                          <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full shadow-[0_0_6px_rgba(139,30,36,0.6)]" />
                        )}
                      </button>

                      {/* Dropdown Menu Box */}
                      <div
                        className={`absolute top-full left-0 mt-1 w-64 p-2 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-[#E5E5E5] dark:border-[#2A2A2A] shadow-xl z-50 transition-all duration-200 transform origin-top-left ${
                          aboutDropdownOpen
                            ? 'opacity-100 scale-100 pointer-events-auto visible'
                            : 'opacity-0 scale-95 pointer-events-none invisible'
                        }`}
                      >
                        <div className="space-y-1">
                          {link.children.map((child) => {
                            const ChildIcon = child.icon || Building2;
                            const isChildActive = pathname === child.href;

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                prefetch={true}
                                onClick={() => setAboutDropdownOpen(false)}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 cursor-pointer ${
                                  isChildActive
                                    ? 'bg-[#8B1E24]/10 dark:bg-[#C75B60]/15 text-primary'
                                    : 'text-text-primary hover:bg-[#F7F7F7] dark:hover:bg-[#262626]'
                                }`}
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#8B1E24]/10 dark:bg-[#C75B60]/15 flex items-center justify-center text-primary dark:text-[#C75B60] shrink-0 mt-0.5">
                                  <ChildIcon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold leading-tight">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="text-[11px] text-text-muted truncate mt-0.5">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                const isActive =
                  link.href === `/${locale}`
                    ? pathname === `/${locale}`
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`px-2.5 py-1.5 rounded-lg text-xs lg:text-[13px] font-medium transition-all duration-150 relative cursor-pointer active:scale-95 ${
                      isActive
                        ? 'text-primary font-bold bg-[#8B1E24]/10 dark:bg-[#C75B60]/15 shadow-2xs'
                        : 'text-text-secondary hover:text-primary hover:bg-surface-alt'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full shadow-[0_0_6px_rgba(139,30,36,0.6)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Controls & Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Language Switcher - Hidden on mobile phones, accessible inside drawer menu */}
              <div className="hidden md:flex items-center">
                <LanguageSwitcher currentLocale={locale} />
              </div>

              {/* Theme Toggle - Hidden on mobile phones, accessible inside drawer menu */}
              <div className="hidden md:flex items-center">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden p-2 rounded-lg text-text-primary hover:bg-surface-alt border border-border-color focus:outline-none focus:ring-2 focus:ring-primary active:scale-95 transition-transform cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5 text-text-primary" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notice Bar - Continuous Smooth Ticker below Navbar */}
      <NoticeTicker locale={locale} />

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        locale={locale}
      />
    </>
  );
}
