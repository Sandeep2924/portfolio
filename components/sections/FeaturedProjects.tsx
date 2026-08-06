'use client'
import { PROJECTS } from './Projects'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Reveal from '../ui/Reveal'

export default function FeaturedProjects() {
  const featured = PROJECTS.filter(p => p.featured).slice(0, 3)

  return (
    <section id="featured-projects" className="py-24 px-6 relative bg-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <Reveal>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-primary uppercase tracking-tight">
              Selected Projects
            </h2>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((p, i) => {
            return (
              <Reveal key={p.id} delay={i * 0.1}>
                <Link href={p.live || p.github || '/projects'} target="_blank">
                  <div className="group relative bg-card rounded overflow-hidden shadow-lg border border-border/50 transition-all hover:shadow-2xl hover:-translate-y-1 h-[420px] flex flex-col cursor-pointer">
                    
                    {/* Dark Navy Corner Accent */}
                    <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary transform rotate-45 z-10 transition-transform group-hover:scale-110" />

                    {/* Visual Banner */}
                    <div className="relative h-56 bg-surface border-b border-border p-4 flex items-center justify-center overflow-hidden">
                      {p.img ? (
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-full h-full object-cover object-top rounded shadow-sm group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="text-text-muted font-mono text-sm">No Image Provided</div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow relative z-20 bg-card">
                      <h3 className="font-body font-bold text-xl text-primary mb-2 leading-snug group-hover:text-gold transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                        {p.desc}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-1 font-body font-semibold text-gold text-sm transition-transform group-hover:translate-x-1">
                        Case Study <ArrowUpRight size={16} />
                      </div>
                    </div>
                    
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
