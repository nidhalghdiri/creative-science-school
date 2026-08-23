import { dictionary } from "@/lib/dictionary";
import { Users, Award, BookOpen, Microscope } from "lucide-react";

export default function Stats({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  const statItems = [
    {
      value: "950+",
      label: isAr ? "طالب وطالبة" : "Enrolled Students",
      desc: isAr ? "من مختلف المراحل التعليمية" : "Across Kindergarten to Grade 12",
      icon: Users,
      color: "text-csps-teal",
      bg: "bg-csps-teal/10",
    },
    {
      value: "100%",
      label: isAr ? "نسبة النجاح الأكاديمي" : "Academic Success Rate",
      desc: isAr ? "في الاختبارات الوطنية والعتاد الأكاديمي" : "In Omani National & Cambridge Standards",
      icon: Award,
      color: "text-csps-gold",
      bg: "bg-csps-gold/10",
    },
    {
      value: "6+",
      label: isAr ? "مختبرات متخصصة" : "Specialized Science Labs",
      desc: isAr ? "الفيزياء، الكيمياء، الأحياء، والريبوت" : "Physics, Chemistry, Bio & AI Robotics",
      icon: Microscope,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
    },
    {
      value: "1:10",
      label: isAr ? "نسبة المعلمين للطلاب" : "Teacher to Student Ratio",
      desc: isAr ? "اهتمام فردي لكل طالب لمراعاة الفروق" : "Ensuring personalized academic guidance",
      icon: BookOpen,
      color: "text-indigo-600",
      bg: "bg-indigo-500/10",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center flex-shrink-0`}
                >
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-csps-navy tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
