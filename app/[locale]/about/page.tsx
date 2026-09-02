import { dictionary } from "@/lib/dictionary";
import { ShieldCheck, Compass, Heart, Award } from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "عن المدرسة" : "About Us",
    description: isAr 
      ? "تعتبر مدرسة الإبداع العلمي الخاصة صرحاً تعليمياً متميزاً في مدينة صلالة بمحافظة ظفار."
      : "Creative Science Private School stands as a leading educational hub in Salalah, Dhofar Governorate.",
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  return (
    <div className="space-y-16 py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-csps-maroon/10 text-csps-maroon uppercase">
          {dict.nav.about}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-csps-navy">
          {isAr ? "عن مدرسة الإبداع العلمي بصلالة" : "About Creative Science Private School"}
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto text-base leading-relaxed">
          {isAr
            ? "تعتبر مدرسة الإبداع العلمي الخاصة صرحاً تعليمياً متميزاً في مدينة صلالة بمحافظة ظفار، تهدف إلى إعداد جيل مبدع ومتمكن في مجالات العلوم والتكنولوجيا والهندسة والرياضيات (STEM) مع الالتزام بالقيم الإسلامية والأخلاقية."
            : "Creative Science Private School stands as a leading educational hub in Salalah, Dhofar Governorate, dedicated to shaping creative, STEM-fluent leaders rooted in Islamic principles and Omani cultural values."}
        </p>

        {/* Campus Tour Video */}
        <div className="mt-10 md:mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-csps-navy/10 border border-slate-200 aspect-video bg-slate-900 relative">
          <video 
            src="/videos/tour.mp4" 
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            aria-label={isAr ? "جولة في مرافق المدرسة" : "School Campus Tour"}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-csps-navy text-csps-gold flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-csps-navy">
              {isAr ? "رؤيتنا" : "Our Vision"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isAr
                ? "أن نكون المدرسة الرائدة والأولى في الابتكار العلمي والتعليم ثنائي اللغة في محافظة ظفار وسلطنة عمان."
                : "To be the premier center for scientific innovation and bilingual educational leadership in Dhofar and the Sultanate of Oman."}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-csps-maroon text-white flex items-center justify-center">
              <Heart className="w-6 h-6 text-csps-gold" />
            </div>
            <h2 className="text-2xl font-bold text-csps-navy">
              {isAr ? "رسالتنا" : "Our Mission"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isAr
                ? "تقديم بيئة تعليمية آمنة ومحفزة تستثمر في طاقات كل طالب، وتوفر مختبرات متطورة ومناهج عالمية ترتبط بالواقع."
                : "Providing a safe, inspiring learning environment that nurtures each student's potential through state-of-the-art labs and international standards."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
