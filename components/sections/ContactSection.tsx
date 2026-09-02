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

          {/* Interactive Map Frame */}
          <div className="lg:col-span-7 h-full">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 relative min-h-[380px] w-full h-full min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Creative+Science+Private+School+Salalah&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={locale === "ar" ? "خريطة موقع المدرسة" : "School Location Map"}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
