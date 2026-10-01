'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, FlaskConical } from 'lucide-react'
import Reveal from '../ui/Reveal'

const ITEMS = [
  {
    icon: FlaskConical,
    title:'IEEE Research Publication',
    org:'Simulating the Indian Chemical Exposome', loc:'Multimodal Transfer Learning Framework', period:'2024 – Present',
    bullets:[
      'Developed a multimodal deep learning framework for predicting heavy metal bioaccumulation.',
      'Applied domain adaptation techniques on heterogeneous environmental datasets.',
      <span key="ieee">Paper published in <a href="https://ieeexplore.ieee.org/document/11576905" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-gold transition-colors">IEEE Xplore</a>.</span>,
    ],
  },
  {
    icon: GraduationCap,
    title:'Master of Computer Applications (MCA)',
    org:'CHRIST (Deemed to be University)', loc:'Delhi NCR, Ghaziabad', period:'2025 – Expected May 2027',
    bullets:['GPA: 3.29 / 4.0','Specialization: AI/ML & Web Engineering'],
  },
  {
    icon: GraduationCap,
    title:'Master of Computer Applications (MCA)',
    org:'Chandigarh University', loc:'Mohali, Punjab', period:'Completed May 2025',
    bullets:['GPA: 6.97 / 10'],
  },
  {
    icon: Award,
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
      initial={{ opacity:0, y: 20 }}
      animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
      className="relative flex gap-3.5 sm:gap-6 group"
    >
      {/* Timeline Line & Icon */}
      <div className="flex flex-col items-center flex-shrink-0 w-9 sm:w-12">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-primary text-gold shadow-md z-10 transition-transform group-hover:scale-110 flex-shrink-0">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        {index < ITEMS.length - 1 && (
          <div className="w-px flex-1 mt-3 mb-3 bg-border" />
        )}
      </div>

      {/* Card Content */}
      <div className="pb-8 sm:pb-12 flex-1 min-w-0">
        <div className="bg-surface rounded-xl border border-border/60 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 sm:mb-4 border-b border-border/40 pb-3 sm:pb-4">
            <div className="min-w-0">
              <h3 className="font-body font-bold text-base sm:text-lg text-primary leading-snug">{item.title}</h3>
              <p className="text-xs sm:text-sm font-medium text-gold mt-1 uppercase tracking-wide">{item.org}</p>
              {item.loc && <p className="font-body text-xs text-text-secondary mt-1">{item.loc}</p>}
            </div>
            <span className="font-body text-[11px] sm:text-xs font-semibold text-primary bg-gold/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded self-start sm:self-auto flex-shrink-0 border border-gold/20">
              {item.period}
            </span>
          </div>
          <ul className="space-y-2 sm:space-y-2.5">
            {item.bullets.map((b,i) => (
              <li key={i} className="flex gap-2.5 sm:gap-3 text-xs sm:text-sm text-text-primary/80 font-body leading-relaxed">
                <span className="flex-shrink-0 mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-gold" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="pb-16 sm:pb-24 pt-8 sm:pt-12 px-4 sm:px-6 relative bg-bg">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary uppercase tracking-tight">
            Education & Research
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto font-body text-sm sm:text-base">
            A timeline of my academic background and scientific contributions.
          </p>
        </Reveal>

        <div>{ITEMS.map((item, i) => <Item key={i} item={item} index={i} />)}</div>
      </div>
    </section>
  )
}
