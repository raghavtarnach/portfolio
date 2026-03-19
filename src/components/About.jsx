import SectionLabel from './ui/SectionLabel'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      id="about"
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-surface-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="01" title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start mt-12">
          {/* Left: Prose */}
          <div className="md:col-span-3 space-y-5 text-base text-zinc-300 leading-relaxed">
            <p>
              I'm a data engineer and team leader with <span className="text-zinc-50 font-semibold">5+ years</span> of experience building and scaling enterprise data platforms. My expertise spans the full data pipeline—from ETL architecture and performance optimization to team leadership and client operations.
            </p>

            <p>
              At BuzzClan, working with Lantern Healthcare, I've designed and implemented metadata-driven ETL frameworks that process millions of healthcare records, reduce client onboarding time by <span className="text-zinc-50 font-semibold">40%</span>, and improve data quality across enterprise systems.
            </p>

            <p>
              I specialize in <span className="text-zinc-50 font-semibold">healthcare data engineering and eligibility file processing</span>, where I've consistently delivered results: improving pipeline reliability by <span className="text-zinc-50 font-semibold">~30%</span>, accelerating campaign readiness by <span className="text-zinc-50 font-semibold">~20%</span>, and enhancing query performance by <span className="text-zinc-50 font-semibold">~35%</span>.
            </p>

            <p>
              Beyond technical delivery, I mentor data engineering teams, conduct code reviews, enforce best practices, and lead end-to-end client onboarding and production operations—ensuring scalable, reliable, and compliant data solutions.
            </p>
          </div>

          {/* Right: Quick Facts Card */}
          <div className="md:col-span-2 bg-surface-800 rounded-xl border-t-2 border-t-accent-500 border border-surface-700 p-6 h-fit">
            <h3 className="text-base font-semibold text-zinc-50 mb-5">Quick Facts</h3>

            <div className="space-y-3">
              <div className="flex flex-col gap-0.5 py-3 border-b border-surface-700">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                  Current Role
                </p>
                <p className="text-sm font-semibold text-zinc-200">
                  Lead – DataOps Team
                </p>
              </div>

              <div className="flex flex-col gap-0.5 py-3 border-b border-surface-700">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                  Location
                </p>
                <p className="text-sm font-semibold text-zinc-200">
                  India (Remote)
                </p>
              </div>

              <div className="flex flex-col gap-0.5 py-3 border-b border-surface-700">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                  Specialization
                </p>
                <p className="text-sm font-semibold text-zinc-200">
                  Healthcare Data Engineering
                </p>
              </div>

              <div className="flex flex-col gap-0.5 py-3">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                  Industry Focus
                </p>
                <p className="text-sm font-semibold text-zinc-200">
                  Healthcare & DataOps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
