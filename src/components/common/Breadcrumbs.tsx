import * as React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Locale } from '@/types';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale: Locale;
  className?: string;
}

export function Breadcrumbs({ items, locale, className = '' }: BreadcrumbsProps) {
  return null;
}
