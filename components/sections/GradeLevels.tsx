import { dictionary } from "@/lib/dictionary";
import { Sparkles, BookOpen, GraduationCap, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GradeLevels({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const levelIcons = [Sparkles, BookOpen, GraduationCap];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-csps-gold/15 text-csps-gold font-semibold tracking-wide uppercase">
            {dict.academics.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-csps-navy tracking-tight">
            {dict.academics.title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {dict.academics.subtitle}
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.academics.levels.map((lvl, idx) => {
            const Icon = levelIcons[idx] || BookOpen;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-csps-teal/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-csps-navy text-white">
                      {lvl.badge}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-csps-maroon/10 text-csps-maroon flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-bold text-csps-maroon uppercase tracking-wider block">
                    {lvl.stage}
                  </span>

                  <h3 className="text-xl font-bold text-csps-navy">
                    {lvl.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {lvl.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <Link
                    href={`/${locale}/academics`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-csps-navy hover:text-csps-maroon transition-colors"
                  >
                    <span>{isAr ? "معلومات المرحلة" : "Grade Syllabus"}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
