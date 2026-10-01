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
import ProjectModal, { ProjectData } from '../modals/ProjectModal'
import { Workflow } from 'lucide-react'

export const PROJECTS = [
  {
    id: 6,
    title: "RetainAI",
    subtitle: "AI Customer Retention Dashboard",
    desc: "An intelligent full-stack application designed to analyze customer behavior, predict churn, and optimize retention strategies using machine learning models.",
    tags: ["React.js", "Node.js", "AI/ML", "Analytics"],
    icon: TrendingUp,
    color: "#D4AF37",
    grad: "from-[#D4AF37]/20 to-[#FBBF24]/20",
    badge: "AI / Full Stack",
    github: "https://github.com/Sandeep2924/RetainAI",
    live: "https://retain-ai-olive.vercel.app/",
    img: null,
    featured: true,
    architecture: {
      overview: "RetainAI is an end-to-end customer retention intelligence platform. It tracks user behavior telemetry, calculates recency, frequency, and monetary (RFM) engagement scores, and employs predictive machine learning models to identify at-risk customers with automated retention intervention suggestions.",
      diagram: [
        {
          step: "01",
          title: "Telemetry & UI",
          tech: "React 18 / Tailwind / Vercel",
          description: "Interactive dashboard displaying cohort health, retention curves, and churn probability meters.",
          type: "client" as const,
        },
        {
          step: "02",
          title: "API & Ingestion Gateway",
          tech: "Express.js / Node.js REST API",
          description: "Ingests client behavioral events, applies JWT verification, and processes batch session payloads.",
          type: "api" as const,
        },
        {
          step: "03",
          title: "Churn Prediction Engine",
          tech: "Machine Learning / Scikit-Learn",
          description: "Extracts behavioral features, runs classification models, and outputs dynamic churn risk percentiles.",
          type: "ml" as const,
        },
        {
          step: "04",
          title: "Data & Intervention Store",
          tech: "MongoDB / Cloud Store",
          description: "Persists customer event time-series, historical risk scores, and automated campaign tracking.",
          type: "database" as const,
        },
      ],
      layers: [
        {
          title: "Client & Analytical Visualizations",
          tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
          details: "Modular component architecture providing responsive data tables, churn risk heatmaps, and strategy controls.",
        },
        {
          title: "API & Authentication Layer",
          tech: ["Node.js", "Express.js", "JWT", "REST API"],
          details: "Microservice-ready REST endpoints with rate limiting, input sanitization, and structured error responses.",
        },
        {
          title: "Predictive AI & Feature Engineering",
          tech: ["Python", "Scikit-Learn", "RFM Scoring", "Decision Trees"],
          details: "Calculates customer lifetime value (CLV) and predicts churn probability based on historical usage decay.",
        },
        {
          title: "Storage & Deployment Infrastructure",
          tech: ["MongoDB Atlas", "Vercel", "Git CI/CD"],
          details: "Continuous deployment on Vercel with high-availability database cluster and indexing on customer IDs.",
        },
      ],
      highlights: [
        "Real-time predictive churn probability scoring and risk stratification",
        "Automated retention recommendations based on engagement thresholds",
        "Full-stack decoupled architecture with high-performance REST APIs",
      ],
    },
  },
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
    architecture: {
      overview: "Zyagra eliminates agricultural middlemen by providing a transparent digital marketplace where verified farmers directly list their produce, negotiate with wholesale buyers, and process verifiable orders.",
      diagram: [
        {
          step: "01",
          title: "Multi-Role Client Portal",
          tech: "React.js / Responsive UI",
          description: "Custom role-tailored dashboards for Farmers (commodity listings), Buyers (bidding/procurement), and Admins.",
          type: "client" as const,
        },
        {
          step: "02",
          title: "API Gateway & Security",
          tech: "Express.js / JWT Auth",
          description: "Route guard middleware enforcing Role-Based Access Control (RBAC) and validating transaction payloads.",
          type: "api" as const,
        },
        {
          step: "03",
          title: "Inventory & Order Engine",
          tech: "Node.js REST Services",
          description: "Real-time stock validation, automated price discovery algorithms, and payment state machines.",
          type: "api" as const,
        },
        {
          step: "04",
          title: "Document Persistence",
          tech: "MongoDB / Mongoose",
          description: "Normalized collections for agricultural produce, bidding histories, user profiles, and order invoices.",
          type: "database" as const,
        },
      ],
      layers: [
        {
          title: "Frontend Experience",
          tech: ["React.js", "Tailwind CSS", "Axios", "Context API"],
          details: "State management for multi-step product uploading, real-time bidding, and responsive order tables.",
        },
        {
          title: "Security & Middleware",
          tech: ["JWT", "Bcrypt", "CORS", "Express Validator"],
          details: "Stateless token-based authentication with encrypted password credentials and request sanitization.",
        },
        {
          title: "Database Architecture",
          tech: ["MongoDB Atlas", "Mongoose ORM"],
          details: "Geospatial queries for local agricultural sourcing and indexed lookups on crop categories.",
        },
      ],
      highlights: [
        "End-to-end role-based access control (Farmer, Buyer, Admin)",
        "Real-time commodity inventory management and transaction flows",
        "Streamlined supply chain connectivity cutting intermediary fees",
      ],
    },
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
    architecture: {
      overview: "NotesAI leverages Retrieval-Augmented Generation (RAG) and natural language pipelines to allow students and researchers to interactively converse with complex academic textbooks, research papers, and multilingual notes.",
      diagram: [
        {
          step: "01",
          title: "Document Studio Interface",
          tech: "Next.js / React UI",
          description: "Split-view PDF reader with real-time streaming AI chat and multilingual language selectors.",
          type: "client" as const,
        },
        {
          step: "02",
          title: "Extraction & Chunking",
          tech: "PyPDF / OCR Extractors",
          description: "Tokenizes unstructured documents into semantic paragraphs with preserved heading hierarchies.",
          type: "api" as const,
        },
        {
          step: "03",
          title: "Vector Embeddings & RAG",
          tech: "OpenAI API / Vector Search",
          description: "Computes dense text embeddings, retrieves relevant chunks via cosine similarity, and synthesizes answers.",
          type: "ml" as const,
        },
        {
          step: "04",
          title: "Session & Vector Store",
          tech: "Cloud Vector DB / Cache",
          description: "Indexes document embeddings for fast sub-second semantic retrieval across thousands of pages.",
          type: "database" as const,
        },
      ],
      layers: [
        {
          title: "User Interface",
          tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown Parser"],
          details: "Interactive split-screen PDF preview and conversational stream output.",
        },
        {
          title: "NLP & LLM Pipelines",
          tech: ["Python", "OpenAI LLMs", "LangChain", "Text Embeddings"],
          details: "Semantic chunking, context injection, and hallucination reduction via grounded document references.",
        },
      ],
      highlights: [
        "Retrieval-Augmented Generation (RAG) architecture for factual grounding",
        "Multilingual summarization and cross-lingual question answering",
        "Sub-second vector semantic search over complex research documents",
      ],
    },
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
    architecture: {
      overview: "CryptoLens captures non-linear temporal dependencies in financial market data through a recurrent neural network architecture, forecasting multi-day price movements from historical OHLCV series.",
      diagram: [
        {
          step: "01",
          title: "Financial Dashboard UI",
          tech: "React.js / Chart.js",
          description: "Interactive candlestick charts, confidence bands, and forecasted price trajectory overlays.",
          type: "client" as const,
        },
        {
          step: "02",
          title: "Market Ingestion Feed",
          tech: "Yahoo Finance API / REST",
          description: "Pulls real-time Open, High, Low, Close, and Volume indicators for cryptocurrencies and equities.",
          type: "api" as const,
        },
        {
          step: "03",
          title: "2-Layer LSTM Model",
          tech: "TensorFlow / Keras / PyTorch",
          description: "Stacked recurrent layers with Dropout (0.2) and Adam optimizer minimizing MSE loss over sequential data.",
          type: "ml" as const,
        },
        {
          step: "04",
          title: "Inference Cache",
          tech: "Python Engine / Cloud Host",
          description: "Calculates rolling inference windows and serves cached predictions to client visualizers.",
          type: "database" as const,
        },
      ],
      layers: [
        {
          title: "Client & Visualization",
          tech: ["React.js", "Chart.js", "Tailwind CSS"],
          details: "Responsive financial visualizer comparing simulated forecasts against actual market closes.",
        },
        {
          title: "Machine Learning Pipeline",
          tech: ["Python", "Keras", "TensorFlow", "Pandas", "NumPy"],
          details: "Sliding-window sequence generation with MinMaxScaler normalization (0, 1) and inverse transforms.",
        },
      ],
      highlights: [
        "Stacked 2-layer LSTM neural network architecture for sequential data",
        "Real-time financial ingestion with automated feature normalization",
        "Interactive comparison of predictions with historical validation curves",
      ],
    },
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
    architecture: {
      overview: "Published in IEEE Xplore, this environmental AI research introduces a multimodal transfer learning model with domain adaptation to predict toxic heavy metal bioaccumulation across heterogeneous geographical regions in India.",
      diagram: [
        {
          step: "01",
          title: "Multi-Source Exposome Data",
          tech: "Heterogeneous Datasets",
          description: "Aggregates groundwater, soil composition, and human bioaccumulation records across India.",
          type: "client" as const,
        },
        {
          step: "02",
          title: "Feature Normalization",
          tech: "Data Science / Pandas",
          description: "Multivariate outlier detection, cross-regional imputation, and geochemical feature alignment.",
          type: "api" as const,
        },
        {
          step: "03",
          title: "Transfer Learning Model",
          tech: "PyTorch / Domain Adaptation",
          description: "Cross-domain deep learning network bridging disparate regional environmental data distributions.",
          type: "ml" as const,
        },
        {
          step: "04",
          title: "IEEE Publication & Peer Review",
          tech: "Scientific Validation",
          description: "Empirically validated models and methodology indexed in IEEE Transactions (#11576905).",
          type: "database" as const,
        },
      ],
      layers: [
        {
          title: "Data Engineering",
          tech: ["Python", "NumPy", "Pandas", "SciPy"],
          details: "Cleaning and domain normalization of non-stationary Indian geochemical exposome data.",
        },
        {
          title: "Model Architecture",
          tech: ["PyTorch", "Transfer Learning", "Domain Adaptation"],
          details: "Deep neural network architecture designed to overcome spatial distribution shifts.",
        },
      ],
      highlights: [
        "Peer-reviewed scientific research published in IEEE Xplore",
        "Novel domain adaptation framework solving cross-regional environmental heterogeneity",
        "Validated predictive accuracy for chemical bioaccumulation toxicity",
      ],
    },
  },
]

const FILTERS = ["All", "Full Stack", "AI / NLP", "Deep Learning", "IEEE Research"]

function ProjectCard({ p, i, onSelect }: { p: typeof PROJECTS[0]; i: number; onSelect: (p: typeof PROJECTS[0]) => void }) {
  const Icon = p.icon
  return (
    <motion.div
      layout
      key={p.id}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      onClick={() => onSelect(p)}
      className="group relative rounded-3xl border border-border bg-card overflow-hidden card-hover cursor-pointer"
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
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold border border-gold/30 group-hover:scale-110 transition-transform">
              <Workflow size={24} />
            </div>
            <span className="text-xs font-mono font-medium text-text-muted">
              Inspect Architecture
            </span>
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

        {/* Repository/Demo/Architecture Links */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onSelect(p)
            }}
            className="flex items-center gap-1.5 text-xs font-mono font-semibold text-gold hover:text-gold/80 transition-colors"
          >
            <Workflow size={13} /> Architecture Diagram
          </button>

          <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
            {p.github && (
              <motion.a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary transition-colors font-mono"
                whileHover={{ x: 2 }}
                title="View Code"
              >
                <Github size={13} /> Code
              </motion.a>
            )}
            {p.live && (
              <motion.a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-mono hover:opacity-80 transition-opacity"
                style={{ color: p.color }}
                whileHover={{ x: 2 }}
                title="Live Demo"
              >
                <ExternalLink size={13} /> {p.badge === 'IEEE Research' ? 'Paper' : 'Live'}
              </motion.a>
            )}
          </div>
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
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

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
            Explore production applications, algorithms, and publications with interactive architecture diagrams.
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
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium whitespace-nowrap inline-flex items-center justify-center border transition-all ${
                  filter === f
                    ? 'bg-primary text-surface border-primary shadow-sm'
                    : 'border-border/80 text-text-secondary hover:border-gold hover:text-primary bg-surface shadow-sm'
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
              <ProjectCard
                key={p.id}
                p={p}
                i={i}
                onSelect={(proj) => setSelectedProject(proj as unknown as ProjectData)}
              />
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

      {/* Architecture Pop-up Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
