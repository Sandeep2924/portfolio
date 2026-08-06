'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile nav on path change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/75 backdrop-blur-2xl border-b border-border py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-2xl tracking-tight text-primary hover:opacity-80 transition-opacity">
            SANDEEP.
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            {NAV.map((n, idx) => {
              const active = pathname === n.href
              return (
                <div key={n.href} className="flex items-center">
                  <Link href={n.href} className="relative">
                    <motion.div
                      className={`px-3 py-2 text-sm font-body transition-colors relative z-10 ${
                        active ? 'text-primary font-medium' : 'text-text-secondary hover:text-primary'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          className="absolute left-3 right-3 bottom-1 h-[2px] bg-gold rounded-full -z-10"
                        />
                      )}
                      <span>{n.label}</span>
                    </motion.div>
                  </Link>
                  {idx < NAV.length - 1 && (
                    <span className="text-border mx-1 font-light">|</span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.div
                className="flex items-center gap-2 px-6 py-2.5 rounded shadow-md font-body font-medium text-sm bg-gold-solid hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.div>
            </Link>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV.map((n, i) => {
              const active = pathname === n.href
              return (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`font-display font-bold text-4xl hover:text-primary transition-colors ${
                      active ? 'text-primary' : 'text-text-primary'
                    }`}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              )
            })}
            <motion.a
              href="/Sandeep_Kumar_Resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 px-8 py-3 rounded-full font-display font-bold text-bg"
              style={{ background: 'linear-gradient(135deg,#6EE7B7,#60A5FA)' }}
            >
              <Download size={16} /> Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
