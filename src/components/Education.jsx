import { GraduationCap } from 'lucide-react'
import SectionLabel from './ui/SectionLabel'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Education() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      id="education"
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-surface-950 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <SectionLabel number="04" title="Education" />

        <div className="relative overflow-hidden bg-surface-800 rounded-xl border-t-2 border-t-accent-500 border border-surface-700 p-8 mt-12">
          {/* Watermark year */}
          <div className="absolute bottom-2 right-6 text-8xl font-extrabold text-surface-700 select-none pointer-events-none leading-none">
            2021
          </div>

          {/* Content */}
          <div className="relative z-10 flex gap-5 items-start">
            <div className="text-zinc-600 flex-shrink-0 mt-0.5">
              <GraduationCap size={32} />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-zinc-50 mb-1">
                Bachelor of Engineering (B.E)
              </h3>
              <p className="text-base font-medium text-zinc-300 mb-1">
                Computer Science Engineering
              </p>
              <p className="text-sm text-zinc-500">
                Chandigarh University — 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
