"use client";

import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Trophy, Award, Star, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function AwardsShowcase({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  const mainAward = dict.awards.items[0];
  const otherAwards = dict.awards.items.slice(1);

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-slate-900 via-csps-navyDark to-slate-900 text-white relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-csps-maroon/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-xs font-bold text-amber-300 uppercase tracking-wide">
            <Trophy className="w-4 h-4 text-csps-gold animate-bounce" />
            <span>{dict.awards.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {dict.awards.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {dict.awards.subtitle}
          </p>
        </div>

        {/* Featured National VEX IQ 2026 Championship Hero Card */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-slate-800/90 via-slate-800/60 to-csps-navyDark/90 border-2 border-amber-400/40 p-6 lg:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute -top-12 -end-12 w-48 h-48 bg-csps-maroon/30 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Award Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-csps-maroon text-white font-extrabold text-xs tracking-wider shadow-md">
                  🏆 {mainAward.badge}
                </span>
                <span className="px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 font-bold text-xs border border-amber-400/30">
                  {mainAward.level}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {mainAward.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {mainAward.desc}
              </p>

              {/* Champions Info */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Users className="w-4 h-4" />
                  <span>{mainAward.students}</span>
                </div>
                <div className="text-slate-300 font-medium">
                  {mainAward.trainer}
                </div>
              </div>
            </div>

            {/* Right: High-Res Real Award Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[16/10] shadow-xl group">
                <Image
                  src={mainAward.image}
                  alt={mainAward.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 start-3 end-3 text-[11px] text-amber-200 font-semibold bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                  {isAr
                    ? "تكريم المديرية العامة للتعليم بمحافظة ظفار لفريق مدرسة الإبداع العلمي الفائز بجائزة التصميم الهندسي"
                    : "Honoring Creative Science School team by the Directorate General of Education in Dhofar"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Secondary Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherAwards.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/70 rounded-2xl p-5 border border-slate-700/80 hover:border-amber-400/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-700/60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 start-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-csps-navyDark/90 text-amber-300 border border-amber-400/30">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 text-[11px] font-semibold text-amber-300/90">
                📍 {item.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
