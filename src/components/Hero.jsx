import { Mail, Phone, Download, Linkedin, Github } from 'lucide-react'

export default function Hero() {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = './RaghavTarnach_Resume.pdf'
    link.download = 'RaghavTarnach_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '40%', label: 'Faster Onboarding' },
    { value: '~35%', label: 'Performance Gain' },
    { value: '~30%', label: 'Reliability Improvement' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Role badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
          <span className="bg-accent-950 text-accent-400 border border-accent-900 rounded-full px-4 py-1.5 text-sm font-medium">
            Lead Data Engineer
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-zinc-50 tracking-tight leading-none mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          Raghav Tarnach
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl sm:text-2xl text-zinc-400 font-medium leading-relaxed mb-4 max-w-2xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '150ms' }}
        >
          Enterprise data platform specialist
        </p>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-12 max-w-xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Building and scaling high-performance ETL systems with{' '}
          <span className="text-zinc-50 font-semibold">
            Azure | Databricks | PySpark | SQL | Snowflake
          </span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          <a
            href="mailto:raghavtarnach9@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30"
          >
            <Mail size={20} />
            Get in Touch
          </a>
          <button
            onClick={downloadResume}
            className="inline-flex items-center justify-center gap-2 border border-surface-600 text-zinc-300 hover:bg-surface-800 hover:text-zinc-50 hover:border-surface-500 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Contact Info */}
        <div
          className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: '350ms' }}
        >
          <a
            href="mailto:raghavtarnach9@gmail.com"
            className="hover:text-zinc-300 transition-colors flex items-center gap-2"
          >
            <Mail size={18} />
            raghavtarnach9@gmail.com
          </a>
          <a
            href="tel:+918872241366"
            className="hover:text-zinc-300 transition-colors flex items-center gap-2"
          >
            <Phone size={18} />
            +91 887-224-1366
          </a>
          <a
            href="https://linkedin.com/in/raghavtarnach"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-400 transition-colors flex items-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/raghavtarnach"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-400 transition-colors flex items-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        {/* Stats Strip */}
        <div
          className="w-full max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-px bg-surface-700 rounded-xl overflow-hidden border border-surface-700 opacity-0 animate-fade-in"
          style={{ animationDelay: '500ms' }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-surface-900 p-6 flex flex-col items-center">
              <p className="text-4xl font-extrabold text-gold-400 leading-none">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
