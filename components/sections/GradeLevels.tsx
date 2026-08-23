"use client";

import { dictionary } from "@/lib/dictionary";
import { Sparkles, BookOpen, GraduationCap, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from "@/components/ui/motion";

export default function GradeLevels({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const levelIcons = [Sparkles, BookOpen, GraduationCap];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-csps-gold/20 text-csps-navy tracking-wide uppercase">
              {dict.academics.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-csps-navy tracking-tight">
              {dict.academics.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {dict.academics.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Level Cards */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.academics.levels.map((lvl, idx) => {
            const Icon = levelIcons[idx] || BookOpen;
            return (
              <StaggerItem key={idx}>
                <MotionCard className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-csps-maroon/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-csps-navy text-white shadow-sm">
                        {lvl.badge}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-csps-maroon/10 text-csps-maroon flex items-center justify-center group-hover:bg-csps-maroon group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="text-xs font-bold text-csps-maroon uppercase tracking-wider block">
                      {lvl.stage}
                    </span>

                    <h3 className="text-2xl font-bold text-csps-navy group-hover:text-csps-maroon transition-colors">
                      {lvl.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <Link
                      href={`/${locale}/academics`}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-csps-navy group-hover:text-csps-maroon transition-colors"
                    >
                      <span>{isAr ? "تفاصيل الخطة الدراسية" : "Grade Syllabus"}</span>
                      <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </MotionCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
