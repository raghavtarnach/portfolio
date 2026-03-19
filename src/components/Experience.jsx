export default function Experience() {
  const experiences = [
    {
      title: 'Lead – DataOps Team',
      company: 'BuzzClan (Client: Lantern Healthcare)',
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
      company: 'BuzzClan (Client: Lantern Healthcare)',
      period: 'Jan 2024 – Feb 2025',
      highlights: [
        'Built scalable PySpark pipelines in Databricks, integrated with ADF and SQL Server, to process and deliver marketing and outreach datasets.',
        'Developed Python-based transformations for customer segmentation and campaign targeting, enabling ~20% faster campaign readiness.',
        'Delivered analytics-ready datasets to business teams, supporting timely marketing insights and outreach execution.'
      ]
    },
    {
      title: 'Snowflake Architecture Team',
      company: 'BuzzClan (Client: Lantern Healthcare)',
      period: 'Jan 2023 – Jan 2024',
      highlights: [
        'Contributed to the design and implementation of a Snowflake-based analytics platform for enterprise healthcare reporting.',
        'Built ADF pipelines and SQL stored procedures to migrate large-scale healthcare datasets from SQL Server to Snowflake, improving query performance by ~35%.',
        'Optimized data loading and transformation layers to support BI dashboards and downstream analytics use cases.'
      ]
    },
    {
      title: 'Data Engineering Framework Team',
      company: 'BuzzClan (Client: Lantern Healthcare)',
      period: 'Mar 2022 – Jan 2023',
      highlights: [
        'Designed and implemented automated ADF ingestion pipelines for data validation, transformation, and loading of healthcare datasets.',
        'Developed high-performance SQL Server tables and stored procedures, improving ingestion scalability and processing efficiency by ~30%.',
        'Contributed to a standardized, metadata-driven ingestion framework, reducing new dataset onboarding effort by ~40%.'
      ]
    },
    {
      title: 'DataOps Team',
      company: 'BuzzClan (Client: Lantern Healthcare)',
      period: 'Mar 2021 – Mar 2022',
      highlights: [
        'Onboarded healthcare clients by building eligibility file ingestion pipelines using ADF and SQL Server.',
        'Implemented metadata-driven configurations for plan mappings and client-specific business rules.',
        'Delivered ad-hoc SQL reports supporting operations, audits, and compliance requirements.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-accent-500 pl-6 py-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-accent-500 font-semibold">{exp.company}</p>
                </div>
                <p className="text-gray-400 text-sm sm:text-base whitespace-nowrap">{exp.period}</p>
              </div>

              <ul className="space-y-2 text-gray-300">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-3">
                    <span className="text-accent-500 font-bold mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
