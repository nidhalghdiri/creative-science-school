"use client";

import { dictionary } from "@/lib/dictionary";
import { Users, Award, BookOpen, Microscope } from "lucide-react";
import { StaggerContainer, StaggerItem, AnimatedCounter, MotionCard } from "@/components/ui/motion";

export default function Stats({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  const statItems = [
    {
      targetNumber: 950,
      suffix: "+",
      label: isAr ? "طالب وطالبة" : "Enrolled Students",
      desc: isAr ? "من مختلف المراحل التعليمية بصلالة" : "Across Kindergarten to Grade 12",
      icon: Users,
      color: "text-csps-maroon",
      bg: "bg-csps-maroon/10",
      borderColor: "hover:border-csps-maroon/40",
    },
    {
      targetNumber: 100,
      suffix: "%",
      label: isAr ? "نسبة النجاح الأكاديمي" : "Academic Success Rate",
      desc: isAr ? "في الاختبارات الوطنية والمعايير الدولية" : "In Omani National & Cambridge Standards",
      icon: Award,
      color: "text-csps-gold",
      bg: "bg-csps-gold/15",
      borderColor: "hover:border-csps-gold/50",
    },
    {
      targetNumber: 20,
      suffix: "+",
      label: isAr ? "مرفق ومختبر متخصص" : "Specialized Labs & Facilities",
      desc: isAr ? "الفيزياء، الكيمياء، الأحياء، والروبوت" : "Physics, Bio, AI & Sports Arena",
      icon: Microscope,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
      borderColor: "hover:border-emerald-500/40",
    },
    {
      targetNumber: 10,
      suffix: " : 1",
      label: isAr ? "نسبة الطلاب لكل معلم" : "Student to Teacher Ratio",
      desc: isAr ? "اهتمام فردي لكل طالب لمراعاة الفروق" : "Ensuring personalized academic guidance",
      icon: BookOpen,
      color: "text-indigo-600",
      bg: "bg-indigo-500/10",
      borderColor: "hover:border-indigo-500/40",
    },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <StaggerItem key={idx}>
                <MotionCard className={`p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 ${stat.borderColor} shadow-card transition-all duration-300`}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center flex-shrink-0 shadow-inner`}
                    >
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-csps-navy tracking-tight flex items-center">
                        <AnimatedCounter target={stat.targetNumber} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm font-bold text-slate-800 mt-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-normal">
                        {stat.desc}
                      </div>
                    </div>
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
