"use client";

import Link from "next/link";
import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Sparkles, ArrowRight, ArrowLeft, ShieldCheck, Microscope, Cpu, Award, Play } from "lucide-react";
import { FadeIn, FloatElement, MotionCard } from "@/components/ui/motion";
import { motion } from "framer-motion";

export default function Hero({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-csps-navyDark to-slate-900 text-white py-20 lg:py-28">
      {/* Dynamic Animated Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-csps-maroon/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-csps-gold/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* Animated Badge */}
            <FadeIn direction="down" delay={0.1}>
              <FloatElement duration={5} distance={5} className="inline-block">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold text-csps-gold shadow-lg">
                  <Sparkles className="w-4 h-4 text-csps-gold animate-pulse" />
                  <span>{dict.hero.badge}</span>
                </div>
              </FloatElement>
            </FadeIn>

            {/* Main Title */}
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] text-white">
                {dict.hero.titlePrefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-csps-gold via-amber-300 to-rose-300">
                  {dict.hero.titleHighlight}
                </span>
                {dict.hero.titleSuffix}
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
                {dict.hero.subtitle}
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href={`/${locale}/admissions`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-csps-maroon to-rose-700 hover:from-rose-800 hover:to-csps-maroon text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-csps-maroon/30 hover:shadow-csps-maroon/50 transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  <span>{dict.hero.ctaPrimary}</span>
                  <ArrowIcon className="w-5 h-5" />
                </Link>

                <Link
                  href={`/${locale}/about`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl backdrop-blur-md transition-all hover:-translate-y-1"
                >
                  <span>{dict.hero.ctaSecondary}</span>
                </Link>
              </div>
            </FadeIn>

            {/* Quick Badges */}
            <FadeIn direction="up" delay={0.5}>
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 text-slate-300 text-xs font-semibold">
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
                  <span>{dict.hero.stats.awards}</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>MOE Licensed</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Hero Visual Card with Motion & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" delay={0.3}>
              <MotionCard className="relative mx-auto max-w-md rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-xl space-y-6 overflow-hidden">
                {/* Floating Decorative Badge */}
                <FloatElement duration={6} distance={6} className="absolute -top-3 -end-3 z-20">
                  <div className="bg-csps-maroon text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-lg border border-rose-400/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-csps-gold" />
                    <span>{isAr ? "فرع ظفار الرئيسي" : "Dhofar Flagship"}</span>
                  </div>
                </FloatElement>

                {/* Campus Image Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-700/60 shadow-lg group">
                  <Image
                    src="/images/hero-students.jpg"
                    alt="Creative Science Private School Students"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 start-3 end-3 flex justify-between items-center text-white">
                    <div>
                      <p className="text-xs font-bold">{isAr ? "مدرسة العلوم الإبداعية" : "Creative Science School"}</p>
                      <p className="text-[10px] text-csps-gold font-medium">{isAr ? "صلالة - سلطنة عمان" : "Salalah, Sultanate of Oman"}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 text-white fill-white ms-0.5" />
                    </div>
                  </div>
                </div>

                {/* Grid of Learning Pillars */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-csps-maroon/50 transition">
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      {isAr ? "الروبوتات" : "Robotics"}
                    </span>
                    <p className="text-xs font-bold text-white">VEX & Lego AI</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-csps-maroon/50 transition">
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      {isAr ? "المنهج" : "Curriculum"}
                    </span>
                    <p className="text-xs font-bold text-white">Cambridge & MOE</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-csps-maroon/50 transition">
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      {isAr ? "البرمجة" : "Informatics"}
                    </span>
                    <p className="text-xs font-bold text-white">Python & Scratch</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-csps-maroon/50 transition">
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      {isAr ? "المراحل" : "Grades"}
                    </span>
                    <p className="text-xs font-bold text-white">KG1 to Grade 12</p>
                  </div>
                </div>

                {/* Callout box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-csps-navy to-csps-maroon/40 border border-csps-maroon/40 text-xs text-slate-200 flex items-center justify-between shadow-lg">
                  <div>
                    <p className="font-bold text-white mb-0.5">
                      {isAr ? "التسجيل للعام 2026-2027" : "Enrollment 2026-2027"}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {isAr ? "المقاعد محدودة لجميع المراحل" : "Limited seats for all grades"}
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/admissions`}
                    className="bg-csps-gold hover:bg-amber-400 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg transition shadow"
                  >
                    {isAr ? "قدّم الآن" : "Apply"}
                  </Link>
                </div>
              </MotionCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
