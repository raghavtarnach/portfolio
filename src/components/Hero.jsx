import { Mail, Phone, Download } from 'lucide-react'

export default function Hero() {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = './RaghavTarnach_Resume.pdf'
    link.download = 'RaghavTarnach_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Raghav Tarnach
        </h1>

        <p className="text-2xl sm:text-3xl text-accent-500 font-semibold mb-4">
          Lead Data Engineer & DataOps Lead
        </p>

        <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Enterprise data platform specialist building and scaling high-performance ETL systems with
          <span className="text-accent-500 font-semibold"> Azure | Databricks | PySpark | SQL | Snowflake</span>
        </p>

        <p className="text-gray-300 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          5+ years delivering analytics-ready datasets, leading DataOps teams, and architecting scalable
          data solutions for healthcare enterprises.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
          <a
            href="mailto:raghavtarnach9@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            <Mail size={20} />
            Get in Touch
          </a>
          <button
            onClick={downloadResume}
            className="inline-flex items-center justify-center gap-2 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-gray-400 text-sm">
          <a href="mailto:raghavtarnach9@gmail.com" className="hover:text-accent-500 transition-colors flex items-center justify-center gap-2">
            <Mail size={18} />
            raghavtarnach9@gmail.com
          </a>
          <a href="tel:+918872241366" className="hover:text-accent-500 transition-colors flex items-center justify-center gap-2">
            <Phone size={18} />
            +91 887-224-1366
          </a>
        </div>
      </div>
    </section>
  )
}
