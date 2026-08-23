"use client";

import { dictionary } from "@/lib/dictionary";
import { Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

export default function RoyalQuoteSection({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  return (
    <section className="py-16 bg-gradient-to-r from-csps-navy via-slate-900 to-csps-maroon text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <FadeIn direction="down">
          <div className="w-12 h-12 rounded-2xl bg-csps-gold/20 border border-csps-gold/40 text-csps-gold flex items-center justify-center mx-auto shadow-lg">
            <Quote className="w-6 h-6" />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <blockquote className="text-lg sm:text-2xl font-extrabold leading-relaxed text-slate-100 italic max-w-4xl mx-auto font-arabic">
            &ldquo;{dict.leadershipQuote.royalQuote}&rdquo;
          </blockquote>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="space-y-1 pt-2">
            <p className="text-sm font-extrabold text-csps-gold">
              {dict.leadershipQuote.royalAuthor}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
