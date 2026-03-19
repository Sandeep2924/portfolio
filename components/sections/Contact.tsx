'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, Copy, Check, Download } from 'lucide-react'
import Reveal from '../ui/Reveal'

export default function Contact() {
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' })
  const [sending, setSending] = useState(false)
  const [sent, setSent]     = useState(false)
  const [copied, setCopied] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1600))
    setSending(false); setSent(true)
    setForm({ name:'', email:'', subject:'', message:'' })
    setTimeout(() => setSent(false), 4000)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('sandeepkumar362924@gmail.com')
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  const SOCIALS = [
    { icon: Github,   href:'https://github.com/Sandeep2924',              label:'GitHub',   color:'#F0F0FF' },
    { icon: Linkedin, href:'https://www.linkedin.com/in/sandeep-kumar14', label:'LinkedIn', color:'#60A5FA' },
    { icon: Mail,     href:'mailto:sandeepkumar362924@gmail.com',         label:'Email',    color:'#6EE7B7' },
  ]

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle, rgba(110,231,183,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="section-label mb-3">05 / Contact</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight">
            Let's <span className="gt-pink">Connect</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Open to AI/ML roles, full-stack projects, research collaborations, and freelance work.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-7">
            <Reveal>
              <h3 className="font-display font-bold text-2xl text-text-primary">Get in touch</h3>
              <p className="text-text-secondary leading-relaxed mt-2">
                I'm actively looking for <span className="text-primary font-medium">internships</span> and{' '}
                <span className="text-secondary font-medium">full-time roles</span> in AI/ML or full-stack development.
                Drop me a message — I respond within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Email copy card */}
              <motion.button onClick={copyEmail}
                className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-surface/60 w-full text-left hover:border-primary/40 transition-all group"
                whileHover={{ x:4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {copied ? <Check size={18} className="text-primary"/> : <Mail size={18} className="text-primary"/>}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-text-muted mb-0.5">Email</p>
                  <p className="text-sm text-text-primary truncate">sandeepkumar362924@gmail.com</p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  {copied
                    ? <span className="text-xs text-primary font-mono">Copied!</span>
                    : <Copy size={14} className="text-text-muted group-hover:text-primary transition-colors"/>
                  }
                </div>
              </motion.button>

              {/* Location card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-surface/60 mt-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent"/>
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted mb-0.5">Location</p>
                  <p className="text-sm text-text-primary">Delhi NCR, India — Open to Remote</p>
                </div>
              </div>
            </Reveal>

            {/* Social links */}
            <Reveal delay={0.2}>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon:Icon, href, label, color }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-12 h-12 rounded-xl border border-border bg-surface/60 flex items-center justify-center text-text-secondary transition-all"
                    whileHover={{ scale:1.12, y:-3, color }}
                    style={{ '--hc': color } as React.CSSProperties}
                  >
                    <Icon size={18}/>
                  </motion.a>
                ))}
              </div>
            </Reveal>

            {/* Resume download card */}
            <Reveal delay={0.25}>
              <motion.a href="/Sandeep_Kumar_Resume.pdf" download="Sandeep_Kumar_Resume.pdf"
                className="flex items-center gap-3 p-4 rounded-2xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all group"
                whileHover={{ x:4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Download size={18} className="text-primary"/>
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted mb-0.5">Download</p>
                  <p className="text-sm text-primary font-medium">Sandeep_Kumar_Resume.pdf</p>
                </div>
                <motion.div className="ml-auto" animate={{ x:[0,4,0] }} transition={{ duration:1.5, repeat:Infinity }}>
                  <Download size={16} className="text-primary/50"/>
                </motion.div>
              </motion.a>
            </Reveal>
          </div>

          {/* RIGHT: Form */}
          <Reveal delay={0.15} dir="right">
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key:'name',  label:'Your Name',      ph:'John Doe',           type:'text' },
                  { key:'email', label:'Email Address',  ph:'john@example.com',   type:'email' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="font-mono text-xs text-text-muted mb-1.5 block">{f.label}</label>
                    <input type={f.type} placeholder={f.ph} required
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface/60 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="font-mono text-xs text-text-muted mb-1.5 block">Subject</label>
                <input type="text" placeholder="Project collaboration / Job opportunity…" required
                  value={form.subject}
                  onChange={e => setForm(v => ({ ...v, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface/60 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-text-muted mb-1.5 block">Message</label>
                <textarea rows={5} placeholder="Tell me about your project, role, or idea…" required
                  value={form.message}
                  onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface/60 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <motion.button type="submit" disabled={sending||sent}
                className="w-full py-3.5 rounded-xl font-display font-semibold text-sm text-bg flex items-center justify-center gap-2 disabled:opacity-60 transition-all"
                style={{ background:'linear-gradient(135deg,#6EE7B7,#60A5FA)' }}
                whileHover={!sending&&!sent ? { scale:1.02 } : {}}
                whileTap={!sending&&!sent ? { scale:0.98 } : {}}
              >
                {sent ? (
                  <><Check size={17}/> Message Sent!</>
                ) : sending ? (
                  <motion.div animate={{ rotate:360 }} transition={{ duration:1, repeat:Infinity, ease:'linear' }}>
                    <Send size={17}/>
                  </motion.div>
                ) : (
                  <><Send size={17}/> Send Message</>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
