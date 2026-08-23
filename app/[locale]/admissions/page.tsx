import AdmissionsCTA from "@/components/sections/AdmissionsCTA";
import { dictionary } from "@/lib/dictionary";

type PageProps = {
  params: Promise<{ locale: string }>;
};

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
