'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

export default function Reveal({
  children, delay = 0, dir = 'up', className = '',
}: { children: ReactNode; delay?: number; dir?: 'up'|'left'|'right'|'none'; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity:0, y: dir==='up'?40:0, x: dir==='left'?-40:dir==='right'?40:0 }}
      animate={inView ? { opacity:1, y:0, x:0 } : {}}
      transition={{ duration:0.65, delay, ease:[0.22,1,0.36,1] }}
    >{children}</motion.div>
  )
}
