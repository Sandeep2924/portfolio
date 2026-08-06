'use client'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Send, User } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg overflow-x-hidden">
      <Hero />
      
      {/* Featured Projects Grid */}
      <FeaturedProjects />

      {/* Skills */}
      <Skills />

      {/* Experience Timeline */}
      <Experience />

      {/* Education & Research Timeline */}
      <Education />

    </div>
  )
}
