import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-bg z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-text-primary font-medium font-body">
        <div>
          © SANDEEP. Sandeep. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0">
          Sitemap
        </div>
        <div className="hidden md:block w-32" /> {/* Spacer to keep Sitemap perfectly centered if needed, or just let space-between handle it */}
      </div>
    </footer>
  )
}
