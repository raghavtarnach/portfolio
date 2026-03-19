import { BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Education</h2>

        <div className="bg-dark-800 rounded-lg p-8 border border-dark-700 hover:border-accent-500 transition-colors duration-300">
          <div className="flex gap-4">
            <div className="text-accent-500 flex-shrink-0">
              <BookOpen size={32} />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Engineering (B.E)
              </h3>
              <p className="text-accent-500 font-semibold text-lg mb-1">
                Computer Science Engineering
              </p>
              <p className="text-gray-400">
                Chandigarh University — 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
