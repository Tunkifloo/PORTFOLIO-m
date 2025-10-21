"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const featuredProjects = [
      {
          id: "face-recognition-ml",
          title: "Face Recognition Security System",
          description: "Advanced ML system for facial recognition with custom algorithms (Eigenfaces, LBP, hybrid fusion) achieving 85-92% accuracy. Complete API ecosystem with 25+ endpoints and real-time alert system for security applications.",
          image: "/placeholder.svg?height=400&width=600",
          technologies: ["Python", "FastAPI", "OpenCV", "scikit-learn", "MySQL", "Machine Learning"],
          category: "ai",
          githubUrl: "https://github.com/Tunkifloo/FR-ML-API",
          featured: true,
      },
      {
          id: "therapeutic-management",
          title: "Therapeutic Management System",
          description: "Enterprise-level system for healthcare centers using Java 17, Jakarta EE, and Spring MVC. Complete management of medical inventory, schedules, and patient records with 99.9% availability. Led team of 5 developers delivering MVP 25% ahead of schedule.",
          image: "/placeholder.svg?height=400&width=600",
          technologies: ["Java 17", "Spring Boot", "Spring MVC", "Spring Data JPA", "PostgreSQL", "Docker", "Nginx"],
          category: "web",
          githubUrl: "https://github.com/Sauro-Dev",
          featured: true,
      },
      {
          id: "ong-management",
          title: "NGO User & Volunteer Management System",
          description: "Enterprise API for NGO volunteer management with JWT authentication and role-based access. Infrastructure as Code with Terraform managing AWS EC2, Cloudflare R2, and D1 database. CI/CD pipeline with Jenkins for automated testing and deployment.",
          image: "/placeholder.svg?height=400&width=600",
          technologies: ["Spring Boot", "Terraform", "AWS", "Docker", "Jenkins", "Cloudflare"],
          category: "web",
          githubUrl: "https://github.com/Tunkifloo",
      },
  ]
    const skills = ["SpringBoot", "FastAPI", "Django", "Angular CLI", "React", "NextJS", "MySQL", "Postgres", "MongoDB", "AWS Cloud" ]

  return (
    <div className="space-y-16">
      <section className="py-12">
        <Terminal
          text="Hello, World. I am Adrian Cisneros. Software Architect & Full-Stack Developer."
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">system_specs.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

