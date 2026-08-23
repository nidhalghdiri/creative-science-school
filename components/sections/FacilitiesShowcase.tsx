"use client";

import { useState } from "react";
import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Cpu, Microscope, FlaskConical, Monitor, Glasses, Library, Music, Palette, Trees, Sparkles, HeartPulse, Waves, Dumbbell, ShieldCheck, Building2, UserCheck, LayoutGrid, Radio } from "lucide-react";
import { FadeIn, MotionCard } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";

const iconLookup: Record<string, any> = {
  "01": Sparkles,
  "02": Glasses,
  "03": Monitor,
  "04": Cpu,
  "05": Radio,
  "06": FlaskConical,
  "07": Monitor,
  "08": LayoutGrid,
  "09": Library,
  "10": Building2,
  "11": Music,
  "12": Palette,
  "13": Trees,
  "14": Sparkles,
  "15": HeartPulse,
  "16": Waves,
  "17": Dumbbell,
  "18": ShieldCheck,
  "19": Building2,
  "20": UserCheck,
};

export default function FacilitiesShowcase({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: isAr ? "جميع المرافق الـ 20" : "All 20 Facilities" },
    { key: "stem", label: dict.facilities.categories.stem },
    { key: "academic", label: dict.facilities.categories.academic },
    { key: "sportsArts", label: dict.facilities.categories.sportsArts },
    { key: "admin", label: dict.facilities.categories.admin },
  ];

  const filteredList =
    activeCategory === "all"
      ? dict.facilities.list
      : dict.facilities.list.filter((item) => item.category === activeCategory);

  return (
    <section id="facilities" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-csps-maroon/10 text-csps-maroon uppercase tracking-wide">
              {dict.facilities.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-csps-navy tracking-tight">
              {dict.facilities.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {dict.facilities.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Animated Category Filters */}
        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-lg shadow-csps-navy/20"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFacilityTab"
                      className="absolute inset-0 bg-csps-navy rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* 20 Facilities Animated Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredList.map((item) => {
              const IconComp = iconLookup[item.id] || Microscope;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <MotionCard className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-csps-maroon/40 transition-all duration-300 flex flex-col justify-between group h-full">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-csps-maroon group-hover:text-white text-csps-maroon flex items-center justify-center transition-colors shadow-sm">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 group-hover:bg-csps-gold/20 group-hover:text-csps-gold font-mono transition-colors">
                          #{item.id}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-csps-navy group-hover:text-csps-maroon transition-colors leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                      <span>{isAr ? "صلالة، عُمان" : "Salalah Campus"}</span>
                      <span className="text-emerald-600 font-bold">✓ {isAr ? "مجهز بالكامل" : "Active"}</span>
                    </div>
                  </MotionCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Visual Lab Showcase Feature Strip */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-16 rounded-3xl bg-white p-6 lg:p-8 border border-slate-200 shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <Image
                  src="/images/chemistry-physics-lab.jpg"
                  alt="Chemistry Lab"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 start-2 text-[11px] font-bold text-white bg-slate-950/70 px-2.5 py-1 rounded-lg backdrop-blur-md">
                  {isAr ? "مختبر الكيمياء والفيزياء" : "Chemistry & Physics Lab"}
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <Image
                  src="/images/computer-robotics-lab.jpg"
                  alt="Robotics & IT Hub"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 start-2 text-[11px] font-bold text-white bg-slate-950/70 px-2.5 py-1 rounded-lg backdrop-blur-md">
                  {isAr ? "معمل الروبوت والحاسوب" : "Robotics & Computer Lab"}
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <Image
                  src="/images/smart-classrooms.jpg"
                  alt="Smart Classrooms"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 start-2 text-[11px] font-bold text-white bg-slate-950/70 px-2.5 py-1 rounded-lg backdrop-blur-md">
                  {isAr ? "الفصول الذكية التفاعلية" : "Smart Classrooms"}
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <Image
                  src="/images/sports-pool-facilities.jpg"
                  alt="Sports & Pool"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 start-2 text-[11px] font-bold text-white bg-slate-950/70 px-2.5 py-1 rounded-lg backdrop-blur-md">
                  {isAr ? "المسبح والصالة الرياضية" : "Swimming Pool & Dome"}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
