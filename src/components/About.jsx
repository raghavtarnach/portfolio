export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">About Me</h2>

        <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          <p>
            I'm a data engineer and team leader with <span className="text-accent-500 font-semibold">5+ years</span> of experience building and scaling enterprise data platforms. My expertise spans the full data pipeline—from ETL architecture and performance optimization to team leadership and client operations.
          </p>

          <p>
            At BuzzClan, working with Lantern Healthcare, I've designed and implemented metadata-driven ETL frameworks that process millions of healthcare records, reduce client onboarding time by <span className="text-accent-500 font-semibold">40%</span>, and improve data quality across enterprise systems.
          </p>

          <p>
            I specialize in <span className="text-accent-500 font-semibold">healthcare data engineering and eligibility file processing</span>, where I've consistently delivered results: improving pipeline reliability by <span className="text-accent-500 font-semibold">~30%</span>, accelerating campaign readiness by <span className="text-accent-500 font-semibold">~20%</span>, and enhancing query performance by <span className="text-accent-500 font-semibold">~35%</span>.
          </p>

          <p>
            Beyond technical delivery, I mentor data engineering teams, conduct code reviews, enforce best practices, and lead end-to-end client onboarding and production operations—ensuring scalable, reliable, and compliant data solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
