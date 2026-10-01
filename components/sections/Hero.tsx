'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

// We will need a Behance icon, but we can use a placeholder or custom SVG if lucide doesn't have it.
// Lucide doesn't have behance by default sometimes, we can use a custom SVG for it.
const BehanceIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 15.5h4c2.5 0 3-1.5 3-2.5s-.5-2.5-3-2.5h-4v5Z" />
    <path d="M6.5 10.5h3c1.5 0 2-1 2-2s-.5-2-2-2h-3v4Z" />
    <path d="M11 15.5c1.5 2 4.5 2.5 6.5 1 2-1.5 2.5-4.5 1-6.5-1.5-2-4.5-2.5-6.5-1M19.5 12h-5" />
    <path d="M14.5 7.5h4" />
  </svg>
)

const PHOTO_URL = '/sandeep.png'

export default function Hero() {
  const SOCIALS = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sandeep-kumar14', label: 'LinkedIn' },
    { icon: Github,   href: 'https://github.com/Sandeep2924', label: 'GitHub' },
    { icon: BehanceIcon, href: '#', label: 'Behance' },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden max-w-7xl mx-auto">
      
      {/* Floating Social Icons (Desktop Left Edge) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-6 z-20 hidden md:flex">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <motion.a 
            key={label} 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={label}
            className="w-10 h-10 rounded shadow-sm bg-gold-solid flex items-center justify-center text-primary hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.1, x: 3 }} 
            whileTap={{ scale: 0.9 }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center md:pl-20 lg:pl-24">
        
        {/* LEFT: Text */}
        <div className="text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-4 sm:mb-6 text-primary"
          >
            I'M <br /> SANDEEP.
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-xl sm:text-2xl md:text-3xl text-primary font-medium mb-4 sm:mb-6 leading-snug"
          >
            Fusing Design Thinking <br className="hidden sm:inline" /> with Engineering Precision.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-text-primary text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg font-body"
          >
            I am a multi-disciplinary creative professional with a passion for building <span className="font-bold">user-centric digital experiences</span>. 
            I bring complex ideas to life through robust frontend development and intuitive UI/UX design. Let's create something remarkable.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link href="/projects">
              <motion.button
                className="px-7 sm:px-8 py-3 sm:py-3.5 rounded shadow-lg font-body font-medium text-xs sm:text-sm bg-gold-grad tracking-wide hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.97 }}
              >
                VIEW PROJECTS
              </motion.button>
            </Link>

            {/* Mobile Social Bar (Shown on small screens) */}
            <div className="flex items-center gap-3 md:hidden">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded bg-surface border border-border flex items-center justify-center text-primary hover:border-gold transition-colors shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Framed Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end relative w-full pt-4 md:pt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-[380px] lg:max-w-[420px] aspect-[3/4]">
            {/* Dark Navy Outer Frame */}
            <div className="absolute inset-0 bg-primary shadow-2xl z-0 rounded-sm" />
            
            {/* Gold Corner Accents (Top Left & Bottom Right) */}
            <div className="absolute -top-1 -left-1 w-12 h-12 sm:w-16 sm:h-16 bg-gold z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
            <div className="absolute -bottom-1 -right-1 w-12 h-12 sm:w-16 sm:h-16 bg-gold z-0" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }} />

            {/* Inner White Frame & Image */}
            <div className="absolute inset-3 sm:inset-4 bg-surface p-2 z-10 flex items-center justify-center overflow-hidden">
              <img
                src={PHOTO_URL}
                alt="Sandeep"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
