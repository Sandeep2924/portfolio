'use client'
import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'

const CATEGORIES = [
  {
    title: 'AI / Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Python & Data Science', desc: 'NumPy, Pandas, Scikit-learn' },
      { name: 'LSTM / Deep Learning',  desc: 'Time-series forecasting' },
      { name: 'NLP Pipelines',         desc: 'Tokenization, classification' },
      { name: 'LLM Integration',       desc: 'OpenAI API, RAG' },
      { name: 'Transfer Learning',     desc: 'Fine-tuning models' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'HTML5 / CSS3',         desc: 'Semantic UI, Flexbox, Grid' },
      { name: 'React.js / Next.js',   desc: 'App Router, SSR, Hooks' },
      { name: 'Tailwind CSS',         desc: 'Utility-first styling' },
      { name: 'TypeScript',           desc: 'Typed components' },
      { name: 'Framer Motion',        desc: 'Page transitions, animations' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: '⚙️',
    skills: [
      { name: 'Git / GitHub',       desc: 'CI/CD workflows' },
      { name: 'MySQL / REST APIs',  desc: 'Normalized schemas' },
      { name: 'Node.js / Express',  desc: 'REST API design' },
      { name: 'MongoDB',            desc: 'Document modeling' },
      { name: 'JWT Auth',           desc: 'Token-based security' },
    ],
  },
]

function SkillPill({ skill, index }: { skill: { name: string; desc: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative cursor-default"
    >
      <div className="px-4 py-2 rounded font-body text-sm font-medium border border-border/60 bg-surface text-primary shadow-sm group-hover:border-gold/50 group-hover:bg-gold/5 transition-all">
        {skill.name}
      </div>
      
      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 rounded text-xs font-body bg-primary text-surface opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
        {skill.desc}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-primary" />
      </div>
    </motion.div>
  )
}

function CategoryCard({ cat, delay }: { cat: typeof CATEGORIES[0]; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="rounded border border-border/50 bg-card p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/40">
          <span className="text-2xl">{cat.icon}</span>
          <h3 className="font-body font-bold text-lg text-primary tracking-wide uppercase">
            {cat.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {cat.skills.map((s, i) => (
            <SkillPill key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-primary uppercase tracking-tight">
            Technical Expertise
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-text-secondary font-body">
            Hover over any skill to see its application context.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
