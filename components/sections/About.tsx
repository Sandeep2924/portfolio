'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Reveal from '../ui/Reveal'

// Local photo
const PHOTO2 = '/sandeep.png'

const STATS = [
  { value:'9+',  label:'Months Experience', color:'#6EE7B7' },
  { value:'4+',  label:'Live Projects',      color:'#F472B6' },
  { value:'1',   label:'IEEE Paper',         color:'#60A5FA' },
  { value:'3',   label:'Certifications',     color:'#FBBF24' },
]

const TAGS = ['Python','React','Next.js','Node.js','MongoDB','LSTM','NLP','LLMs','TypeScript','Express.js','MySQL','Git','Tailwind','Bootstrap']

export default function About() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 })

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(244,114,182,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <p className="section-label mb-3">01 / About Me</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight">
            The Person <span className="gt-mint">Behind the Code</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Photo side */}
          <Reveal dir="left">
            <div className="relative flex justify-center">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-48 h-48 rounded-2xl border border-primary/10"
                style={{ background:'linear-gradient(135deg, rgba(110,231,183,0.05), transparent)' }} />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-2xl border border-secondary/10"
                style={{ background:'linear-gradient(135deg, rgba(244,114,182,0.05), transparent)' }} />

              {/* Main photo */}
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden border border-border glow-mint z-10">
                <img src={PHOTO2} alt="Sandeep Kumar" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0"
                  style={{ background:'linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 50%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display font-bold text-text-primary">Sandeep Kumar</p>
                  <p className="font-mono text-xs text-primary">AI/ML Engineer · Full Stack Dev</p>
                </div>
              </div>

              {/* Floating card */}
              <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
                className="absolute -right-4 top-8 card-glass rounded-2xl px-4 py-3 border border-border z-20"
              >
                <p className="font-mono text-xs text-text-muted mb-0.5">Currently at</p>
                <p className="font-display font-semibold text-sm text-text-primary">CHRIST University</p>
                <p className="font-mono text-xs text-primary">Delhi NCR</p>
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
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {STATS.map(({ value, label, color }, i) => (
            <motion.div key={label}
              initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay: i*0.1+0.2, duration:0.5 }}
              className="card-glass rounded-2xl p-6 text-center border border-border card-hover"
            >
              <p className="font-display font-extrabold text-4xl mb-1" style={{ color }}>{value}</p>
              <p className="font-mono text-xs text-text-secondary">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
