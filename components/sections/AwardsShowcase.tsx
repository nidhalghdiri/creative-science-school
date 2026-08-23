"use client";

import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Trophy, Award, Sparkles, Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from "@/components/ui/motion";

export default function AwardsShowcase({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  const iconList = [Trophy, Award, Star, Sparkles, Award];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 end-0 w-96 h-96 bg-csps-maroon/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-csps-gold/20 text-csps-gold border border-csps-gold/30">
              <Sparkles className="w-4 h-4 text-csps-gold" />
              <span>{dict.awards.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {dict.awards.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {dict.awards.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Awards Cards Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.awards.items.map((item, idx) => {
            const IconComp = iconList[idx % iconList.length];
            return (
              <StaggerItem key={idx}>
                <MotionCard className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700/80 hover:border-csps-gold/60 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-700">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <span className="absolute top-3 start-3 text-[11px] font-extrabold text-slate-950 bg-csps-gold px-3 py-1 rounded-full shadow">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 font-mono">{item.level}</span>
                      <div className="w-8 h-8 rounded-lg bg-csps-maroon/40 text-csps-gold flex items-center justify-center border border-csps-maroon/60">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-csps-gold transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-700/60 text-[11px] font-semibold text-slate-400">
                    <span>{isAr ? "بطولات ومسابقات سلطنة عُمان" : "Oman National Competitions"}</span>
                  </div>
                </MotionCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
