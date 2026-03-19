'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../ui/Reveal'

const CATEGORIES = [
  {
    title: 'AI / Machine Learning',
    color: '#6EE7B7',
    lightColor: '#059669',
    lightBg: '#ECFDF5',
    lightBorder: '#A7F3D0',
    icon: '🤖',
    skills: [
      { name: 'Python & Data Science', desc: 'NumPy, Pandas, Scikit-learn, Jupyter' },
      { name: 'LSTM / Deep Learning',  desc: 'Time-series forecasting, multi-layer LSTM' },
      { name: 'NLP Pipelines',         desc: 'Tokenization, embeddings, text classification' },
      { name: 'LLM Integration',       desc: 'OpenAI API, prompt engineering, RAG' },
      { name: 'Transfer Learning',     desc: 'Domain adaptation, fine-tuning pretrained models' },
    ],
  },
  {
    title: 'Frontend Development',
    color: '#F472B6',
    lightColor: '#DB2777',
    lightBg: '#FDF2F8',
    lightBorder: '#FBCFE8',
    icon: '🎨',
    skills: [
      { name: 'HTML5 / CSS3',         desc: 'Semantic HTML, Flexbox, Grid, animations' },
      { name: 'React.js / Next.js',   desc: 'Hooks, App Router, SSR, SSG, RSC' },
      { name: 'Tailwind / Bootstrap', desc: 'Utility-first styling, responsive systems' },
      { name: 'TypeScript',           desc: 'Typed components, generics, utility types' },
      { name: 'Framer Motion',        desc: 'Page transitions, scroll triggers, variants' },
    ],
  },
  {
    title: 'Backend & Databases',
    color: '#60A5FA',
    lightColor: '#2563EB',
    lightBg: '#EFF6FF',
    lightBorder: '#BFDBFE',
    icon: '⚙️',
    skills: [
      { name: 'Git / GitHub',       desc: 'Branching, PRs, CI workflows, open source' },
      { name: 'MySQL / REST APIs',  desc: 'Normalized schemas, CRUD, Postman testing' },
      { name: 'Node.js / Express',  desc: 'REST API design, middleware, routing' },
      { name: 'MongoDB',            desc: 'Document modeling, aggregation, indexing' },
      { name: 'JWT Auth',           desc: 'Token-based auth, refresh tokens, RBAC' },
    ],
  },
]

const MARQUEE_ITEMS = [
  'Python','React','Next.js','Node.js','MongoDB','Express.js','MySQL','TypeScript',
  'Tailwind CSS','LSTM','NLP','LLMs','Transfer Learning','REST APIs','Git',
  'Framer Motion','Bootstrap','Postman','Vercel','Jupyter','Scikit-learn','Pandas',
]

function SkillPill({
  skill, color, lightColor, isLight, index,
}: {
  skill: { name: string; desc: string }
  color: string; lightColor: string; isLight: boolean; index: number
}) {
  const [hovered, setHovered] = useState(false)
  const accent = isLight ? lightColor : color

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: [0.22,1,0.36,1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-default"
    >
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1, y: hovered ? -2 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="px-4 py-2 rounded-2xl font-mono text-sm font-medium select-none"
        style={{
          background: hovered
            ? isLight ? `${accent}18` : `${accent}22`
            : isLight ? 'rgba(255,255,255,0.75)' : 'rgba(19,19,28,0.7)',
          border: `1.5px solid ${hovered ? accent+'65' : isLight ? accent+'35' : accent+'28'}`,
          color: hovered ? accent : isLight ? '#374151' : 'rgba(240,240,255,0.72)',
          boxShadow: hovered
            ? `0 4px 18px ${accent}28, 0 0 0 1px ${accent}18`
            : isLight ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease',
        }}
      >
        {skill.name}
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.94 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 -translate-x-1/2 z-40 px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap pointer-events-none"
            style={{
              bottom: '-44px',
              background: '#13131c',
              border: `1px solid ${accent}38`,
              color: 'rgba(240,240,255,0.85)',
              boxShadow: `0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px ${accent}12`,
            }}
          >
            {skill.desc}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CategoryCard({ cat, isLight, delay }: { cat: typeof CATEGORIES[0]; isLight: boolean; delay: number }) {
  const accent = isLight ? cat.lightColor : cat.color
  return (
    <Reveal delay={delay}>
      <div
        className="rounded-3xl p-6 h-full"
        style={{
          background: isLight ? cat.lightBg : 'rgba(19,19,28,0.65)',
          border: `1.5px solid ${isLight ? cat.lightBorder : accent+'28'}`,
          backdropFilter: 'blur(16px)',
          boxShadow: isLight
            ? `0 4px 24px ${cat.lightColor}12, inset 0 1px 0 rgba(255,255,255,0.9)`
            : `0 4px 24px ${cat.color}08`,
          transition: 'all 0.5s ease',
        }}
      >
        <div className="flex items-center gap-3 mb-5 pb-4"
          style={{ borderBottom: `1px solid ${isLight ? cat.lightBorder : accent+'20'}` }}>
          <motion.span className="text-2xl" whileHover={{ rotate: [0,15,-10,0] }} transition={{ duration: 0.5 }}>
            {cat.icon}
          </motion.span>
          <h3 className="font-display font-bold text-base tracking-tight flex-1"
            style={{ color: isLight ? '#111827' : '#F0F0FF' }}>
            {cat.title}
          </h3>
          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: accent, boxShadow: `0 0 8px ${accent}` }} />
        </div>

        <div className="flex flex-wrap gap-2">
          {cat.skills.map((s, i) => (
            <SkillPill key={s.name} skill={s} color={cat.color} lightColor={cat.lightColor} isLight={isLight} index={i} />
          ))}
        </div>

        <div className="mt-5 pt-4 flex items-center justify-between"
          style={{ borderTop: `1px solid ${isLight ? cat.lightBorder : accent+'15'}` }}>
          <span className="font-mono text-xs" style={{ color: isLight ? '#9CA3AF' : 'rgba(240,240,255,0.3)' }}>
            {cat.skills.length} skills
          </span>
          <div className="flex gap-1.5">
            {cat.skills.map((_, i) => (
              <motion.div key={i} className="w-1.5 h-1.5 rounded-full"
                style={{ background: accent, opacity: 0.4 + i * 0.12 }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  const [isLight, setIsLight] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden"
      style={{
        background: isLight
          ? 'linear-gradient(135deg, #f0fdf4 0%, #fdf2f8 45%, #eff6ff 100%)'
          : 'transparent',
        transition: 'background 0.7s ease',
      }}
    >
      {/* Background glows */}
      {!isLight && (
        <>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.06) 0%, transparent 70%)' }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 70%)' }} />
        </>
      )}
      {isLight && (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(167,243,208,0.45) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(251,207,232,0.45) 0%, transparent 60%)' }} />
          <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(191,219,254,0.4) 0%, transparent 60%)' }} />
        </>
      )}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <Reveal className="text-center mb-10">
          <p className="section-label mb-3" style={{ color: isLight ? '#059669' : undefined }}>
            02 / Skills
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight"
            style={{ color: isLight ? '#111827' : undefined }}>
            My Tech{' '}
            <span
              className={isLight ? '' : 'gt-pink'}
              style={isLight ? {
                background: 'linear-gradient(135deg,#DB2777,#F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              } : undefined}
            >
              Arsenal
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm"
            style={{ color: isLight ? '#6B7280' : 'rgba(240,240,255,0.5)' }}>
            Hover any skill to see what I use it for.
          </p>

          {/* Theme toggle */}
          <div className="flex justify-center mt-7">
            <motion.button
              onClick={() => setIsLight(v => !v)}
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl font-mono text-xs font-medium cursor-pointer"
              style={{
                background: isLight ? 'rgba(255,255,255,0.85)' : 'rgba(19,19,28,0.85)',
                border: `1.5px solid ${isLight ? '#A7F3D0' : 'rgba(110,231,183,0.25)'}`,
                color: isLight ? '#059669' : '#6EE7B7',
                boxShadow: isLight ? '0 2px 14px rgba(5,150,105,0.15)' : '0 2px 14px rgba(110,231,183,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="relative w-8 h-4 rounded-full transition-colors duration-300"
                style={{ background: isLight ? '#059669' : 'rgba(110,231,183,0.2)' }}>
                <motion.div
                  className="absolute top-0.5 w-3 h-3 rounded-full"
                  animate={{ left: isLight ? '17px' : '2px' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  style={{ background: isLight ? '#fff' : '#6EE7B7' }}
                />
              </div>
              <span>{isLight ? '☀️ Light mode' : '🌑 Dark mode'}</span>
            </motion.button>
          </div>
        </Reveal>

        {/* Mobile tabs */}
        <div className="md:hidden mb-6">
          <div className="flex rounded-2xl p-1 gap-1"
            style={{
              background: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(19,19,28,0.6)',
              border: `1px solid ${isLight ? '#E5E7EB' : 'rgba(255,255,255,0.08)'}`,
            }}>
            {CATEGORIES.map((cat, i) => {
              const accent = isLight ? cat.lightColor : cat.color
              return (
                <motion.button key={cat.title} onClick={() => setActiveTab(i)}
                  className="flex-1 py-2 px-2 rounded-xl font-mono text-xs transition-all relative"
                  style={{ color: activeTab === i ? '#fff' : accent }}>
                  {activeTab === i && (
                    <motion.div layoutId="mob-tab-bg" className="absolute inset-0 rounded-xl"
                      style={{ background: accent }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                  )}
                  <span className="relative z-10">{cat.icon}</span>
                </motion.button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={`${activeTab}-${isLight}`}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl p-5 mt-3"
              style={{
                background: isLight ? CATEGORIES[activeTab].lightBg : 'rgba(19,19,28,0.7)',
                border: `1.5px solid ${isLight ? CATEGORIES[activeTab].lightBorder : (isLight ? CATEGORIES[activeTab].lightColor : CATEGORIES[activeTab].color)+'28'}`,
              }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{CATEGORIES[activeTab].icon}</span>
                <h3 className="font-display font-semibold text-sm flex-1"
                  style={{ color: isLight ? '#111827' : '#F0F0FF' }}>
                  {CATEGORIES[activeTab].title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES[activeTab].skills.map((s, si) => (
                  <SkillPill key={s.name} skill={s}
                    color={CATEGORIES[activeTab].color}
                    lightColor={CATEGORIES[activeTab].lightColor}
                    isLight={isLight} index={si} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-5 mb-12">
          {CATEGORIES.map((cat, ci) => (
            <CategoryCard key={cat.title} cat={cat} isLight={isLight} delay={ci * 0.1} />
          ))}
        </div>

        {/* Marquee */}
        <Reveal>
          <div className="rounded-2xl py-5 overflow-hidden relative"
            style={{
              background: isLight ? 'rgba(255,255,255,0.65)' : 'rgba(19,19,28,0.5)',
              border: `1px solid ${isLight ? '#E5E7EB' : 'rgba(255,255,255,0.06)'}`,
              backdropFilter: 'blur(12px)',
              transition: 'all 0.5s ease',
            }}>
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10"
              style={{ background: isLight ? 'linear-gradient(to right,rgba(240,253,244,0.95),transparent)' : 'linear-gradient(to right,#050508,transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10"
              style={{ background: isLight ? 'linear-gradient(to left,rgba(239,246,255,0.95),transparent)' : 'linear-gradient(to left,#050508,transparent)' }} />
            <div className="marquee-track">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => {
                const c = CATEGORIES[i % 3]
                const accent = isLight ? c.lightColor : c.color
                return (
                  <span key={i} className="flex items-center gap-3 px-5">
                    <span className="font-mono text-sm whitespace-nowrap font-medium"
                      style={{ color: isLight ? accent : 'rgba(240,240,255,0.52)', transition: 'color 0.5s' }}>
                      {item}
                    </span>
                    <span className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: isLight ? accent+'70' : 'rgba(110,231,183,0.3)' }} />
                  </span>
                )
              })}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
