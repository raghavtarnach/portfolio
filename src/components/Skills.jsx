import { Code2, Cloud, Database, Zap, GitBranch, Stethoscope } from 'lucide-react'
import SectionLabel from './ui/SectionLabel'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'PySpark', 'SQL', 'T-SQL']
    },
    {
      title: 'Cloud & Big Data',
      icon: Cloud,
      skills: ['Azure Data Factory (ADF)', 'Azure Databricks', 'Snowflake', 'Delta Lake']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['SQL Server', 'PostgreSQL']
    },
    {
      title: 'Data Engineering',
      icon: Zap,
      skills: ['ETL/ELT Pipelines', 'Metadata-Driven Frameworks', 'Data Modeling', 'Data Validation', 'API Integrations']
    },
    {
      title: 'DevOps & Testing',
      icon: GitBranch,
      skills: ['Git', 'Azure DevOps', 'CI/CD', 'pytest']
    },
    {
      title: 'Domain Expertise',
      icon: Stethoscope,
      skills: ['Healthcare Data Engineering', 'Eligibility Files', 'Targeted Marketing Outreach (TMO)']
    }
  ]

  return (
    <section
      ref={ref}
      id="skills"
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-surface-950 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="02" title="Technical Skills" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="relative bg-surface-800 rounded-xl border-l-2 border-l-accent-500 border border-surface-700 border-l-0 p-6 transition-colors duration-200 hover:bg-surface-700 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon size={24} className="text-accent-400 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-zinc-100">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="bg-surface-700 text-zinc-400 px-3 py-1 rounded-md text-xs font-mono hover:bg-surface-600 hover:text-zinc-50 transition-colors duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
