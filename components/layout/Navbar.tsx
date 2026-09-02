"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { dictionary } from "@/lib/dictionary";
import { Menu, X, PhoneCall, GraduationCap } from "lucide-react";

export default function Navbar({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  const targetLocale = locale === "en" ? "ar" : "en";
  // Replace current locale prefix in pathname
  const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

  const navLinks = [
    { name: dict.nav.home, href: `/${locale}` },
    { name: dict.nav.about, href: `/${locale}/about` },
    { name: dict.nav.academics, href: `/${locale}/academics` },
    { name: dict.nav.facilities, href: `/${locale}#facilities` },
    { name: dict.nav.achievements, href: `/${locale}#achievements` },
    { name: dict.nav.admissions, href: `/${locale}/admissions` },
    { name: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Top Banner Bar */}
      <div className="bg-csps-navyDark text-white text-xs py-2 px-4 border-b border-csps-maroon/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-csps-gold font-medium">
              <GraduationCap className="w-3.5 h-3.5" />
              {dict.footer.moeLicensed}
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">
              📍 {locale === "ar" ? "عوقد الشمالية – صلالة" : "North Awqad, Salalah"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+96823138166"
              className="flex items-center gap-1 text-slate-200 hover:text-white transition"
            >
              <PhoneCall className="w-3 h-3 text-csps-gold" />
              <span>+968 23 13 81 66</span>
            </a>
            <span className="hidden md:inline text-slate-500">/</span>
            <a
              href="https://wa.me/96898066400"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition font-medium"
            >
              <span>+968 98 06 64 00</span>
            </a>
            <Link
              href={newPath}
              className="bg-white/10 hover:bg-white/20 text-csps-gold px-2.5 py-0.5 rounded font-semibold uppercase text-[11px] transition"
            >
              {dict.nav.languageToggle}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-csps-maroon/20 shadow-md group-hover:scale-105 transition-transform bg-white">
              <Image
                src="/logo.jpg"
                alt="Creative Science Private School Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-csps-navy group-hover:text-csps-maroon transition-colors">
                {locale === "ar"
                  ? "مدرسة الإبداع العلمي"
                  : "Creative Science"}
              </span>
              <span className="text-xs text-csps-maroon font-semibold tracking-wide">
                {locale === "ar"
                  ? "الخاصة – صلالة"
                  : "Private School • Salalah"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-csps-maroon transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`/${locale}/admissions`}
              className="bg-gradient-to-r from-csps-maroon to-csps-navy hover:from-csps-maroonLight hover:to-csps-navyLight text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              {dict.nav.applyNow}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href={newPath}
              className="text-xs font-bold text-csps-navy bg-slate-100 px-2.5 py-1.5 rounded-md"
            >
              {dict.nav.languageToggle}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-csps-maroon focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-csps-maroon"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href={`/${locale}/admissions`}
              onClick={() => setIsOpen(false)}
              className="block text-center bg-csps-maroon text-white text-sm font-semibold py-3 rounded-lg shadow-md"
            >
              {dict.nav.applyNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
