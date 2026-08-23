"use client";

import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Quote, Sparkles, Award } from "lucide-react";

export default function LeadershipSection({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold bg-csps-navy/10 text-csps-navy uppercase tracking-wide">
            {dict.leadership.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-csps-navy tracking-tight">
            {dict.leadership.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {dict.leadership.subtitle}
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.leadership.members.map((leader, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 shadow-card hover:shadow-2xl hover:border-csps-maroon/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Portrait Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-csps-maroon/30 shadow-md bg-slate-200 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-csps-navy leading-snug group-hover:text-csps-maroon transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-csps-maroon font-semibold mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="relative pt-2">
                  <Quote className="w-5 h-5 text-csps-gold/60 mb-2 rotate-180" />
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    «{leader.quote}»
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>{isAr ? "مدرسة الإبداع العلمي" : "Creative Science School"}</span>
                <span className="text-csps-gold font-bold">★ {isAr ? "القيادة التربوية" : "Leadership"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
