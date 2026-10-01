'use client'
import { useState } from 'react'
import { PROJECTS } from './Projects'
import { motion } from 'framer-motion'
import { ArrowUpRight, Workflow, ExternalLink, Github } from 'lucide-react'
import Reveal from '../ui/Reveal'
import ProjectModal, { ProjectData } from '../modals/ProjectModal'

export default function FeaturedProjects() {
  const featured = PROJECTS.filter(p => p.featured).slice(0, 3)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

  return (
    <section id="featured-projects" className="py-24 px-6 relative bg-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-gold/10 text-primary border border-gold/30 mb-3">
              <Workflow size={13} className="text-gold" />
              <span>Interactive Case Studies</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-primary uppercase tracking-tight">
              Selected Projects
            </h2>
            <p className="text-text-secondary text-sm font-body mt-2 max-w-xl">
              Click on any project to explore its full system architecture diagram, engineering layers, and technical breakdown.
            </p>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((p, i) => {
            return (
              <Reveal key={p.id} delay={i * 0.1}>
                <div
                  onClick={() => setSelectedProject(p as unknown as ProjectData)}
                  className="group relative bg-card rounded-xl overflow-hidden shadow-lg border border-border/60 transition-all hover:shadow-2xl hover:-translate-y-1.5 h-[440px] flex flex-col cursor-pointer"
                >
                  {/* Dark Navy Corner Accent */}
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary transform rotate-45 z-10 transition-transform group-hover:scale-110" />

                  {/* Visual Banner */}
                  <div className="relative h-56 bg-surface border-b border-border/60 p-4 flex items-center justify-center overflow-hidden">
                    {p.img ? (
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover object-top rounded shadow-sm group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2 p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold border border-gold/30 group-hover:scale-110 transition-transform">
                          <Workflow size={24} />
                        </div>
                        <span className="text-xs font-mono font-semibold text-primary">
                          {p.badge || 'System Architecture'}
                        </span>
                        <span className="text-[11px] text-text-muted font-body">
                          Click to inspect architecture
                        </span>
                      </div>
                    )}

                    {/* Badge top-right */}
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-bg/90 backdrop-blur-sm border border-border text-primary font-semibold z-10">
                      {p.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow relative z-20 bg-card">
                    <h3 className="font-body font-bold text-xl text-primary mb-1.5 leading-snug group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted mb-2.5">
                      {p.subtitle}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 font-body">
                      {p.desc}
                    </p>
                    
                    {/* Action Bar */}
                    <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between">
                      <button
                        type="button"
                        className="flex items-center gap-1.5 font-body font-semibold text-gold text-xs transition-transform group-hover:translate-x-1"
                      >
                        <Workflow size={13} />
                        View Architecture
                        <ArrowUpRight size={14} />
                      </button>

                      {/* Quick external links */}
                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-text-secondary hover:text-primary transition-colors"
                            title="View GitHub"
                          >
                            <Github size={14} />
                          </a>
                        )}
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-text-secondary hover:text-gold transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

      </div>

      {/* Architecture Pop-up Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
