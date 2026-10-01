'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Copy,
  Check,
  Download,
} from 'lucide-react'

import Reveal from '../ui/Reveal'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  // =========================
  // SEND EMAIL
  // =========================
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (sending) return

    setSending(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSent(true)

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setTimeout(() => {
        setSent(false)
      }, 4000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  // =========================
  // COPY EMAIL
  // =========================
  const copyEmail = () => {
    navigator.clipboard.writeText('sandeepkumar362924@gmail.com')

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  // =========================
  // SOCIAL LINKS
  // =========================
  const SOCIALS = [
    {
      icon: Github,
      href: 'https://github.com/Sandeep2924',
      label: 'GitHub',
      color: '#F0F0FF',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sandeep-kumar14',
      label: 'LinkedIn',
      color: '#60A5FA',
    },
    {
      icon: Mail,
      href: 'mailto:sandeepkumar362924@gmail.com',
      label: 'Email',
      color: '#6EE7B7',
    },
  ]

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="section-label mb-3">05 / Contact</p>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-primary">
            Let's Connect
          </h2>

          <p className="text-text-secondary mt-3 max-w-xl mx-auto font-body text-sm sm:text-base">
            Open to AI/ML roles, full-stack projects,
            research collaborations, and innovative engineering challenges.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6 sm:space-y-7">

            <Reveal>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-primary">
                Get in touch
              </h3>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mt-2 font-body">
                I'm actively looking for
                <span className="text-primary font-semibold">
                  {' '}internships
                </span>
                {' '}and
                <span className="text-primary font-semibold">
                  {' '}full-time roles
                </span>
                {' '}in AI/ML or full-stack development.
                Drop me a message — I respond within 24 hours.
              </p>
            </Reveal>

            {/* Email Card */}
            <Reveal delay={0.1}>
              <motion.button
                onClick={copyEmail}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl
                border border-border/70 bg-surface w-full text-left
                hover:border-gold transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/15
                flex items-center justify-center flex-shrink-0 text-gold">
                  {copied ? (
                    <Check size={18} />
                  ) : (
                    <Mail size={18} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs text-text-muted mb-0.5">
                    Email
                  </p>

                  <p className="text-xs sm:text-sm text-primary font-medium truncate">
                    sandeepkumar362924@gmail.com
                  </p>
                </div>

                <div className="ml-2 flex-shrink-0">
                  {copied ? (
                    <span className="text-xs text-gold font-mono font-semibold">
                      Copied!
                    </span>
                  ) : (
                    <Copy
                      size={14}
                      className="text-text-muted
                      group-hover:text-gold transition-colors"
                    />
                  )}
                </div>
              </motion.button>

              {/* Location */}
              <div
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl
                border border-border/70 bg-surface mt-3 shadow-sm"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-gold/15
                  flex items-center justify-center flex-shrink-0 text-gold"
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="font-mono text-xs text-text-muted mb-0.5">
                    Location
                  </p>

                  <p className="text-xs sm:text-sm text-primary font-medium">
                    Delhi NCR, India — Open to Remote
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={0.2}>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-border/70
                    bg-surface flex items-center justify-center
                    text-primary hover:border-gold hover:text-gold transition-all shadow-sm"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </Reveal>

            {/* Resume */}
            <Reveal delay={0.25}>
              <motion.a
                href="/Sandeep_Kumar_Resume.pdf"
                download="Sandeep_Kumar_Resume.pdf"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl
                border border-gold/40 bg-gold/5
                hover:bg-gold/10 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/20
                flex items-center justify-center flex-shrink-0 text-primary">
                  <Download size={18} />
                </div>

                <div>
                  <p className="font-mono text-xs text-text-muted mb-0.5">
                    Download
                  </p>

                  <p className="text-xs sm:text-sm text-primary font-semibold">
                    Sandeep_Kumar_Resume.pdf
                  </p>
                </div>
              </motion.a>
            </Reveal>
          </div>

          {/* RIGHT SIDE FORM */}
          <Reveal delay={0.15} dir="right">
            <form onSubmit={submit} className="space-y-4 bg-surface p-5 sm:p-7 rounded-2xl border border-border/70 shadow-lg">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    key: 'name',
                    label: 'Your Name',
                    ph: 'John Doe',
                    type: 'text',
                  },
                  {
                    key: 'email',
                    label: 'Email Address',
                    ph: 'john@example.com',
                    type: 'email',
                  },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="font-mono text-xs text-text-muted mb-1.5 block">
                      {f.label}
                    </label>

                    <input
                      type={f.type}
                      placeholder={f.ph}
                      required
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) =>
                        setForm((v) => ({
                          ...v,
                          [f.key]: e.target.value,
                        }))
                      }
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-border/80
                      bg-bg text-primary text-sm
                      placeholder:text-text-muted focus:outline-none
                      focus:border-gold transition-colors"
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div>
                <label className="font-mono text-xs text-text-muted mb-1.5 block">
                  Subject
                </label>

                <input
                  type="text"
                  required
                  placeholder="Project collaboration / Job opportunity…"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((v) => ({
                      ...v,
                      subject: e.target.value,
                    }))
                  }
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-border/80
                  bg-bg text-primary text-sm
                  placeholder:text-text-muted focus:outline-none
                  focus:border-gold transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-xs text-text-muted mb-1.5 block">
                  Message
                </label>

                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, role, or idea…"
                  value={form.message}
                  onChange={(e) =>
                    setForm((v) => ({
                      ...v,
                      message: e.target.value,
                    }))
                  }
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-border/80
                  bg-bg text-primary text-sm
                  placeholder:text-text-muted focus:outline-none
                  focus:border-gold transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className="w-full py-3.5 rounded-lg font-body
                font-semibold text-sm bg-gold-solid text-primary flex items-center
                justify-center gap-2 disabled:opacity-60 transition-all shadow-md hover:opacity-90"
              >
                {sent ? (
                  <>
                    <Check size={17} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Send size={17} />
                  </motion.div>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}