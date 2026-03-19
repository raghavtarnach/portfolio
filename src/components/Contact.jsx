import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Let's Connect</h2>

        <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          I'm always interested in discussing data engineering challenges, architecture decisions, and building scalable systems. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:raghavtarnach9@gmail.com"
            className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 hover:border-accent-500 transition-all duration-300 border border-dark-700 flex gap-4"
          >
            <Mail size={32} className="text-accent-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-400">raghavtarnach9@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+918872241366"
            className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 hover:border-accent-500 transition-all duration-300 border border-dark-700 flex gap-4"
          >
            <Phone size={32} className="text-accent-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-1">Phone</h3>
              <p className="text-gray-400">+91 887-224-1366</p>
            </div>
          </a>
        </div>

        <div className="text-center">
          <a
            href="mailto:raghavtarnach9@gmail.com"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-12 rounded-lg transition-colors duration-300 mb-8"
          >
            Send Me an Email
          </a>
        </div>

        <div className="border-t border-dark-700 pt-8 mt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Raghav Tarnach. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
