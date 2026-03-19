import SectionLabel from './ui/SectionLabel'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation()

  const experiences = [
    {
      title: 'Lead – DataOps Team',
      company: 'BuzzClan (Client: Confidential)',
      period: 'Feb 2025 – Present',
      highlights: [
        'Lead end-to-end client onboarding and production operations for healthcare data pipelines, supporting multiple enterprise clients and eligibility datasets.',
        'Review and optimize ADF pipelines, PySpark jobs, and SQL Server stored procedures, improving pipeline reliability by ~30% and reducing failure reruns by ~25%.',
        'Mentor and manage a team of data engineers, conducting code reviews and enforcing best practices in ETL design, performance tuning, and deployment standards.',
        'Designed scalable, metadata-driven onboarding frameworks that reduced client setup time by ~40% while improving data quality and compliance.'
      ]
    },
    {
      title: 'Targeted Marketing Outreach (TMO) – Zion Team',
      company: 'BuzzClan (Client: Confidential)',
      period: 'Jan 2024 – Feb 2025',
      highlights: [
        'Built scalable PySpark pipelines in Databricks, integrated with ADF and SQL Server, to process and deliver marketing and outreach datasets.',
        'Developed Python-based transformations for customer segmentation and campaign targeting, enabling ~20% faster campaign readiness.',
        'Delivered analytics-ready datasets to business teams, supporting timely marketing insights and outreach execution.'
      ]
    },
    {
      title: 'Snowflake Architecture Team',
      company: 'BuzzClan (Client: Confidential)',
      period: 'Jan 2023 – Jan 2024',
      highlights: [
        'Contributed to the design and implementation of a Snowflake-based analytics platform for enterprise healthcare reporting.',
        'Built ADF pipelines and SQL stored procedures to migrate large-scale healthcare datasets from SQL Server to Snowflake, improving query performance by ~35%.',
        'Optimized data loading and transformation layers to support BI dashboards and downstream analytics use cases.'
      ]
    },
    {
      title: 'Data Engineering Framework Team',
      company: 'BuzzClan (Client: Confidential)',
      period: 'Mar 2022 – Jan 2023',
      highlights: [
        'Designed and implemented automated ADF ingestion pipelines for data validation, transformation, and loading of healthcare datasets.',
        'Developed high-performance SQL Server tables and stored procedures, improving ingestion scalability and processing efficiency by ~30%.',
        'Contributed to a standardized, metadata-driven ingestion framework, reducing new dataset onboarding effort by ~40%.'
      ]
    },
    {
      title: 'DataOps Team',
      company: 'BuzzClan (Client: Confidential)',
      period: 'Mar 2021 – Mar 2022',
      highlights: [
        'Onboarded healthcare clients by building eligibility file ingestion pipelines using ADF and SQL Server.',
        'Implemented metadata-driven configurations for plan mappings and client-specific business rules.',
        'Delivered ad-hoc SQL reports supporting operations, audits, and compliance requirements.'
      ]
    }
  ]

  return (
    <section
      ref={ref}
      id="experience"
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-surface-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <SectionLabel number="03" title="Professional Experience" />

        <div className="relative md:pl-8 mt-12 space-y-8">
          {/* Timeline line (desktop only) */}
          <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-surface-700" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative mb-8 last:mb-0">
              {/* Timeline dot (desktop only) */}
              <div className="hidden md:block absolute -left-[37px] top-6 w-2.5 h-2.5 rounded-full bg-accent-500 ring-[3px] ring-surface-950" />

              {/* Card */}
              <div className="bg-surface-800 rounded-xl border border-surface-700 p-6 hover:border-surface-600 transition-colors duration-200">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-50 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-accent-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="self-start sm:self-auto bg-surface-700 text-zinc-500 text-xs font-medium px-3 py-1 rounded-full border border-surface-600 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-3 items-start">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2.5 flex-shrink-0" />
                      <span className="text-sm text-zinc-300 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
