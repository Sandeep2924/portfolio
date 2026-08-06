import type { Metadata } from 'next'
import './globals.css'
import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/ui/PageTransition'

export const metadata: Metadata = {
  title: 'Sandeep Kumar — AI/ML Engineer & Full Stack Developer',
  description: 'Portfolio of Sandeep Kumar — building AI systems, full-stack apps & agri-commerce platforms.',
  keywords: ['AI/ML','Full Stack','React','Next.js','Python','Deep Learning','MongoDB','IEEE'],
  authors: [{ name: 'Sandeep Kumar' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
