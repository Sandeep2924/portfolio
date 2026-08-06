'use client'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-bg">
      <About />
      <Skills />
      <Experience />
    </div>
  )
}
