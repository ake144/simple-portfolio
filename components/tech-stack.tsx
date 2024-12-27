"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, GitGraphIcon as Git, Terminal, Cloud } from 'lucide-react'

export function TechStack() {
  const technologies = [
    { icon: Code2, label: "Next.js & React", color: "text-blue-500" },
    { icon: Layout, label: "Tailwind CSS", color: "text-teal-500" },
    { icon: Database, label: "PostgreSQL", color: "text-indigo-500" },
    { icon: Git, label: "Git", color: "text-orange-500" },
    { icon: Terminal, label: "TypeScript", color: "text-blue-600" },
    { icon: Cloud, label: "AWS", color: "text-yellow-500" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
        >
          <tech.icon className={`h-8 w-8 ${tech.color}`} />
          <span className="mt-2 text-sm font-medium">{tech.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

