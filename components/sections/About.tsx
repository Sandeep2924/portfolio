'use client'
import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'

// Local photo
const PHOTO2 = '/sandeep.jpg'

const STATS = [
  { value:'9+',  label:'Months Experience', color:'#6EE7B7' },
  { value:'4+',  label:'Live Projects',      color:'#F472B6' },
  { value:'1',   label:'IEEE Paper',         color:'#60A5FA' },
  { value:'3',   label:'Certifications',     color:'#FBBF24' },
]

const TAGS = ['Python','React','Next.js','Node.js','MongoDB','LSTM','NLP','LLMs','TypeScript','Express.js','MySQL','Git','Tailwind','Bootstrap']

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="section-label mb-3">01 / About Me</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-primary">
            The Person Behind the Code
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Photo side */}
          <Reveal dir="left">
            <div className="relative flex justify-center py-4">
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-40 sm:w-48 h-40 sm:h-48 rounded-2xl border border-primary/10"
                style={{ background:'linear-gradient(135deg, rgba(212,175,55,0.05), transparent)' }} />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-40 sm:w-48 h-40 sm:h-48 rounded-2xl border border-gold/20"
                style={{ background:'linear-gradient(135deg, rgba(212,175,55,0.05), transparent)' }} />

              {/* Main photo */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border border-border shadow-lg z-10">
                <img src={PHOTO2} alt="Sandeep Kumar" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0"
                  style={{ background:'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display font-bold text-surface text-base sm:text-lg">Sandeep Kumar</p>
                  <p className="font-mono text-xs text-gold">AI/ML Engineer · Full Stack Dev</p>
                </div>
              </div>

              {/* Floating card */}
              <motion.div animate={{ y:[0,-6,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
                className="absolute right-0 sm:-right-4 top-2 sm:top-6 bg-surface rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 border border-border shadow-md z-20"
              >
                <p className="font-mono text-[10px] text-text-muted mb-0.5">Currently at</p>
                <p className="font-body font-bold text-xs sm:text-sm text-primary">CHRIST University</p>
                <p className="font-mono text-[11px] text-gold">Delhi NCR</p>
              </motion.div>
            </div>
          </Reveal>

          {/* Text side */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Hey! I'm <span className="text-text-primary font-semibold">Sandeep Kumar</span>, an MCA candidate
                building at the intersection of <span className="text-primary font-medium">Artificial Intelligence</span> and{' '}
                <span className="text-secondary font-medium">modern web engineering</span>.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-text-secondary text-base leading-relaxed">
                I've shipped real production code during 9+ months of internships — from fintech transaction systems
                at <span className="text-text-primary font-medium">Priority IDC</span> to React UI components at{' '}
                <span className="text-text-primary font-medium">SUPOF</span>. My projects span LSTM forecasting,
                LLM-integrated tools, and a full agri-commerce platform (Zyagra).
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-text-secondary text-base leading-relaxed">
                Outside of code, I'm an active <span className="text-accent font-medium">IEEE researcher</span> —
                my multimodal transfer learning paper on India's chemical exposome has been published in IEEE Transactions.
              </p>
            </Reveal>

            {/* Tag cloud */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2 pt-2">
                {TAGS.map((t, i) => (
                  <motion.span key={t}
                    initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
                    transition={{ delay: i*0.03 }}
                    whileHover={{ scale:1.1, y:-2 }}
                    className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-surface text-text-secondary hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >{t}</motion.span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {STATS.map(({ value, label, color }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.1, duration: 0.4 }}
              className="card-glass rounded-2xl p-5 sm:p-6 text-center border border-border shadow-sm card-hover"
            >
              <p className="font-display font-extrabold text-3xl sm:text-4xl mb-1" style={{ color }}>{value}</p>
              <p className="font-mono text-xs text-text-secondary">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
