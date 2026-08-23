import { dictionary } from "@/lib/dictionary";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-csps-maroon/10 text-csps-maroon tracking-wide uppercase">
              {dict.location.tag}
            </span>
            <h2 className="text-3xl font-extrabold text-csps-navy">
              {dict.location.title}
            </h2>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <MapPin className="w-5 h-5 text-csps-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Address</h4>
                  <p className="text-sm font-semibold text-csps-navy mt-0.5">{dict.location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Phone className="w-5 h-5 text-csps-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Phone & Hotline</h4>
                  <p className="text-sm font-semibold text-csps-navy mt-0.5">{dict.location.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Mail className="w-5 h-5 text-csps-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Email Enquiries</h4>
                  <p className="text-sm font-semibold text-csps-navy mt-0.5">{dict.location.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Clock className="w-5 h-5 text-csps-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Office Working Hours</h4>
                  <p className="text-sm font-semibold text-csps-navy mt-0.5">{dict.location.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual Placeholder / Salalah Campus Map Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 relative min-h-[380px] flex flex-col justify-between p-8 text-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-csps-navy via-slate-900 to-csps-maroon/40 opacity-90" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-csps-gold/20 text-csps-gold text-xs font-bold border border-csps-gold/30">
                  <span>📍 Salalah, Dhofar Governorate</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {locale === "ar" ? "حرم مدرسة الإبداع العلمي بصلالة" : "Creative Science Salalah Campus"}
                </h3>
                <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                  {locale === "ar"
                    ? "موقع متميز يسهل الوصول إليه، مجهز بأحدث معايير السلامة والأمان والأتوبيسات المدرسية المكيّفة لجميع أنحاء مدينة صلالة وضواحيها."
                    : "Conveniently accessible campus equipped with modern security standards and air-conditioned school transportation covering all regions of Salalah."}
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-700/80 flex flex-wrap gap-4 items-center justify-between text-xs font-semibold text-slate-300">
                <span>🚌 School Bus Coverage Across Salalah</span>
                <span>🔒 24/7 Campus Security & Surveillance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
