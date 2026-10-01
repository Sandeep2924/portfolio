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

  // Track scroll position immediately on mount and on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-md shadow-sm border-b border-border/70 py-3'
            : 'bg-bg/80 backdrop-blur-sm border-b border-border/30 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display font-bold text-xl sm:text-2xl tracking-tight text-primary hover:opacity-80 transition-opacity"
          >
            SANDEEP.
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV.map((n) => {
              const active = pathname === n.href
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-body font-medium transition-all ${
                    active
                      ? 'text-primary bg-primary/5 font-semibold'
                      : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="relative">
                    {n.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full font-body font-semibold text-xs tracking-wide bg-gold-solid text-primary shadow-sm hover:opacity-90 hover:shadow transition-all"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="md:hidden text-primary p-2 rounded-lg hover:bg-primary/5 active:bg-primary/10 transition-colors focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open navigation menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl md:hidden flex flex-col justify-between px-6 pt-24 pb-8 overflow-y-auto"
            onClick={() => setOpen(false)}
          >
            <div
              className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV.map((n) => {
                const active = pathname === n.href
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`font-display font-bold text-3xl sm:text-4xl transition-colors py-1 ${
                      active ? 'text-gold' : 'text-primary hover:text-gold'
                    }`}
                  >
                    {n.label}
                  </Link>
                )
              })}

              <div className="w-16 h-px bg-border/80 my-2" />

              {/* Mobile Actions */}
              <div className="w-full flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full py-3 rounded-full text-center font-body font-semibold text-sm bg-gold-solid text-primary shadow-md block hover:opacity-90 transition-opacity"
                >
                  Hire Me
                </Link>

                <a
                  href="/Sandeep_Kumar_Resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="w-full py-3 rounded-full text-center font-body font-semibold text-sm bg-primary text-surface border border-primary shadow-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
