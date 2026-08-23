"use client";

import Link from "next/link";
import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Trophy, ArrowRight, ArrowLeft, Microscope, Cpu, ShieldCheck, Sparkles, Building2, CheckCircle2 } from "lucide-react";

export default function Hero({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-csps-navyDark via-csps-navy to-csps-navyDark text-white py-16 lg:py-24">
      {/* Background Glows & Architectural Lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-csps-maroon/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-csps-steel/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines, Motto & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* National Champions Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-csps-maroon/80 to-csps-navy border border-amber-400/40 backdrop-blur-md text-xs font-bold text-amber-300 shadow-lg shadow-csps-maroon/20">
              <Trophy className="w-4 h-4 text-csps-gold flex-shrink-0 animate-bounce" />
              <span>{dict.hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              {dict.hero.titlePrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-rose-200 block sm:inline">
                {dict.hero.titleHighlight}
              </span>
              {dict.hero.titleSuffix}
            </h1>

            {/* Official School Motto */}
            <div className="relative inline-block py-2.5 px-4 rounded-xl bg-white/10 border-s-4 border-csps-gold backdrop-blur-md">
              <p className="text-sm sm:text-base font-semibold text-amber-200 tracking-wide">
                «{dict.hero.motto}»
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {dict.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={`/${locale}/admissions`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-csps-maroon to-rose-700 hover:from-rose-700 hover:to-csps-maroon text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-csps-maroon/40 hover:shadow-csps-maroon/60 transition-all transform hover:-translate-y-0.5"
              >
                <span>{dict.hero.ctaPrimary}</span>
                <ArrowIcon className="w-5 h-5" />
              </Link>

              <Link
                href={`/${locale}#facilities`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                <Building2 className="w-4 h-4 text-csps-gold" />
                <span>{dict.hero.ctaSecondary}</span>
              </Link>

              <Link
                href={`/${locale}#achievements`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 py-2 transition"
              >
                <Trophy className="w-4 h-4" />
                <span>{dict.hero.ctaAchievements}</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800 text-slate-300 text-xs font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Microscope className="w-4 h-4 text-csps-gold flex-shrink-0" />
                <span>{dict.hero.stats.stemLabs}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{dict.hero.stats.years}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Trophy className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{dict.hero.stats.awards}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{dict.hero.stats.ratio}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Real Student Imagery & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-csps-maroon/30 shadow-2xl bg-slate-800 aspect-[4/5] group">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Creative Science Students in Salalah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-csps-navyDark via-transparent to-transparent opacity-80" />

                {/* Photo Caption / Location Overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-csps-navyDark/90 backdrop-blur-md border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {isAr ? "مدرسة الإبداع العلمي الخاصة" : "Creative Science Private School"}
                      </h4>
                      <p className="text-xs text-csps-gold font-medium">
                        📍 {isAr ? "عوقد الشمالية – صلالة، عُمان" : "North Awqad, Salalah, Oman"}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                      {isAr ? "ثنائية اللغة" : "Bilingual"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-300 pt-1 border-t border-slate-700/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isAr ? "رياض الأطفال • الحلقة الأولى • الصفوف 1-12" : "KG • Cycle 1 • Grades 1-12"}</span>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Card 1: VEX IQ Design Award */}
              <div className="absolute -top-4 -start-4 bg-white text-slate-900 rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-subtle z-20">
                <div className="w-10 h-10 rounded-xl bg-csps-maroon text-csps-gold flex items-center justify-center flex-shrink-0 shadow-md">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-csps-maroon block leading-tight">
                    {isAr ? "جائزة التصميم الهندسي" : "National Design Award"}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold">
                    VEX IQ Oman 2026 🏆
                  </span>
                </div>
              </div>

              {/* Floating Achievement Card 2: 20 Labs */}
              <div className="absolute -bottom-4 -end-4 bg-csps-navy text-white rounded-2xl p-3.5 shadow-xl border border-csps-maroon/40 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-csps-gold/20 border border-csps-gold/40 text-csps-gold flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    {isAr ? "20 معملاً ومرفقاً" : "20 Specialized Labs"}
                  </span>
                  <span className="text-[10px] text-cyan-300 font-medium">
                    VR • AI • Robotics • STEM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
