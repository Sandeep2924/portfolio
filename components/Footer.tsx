import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8 px-4 sm:px-6 bg-surface/50 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary font-body">
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} <span className="text-primary font-bold">SANDEEP KUMAR</span>. All rights reserved.
        </div>
        
        {/* Quick Nav Links */}
        <div className="flex items-center gap-5 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Sandeep2924"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 text-text-secondary hover:text-primary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-kumar14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 text-text-secondary hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:sandeepkumar362924@gmail.com"
            aria-label="Email"
            className="p-1.5 text-text-secondary hover:text-primary transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
