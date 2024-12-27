export function Experience() {
    return (
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative pl-6 border-l">
              <div className="absolute left-0 top-2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary" />
              <h3 className="font-semibold">{experience.role}</h3>
              <p className="text-sm text-muted-foreground">{experience.company}</p>
              <p className="text-sm text-muted-foreground">{experience.period}</p>
              <p className="mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Present",
      description: "Leading development of enterprise-scale web applications using Next.js, TypeScript, and AWS."
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client projects using React and Node.js."
    },
    {
      role: "Frontend Developer",
      company: "Web Creators Co.",
      period: "2017 - 2019",
      description: "Built responsive and accessible web interfaces using modern JavaScript frameworks."
    }
  ]
  
  