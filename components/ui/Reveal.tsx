'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Reveal({
  children,
  delay = 0,
  dir = 'up',
  className = '',
}: {
  children: ReactNode
  delay?: number
  dir?: 'up' | 'left' | 'right' | 'none'
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: dir === 'up' ? 24 : 0,
        x: dir === 'left' ? -24 : dir === 'right' ? 24 : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: '0px 0px -20px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
