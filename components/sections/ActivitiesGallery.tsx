"use client";

import Image from "next/image";
import { dictionary } from "@/lib/dictionary";
import { Camera, Calendar, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, MotionCard } from "@/components/ui/motion";

export default function ActivitiesGallery({ locale }: { locale: string }) {
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;
  const isAr = locale === "ar";

  const galleryItems = [
    {
      title: isAr ? "معرض العلوم والابتكار الأول" : "First Science & Innovation Expo",
      date: "2025",
      location: "صلالة، ظفار",
      image: "/images/first-creative-science-expo.jpg",
    },
    {
      title: isAr ? "احتفالات اليوم الوطني المجيد" : "Glorious National Day Celebrations",
      date: "2024",
      location: "مدرسة العلوم الإبداعية",
      image: "/images/national-day-oman.jpg",
    },
    {
      title: isAr ? "تخريج دفعة رياض الأطفال" : "KG Graduation Ceremony",
      date: "2025",
      location: "مسرح المدرسة",
      image: "/images/graduation-ceremony.jpg",
    },
    {
      title: isAr ? "الرحلات الميدانية والاستكشافية" : "Educational Field Trips",
      date: "2025",
      location: "محافظة ظفار",
      image: "/images/community-trips.jpg",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-csps-navy/10 text-csps-navy">
              <Camera className="w-4 h-4 text-csps-navy" />
              <span>{isAr ? "معرض الصور والفعاليات" : "Activities & Photo Gallery"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-csps-navy tracking-tight">
              {isAr ? "أنشطة وفعاليات مدرسة العلوم الإبداعية" : "School Events & Student Activities"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isAr
                ? "لحظات من الإبداع، المشاركة المجتمعية، والاحتفال بإنجازات طلابنا في صلالة."
                : "Capturing moments of innovation, cultural events, and student achievements in Salalah."}
            </p>
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <StaggerItem key={idx}>
              <MotionCard className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-csps-maroon/40 transition-all duration-300 group h-full flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-csps-navy group-hover:text-csps-maroon transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-csps-maroon" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-csps-gold" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
