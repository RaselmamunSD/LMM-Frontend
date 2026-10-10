'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Locale } from '@/types';
import { siteConfig } from '@/lib/data/site-config';
import { X, Phone, Mail, MapPin, ChevronDown, Building2 } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from '../common/ThemeToggle';
import type { NavLinkItem } from './Header';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLinkItem[];
  locale: Locale;
}

export function MobileNavigation({
  isOpen,
  onClose,
  links,
  locale,
}: MobileNavigationProps) {
  const pathname = usePathname();

  const [aboutExpanded, setAboutExpanded] = React.useState(true);

  // Close drawer on path change or Escape key
  React.useEffect(() => {
    onClose();
  }, [pathname]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 xl:hidden transition-all duration-200 ${
        isOpen ? 'pointer-events-auto opacity-100 visible' : 'pointer-events-none opacity-0 invisible'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200 cursor-pointer ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-surface dark:bg-[#1C1C1C] shadow-2xl flex flex-col z-10 border-l border-border-color dark:border-[#2A2A2A] transform transition-transform duration-200 ease-out will-change-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 flex items-center justify-between border-b border-border-color dark:border-[#2A2A2A]">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white border border-[#8B1E24]/30">
              <Image
                src="/images/logo.jpg"
                alt="LMM"
                fill
                sizes="36px"
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <div className="font-bold text-sm text-text-primary">
                {siteConfig.shortName[locale]}
              </div>
              <div className="text-[10px] text-primary font-medium">
                {locale === 'bn' ? 'নূরানী একাডেমি' : 'Nurani Academy'}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-alt dark:hover:bg-[#262626] border border-border-color dark:border-[#2A2A2A] focus:outline-none cursor-pointer active:scale-95 transition-transform"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Language & Theme Controls inside drawer */}
        <div className="px-4 py-3 bg-surface-alt/70 dark:bg-[#161616] flex items-center justify-between border-b border-border-color dark:border-[#2A2A2A]">
          <span className="text-xs font-medium text-text-secondary">
            {locale === 'bn' ? 'ভাষা ও থিম' : 'Language & Theme'}
          </span>
          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLocale={locale} onSelect={onClose} />
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation Links Scrollable Area */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {links.map((link) => {
            if (link.children && link.children.length > 0) {
              const isAnyChildActive =
                link.children.some(
                  (child) => pathname === child.href || pathname.startsWith(child.href + '/')
                ) || pathname === link.href;

              return (
                <div key={link.href} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setAboutExpanded((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer active:scale-98 ${
                      isAnyChildActive
                        ? 'bg-[#8B1E24]/10 dark:bg-[#C75B60]/15 text-primary font-bold'
                        : 'text-text-primary hover:bg-surface-alt dark:hover:bg-[#262626]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        aboutExpanded ? 'rotate-180 text-primary' : 'text-text-muted'
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  {aboutExpanded && (
                    <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-[#8B1E24]/20 dark:border-[#C75B60]/30 ml-3">
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        const ChildIcon = child.icon || Building2;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            prefetch={true}
                            onClick={onClose}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer active:scale-98 ${
                              isChildActive
                                ? 'bg-[#8B1E24] text-white font-semibold shadow-xs'
                                : 'text-text-secondary hover:text-text-primary hover:bg-surface-alt dark:hover:bg-[#262626]'
                            }`}
                          >
                            <ChildIcon className="w-3.5 h-3.5 shrink-0" />
                            <span>{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
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
                onClick={onClose}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer active:scale-98 ${
                  isActive
                    ? 'bg-[#8B1E24] text-white font-semibold shadow-xs'
                    : 'text-text-primary hover:bg-surface-alt dark:hover:bg-[#262626]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer with Quick Contact */}
        <div className="p-4 border-t border-border-color dark:border-[#2A2A2A] bg-surface-alt/50 dark:bg-[#161616] space-y-2">
          <div className="text-[11px] text-text-muted space-y-1 pt-1">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>{siteConfig.phone[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span className="truncate">{siteConfig.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>{siteConfig.location[locale]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
