import { dictionary } from "@/lib/dictionary";
import { Cpu, Languages, ShieldCheck, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";

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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-csps-teal/10 text-csps-teal tracking-wide uppercase">
            {dict.features.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-csps-navy tracking-tight">
            {dict.features.title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {dict.features.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.features.items.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Cpu;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-csps-navy to-csps-maroon text-csps-gold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-csps-navy group-hover:text-csps-maroon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-csps-maroon">
                  <span>{locale === "ar" ? "اكتشف المزيد" : "Learn More"}</span>
                  <ChevronRight className={`w-4 h-4 transform ${locale === "ar" ? "rotate-180" : ""}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/academics`}
            className="inline-flex items-center gap-2 text-sm font-bold text-csps-navy hover:text-csps-maroon underline decoration-2 underline-offset-4"
          >
            <span>
              {locale === "ar"
                ? "عرض تفاصيل الخطة الدراسية والمناهج المعتمده"
                : "View full academic curriculum and syllabus"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
