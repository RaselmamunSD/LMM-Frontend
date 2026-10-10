'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`w-9 h-9 rounded-full flex items-center justify-center border border-border-color bg-surface text-text-secondary ${className}`}
      >
        <span className="w-4 h-4 rounded-full bg-neutral-300 animate-pulse" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative inline-flex items-center justify-center gap-1.5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer active:scale-95 ${
        showLabel ? 'px-3 py-1.5 rounded-full text-xs font-semibold' : 'w-9 h-9 rounded-full'
      } ${
        isDark
          ? 'bg-[#1C1C1C] border border-[#333333] text-[#F5F5F5] hover:border-[#C75B60] hover:text-[#C75B60] shadow-sm'
          : 'bg-surface border border-border-color text-primary hover:bg-surface-alt shadow-2xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'লাইট মোড (Light Mode)' : 'ডার্ক মোড (Dark Mode)'}
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-[#C75B60] transition-transform duration-300 rotate-0 hover:rotate-90" />
          {showLabel && <span className="text-[#F5F5F5]">Light</span>}
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-primary transition-transform duration-300 -rotate-12 hover:rotate-0" />
          {showLabel && <span>Dark</span>}
        </>
      )}
    </button>
  );
}
