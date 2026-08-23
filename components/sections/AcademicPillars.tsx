"use client";

import { dictionary } from "@/lib/dictionary";
import { Cpu, Languages, ShieldCheck, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from "@/components/ui/motion";

const iconMap = {
  Cpu: Cpu,
  Languages: Languages,
  ShieldCheck: ShieldCheck,
  Building2: Building2,
};

export default function AcademicPillars({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-csps-maroon/10 text-csps-maroon tracking-wide uppercase">
              {dict.features.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-csps-navy tracking-tight">
              {dict.features.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {dict.features.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Feature Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.features.items.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Cpu;
            return (
              <StaggerItem key={idx}>
                <MotionCard className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card hover:shadow-2xl hover:border-csps-maroon/40 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div className="space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-csps-navy via-csps-navyDark to-csps-maroon text-csps-gold flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-csps-navy group-hover:text-csps-maroon transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-csps-maroon group-hover:text-rose-700">
                    <span>{locale === "ar" ? "اكتشف التفاصيل" : "Explore Detail"}</span>
                    <ChevronRight className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${locale === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </div>
                </MotionCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Action Link */}
        <FadeIn direction="up" delay={0.4}>
          <div className="text-center mt-14">
            <Link
              href={`/${locale}/academics`}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-csps-navy hover:text-csps-maroon underline decoration-2 underline-offset-4 transition-colors"
            >
              <span>
                {locale === "ar"
                  ? "عرض تفاصيل الخطة الدراسية والمناهج المعتمده"
                  : "View full academic curriculum and syllabus"}
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
