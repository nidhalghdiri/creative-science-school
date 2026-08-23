"use client";

import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Sparkles, Calendar, ArrowUpRight } from "lucide-react";

export default function ActivitiesGallery({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  return (
    <section className="py-20 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold bg-csps-gold/20 text-csps-navy uppercase tracking-wide">
            {dict.activities.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-csps-navy tracking-tight">
            {dict.activities.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {dict.activities.subtitle}
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.activities.items.map((act, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[4/3] bg-slate-800 overflow-hidden">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-csps-navy group-hover:text-csps-maroon transition-colors leading-snug">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {act.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-csps-maroon">
                  <span>{isAr ? "فعاليات مدرسية متميزة" : "Student Experience"}</span>
                  <Sparkles className="w-4 h-4 text-csps-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
