import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-lg gt-mint mb-1">Sandeep Kumar</p>
          <p className="font-mono text-xs text-text-muted">AI/ML Engineer · Full Stack Developer · IEEE Researcher</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Github,   href:'https://github.com/Sandeep2924' },
            { icon: Linkedin, href:'https://www.linkedin.com/in/sandeep-kumar14' },
            { icon: Mail,     href:'mailto:sandeepkumar362924@gmail.com' },
          ].map(({ icon:Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all"
            ><Icon size={15}/></a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} · Built with Next.js & Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
