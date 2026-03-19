import { useState, useEffect } from 'react'
import { Menu, X, Linkedin, Github } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-950/90 backdrop-blur-xl border-b border-surface-700'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="text-xl font-bold text-zinc-50 tracking-tight hover:text-accent-400 transition-colors duration-200">
            RT
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex gap-3 ml-2 pl-2 border-l border-surface-600">
              <a
                href="https://linkedin.com/in/raghavtarnach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-accent-400 transition-colors duration-200 rounded-md hover:bg-surface-800"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/raghavtarnach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-accent-400 transition-colors duration-200 rounded-md hover:bg-surface-800"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-surface-950/98 backdrop-blur-xl border-b border-surface-700 -mx-4 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="block text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-surface-800"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex gap-3 pt-2 border-t border-surface-700 mt-2">
              <a
                href="https://linkedin.com/in/raghavtarnach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-accent-400 transition-colors duration-200 rounded-md hover:bg-surface-800"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/raghavtarnach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-accent-400 transition-colors duration-200 rounded-md hover:bg-surface-800"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
