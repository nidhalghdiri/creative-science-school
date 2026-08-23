# Creative Science Private School (صلالة، سلطنة عمان)

A modern, high-performance Next.js 15/16 web application for **Creative Science Private School** located in Salalah, Dhofar, Oman. Built using the exact same architecture, technology stack, and design standards as `nassayem-website`.

---

## 🚀 Technology Stack

- **Framework**: [Next.js 15 App Router](https://nextjs.org/) (TypeScript)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom brand colors, responsive typography (`Inter` & `Tajawal` for Arabic/English font optimization), and dynamic animations.
- **Internationalization (i18n)**: Locale-aware dynamic routing (`/en`, `/ar`) with automatic middleware redirect, `dir="rtl"` / `dir="ltr"` support, and full bilingual content dictionary.
- **Database & ORM**: [Prisma ORM](https://www.prisma.io/) with PostgreSQL schema (`AdmissionApplication`, `NewsEvent`, `Inquiry`) and [Supabase SSR integration](https://supabase.com/).
- **UI Components & Icons**: [Lucide React](https://lucide.dev/), Framer Motion, and Tailwind Merge.

---

## 📁 Project Architecture & Structure

```
creative-science-school/
├── app/
│   ├── [locale]/             # i18n dynamic routes (en/ar)
│   │   ├── about/            # About Us page
│   │   ├── academics/        # Academics & STEM specializations
│   │   ├── admissions/       # Enrollment & registration page
│   │   ├── contact/          # Salalah location & contact details
│   │   ├── layout.tsx        # Root locale layout with Inter & Tajawal fonts
│   │   └── page.tsx          # Main landing page
│   ├── api/
│   │   └── health/           # Healthcheck API route
│   ├── globals.css           # Tailwind base styles & custom animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky header with locale switcher & quick actions
│   │   └── Footer.tsx        # School footer with Ministry of Education license info
│   └── sections/
│       ├── Hero.tsx               # High-impact bilingual hero with interactive STEM card
│       ├── Stats.tsx              # Key school achievements & student metrics
│       ├── AcademicPillars.tsx    # Core curriculum pillars & STEM features
│       ├── GradeLevels.tsx        # Kindergarten, Primary, & Secondary streams
│       ├── FacilitiesShowcase.tsx # Campus infrastructure & robotics hub in Salalah
│       ├── AdmissionsCTA.tsx      # Interactive 4-step admissions form
│       └── ContactSection.tsx     # Interactive Salalah campus contact details
├── lib/
│   ├── dictionary.ts         # Complete English & Arabic translation strings
│   ├── prisma.ts             # Prisma client instance
│   └── supabase/
│       ├── client.ts         # Browser Supabase client
│       └── server.ts         # Server-side Supabase client
├── prisma/
│   └── schema.prisma         # Prisma data models
├── middleware.ts             # i18n locale routing & header injection
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Custom CSPS color scheme & font definitions
├── tsconfig.json             # TypeScript compiler settings
└── package.json              # Project dependencies
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Database Sync (Optional)
Configure your `.env` file with your PostgreSQL / Supabase credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/csps_db"
DIRECT_URL="postgresql://user:password@localhost:5432/csps_db"
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

Generate Prisma client:
```bash
npx prisma generate
```

---

## 🏫 Key Features & Content Included

1. **Bilingual Navigation & Content**: Toggle between English and Arabic (`/en` and `/ar`).
2. **Salalah Campus Focus**: Customized for Dhofar Governorate, featuring location details, Ministry of Education licensing, and local phone numbers.
3. **STEM & Robotics Showcase**: Interactive feature cards showcasing AI labs, 3D printing, biochemistry, and coding.
4. **Grade Levels**: KG1, KG2, Primary (Grades 1-6), Preparatory & Secondary STEM (Grades 7-12).
5. **Admissions Request Form**: Interactive application request form for parents.
