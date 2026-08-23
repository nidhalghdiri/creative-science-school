import { dictionary } from "@/lib/dictionary";
import { Cpu, Microscope, Trophy, BookOpen } from "lucide-react";

export default function FacilitiesShowcase({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  const facilityIcons = [Cpu, Microscope, Trophy, BookOpen];

  return (
    <section id="facilities" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-csps-teal/20 text-csps-teal tracking-wide uppercase">
            {dict.facilities.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {dict.facilities.title}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {dict.facilities.subtitle}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.facilities.items.map((item, idx) => {
            const Icon = facilityIcons[idx] || Cpu;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-csps-gold/60 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-csps-teal/20 border border-csps-teal/40 flex items-center justify-center text-csps-gold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
