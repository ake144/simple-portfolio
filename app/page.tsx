import { ModeToggle } from "@/components/mode-toggle"
import { TechStack } from "@/components/tech-stack"
import { SocialLinks } from "@/components/social-links"
import { AboutMe } from "@/components/about-me"
import { Experience } from "@/components/experience"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">DevPortfolio</h1>
          <ModeToggle />
        </div>
      </header>
      <main className="container py-8 md:py-12">
        <AboutMe />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
              <TechStack />
            </section>
            <Experience />
          </div>
          <div className="space-y-8">
            <section className="rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-semibold mb-4">Latest Projects</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.name} className="group relative overflow-hidden rounded-md border p-4 transition-colors hover:bg-accent">
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container py-8">
          <SocialLinks />
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    name: "AI-Powered Code Assistant",
    description: "A VS Code extension that helps developers write better code using AI"
  },
  {
    name: "Real-time Collaboration Tool",
    description: "A web application for real-time document collaboration"
  },
  {
    name: "Developer Blog",
    description: "A technical blog built with Next.js and MDX"
  }
]

