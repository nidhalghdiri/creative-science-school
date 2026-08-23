"use client";

import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Award, ShieldCheck, HeartHandshake, Star, UserCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from "@/components/ui/motion";

export default function LeadershipSection({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  const iconList = [Award, HeartHandshake, ShieldCheck, UserCheck, Star];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-csps-maroon/10 text-csps-maroon uppercase tracking-wide">
              {dict.leadership.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-csps-navy tracking-tight">
              {dict.leadership.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {dict.leadership.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Leadership Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {dict.leadership.members.slice(0, 3).map((leader, idx) => {
            const IconComp = iconList[idx % iconList.length];
            return (
              <StaggerItem key={idx}>
                <MotionCard className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-csps-maroon/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-slate-200 shadow-md">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 start-3 end-3 flex justify-between items-end text-white">
                        <div>
                          <p className="text-xs font-bold text-csps-gold uppercase tracking-wider">{leader.role}</p>
                          <h3 className="text-lg font-extrabold leading-tight text-white">{leader.name}</h3>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-csps-maroon text-white flex items-center justify-center shadow">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed font-normal italic">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>{isAr ? "مجلس الإدارة والقيادة" : "Executive Board"}</span>
                    <span className="text-csps-maroon font-bold">صلالة، عمان</span>
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
