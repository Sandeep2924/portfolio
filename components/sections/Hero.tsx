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
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden max-w-7xl mx-auto">
      
      {/* Floating Social Icons (Left Edge) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 hidden md:flex">
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

      <div className="relative z-10 w-full grid md:grid-cols-2 gap-12 items-center md:pl-24">
        
        {/* LEFT: Text */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-6xl md:text-8xl leading-[1.05] tracking-tight mb-6 text-primary"
          >
            I'M <br /> SANDEEP.
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-2xl md:text-3xl text-primary font-medium mb-6 leading-snug"
          >
            Fusing Design Thinking <br /> with Engineering Precision.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-text-primary text-base md:text-lg leading-relaxed mb-10 max-w-lg font-body"
          >
            I am a multi-disciplinary creative professional with a passion for building <span className="font-bold">user-centric digital experiences</span>. 
            I bring complex ideas to life through robust frontend development and intuitive UI/UX design. Let's create something remarkable.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
          >
            <Link href="/projects">
              <motion.button
                className="px-8 py-3.5 rounded shadow-lg font-body font-medium text-sm bg-gold-grad tracking-wide hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.97 }}
              >
                VIEW PROJECTS
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: Framed Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end relative pr-4 md:pr-12"
        >
          <div className="relative w-72 h-[400px] md:w-[420px] md:h-[560px]">
            {/* Dark Navy Outer Frame */}
            <div className="absolute inset-0 bg-primary shadow-2xl z-0" />
            
            {/* Gold Corner Accents (Top Left & Bottom Right) */}
            <div className="absolute -top-1 -left-1 w-16 h-16 bg-gold z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
            <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gold z-0" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }} />

            {/* Inner White Frame & Image */}
            <div className="absolute inset-4 bg-surface p-2 z-10 flex items-center justify-center overflow-hidden">
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
