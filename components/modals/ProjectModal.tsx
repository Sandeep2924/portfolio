'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
  Cpu,
  Database,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Workflow
} from 'lucide-react'

export interface ArchitectureStep {
  step: string
  title: string
  tech: string
  description: string
  type: 'client' | 'api' | 'ml' | 'database' | 'cloud'
}

export interface ArchitectureLayer {
  title: string
  tech: string[]
  details: string
}

export interface ProjectData {
  id: number
  title: string
  subtitle: string
  desc: string
  tags: string[]
  icon?: any
  color?: string
  grad?: string
  badge?: string
  github?: string | null
  live?: string | null
  img?: string | null
  architecture?: {
    overview: string
    diagram: ArchitectureStep[]
    layers: ArchitectureLayer[]
    highlights: string[]
  }
}

interface ProjectModalProps {
  project: ProjectData | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!project) return null

  const arch = project.architecture || {
    overview: project.desc,
    diagram: [
      {
        step: '01',
        title: 'Client Layer',
        tech: project.tags.slice(0, 2).join(' / ') || 'React',
        description: 'Responsive user interface with dynamic data views and client-side state handling.',
        type: 'client' as const
      },
      {
        step: '02',
        title: 'API Gateway',
        tech: 'REST / Node.js',
        description: 'Secure request validation, routing, and business logic execution.',
        type: 'api' as const
      },
      {
        step: '03',
        title: 'Processing Engine',
        tech: 'Algorithms & Models',
        description: 'Data transformation, machine learning inference, and analytics.',
        type: 'ml' as const
      },
      {
        step: '04',
        title: 'Data Store',
        tech: 'Database & Cloud',
        description: 'Persistent storage with optimized queries and high-availability endpoints.',
        type: 'database' as const
      }
    ],
    layers: [
      {
        title: 'Frontend & UI',
        tech: project.tags.filter(t => ['React.js', 'Next.js', 'Tailwind', 'Bootstrap', 'HTML5'].includes(t)),
        details: 'Modern component-driven architecture with smooth user interactions.'
      },
      {
        title: 'Backend & APIs',
        tech: project.tags.filter(t => ['Node.js', 'Express.js', 'REST API', 'JWT', 'Python'].includes(t)),
        details: 'High-performance services for data ingestion and client synchronization.'
      }
    ],
    highlights: [
      'Engineered for high performance and low latency',
      'Clean modular separation of concerns',
      'Production-ready deployment'
    ]
  }

  const getTypeIcon = (type: ArchitectureStep['type']) => {
    switch (type) {
      case 'client':
        return <Globe size={18} className="text-gold" />
      case 'api':
        return <ShieldCheck size={18} className="text-gold" />
      case 'ml':
        return <Cpu size={18} className="text-gold" />
      case 'database':
        return <Database size={18} className="text-gold" />
      default:
        return <Layers size={18} className="text-gold" />
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/70 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-bg rounded-2xl shadow-2xl border border-gold/30 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Top Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold via-primary to-gold" />

            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 md:p-8 border-b border-border/60 bg-surface/50">
              <div className="space-y-1.5 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-gold/15 text-primary border border-gold/40">
                    {project.badge || 'Project Architecture'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-body text-text-secondary">
                    <Workflow size={14} className="text-gold" />
                    System Architecture & Engineering Breakdown
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-primary tracking-tight">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {project.subtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="group p-2.5 rounded-full bg-primary/5 hover:bg-primary text-primary hover:text-white transition-all duration-200 border border-border hover:border-primary flex-shrink-0"
                aria-label="Close dialog"
              >
                <X size={20} className="transition-transform group-hover:rotate-90 duration-300" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Executive Overview */}
              <div>
                <h4 className="font-body font-bold text-sm uppercase tracking-wider text-gold mb-2 flex items-center gap-2">
                  <Sparkles size={16} />
                  Overview & Problem Solved
                </h4>
                <p className="font-body text-text-primary/90 text-sm md:text-base leading-relaxed bg-surface/60 p-4 rounded-xl border border-border/50">
                  {arch.overview}
                </p>
              </div>

              {/* System Architecture Flow Diagram */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-body font-bold text-sm uppercase tracking-wider text-gold flex items-center gap-2">
                    <Workflow size={16} />
                    System Architecture Flow Diagram
                  </h4>
                  <span className="text-[11px] font-mono text-text-muted">
                    End-to-End Data Pipeline
                  </span>
                </div>

                {/* Interactive Diagram Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                  {arch.diagram.map((node, idx) => (
                    <div key={node.step} className="relative flex flex-col">
                      <div className="bg-surface rounded-xl p-4 border border-border/70 hover:border-gold/60 transition-all hover:shadow-md flex-1 flex flex-col justify-between group">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono font-bold text-gold px-2 py-0.5 rounded bg-gold/10 border border-gold/20">
                              STEP {node.step}
                            </span>
                            <div className="p-1.5 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                              {getTypeIcon(node.type)}
                            </div>
                          </div>
                          <h5 className="font-body font-bold text-primary text-sm mb-1">
                            {node.title}
                          </h5>
                          <p className="text-xs font-mono text-gold font-medium mb-2">
                            {node.tech}
                          </p>
                          <p className="text-xs text-text-secondary leading-relaxed font-body">
                            {node.description}
                          </p>
                        </div>
                      </div>

                      {/* Arrow for desktop */}
                      {idx < arch.diagram.length - 1 && (
                        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gold/60 pointer-events-none">
                          <ArrowRight size={18} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Layers & Stack */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Tech Layers */}
                <div className="bg-surface/70 rounded-xl p-5 border border-border/60">
                  <h4 className="font-body font-bold text-sm uppercase tracking-wider text-gold mb-3 flex items-center gap-2">
                    <Layers size={16} />
                    Core Architecture Layers
                  </h4>
                  <div className="space-y-3">
                    {arch.layers.map((layer) => (
                      <div key={layer.title} className="border-b border-border/40 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-body font-semibold text-primary text-sm">
                            {layer.title}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary mb-2 font-body">
                          {layer.details}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {layer.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg border border-border text-primary font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Highlights */}
                <div className="bg-surface/70 rounded-xl p-5 border border-border/60 flex flex-col justify-between">
                  <div>
                    <h4 className="font-body font-bold text-sm uppercase tracking-wider text-gold mb-3 flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      Key Implementation Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {arch.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-text-primary/90 font-body leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="pt-4 mt-4 border-t border-border/40">
                    <p className="text-[11px] font-mono text-text-muted mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-gold/10 text-primary border border-gold/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-surface border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gold-solid hover:opacity-90 font-body font-semibold text-xs text-primary shadow transition-all"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-body font-medium text-xs shadow transition-all"
                  >
                    <Github size={14} />
                    View Repository
                  </a>
                )}
              </div>

              {/* Explicit Close Button */}
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-border/80 hover:bg-primary/5 text-primary font-body text-xs font-semibold transition-colors"
              >
                Close Architecture View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
