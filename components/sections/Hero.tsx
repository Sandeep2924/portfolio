'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'

const ROLES = ['AI/ML Engineer','Full Stack Developer','IEEE Researcher','Deep Learning Builder','Agri-Tech Innovator']

// Local photo (from public folder)
const PHOTO_URL = '/sandeep.png'

export default function Hero() {
  const [idx, setIdx]         = useState(0)
  const [shown, setShown]     = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const cur = ROLES[idx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && shown.length < cur.length)       t = setTimeout(() => setShown(cur.slice(0, shown.length+1)), 75)
    else if (!deleting && shown.length === cur.length) t = setTimeout(() => setDeleting(true), 2000)
    else if (deleting && shown.length > 0)             t = setTimeout(() => setShown(cur.slice(0, shown.length-1)), 38)
    else { setDeleting(false); setIdx(i => (i+1)%ROLES.length) }
    return () => clearTimeout(t)
  }, [shown, deleting, idx])

  const SOCIALS = [
    { icon: Github,   href:'https://github.com/Sandeep2924',              label:'GitHub' },
    { icon: Linkedin, href:'https://www.linkedin.com/in/sandeep-kumar14', label:'LinkedIn' },
    { icon: Mail,     href:'mailto:sandeepkumar362924@gmail.com',         label:'Email' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* ── Background orbs ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x:[0,70,0], y:[0,-50,0], scale:[1,1.2,1] }}
          transition={{ duration:20, repeat:Infinity, ease:'easeInOut' }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background:'radial-gradient(circle, rgba(110,231,183,0.12) 0%, transparent 70%)' }} />
        <motion.div animate={{ x:[0,-60,0], y:[0,60,0] }}
          transition={{ duration:25, repeat:Infinity, ease:'easeInOut', delay:4 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background:'radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)' }} />
        <motion.div animate={{ x:[0,40,-40,0], y:[0,-40,40,0] }}
          transition={{ duration:30, repeat:Infinity, ease:'easeInOut', delay:8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background:'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)' }} />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize:'80px 80px' }} />

        {/* Floating particles */}
        {[...Array(14)].map((_,i) => (
          <motion.div key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left:`${8+i*6.5}%`, top:`${15+((i*37)%65)}%`,
              background: i%3===0 ? '#6EE7B7' : i%3===1 ? '#F472B6' : '#60A5FA',
              opacity: 0.25+((i%4)*0.1),
            }}
            animate={{ y:[-12,12,-12], opacity:[0.2,0.5,0.2] }}
            transition={{ duration:3+i*0.4, repeat:Infinity, ease:'easeInOut', delay:i*0.3 }}
          />
        ))}
      </div>

      {/* ── Content grid ────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-20">

        {/* LEFT: Text */}
        <div>
          {/* Status badge */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-text-secondary">Open to opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.7, ease:[0.22,1,0.36,1] }}
            className="font-display font-extrabold text-5xl md:text-7xl leading-none tracking-tight mb-4"
          >
            <span className="text-text-primary block">Sandeep</span>
            <span className="gt-full block">Kumar</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.35 }}
            className="flex items-center gap-2 mb-5 h-9"
          >
            <span className="font-mono text-sm text-text-muted">~/</span>
            <span className="font-display font-semibold text-xl md:text-2xl text-text-primary">
              {shown}<span className="inline-block w-[2px] h-6 bg-primary ml-0.5 animate-pulse" />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45, duration:0.6 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            MCA candidate at <span className="text-primary font-medium">CHRIST University</span> building
            intelligent AI/ML systems, full-stack platforms, and published IEEE research.
            9+ months of production internship experience.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <motion.button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior:'smooth' })}
              className="px-7 py-3 rounded-full font-display font-semibold text-sm text-bg glow-mint"
              style={{ background:'linear-gradient(135deg,#6EE7B7,#60A5FA)' }}
              whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.97 }}
            >View Projects</motion.button>

            <motion.a href="/Sandeep_Kumar_Resume.pdf" download="Sandeep_Kumar_Resume.pdf"
              className="flex items-center gap-2 px-7 py-3 rounded-full font-display font-semibold text-sm border border-border bg-surface/50 text-text-primary hover:border-primary/50 transition-all"
              whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.97 }}
            >
              <Download size={15} /> Download CV
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }}
            className="flex items-center gap-3"
          >
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-full border border-border bg-surface/50 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-all"
                whileHover={{ scale:1.15, y:-3 }} whileTap={{ scale:0.9 }}
              ><Icon size={17} /></motion.a>
            ))}
            <span className="w-16 h-px bg-border ml-1" />
            <span className="font-mono text-xs text-text-muted">@Sandeep2924</span>
          </motion.div>
        </div>

        {/* RIGHT: Photo + floating rings */}
        <motion.div initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }}
          transition={{ delay:0.3, duration:0.8, ease:[0.22,1,0.36,1] }}
          className="flex items-center justify-center relative"
        >
          {/* Spinning ring */}
          <motion.div animate={{ rotate:360 }} transition={{ duration:20, repeat:Infinity, ease:'linear' }}
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-primary/20"
          />
          <motion.div animate={{ rotate:-360 }} transition={{ duration:30, repeat:Infinity, ease:'linear' }}
            className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-secondary/15"
          />

          {/* Photo frame */}
          <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/40 glow-mint"
          >
            <img
              src={PHOTO_URL}
              alt="Sandeep Kumar"
              className="w-full h-full object-cover object-top"
            />
            {/* Overlay shimmer */}
            <div className="absolute inset-0 rounded-full"
              style={{ background:'linear-gradient(135deg, rgba(110,231,183,0.08) 0%, transparent 60%, rgba(244,114,182,0.08) 100%)' }} />
          </motion.div>

          {/* Floating stat chips */}
          {[
            { label:'IEEE Researcher',  color:'#6EE7B7', x:'-left-4 top-8'  },
            { label:'9mo Experience',   color:'#F472B6', x:'right-0 bottom-12' },
            { label:'AI/ML Projects',   color:'#60A5FA', x:'left-2 bottom-4' },
          ].map(({ label, color, x }) => (
            <motion.div key={label}
              className={`absolute ${x} px-3 py-1.5 rounded-full text-xs font-mono card-glass border`}
              style={{ borderColor: `${color}40`, color }}
              animate={{ y:[0,-5,0] }} transition={{ duration:3+Math.random()*2, repeat:Infinity, ease:'easeInOut' }}
            >{label}</motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior:'smooth' })}
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted hover:text-primary transition-colors"
      >
        <span className="font-mono text-xs">scroll</span>
        <motion.div animate={{ y:[0,5,0] }} transition={{ duration:1.4, repeat:Infinity }}>
          <ArrowDown size={15} />
        </motion.div>
      </motion.button>
    </section>
  )
}
