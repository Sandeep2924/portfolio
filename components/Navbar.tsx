'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href: string) => {
    setOpen(false); setActive(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/70 backdrop-blur-2xl border-b border-border' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            whileHover={{ scale: 1.04 }}
            className="font-display font-bold text-lg tracking-tight"
          >
            <span className="gt-mint">SK</span>
            <span className="text-text-secondary font-body font-normal text-sm ml-1.5">portfolio</span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV.map(n => (
              <motion.button key={n.href} onClick={() => go(n.href)}
                className={`relative px-4 py-2 text-sm font-body rounded-full transition-colors ${
                  active === n.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                {active === n.href && (
                  <motion.span layoutId="nav-pill" transition={{ type:'spring', stiffness:400, damping:30 }}
                    className="absolute inset-0 bg-surface border border-border rounded-full" />
                )}
                <span className="relative z-10">{n.label}</span>
              </motion.button>
            ))}

            {/* Resume Download Button */}
            <motion.a
              href="/Sandeep_Kumar_Resume.pdf"
              download="Sandeep_Kumar_Resume.pdf"
              className="ml-3 flex items-center gap-2 px-5 py-2 rounded-full font-display font-semibold text-sm text-bg"
              style={{ background: 'linear-gradient(135deg,#6EE7B7,#60A5FA)' }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={14} />
              Resume
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <motion.button className="md:hidden text-text-primary p-2" onClick={() => setOpen(!open)} whileTap={{ scale: 0.9 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV.map((n, i) => (
              <motion.button key={n.href} onClick={() => go(n.href)}
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.07 }}
                className="font-display font-bold text-4xl text-text-primary hover:text-primary transition-colors"
              >{n.label}</motion.button>
            ))}
            <motion.a href="/Sandeep_Kumar_Resume.pdf" download
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.4 }}
              className="flex items-center gap-2 px-8 py-3 rounded-full font-display font-bold text-bg"
              style={{ background:'linear-gradient(135deg,#6EE7B7,#60A5FA)' }}
            >
              <Download size={16}/> Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
