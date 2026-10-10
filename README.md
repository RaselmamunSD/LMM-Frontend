# Lalmonirhat Model Madrasa - Nurani Academy
# লালমনিরহাট মডেল মাদ্রাসা (মারকাযুল কুরআন নূরানী একাডেমি)

A modern, professional, responsive, and bilingual (Bangla & English) web application for **Lalmonirhat Model Madrasa (Nurani Academy)**, crafted using Next.js App Router, TypeScript, Tailwind CSS, Lucide React, and Framer Motion.

The platform provides complete academic coverage from **Play Group to Class Five (Grade 5)**, integrating sacred Quranic education, Noorani Qaida, conversational Arabic, and national standard primary academic education.

---

## 🎨 Official Branding & Color Palette

Derived directly from the official circular madrasa logo and banner:
* **Deep Islamic Green:** `#087A35` (Primary brand color)
* **Dark Green:** `#075526` (Header, borders, gradients)
* **Lime Green:** `#A8B923` (Accents, highlights, badges)
* **White:** `#FFFFFF` (Surface and text contrast)
* **Dark Charcoal:** `#171717` (Body text)
* **Royal Blue:** `#174A9C` (Secondary accents)
* **Accent Red:** `#D91E2B` (Urgent badges, complementary to logo)

---

## 🚀 Key Features

* **Bilingual Support (i18n):** Full Bangla (`/bn`) as default and English (`/en`) as alternative with active route preservation.
* **Theme Switching:** Smooth Light Mode and Dark Mode support with persistent local storage and system preference fallback.
* **Full Next.js App Routing:** Dedicated pages for every main section (no placeholders or single-page hacks).
* **Admission Portal:** Online Admission Form with React Hook Form, Zod client-side validation, tracking ID generation, and printable slip state.
* **Clean API Layer:** Endpoints (`/api/admission` and `/api/contact`) structured and ready for easy connection with FastAPI or databases.
* **Interactive Gallery:** Responsive image grids with integrated modal Lightbox viewer.
* **Notice Board:** Real-time search query and category filtering (Admissions, Exams, Holidays, Events, General).
* **SEO & Metadata:** Localized OpenGraph metadata, `robots.txt`, and dynamic `sitemap.xml`.
* **Bengali-Friendly Typography:** Styled with `Hind Siliguri` for Bengali and `Plus Jakarta Sans` for English.

---

## 📁 Project Architecture

```text
LMM Madrasa/
├── LMM Frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── [locale]/
│   │   │   │   ├── page.tsx                    # Home Page (15+ rich sections)
│   │   │   │   ├── about/page.tsx              # About Us (History, Mission, Vision)
│   │   │   │   ├── academic-programs/
│   │   │   │   │   ├── page.tsx                # All Programs (Play to Class 5)
│   │   │   │   │   └── [slug]/page.tsx         # Dedicated Class Detail Pages
│   │   │   │   ├── curriculum/page.tsx         # 9 Curriculum Subject Areas
│   │   │   │   ├── teachers/page.tsx           # Faculty Directory with Dept Filter
│   │   │   │   ├── facilities/page.tsx         # Campus & Infrastructure
│   │   │   │   ├── notices/
│   │   │   │   │   ├── page.tsx                # Notice Board (Search & Filter)
│   │   │   │   │   └── [id]/page.tsx           # Full Notice & Download
│   │   │   │   ├── events/
│   │   │   │   │   ├── page.tsx                # Upcoming & Past Events
│   │   │   │   │   └── [id]/page.tsx           # Single Event Detail
│   │   │   │   ├── gallery/page.tsx            # Photo Gallery + Lightbox
│   │   │   │   ├── admission/page.tsx          # Admission Guidelines & Form
│   │   │   │   ├── contact/page.tsx            # Contact Info, Form & Map
│   │   │   │   └── faq/page.tsx                # Categorized Accordion FAQ
│   │   │   ├── api/
│   │   │   │   ├── admission/route.ts          # Admission Application API
│   │   │   │   └── contact/route.ts            # Contact Inquiries API
│   │   │   ├── globals.css                     # Brand Theme Variables & Styles
│   │   │   ├── layout.tsx                      # Root Fonts & Theme Provider
│   │   │   ├── sitemap.ts                      # Dynamic SEO Sitemap
│   │   │   └── robots.ts                       # Search Engine Indexing
│   │   ├── components/
│   │   │   ├── layout/                         # Header, MobileNav, Footer, Switchers
│   │   │   ├── common/                         # ThemeToggle, SectionHeading, Breadcrumbs
│   │   │   ├── home/                           # Hero, QuickCards, Welcome, Testimonials
│   │   │   ├── academic/                       # ProgramCard reusable UI
│   │   │   ├── admission/                      # AdmissionForm with Zod
│   │   │   ├── forms/                          # ContactForm with Zod
│   │   │   └── gallery/                        # GalleryClient & Lightbox
│   │   ├── lib/
│   │   │   ├── data/                           # Centralized editable site content
│   │   │   │   ├── site-config.ts
│   │   │   │   ├── programs.ts
│   │   │   │   ├── curriculum.ts
│   │   │   │   ├── teachers.ts
│   │   │   │   ├── facilities.ts
│   │   │   │   ├── notices.ts
│   │   │   │   ├── events.ts
│   │   │   │   ├── gallery.ts
│   │   │   │   └── faqs.ts
│   │   │   ├── i18n.ts
│   │   │   ├── validations.ts                  # Zod form schemas
│   │   │   └── utils.ts
│   │   ├── messages/
│   │   │   ├── bn.json                         # Complete Bengali Translations
│   │   │   └── en.json                         # Complete English Translations
│   │   └── types/                              # Full TypeScript Interfaces
│   └── public/
│       ├── images/                             # Official Madrasa Logo and Assets
│       └── favicon.ico
└── package.json                                # Workspace scripts delegation
```

---

## 🛠️ Getting Started

### Prerequisites

* Node.js v18.17+ or v20+ (Tested with Node v24.19.0)
* npm or pnpm / yarn

### Installation & Development

From either the workspace root or `LMM Frontend`:

```bash
# 1. From workspace root:
npm run dev

# Or navigate directly into frontend:
cd "LMM Frontend"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The root path automatically redirects to `/bn`.

### Production Build

To test and compile an optimized production build:

```bash
# From workspace root:
npm run build

# To launch production server:
npm run start
```

---

## 🔗 Future Backend (FastAPI) Integration

The online admission and contact forms are wired to Next.js route handlers:
* `POST /api/admission`
* `POST /api/contact`

When ready to link a Python FastAPI or other external backend:
1. Set `BACKEND_API_URL=https://api.yourdomain.com` in `.env.local`.
2. Forward the validated JSON payloads directly in `src/app/api/admission/route.ts` and `src/app/api/contact/route.ts`.

---

## 🏛️ Institutional Information

* **Institution:** Lalmonirhat Model Madrasa (লালমনিরহাট মডেল মাদ্রাসা)
* **Specialized Wing:** Nurani Academy (নূরানী একাডেমি - প্লে থেকে ৫ম শ্রেণি)
* **Established:** 2023 CE (স্থাপিত: ২০২৩ খ্রি.)
* **Location:** Sadar, Lalmonirhat, Bangladesh (সদর, লালমনিরহাট)
* **Email:** `lalmonirhatmodelmadrasa@gmail.com`
