import { dictionary } from "@/lib/dictionary";
import { Quote } from "lucide-react";

export default function RoyalQuoteSection({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 via-csps-navyDark to-slate-900 text-white relative overflow-hidden border-y border-csps-maroon/30">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9770615_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Crown / Quote Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-csps-gold/15 border border-csps-gold/40 text-csps-gold shadow-lg shadow-csps-gold/10 mx-auto">
          <Quote className="w-6 h-6 rotate-180" />
        </div>

        {/* Royal Excerpt */}
        <blockquote className="text-base sm:text-xl lg:text-2xl font-serif font-medium leading-relaxed text-amber-100/95 max-w-4xl mx-auto">
          «{dict.leadershipQuote.royalQuote}»
        </blockquote>

        {/* Attribution */}
        <div className="pt-2">
          <p className="text-xs sm:text-sm font-bold text-csps-gold tracking-wide">
            {dict.leadershipQuote.royalAuthor}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-csps-gold to-transparent mx-auto mt-3" />
        </div>
      </div>
    </section>
  );
}
