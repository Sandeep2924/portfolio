import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sandeep Kumar — AI/ML Engineer & Full Stack Developer',
  description: 'Portfolio of Sandeep Kumar — building AI systems, full-stack apps & agri-commerce platforms.',
  keywords: ['AI/ML','Full Stack','React','Next.js','Python','Deep Learning','MongoDB','IEEE'],
  authors: [{ name: 'Sandeep Kumar' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
