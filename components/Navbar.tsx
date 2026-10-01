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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-xl sm:text-2xl tracking-tight text-primary hover:opacity-80 transition-opacity">
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
                className="flex items-center gap-2 px-6 py-2.5 rounded shadow-md font-body font-medium text-sm bg-gold-solid hover:opacity-90 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.div>
            </Link>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden text-primary p-2 rounded-lg hover:bg-primary/5 transition-colors"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 md:hidden px-6 pt-20 pb-12"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              {NAV.map((n, i) => {
                const active = pathname === n.href
                return (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className={`font-display font-bold text-3xl sm:text-4xl block py-1.5 transition-colors ${
                        active ? 'text-gold' : 'text-primary hover:text-gold'
                      }`}
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                )
              })}

              <div className="w-16 h-px bg-border my-2" />

              {/* Mobile Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="w-full flex flex-col gap-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full py-3 rounded-lg text-center font-body font-semibold text-sm bg-gold-solid text-primary shadow-md block"
                >
                  Hire Me
                </Link>

                <a
                  href="/Sandeep_Kumar_Resume.pdf"
                  download
                  className="w-full py-3 rounded-lg text-center font-body font-semibold text-sm bg-primary text-surface border border-border shadow-sm flex items-center justify-center gap-2"
                >
                  <Download size={16} /> Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
