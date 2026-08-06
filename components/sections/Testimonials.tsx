'use client'
import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'

const TESTIMONIALS = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Lead Researcher, Environmental AI Lab',
    quote: 'Sandeep\'s contribution to the Chemical Exposome project was exceptional. His ability to apply complex deep learning models to environmental data directly led to our successful IEEE publication.',
    img: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Chen',
    role: 'Engineering Manager, Priority IDC',
    quote: 'During his internship, Sandeep consistently demonstrated a rare blend of full-stack web development skills and AI engineering intuition. He delivered robust architectures well ahead of schedule.',
    img: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Owner, SUPOF',
    quote: 'Sandeep has a phenomenal eye for detail. He didn\'t just build the backend data pipelines; he ensured the frontend user experience was seamless, performant, and incredibly intuitive.',
    img: 'https://i.pravatar.cc/150?u=elena'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative bg-bg border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <Reveal>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-primary uppercase tracking-tight">
              Client Testimonials
            </h2>
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="relative bg-primary rounded-md p-8 shadow-xl mt-8 md:mt-0 flex flex-col h-full border-t-4 border-gold">
                
                {/* Avatar overlapping the top border */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full border-4 border-primary object-cover"
                  />
                </div>

                {/* Gold Quote Icon Background */}
                <div className="absolute top-4 right-4 text-gold/20 font-display text-8xl leading-none">
                  “
                </div>

                <div className="mt-8 relative z-10 flex flex-col flex-grow">
                  <p className="text-surface font-body text-sm leading-relaxed mb-6 font-light">
                    {t.quote}
                  </p>
                  
                  <div className="mt-auto">
                    <p className="text-gold font-body font-semibold text-base">
                      {t.name}
                    </p>
                    <p className="text-surface/70 font-mono text-xs mt-1 font-light">
                      {t.role}
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
