"use client";

import { useState } from "react";
import { dictionary } from "@/lib/dictionary";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from "@/components/ui/motion";
import { motion } from "framer-motion";

export default function AdmissionsCTA({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "KG1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Info & Steps */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="up">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                {dict.admissions.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-csps-navy tracking-tight mt-2">
                {dict.admissions.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                {dict.admissions.subtitle}
              </p>
            </FadeIn>

            <div className="space-y-4 pt-4">
              <FadeIn direction="up" delay={0.2}>
                <h3 className="text-xs font-extrabold text-csps-navy uppercase tracking-wider">
                  {dict.admissions.stepsTitle}
                </h3>
              </FadeIn>

              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.admissions.steps.map((st, idx) => (
                  <StaggerItem key={idx}>
                    <MotionCard className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-card flex items-start gap-3.5 h-full">
                      <span className="w-9 h-9 rounded-xl bg-csps-navy text-csps-gold flex items-center justify-center font-black text-xs flex-shrink-0 shadow-inner">
                        {st.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-csps-navy leading-snug">
                          {st.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 leading-normal">{st.desc}</p>
                      </div>
                    </MotionCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-6">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-csps-gold animate-spin-slow" />
                  <h3 className="text-xl font-extrabold text-csps-navy">
                    {dict.admissions.form.heading}
                  </h3>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                    <h4 className="text-2xl font-bold text-csps-navy">
                      {isAr ? "تم استلام الطلب بنجاح!" : "Application Submitted!"}
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      {dict.admissions.form.successMsg}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-csps-maroon font-bold hover:underline pt-2"
                    >
                      {isAr ? "تقديم طلب آخر" : "Submit another request"}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {dict.admissions.form.studentName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-csps-maroon focus:border-csps-maroon outline-none transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {dict.admissions.form.parentName} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) =>
                            setFormData({ ...formData, parentName: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-csps-maroon focus:border-csps-maroon outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {dict.admissions.form.phone} *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+968 98 06 64 00"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-csps-maroon focus:border-csps-maroon outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {dict.admissions.form.email} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-csps-maroon focus:border-csps-maroon outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {dict.admissions.form.grade} *
                        </label>
                        <select
                          value={formData.grade}
                          onChange={(e) =>
                            setFormData({ ...formData, grade: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-csps-maroon focus:border-csps-maroon outline-none bg-white transition"
                        >
                          <option value="KG1">KG1 (Kindergarten 1)</option>
                          <option value="KG2">KG2 (Kindergarten 2)</option>
                          <option value="G1">Grade 1 - 6 (Cycle 1 Primary)</option>
                          <option value="G7">Grade 7 - 9 (Preparatory)</option>
                          <option value="G10">Grade 10 - 12 (Secondary STEM)</option>
                        </select>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      type="submit"
                      className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-csps-maroon to-csps-navy hover:from-rose-800 hover:to-csps-navyDark text-white font-extrabold py-4 px-6 rounded-xl shadow-lg transition"
                    >
                      <span>{dict.admissions.form.submit}</span>
                      <Send className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
