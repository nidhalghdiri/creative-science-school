"use client";

import Link from "next/link";
import { dictionary } from "@/lib/dictionary";
import { Sparkles, ArrowRight, ArrowLeft, ShieldCheck, Microscope, Cpu, Award } from "lucide-react";

export default function Hero({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-csps-navyDark via-csps-navy to-csps-navyDark text-white py-20 lg:py-28">
      {/* Background Glows & Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-csps-maroon/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-csps-steel/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-csps-maroon/30 backdrop-blur-md text-xs font-semibold text-csps-gold shadow-inner">
              <Sparkles className="w-4 h-4 text-csps-gold" />
              <span>{dict.hero.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {dict.hero.titlePrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-csps-gold to-rose-300">
                {dict.hero.titleHighlight}
              </span>
              {dict.hero.titleSuffix}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {dict.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={`/${locale}/admissions`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-csps-maroon to-csps-maroonLight hover:from-csps-maroonLight hover:to-csps-maroon text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-csps-maroon/30 hover:shadow-csps-maroon/50 transition-all transform hover:-translate-y-0.5"
              >
                <span>{dict.hero.ctaPrimary}</span>
                <ArrowIcon className="w-5 h-5" />
              </Link>

              <Link
                href={`/${locale}/about`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md transition-all"
              >
                <span>{dict.hero.ctaSecondary}</span>
              </Link>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800 text-slate-300 text-xs font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Microscope className="w-4 h-4 text-csps-gold" />
                <span>{dict.hero.stats.stemLabs}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>{dict.hero.stats.ratio}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{dict.hero.stats.passRate}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Ministry Licensed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Decorative Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/60 p-6 shadow-2xl backdrop-blur-xl space-y-6">
              {/* Top Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {isAr ? "مركز العلوم والإبداع" : "STEM Innovation Lab"}
                  </h3>
                  <p className="text-xs text-csps-gold font-medium">
                    {isAr ? "فرع صلالة، عمان" : "Salalah Campus, Oman"}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-csps-teal/20 border border-csps-teal/40 flex items-center justify-center text-csps-gold">
                  <Microscope className="w-5 h-5" />
                </div>
              </div>

              {/* Grid of Learning Pillars inside visual card */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-csps-teal/50 transition">
                  <span className="text-xs text-slate-400 block mb-1">
                    {isAr ? "الروبوتات" : "Robotics"}
                  </span>
                  <p className="text-sm font-semibold text-white">LEGO & Arduino</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-csps-teal/50 transition">
                  <span className="text-xs text-slate-400 block mb-1">
                    {isAr ? "اللغات" : "Curriculum"}
                  </span>
                  <p className="text-sm font-semibold text-white">Cambridge & MOE</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-csps-teal/50 transition">
                  <span className="text-xs text-slate-400 block mb-1">
                    {isAr ? "الذكاء الاصطناعي" : "AI & Coding"}
                  </span>
                  <p className="text-sm font-semibold text-white">Python & Scratch</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-csps-teal/50 transition">
                  <span className="text-xs text-slate-400 block mb-1">
                    {isAr ? "المراحل" : "Grades"}
                  </span>
                  <p className="text-sm font-semibold text-white">KG1 to Grade 12</p>
                </div>
              </div>

              {/* Callout box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-csps-navy to-csps-teal/40 border border-csps-teal/30 text-xs text-slate-200 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white mb-0.5">
                    {isAr ? "التسجيل للعام 2026-2027" : "Enrollment Open 2026-2027"}
                  </p>
                  <p className="text-slate-300">
                    {isAr ? "المقاعد محدودة للمرحلة الأولى" : "Limited seats for Early Bird"}
                  </p>
                </div>
                <Link
                  href={`/${locale}/admissions`}
                  className="bg-csps-gold hover:bg-amber-500 text-slate-900 font-bold px-3 py-1.5 rounded-md transition"
                >
                  {isAr ? "قدّم الآن" : "Apply"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
