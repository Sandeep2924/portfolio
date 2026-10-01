import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/ui/PageTransition'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sandeep Kumar — AI/ML Engineer & Full Stack Developer',
  description: 'Portfolio of Sandeep Kumar — building AI systems, full-stack apps & agri-commerce platforms.',
  keywords: ['AI/ML','Full Stack','React','Next.js','Python','Deep Learning','MongoDB','IEEE'],
  authors: [{ name: 'Sandeep Kumar' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Cursor />
        <div className="relative min-h-screen bg-bg overflow-x-hidden flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow pt-20">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
