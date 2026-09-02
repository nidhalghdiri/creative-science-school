import AdmissionsCTA from "@/components/sections/AdmissionsCTA";
import { dictionary } from "@/lib/dictionary";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "القبول والتسجيل" : "Admissions",
    description: isAr 
      ? "يسرنا استقبال طلبات التسجيل والقبول للعام الدراسي 2026-2027 لجميع المراحل في صلالة."
      : "We are pleased to welcome applications for Academic Year 2026-2027 across all grades in Salalah.",
  };
}

export default async function AdmissionsPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  return (
    <div className="space-y-12">
      <section className="bg-csps-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-csps-gold text-xs font-bold uppercase tracking-wider">
            Academic Year 2026-2027
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            {dict.nav.admissions}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            {dict.admissions.subtitle}
          </p>
        </div>
      </section>

      <AdmissionsCTA locale={locale} />
    </div>
  );
}
