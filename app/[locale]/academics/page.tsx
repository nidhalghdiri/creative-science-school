import GradeLevels from "@/components/sections/GradeLevels";
import FacilitiesShowcase from "@/components/sections/FacilitiesShowcase";
import { dictionary } from "@/lib/dictionary";
import { Microscope, Code, Binary, Cpu } from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "المناهج والمسارات الأكاديمية" : "Academics & Curriculum",
    description: isAr 
      ? "الجمع بين صرامة معايير علوم وتكنولوجيا كامبريدج والقيم التربوية العمانية الأصيلة."
      : "Combining Cambridge STEM standards with Omani national educational heritage.",
  };
}

export default async function AcademicsPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  return (
    <div className="space-y-12">
      {/* Banner */}
      <section className="bg-csps-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-csps-gold text-xs font-bold uppercase tracking-wider">
            {isAr ? "المنهج والمسارات الأكاديمية" : "Curriculum & Programs"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            {dict.nav.academics}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            {isAr
              ? "الجمع بين صرامة معايير علوم وتكنولوجيا كامبريدج والقيم التربوية العمانية الأصيلة."
              : "Combining Cambridge STEM standards with Omani national educational heritage."}
          </p>
        </div>
      </section>

      {/* STEM Specializations */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Microscope className="w-8 h-8 text-csps-maroon mb-3" />
              <h3 className="font-bold text-csps-navy text-lg mb-1">
                {isAr ? "المختبرات العلمية" : "Applied Sciences"}
              </h3>
              <p className="text-xs text-slate-600">
                {isAr ? "تطبيقات عملية في الفيزياء الكيمياء والأحياء" : "Hands-on physics, chemistry & bio experiments"}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Cpu className="w-8 h-8 text-csps-gold mb-3" />
              <h3 className="font-bold text-csps-navy text-lg mb-1">
                {isAr ? "الروبوتات والأتمتة" : "Robotics & Automation"}
              </h3>
              <p className="text-xs text-slate-600">
                {isAr ? "بناء وبرمجة الروبوتات من مرحلة ابتدائية" : "Designing & programming Arduino/LEGO bots"}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Code className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-csps-navy text-lg mb-1">
                {isAr ? "البرمجة والذكاء الاصطناعي" : "AI & Coding"}
              </h3>
              <p className="text-xs text-slate-600">
                {isAr ? "تعلّم بلغات Python و Scratch الحدیثة" : "Python, Web & Scratch computational thinking"}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Binary className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-bold text-csps-navy text-lg mb-1">
                {isAr ? "الرياضيات التطبيقية" : "Applied Math"}
              </h3>
              <p className="text-xs text-slate-600">
                {isAr ? "تعزيز قدرات التفكير والتحليل المنطقي" : "Advanced analytics and logic problem solving"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <GradeLevels locale={locale} />
      <FacilitiesShowcase locale={locale} />
    </div>
  );
}
