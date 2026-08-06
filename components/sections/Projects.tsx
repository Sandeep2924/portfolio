'use client'
import { useState, type ElementType, type CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  ExternalLink,
  Brain,
  TrendingUp,
  FlaskConical,
  Car,
  Leaf,
  Search,
} from 'lucide-react'
import Reveal from '../ui/Reveal'

export const PROJECTS = [
  {
    id: 1,
    title: "Zyagra",
    subtitle: "Smart Agri-Commerce Platform",
    desc: "A full-stack agri-commerce platform connecting farmers directly with buyers — featuring product listings, real-time inventory, JWT auth, role-based access (farmer/buyer/admin), and order management.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "REST API"],
    icon: Leaf,
    color: "#06B6D4",
    grad: "from-[#06B6D4]/20 to-[#67E8F9]/20",
    badge: "Full Stack",
    github: "https://github.com/Sandeep2924/Zyagra",
    live: "https://zyagra.vercel.app/",
    img: "/projects/zyagra.png",
    featured: true,
  },
  {
    id: 2,
    title: "NotesAI",
    subtitle: "AI Document Study Assistant",
    desc: "AI-powered document assistant analyzing PDFs, PPTs & text files via NLP pipelines and LLM integration. Provides multilingual summaries and enables natural-language queries over complex study material.",
    tags: ["Python", "NLP", "LLMs", "Document AI", "Multilingual"],
    icon: Brain,
    color: "#D946EF",
    grad: "from-[#D946EF]/20 to-[#F0ABFC]/20",
    badge: "AI / NLP",
    github: "https://github.com/Sandeep2924/Notes-AI",
    live: "https://notes-ai.vercel.app/",
    img: "/projects/notesai.png",
    featured: true,
  },
  {
    id: 3,
    title: "CryptoLens",
    subtitle: "AI Crypto Forecasting System",
    desc: "2-layer LSTM deep learning model for multi-day cryptocurrency and stock price forecasting using live OHLCV data from Yahoo Finance API. Includes interactive visualizations for predictions and training metrics.",
    tags: ["Python", "LSTM", "Deep Learning", "Yahoo Finance API", "Data Viz"],
    icon: TrendingUp,
    color: "#8B5CF6",
    grad: "from-[#8B5CF6]/20 to-[#C4B5FD]/20",
    badge: "Deep Learning",
    github: "https://github.com/Sandeep2924/Forecasting-System",
    live: "https://forecasting-bit-coins.vercel.app/",
    img: "/projects/cryptolens.png",
    featured: true,
  },
  {
    id: 4,
    title: "ZoomCarz",
    subtitle: "Car Rental Web Application",
    desc: "Frontend car rental platform with real-time vehicle availability, booking workflow, and interactive database interfaces.",
    tags: ["React.js", "Bootstrap", "Web Dev"],
    icon: Car,
    color: "#06B6D4",
    grad: "from-[#06B6D4]/20 to-[#D946EF]/20",
    badge: "Full Stack",
    github: "https://github.com/Sandeep2924/Car-Rental-Web-Application",
    live: "https://car-rental-web-application.vercel.app/",
    img: "/projects/zoomcarz.png",
    featured: false,
  },
  {
    id: 5,
    title: "Chemical Exposome",
    subtitle: "IEEE Research Publication",
    desc: "Multimodal transfer learning framework for predicting heavy metal bioaccumulation across the Indian chemical exposome. Applies domain adaptation on heterogeneous environmental datasets. Published in IEEE Transactions.",
    tags: ["Transfer Learning", "Multimodal AI", "Python", "IEEE", "Research"],
    icon: FlaskConical,
    color: "#D946EF",
    grad: "from-[#D946EF]/20 to-[#8B5CF6]/20",
    badge: "IEEE Research",
    github: null,
    live: "https://ieeexplore.ieee.org/document/11576905",
    img: "/projects/exposome.png",
    featured: true,
  },
]

const FILTERS = ["All", "Full Stack", "AI / NLP", "Deep Learning", "IEEE Research"]

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const Icon = p.icon
  return (
    <motion.div
      layout
      key={p.id}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="group relative rounded-3xl border border-border bg-card overflow-hidden card-hover"
      style={{ '--hover-color': p.color } as CSSProperties}
    >
      {/* Visual Banner */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.grad}`}>
        {p.img ? (
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 opacity-75 group-hover:opacity-100"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon size={48} style={{ color: p.color, opacity: 0.3 }} />
          </div>
        )}
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #0a0f1d 0%, transparent 60%)',
          }}
        />
        {/* Category Badge */}
        <span
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono border z-10"
          style={{
            color: p.color,
            borderColor: `${p.color}40`,
            background: `${p.color}15`,
          }}
        >
          {p.badge}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.grad} flex items-center justify-center flex-shrink-0`}>
            <Icon size={20} style={{ color: p.color }} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-white transition-colors leading-tight">
              {p.title}
            </h3>
            <p className="font-mono text-xs text-text-muted">{p.subtitle}</p>
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {p.desc}
        </p>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-bg border border-border text-text-secondary"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Repository/Demo Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-border">
          {p.github && (
            <motion.a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors font-mono"
              whileHover={{ x: 2 }}
            >
              <Github size={13} /> View Code
            </motion.a>
          )}
          {p.live && (
            <motion.a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono hover:opacity-80 transition-opacity"
              style={{ color: p.color }}
              whileHover={{ x: 2 }}
            >
              <ExternalLink size={13} /> {p.badge === 'IEEE Research' ? 'Read Paper' : 'Live Demo'}
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 0 1px ${p.color}35` }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesFilter =
      filter === "All" || p.badge === filter || p.tags.some((t) => filter.includes(t))
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <p className="section-label mb-3">03 / Projects</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight">
            Things I've <span className="gt-mint">Shipped</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Explore production applications, algorithms, and publications.
          </p>
        </Reveal>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-12">
          {/* Category Filter Buttons */}
          <Reveal className="flex flex-wrap gap-2 justify-center md:justify-start">
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4.5 py-2 rounded-full text-xs font-mono border transition-all ${
                  filter === f
                    ? 'bg-primary text-bg border-primary'
                    : 'border-border text-text-secondary hover:border-primary/40 hover:text-text-primary bg-surface/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {f}
              </motion.button>
            ))}
          </Reveal>

          {/* Search Box */}
          <Reveal className="w-full md:w-80">
            <div className="relative">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search projects or stack..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-border bg-surface/60 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </Reveal>
        </div>

        {/* Grid Display */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-text-muted font-mono text-sm"
          >
            No projects found matching the query or filter.
          </motion.div>
        )}
      </div>
    </section>
  )
}
