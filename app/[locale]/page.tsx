import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AcademicPillars from "@/components/sections/AcademicPillars";
import GradeLevels from "@/components/sections/GradeLevels";
import FacilitiesShowcase from "@/components/sections/FacilitiesShowcase";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";
import ContactSection from "@/components/sections/ContactSection";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <Hero locale={locale} />
      <Stats locale={locale} />
      <AcademicPillars locale={locale} />
      <GradeLevels locale={locale} />
      <FacilitiesShowcase locale={locale} />
      <AdmissionsCTA locale={locale} />
      <ContactSection locale={locale} />
    </div>
  );
}
