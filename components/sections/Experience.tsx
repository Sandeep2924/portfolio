'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Award, FlaskConical } from 'lucide-react'
import Reveal from '../ui/Reveal'

const ITEMS = [
  {
    type:'work', icon: Briefcase, color:'#6EE7B7',
    title:'Analyst Intern — Subscriber Services Group',
    org:'Priority IDC Private Limited', loc:'Chandigarh, India', period:'Jan 2025 – Jun 2025',
    bullets:[
      'Built transaction validation logic across 6+ client portals, eliminating real-time submission errors.',
      'Developed React state management module for financial transaction lifecycle tracking.',
      'Led responsive UI testing across 5+ client configurations, resolving 30+ cross-device issues before production.',
      'Implemented secure JWT credential handling and client-specific authentication flows.',
    ],
  },
  {
    type:'work', icon: Briefcase, color:'#F472B6',
    title:'Frontend Developer Intern',
    org:'SUPOF Pvt. Ltd.', loc:'Chandigarh, India', period:'Sep 2022 – Mar 2023',
    bullets:[
      'Built 10+ reusable React.js component libraries, reducing redundant front-end code by ~35%.',
      'Delivered fully responsive layouts using HTML5, CSS3, Bootstrap across all browsers.',
      'Resolved 20+ cross-browser compatibility bugs through systematic frontend testing.',
    ],
  },
  {
    type:'research', icon: FlaskConical, color:'#A78BFA',
    title:'IEEE Research Submission',
    org:'Simulating the Indian Chemical Exposome', loc:'Multimodal Transfer Learning Framework', period:'2024 – Present',
    bullets:[
      'Developed a multimodal deep learning framework for predicting heavy metal bioaccumulation.',
      'Applied domain adaptation techniques on heterogeneous environmental datasets.',
      'Paper submitted to IEEE Transactions — currently under peer review.',
    ],
  },
  {
    type:'edu', icon: GraduationCap, color:'#60A5FA',
    title:'Master of Computer Applications (MCA)',
    org:'CHRIST (Deemed to be University)', loc:'Delhi NCR, Ghaziabad', period:'2025 – Expected May 2027',
    bullets:['GPA: 3.29 / 4.0','Specialization: AI/ML & Web Engineering'],
  },
  {
    type:'edu', icon: GraduationCap, color:'#34D399',
    title:'Master of Computer Applications (MCA)',
    org:'Chandigarh University', loc:'Mohali, Punjab', period:'Completed May 2025',
    bullets:['GPA: 6.97 / 10'],
  },
  {
    type:'cert', icon: Award, color:'#FBBF24',
    title:'Certifications',
    org:'NPTEL · Johns Hopkins · Rice University (Coursera)', loc:'', period:'2023 – 2024',
    bullets:[
      'Privacy & Security in Online Social Media — NPTEL Govt. of India, 12-Week | 2023',
      'HTML, CSS & JS for Web Developers — Johns Hopkins University | 2024',
      'Interactive Programming in Python — Rice University | 2024',
    ],
  },
]

function Item({ item, index }: { item: typeof ITEMS[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 })
  const Icon = item.icon

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, x: index%2===0 ? -30 : 30 }}
      animate={inView ? { opacity:1, x:0 } : {}}
      transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
      className="relative flex gap-5 group"
    >
      {/* Icon + line */}
      <div className="flex flex-col items-center flex-shrink-0 w-10">
        <motion.div whileHover={{ scale:1.15 }}
          className="w-10 h-10 rounded-xl flex items-center justify-center border border-border bg-surface z-10"
          style={{ boxShadow:`0 0 18px ${item.color}30` }}
        >
          <Icon size={17} style={{ color:item.color }} />
        </motion.div>
        {index < ITEMS.length-1 && (
          <div className="w-px flex-1 mt-2 min-h-[2rem]"
            style={{ background:`linear-gradient(to bottom, ${item.color}50, transparent)` }} />
        )}
      </div>

      {/* Card */}
      <div className="pb-10 flex-1 min-w-0">
        <div className="card-glass rounded-2xl border border-border p-5 group-hover:border-opacity-60 transition-all"
          style={{ '--c': item.color } as React.CSSProperties}
        >
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div className="min-w-0">
              <h3 className="font-display font-bold text-base text-text-primary leading-snug">{item.title}</h3>
              <p className="text-sm font-medium mt-0.5" style={{ color:item.color }}>{item.org}</p>
              {item.loc && <p className="font-mono text-xs text-text-muted">{item.loc}</p>}
            </div>
            <span className="font-mono text-xs text-text-muted bg-surface px-2.5 py-1 rounded-full border border-border flex-shrink-0">
              {item.period}
            </span>
          </div>
          <ul className="space-y-1.5">
            {item.bullets.map((b,i) => (
              <li key={i} className="flex gap-2 text-sm text-text-secondary">
                <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background:item.color }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="section-label mb-3">04 / Experience</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight">
            My <span className="gt-full">Journey</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Work experience, research, education, and certifications.
          </p>
        </Reveal>

        <div>{ITEMS.map((item, i) => <Item key={i} item={item} index={i} />)}</div>
      </div>
    </section>
  )
}
