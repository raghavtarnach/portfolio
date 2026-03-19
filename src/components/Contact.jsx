import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import SectionLabel from './ui/SectionLabel'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation()

  const contactOptions = [
    {
      icon: Mail,
      label: 'Email',
      value: 'raghavtarnach9@gmail.com',
      href: 'mailto:raghavtarnach9@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 887-224-1366',
      href: 'tel:+918872241366'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/raghavtarnach',
      href: 'https://linkedin.com/in/raghavtarnach'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/raghavtarnach',
      href: 'https://github.com/raghavtarnach'
    }
  ]

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-surface-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <SectionLabel number="05" title="Let's Connect" align="center" />

        <p className="text-center text-zinc-400 text-base mt-6 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in discussing data engineering challenges, architecture decisions, and building scalable systems. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactOptions.map((option, idx) => {
            const Icon = option.icon
            const isExternal = option.href.startsWith('http')

            return (
              <a
                key={idx}
                href={option.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="bg-surface-800 border border-surface-700 hover:border-surface-600 rounded-xl p-5 flex gap-4 items-center transition-all duration-200 group"
              >
                <Icon size={24} className="text-zinc-500 group-hover:text-accent-400 transition-colors flex-shrink-0" />
                <div className="flex-grow min-w-0">
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                    {option.label}
                  </p>
                  <p className="text-sm font-semibold text-zinc-200 truncate">
                    {option.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="border-t border-surface-700 pt-8 mt-16">
          <p className="text-center text-xs text-zinc-600">
            © 2026 Raghav Tarnach. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
