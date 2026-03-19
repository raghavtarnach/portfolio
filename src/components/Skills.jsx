export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'PySpark', 'SQL', 'T-SQL']
    },
    {
      title: 'Cloud & Big Data',
      skills: ['Azure Data Factory (ADF)', 'Azure Databricks', 'Snowflake', 'Delta Lake']
    },
    {
      title: 'Databases',
      skills: ['SQL Server', 'PostgreSQL']
    },
    {
      title: 'Data Engineering',
      skills: ['ETL/ELT Pipelines', 'Metadata-Driven Frameworks', 'Data Modeling', 'Data Validation', 'API Integrations']
    },
    {
      title: 'DevOps & Testing',
      skills: ['Git', 'Azure DevOps', 'CI/CD', 'pytest']
    },
    {
      title: 'Domain Expertise',
      skills: ['Healthcare Data Engineering', 'Eligibility Files', 'Targeted Marketing Outreach (TMO)']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors duration-300 border border-dark-700">
              <h3 className="text-xl font-bold text-accent-500 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="bg-dark-900 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-accent-500 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
