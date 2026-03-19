"use client";
import {
  useState,
  type ElementType,
  type ReactNode,
  type CSSProperties,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Brain,
  TrendingUp,
  FlaskConical,
  Car,
  Leaf,
  FileSearch,
} from "lucide-react";
import Reveal from "../ui/Reveal";

// Project mockup images — CSS/SVG generated (no external deps)

const PROJECTS = [
  {
    id: 1,
    title: "Zyagra",
    subtitle: "Smart Agri-Commerce Platform",
    desc: "A full-stack agri-commerce platform connecting farmers directly with buyers — featuring product listings, real-time inventory, JWT auth, role-based access (farmer/buyer/admin), and order management.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "REST API"],
    icon: Leaf,
    color: "#6EE7B7",
    grad: "from-[#6EE7B7]/20 to-[#60A5FA]/20",
    badge: "Full Stack",
    github: "https://github.com/Sandeep2924/Zyagra",
    live: null,
    img: null,
    featured: true,
  },
  {
    id: 2,
    title: "BhashaBot",
    subtitle: "AI Document Study Assistant",
    desc: "AI-powered document assistant analyzing PDFs, PPTs & text files via NLP pipelines and LLM integration. Provides multilingual summaries and enables natural-language queries over complex study material.",
    tags: ["Python", "NLP", "LLMs", "Document AI", "Multilingual"],
    icon: Brain,
    color: "#F472B6",
    grad: "from-[#F472B6]/20 to-[#FBBF24]/20",
    badge: "AI / NLP",
    github: "https://github.com/Sandeep2924/Bhashabot",
    live: null,
    img: null,
    featured: true,
  },
  {
    id: 3,
    title: "CryptoLens",
    subtitle: "AI Crypto Forecasting System",
    desc: "2-layer LSTM deep learning model for multi-day cryptocurrency and stock price forecasting using live OHLCV data from Yahoo Finance API. Includes interactive visualizations for predictions and training metrics.",
    tags: ["Python", "LSTM", "Deep Learning", "Yahoo Finance API", "Data Viz"],
    icon: TrendingUp,
    color: "#60A5FA",
    grad: "from-[#60A5FA]/20 to-[#6EE7B7]/20",
    badge: "Deep Learning",
    github: "https://github.com/Sandeep2924/Forecasting-System",
    live: null,
    img: null,
    featured: true,
  },
  {
    id: 4,
    title: "DriveEase",
    subtitle: "Car Rental Web Application",
    desc: "Full-stack car rental platform with real-time vehicle availability, booking workflow, normalized MySQL schema, and REST API endpoints documented with Postman. Clean admin panel for fleet management.",
    tags: ["React.js", "Node.js", "MySQL", "REST API", "Bootstrap"],
    icon: Car,
    color: "#FBBF24",
    grad: "from-[#FBBF24]/20 to-[#F472B6]/20",
    badge: "Full Stack",
    github: "https://github.com/Sandeep2924/Car-Rental-Web-Application",
    live: null,
    img: null,
    featured: false,
  },
  {
    id: 5,
    title: "Chemical Exposome",
    subtitle: "IEEE Research — Under Review",
    desc: "Multimodal transfer learning framework for predicting heavy metal bioaccumulation across the Indian chemical exposome. Applies domain adaptation on heterogeneous environmental datasets. Submitted to IEEE.",
    tags: ["Transfer Learning", "Multimodal AI", "Python", "IEEE", "Research"],
    icon: FlaskConical,
    color: "#A78BFA",
    grad: "from-[#A78BFA]/20 to-[#60A5FA]/20",
    badge: "IEEE Research",
    github: null,
    live: null,
    img: null,
    featured: false,
  },
  {
    id: 6,
    title: "ResumeAI",
    subtitle: "Smart ATS Resume Analyzer",
    desc: "AI-powered resume scoring tool that analyzes resumes against job descriptions, suggests keyword improvements, and provides ATS optimization feedback using NLP-based parsing and scoring algorithms.",
    tags: ["Python", "NLP", "React", "FastAPI", "ATS"],
    icon: FileSearch,
    color: "#34D399",
    grad: "from-[#34D399]/20 to-[#6EE7B7]/20",
    badge: "AI Tool",
    github: "https://github.com/Sandeep2924",
    live: null,
    img: null,
    featured: false,
  },
];

const FILTERS = [
  "All",
  "Full Stack",
  "AI / NLP",
  "Deep Learning",
  "IEEE Research",
  "AI Tool",
];

// Unique CSS/SVG mockup per project — no external images needed
function ProjectMockup({
  id,
  color,
  icon: Icon,
}: {
  id: number;
  color: string;
  icon: ElementType;
}) {
  const mockups: Record<number, ReactNode> = {
    // Zyagra — agri dashboard UI mockup
    1: (
      <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-60">
        <div className="flex gap-2 items-center mb-1">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
          <div className="flex-1 h-3 rounded bg-white/5 mx-2" />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="w-20 flex flex-col gap-1.5 flex-shrink-0">
            {["🌾 Crops", "🛒 Orders", "👤 Profile", "📊 Stats"].map((t) => (
              <div
                key={t}
                className="h-5 rounded text-[7px] flex items-center px-1.5 font-mono"
                style={{ background: `${color}15`, color }}
              >
                {t}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="grid grid-cols-3 gap-1.5">
              {[42, 18, 76].map((n, i) => (
                <div
                  key={i}
                  className="rounded p-1.5"
                  style={{
                    background: `${color}10`,
                    border: `1px solid ${color}25`,
                  }}
                >
                  <div
                    className="font-mono text-xs font-bold"
                    style={{ color }}
                  >
                    {n}
                  </div>
                  <div className="text-white/30 text-[7px]">
                    {["Products", "Orders", "Users"][i]}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex-1 rounded"
              style={{
                background: `${color}08`,
                border: `1px solid ${color}15`,
              }}
            >
              <div className="flex gap-1 p-1.5">
                {[60, 80, 45, 90, 55, 70, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm self-end"
                    style={{
                      height: `${h * 0.28}px`,
                      background: `${color}${30 + i * 8}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    // BhashaBot — chat/AI interface mockup
    2: (
      <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-60">
        <div className="flex gap-2 items-center mb-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: `${color}25` }}
          >
            <Icon size={12} style={{ color }} />
          </div>
          <div className="font-mono text-[9px]" style={{ color }}>
            BhashaBot AI
          </div>
          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        </div>
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          {[
            { side: "left", w: "75%", text: "Summarize Chapter 3 in Hindi" },
            {
              side: "right",
              w: "85%",
              text: "अध्याय 3 में बताया गया है कि...",
            },
            { side: "left", w: "60%", text: "Key concepts from PDF?" },
            { side: "right", w: "80%", text: "Found 5 key concepts..." },
          ].map((m, i) => (
            <div
              key={i}
              className={`flex ${m.side === "right" ? "justify-start" : "justify-end"}`}
            >
              <div
                className="px-2 py-1 rounded-xl text-[7px] font-mono"
                style={{
                  maxWidth: m.w,
                  background:
                    m.side === "left" ? `${color}20` : "rgba(255,255,255,0.06)",
                  color: m.side === "left" ? color : "rgba(255,255,255,0.5)",
                  border: `1px solid ${m.side === "left" ? color + "30" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5 items-center">
          <div
            className="flex-1 h-5 rounded-full text-[7px] flex items-center px-2 font-mono text-white/20"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            Ask anything about your docs…
          </div>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: `${color}30` }}
          >
            <div className="w-2 h-2 rounded-sm" style={{ background: color }} />
          </div>
        </div>
      </div>
    ),
    // CryptoLens — trading chart mockup
    3: (
      <div className="absolute inset-0 p-3 flex flex-col gap-2 opacity-60">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-mono text-xs font-bold" style={{ color }}>
              BTC/USD
            </span>
            <span className="font-mono text-[8px] text-green-400 ml-2">
              ▲ +3.24%
            </span>
          </div>
          <span className="font-mono text-[8px] text-white/30">
            LSTM Forecast
          </span>
        </div>
        {/* Chart */}
        <div className="flex-1 relative">
          <svg
            viewBox="0 0 200 60"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`cg${id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Historical line */}
            <path
              d="M0,50 L20,45 L40,48 L60,35 L80,30 L100,28"
              stroke={color}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,50 L20,45 L40,48 L60,35 L80,30 L100,28 L100,60 L0,60 Z"
              fill={`url(#cg${id})`}
            />
            {/* Forecast (dashed) */}
            <path
              d="M100,28 L120,22 L140,18 L160,15 L180,12 L200,10"
              stroke={color}
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,2"
              opacity="0.7"
            />
          </svg>
          {/* Price labels */}
          <div
            className="absolute top-0 right-0 font-mono text-[7px]"
            style={{ color }}
          >
            $67,420
          </div>
          <div className="absolute bottom-0 right-0 font-mono text-[7px] opacity-40">
            Predicted →
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-1">
          {[
            ["Open", "61.2k"],
            ["High", "68.4k"],
            ["Low", "60.1k"],
            ["Vol", "2.4B"],
          ].map(([l, v]) => (
            <div key={l} className="text-center">
              <div className="font-mono text-[6px] text-white/30">{l}</div>
              <div className="font-mono text-[8px]" style={{ color }}>
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    // DriveEase — car rental UI
    4: (
      <div className="absolute inset-0 p-3 flex flex-col gap-2 opacity-60">
        <div className="flex gap-2 items-center">
          <div className="font-mono text-[9px] font-bold" style={{ color }}>
            🚗 DriveEase
          </div>
          <div className="ml-auto flex gap-1">
            {["Home", "Fleet", "Book", "Admin"].map((t) => (
              <div
                key={t}
                className="font-mono text-[6px] px-1 py-0.5 rounded"
                style={{ background: `${color}15`, color }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 flex-1">
          {[
            { name: "Toyota Camry", price: "₹2,500/day", avail: true },
            { name: "Honda City", price: "₹1,800/day", avail: true },
            { name: "BMW X5", price: "₹6,000/day", avail: false },
            { name: "Swift Dzire", price: "₹1,200/day", avail: true },
          ].map((c) => (
            <div
              key={c.name}
              className="rounded-lg p-2"
              style={{
                background: `${color}08`,
                border: `1px solid ${color}20`,
              }}
            >
              <div className="font-mono text-[7px] text-white/60 mb-0.5">
                {c.name}
              </div>
              <div className="font-mono text-[8px] font-bold" style={{ color }}>
                {c.price}
              </div>
              <div
                className={`font-mono text-[6px] mt-0.5 ${c.avail ? "text-green-400" : "text-red-400/60"}`}
              >
                {c.avail ? "● Available" : "○ Booked"}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    // IEEE Research — scientific viz
    5: (
      <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-60">
        <div className="font-mono text-[8px]" style={{ color }}>
          IEEE Transactions — Under Review
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-32 h-20">
            {/* Neural network viz */}
            {[[1], [3, 2], [3, 2], [1]].map((layer, li) =>
              layer.map((_, ni) => (
                <div
                  key={`${li}-${ni}`}
                  className="absolute w-3 h-3 rounded-full border"
                  style={{
                    borderColor: color,
                    background: `${color}20`,
                    left: `${li * 34}px`,
                    top: `${(ni - (layer.length - 1) / 2) * 18 + 32}px`,
                    boxShadow: `0 0 6px ${color}40`,
                  }}
                />
              )),
            )}
            {/* Connection lines */}
            <svg
              className="absolute inset-0"
              viewBox="0 0 128 80"
              style={{ width: "100%", height: "100%" }}
            >
              {[
                [0, 34, 34, 24],
                [0, 34, 34, 40],
                [0, 34, 68, 24],
                [0, 34, 68, 40],
                [34, 24, 68, 24],
                [34, 24, 68, 40],
                [34, 40, 68, 24],
                [34, 40, 68, 40],
                [68, 24, 102, 32],
                [68, 40, 102, 32],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1 + 6}
                  y1={y1 + 6}
                  x2={x2 + 6}
                  y2={y2 + 6}
                  stroke={color}
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              ))}
            </svg>
          </div>
        </div>
        <div className="flex justify-between font-mono text-[7px]">
          <span style={{ color }} className="opacity-60">
            Transfer Learning
          </span>
          <span style={{ color }} className="opacity-60">
            Bioaccumulation
          </span>
        </div>
      </div>
    ),
    // ResumeAI — resume analyzer
    6: (
      <div className="absolute inset-0 p-3 flex flex-col gap-2 opacity-60">
        <div className="flex items-center gap-2">
          <Icon size={12} style={{ color }} />
          <span className="font-mono text-[9px]" style={{ color }}>
            ATS Score Analyzer
          </span>
        </div>
        {/* Score gauge */}
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14">
            <svg viewBox="0 0 56 56">
              <circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="4"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeDasharray={`${87 * 1.38} ${100 * 1.38}`}
                strokeLinecap="round"
                transform="rotate(-90 28 28)"
                strokeOpacity="0.8"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs font-bold" style={{ color }}>
                87
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-1.5">
            {[
              ["Keywords", "92%"],
              ["Format", "88%"],
              ["Impact", "81%"],
            ].map(([l, v]) => (
              <div key={l}>
                <div className="flex justify-between font-mono text-[6px] mb-0.5">
                  <span className="text-white/40">{l}</span>
                  <span style={{ color }}>{v}</span>
                </div>
                <div className="h-1 rounded bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{ width: v, background: color, opacity: 0.7 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="font-mono text-[7px] text-white/30 border-t border-white/5 pt-1.5">
          ✓ 12 keywords matched · ✓ ATS-safe format · ⚠ Add metrics to bullets
        </div>
      </div>
    ),
  };

  return (
    <>
      {mockups[id] ?? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={48} style={{ color, opacity: 0.3 }} />
        </div>
      )}
    </>
  );
}

type Project = (typeof PROJECTS)[number];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const Icon = p.icon;
  return (
    <motion.div
      layout
      key={p.id}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      className="group relative rounded-3xl border border-border bg-card overflow-hidden card-hover"
      style={{ "--hover-color": p.color } as CSSProperties}
    >
      {/* Project visual banner — CSS mockup, no external deps */}
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.grad}`}
      >
        <ProjectMockup id={p.id} color={p.color} icon={Icon} />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #13131c 0%, transparent 55%)",
          }}
        />
        {/* Badge */}
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono border z-10"
          style={{
            color: p.color,
            borderColor: `${p.color}40`,
            background: `${p.color}15`,
          }}
        >
          {p.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.grad} flex items-center justify-center flex-shrink-0`}
          >
            <Icon size={18} style={{ color: p.color }} />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-white transition-colors leading-tight">
              {p.title}
            </h3>
            <p className="font-mono text-xs text-text-muted">{p.subtitle}</p>
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {p.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs font-mono bg-bg border border-border text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
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
              <ExternalLink size={13} /> Live Demo
            </motion.a>
          )}
          {p.badge === "IEEE Research" && (
            <span className="flex items-center gap-1.5 text-xs font-mono text-accent">
              <FlaskConical size={13} /> Under Review
            </span>
          )}
        </div>
      </div>

      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 0 1px ${p.color}30` }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const shown =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.badge === filter || p.tags.some((t) => filter.includes(t)),
        );

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/3 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <p className="section-label mb-3">03 / Projects</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight">
            Things I've <span className="gt-mint">Shipped</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Real projects with real GitHub repos — spanning AI/ML, full-stack,
            and research.
          </p>
        </Reveal>

        {/* Filter pills */}
        <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-mono border transition-all ${
                filter === f
                  ? "bg-primary text-bg border-primary"
                  : "border-border text-text-secondary hover:border-primary/40 hover:text-text-primary bg-surface/40"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {f}
            </motion.button>
          ))}
        </Reveal>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
