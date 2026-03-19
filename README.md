# Sandeep Kumar — Portfolio v2

A **bold, dark, animated** portfolio built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**.

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → Open http://localhost:3000
```

## 🚀 Deploy to Vercel (Free, 1-click)

```bash
# Push to GitHub, then:
# 1. Go to vercel.com
# 2. Import your repo
# 3. Click Deploy ✅
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Custom cursor, grain, gradient text, animations
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── Navbar.tsx           # Fixed nav + Resume download button
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx         # Photo, typewriter, floating orbs, particles
│   │   ├── About.tsx        # Bio, stats cards, photo with overlay
│   │   ├── Skills.tsx       # Animated bars + tech marquee strip
│   │   ├── Projects.tsx     # 6 real projects, filter tabs, GitHub links
│   │   ├── Experience.tsx   # Animated vertical timeline
│   │   └── Contact.tsx      # Form + copy email + resume download
│   └── ui/
│       ├── Cursor.tsx       # Custom animated cursor with ring
│       └── Reveal.tsx       # Scroll-triggered animation wrapper
├── public/
│   └── Sandeep_Kumar_Resume.pdf   ← YOUR RESUME IS HERE ✅
└── tailwind.config.js
```

---

## ✏️ How to Update Your Info

| What to change | Where |
|---|---|
| Your photo | `Hero.tsx` → `PHOTO_URL` (Drive link) |
| About text / bio | `About.tsx` |
| Skill percentages | `Skills.tsx` → `CATEGORIES` array |
| Projects + GitHub links | `Projects.tsx` → `PROJECTS` array |
| Work / Education timeline | `Experience.tsx` → `ITEMS` array |
| Contact details | `Contact.tsx` |

### Updating your Drive photo
Replace the Google Drive file ID in `Hero.tsx`:
```
https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
```
Make sure the file is set to **"Anyone with the link can view"**.

### Updating your resume
Replace the file at:
```
public/Sandeep_Kumar_Resume.pdf
```

---

## 🎨 Theme Colors

Edit `tailwind.config.js`:
```js
primary:   '#6EE7B7',   // Mint green (main)
secondary: '#F472B6',   // Hot pink
accent:    '#60A5FA',   // Sky blue
gold:      '#FBBF24',   // Amber
```

---

## 📬 Making the Contact Form Work

The form is UI-only by default. To make it functional:

### Option A: EmailJS (no backend needed)
```bash
npm install @emailjs/browser
```
Add to `Contact.tsx`:
```js
import emailjs from '@emailjs/browser'
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
```

### Option B: Next.js API Route
Create `app/api/contact/route.ts` using Resend or Nodemailer.

---

## 📦 Tech Stack

| Tool | Use |
|---|---|
| Next.js 14 | Framework (App Router, static export) |
| Tailwind CSS | Styling |
| Framer Motion | All animations |
| Lucide React | Icons |
| react-intersection-observer | Scroll triggers |
| JetBrains Mono + Syne + DM Sans | Typography |
