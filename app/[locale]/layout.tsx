import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const tajawal = Tajawal({
  weight: ["400", "500", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Creative Science Private School",
    default: "Creative Science Private School | Salalah, Oman",
  },
  description:
    "Creative Science Private School in Salalah, Oman (مدرسة الإبداع العلمي الخاصة بصلالة). Premier STEM, bilingual Cambridge & Omani education from Kindergarten to High School.",
  keywords: [
    "Creative Science Private School",
    "مدرسة الإبداع العلمي الخاصة",
    "مدرسة الإبداع العلمي صلالة",
    "Salalah Private School",
    "Schools in Salalah",
    "STEM School Oman",
    "Dhofar Education",
    "مدارس صلالة",
  ],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${inter.variable} ${tajawal.variable} scroll-smooth`}
    >
      <body
        className={`min-h-screen flex flex-col ${
          locale === "ar" ? "font-arabic" : "font-english"
        }`}
      >
        <Navbar locale={locale} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
