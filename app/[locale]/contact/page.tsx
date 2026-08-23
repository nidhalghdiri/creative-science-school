import ContactSection from "@/components/sections/ContactSection";
import { dictionary } from "@/lib/dictionary";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  return (
    <div className="space-y-12">
      <section className="bg-csps-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-csps-gold text-xs font-bold uppercase tracking-wider">
            {dict.location.tag}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            {dict.nav.contact}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            {dict.location.address}
          </p>
        </div>
      </section>

      <ContactSection locale={locale} />
    </div>
  );
}
