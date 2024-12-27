import { Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Button variant="ghost" size="icon" asChild>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
      </Button>
    </div>
  )
}

