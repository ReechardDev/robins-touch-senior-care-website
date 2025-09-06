'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-block h-7 w-7 rounded-xl bg-emerald-600" aria-hidden />
          <span className="text-base md:text-lg font-semibold text-slate-900">Robin’s Touch Senior Care</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative px-3 py-2 text-sm font-medium rounded-md transition",
                isActive(item.href)
                  ? "text-emerald-700"
                  : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/50"
              ].join(' ')}
            >
              {item.label}
              {/* active underline */}
              {isActive(item.href) && (
                <span className="pointer-events-none absolute inset-x-3 -bottom-[2px] h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-emerald-200 text-slate-700 hover:bg-emerald-50/60"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-2 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={[
                  "px-3 py-3 text-sm font-medium rounded-md",
                  isActive(item.href)
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
