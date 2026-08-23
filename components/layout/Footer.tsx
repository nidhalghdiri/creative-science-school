import Link from "next/link";
import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from "lucide-react";

export default function Footer({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  return (
    <footer className="bg-csps-navyDark text-slate-300 pt-16 pb-8 border-t border-csps-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Info */}
            <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-csps-maroon/40 bg-white flex-shrink-0 shadow-md">
                <Image
                  src="/logo.jpg"
                  alt="Creative Science Private School"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-bold text-white text-lg block leading-tight">
                  {locale === "ar" ? "مدرسة الإبداع العلمي" : "Creative Science"}
                </span>
                <span className="text-xs text-csps-gold font-medium">
                  {locale === "ar" ? "الخاصة (ثنائية اللغة) – صلالة" : "Private School (Bilingual) • Salalah"}
                </span>
              </div>
            </div>
            <p className="text-xs text-amber-200/90 font-medium italic border-r-2 border-csps-gold pr-3 pl-3">
              «{dict.footer.slogan}»
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {dict.footer.desc}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 p-2.5 rounded-md">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>{dict.footer.moeLicensed}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 border-b border-slate-700 pb-2">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-csps-gold transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/academics`} className="hover:text-csps-gold transition-colors">
                  {dict.nav.academics}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#facilities`} className="hover:text-csps-gold transition-colors">
                  {dict.nav.facilities}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#achievements`} className="hover:text-csps-gold transition-colors">
                  {dict.nav.achievements}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/admissions`} className="hover:text-csps-gold transition-colors">
                  {dict.nav.admissions}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-csps-gold transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Stages & Labs */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 border-b border-slate-700 pb-2">
              {locale === "ar" ? "المراحل والتجهيزات" : "Programs & 20 Labs"}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>{dict.academics.levels[0].stage}</li>
              <li>{dict.academics.levels[1].stage}</li>
              <li>{dict.academics.levels[2].stage}</li>
              <li className="pt-2 text-xs text-csps-gold font-medium">
                {locale === "ar" ? "🏆 جائزة التصميم الهندسي بالسلطنة 2026" : "🏆 VEX IQ National Design Award 2026"}
              </li>
              <li className="text-xs text-cyan-300 font-medium">
                {locale === "ar" ? "🔬 20 معملاً ومرفقاً تخصصياً" : "🔬 20 Specialized Scientific Labs"}
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 border-b border-slate-700 pb-2">
              {locale === "ar" ? "معلومات التواصل والحرم" : "Salalah Campus"}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-csps-gold flex-shrink-0 mt-1" />
                <span>{dict.location.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-csps-gold flex-shrink-0" />
                <a href="tel:+96823138166" className="hover:text-white transition">
                  {dict.location.phone} / {dict.location.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-csps-gold flex-shrink-0" />
                <a href={`mailto:${dict.location.email}`} className="hover:text-white transition">
                  {dict.location.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-csps-gold flex-shrink-0" />
                <span>{dict.location.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>{dict.footer.legal}</p>
          <p className="flex items-center gap-1">
            <span>{locale === "ar" ? "صُنعت بـ" : "Built with"}</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>{locale === "ar" ? "لأبنائنا في صلالة" : "for Salalah, Oman"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
