"use client";

import { useState } from "react";
import { dictionary } from "@/lib/dictionary";
import { CheckCircle2, Send, Sparkles } from "lucide-react";

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
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Info & Steps */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wide">
              {dict.admissions.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-csps-navy tracking-tight">
              {dict.admissions.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {dict.admissions.subtitle}
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-bold text-csps-navy uppercase tracking-wider">
                {dict.admissions.stepsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.admissions.steps.map((st, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
                  >
                    <span className="w-8 h-8 rounded-lg bg-csps-navy text-csps-gold flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {st.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-csps-navy leading-snug">
                        {st.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-csps-gold" />
                <h3 className="text-xl font-bold text-csps-navy">
                  {dict.admissions.form.heading}
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h4 className="text-xl font-bold text-csps-navy">
                    {isAr ? "تم استلام الطلب بنجاح!" : "Application Submitted!"}
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {dict.admissions.form.successMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-csps-teal font-bold hover:underline pt-2"
                  >
                    {isAr ? "تقديم طلب آخر" : "Submit another request"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {dict.admissions.form.studentName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({ ...formData, studentName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-csps-teal focus:border-csps-teal outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {dict.admissions.form.parentName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-csps-teal focus:border-csps-teal outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {dict.admissions.form.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+968 9000 0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-csps-teal focus:border-csps-teal outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {dict.admissions.form.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-csps-teal focus:border-csps-teal outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {dict.admissions.form.grade} *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-csps-teal focus:border-csps-teal outline-none bg-white"
                      >
                        <option value="KG1">KG1 (Kindergarten 1)</option>
                        <option value="KG2">KG2 (Kindergarten 2)</option>
                        <option value="G1">Grade 1 - 6 (Primary)</option>
                        <option value="G7">Grade 7 - 9 (Preparatory)</option>
                        <option value="G10">Grade 10 - 12 (Secondary STEM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-csps-maroon to-csps-navy hover:from-csps-maroonLight hover:to-csps-navyLight text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition"
                  >
                    <span>{dict.admissions.form.submit}</span>
                    <Send className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
