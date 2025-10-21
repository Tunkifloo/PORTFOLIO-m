"use client"

import { useState } from "react"
import { Terminal } from "@/components/terminal"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AboutPage() {
  const [introComplete, setIntroComplete] = useState(false)
  const [bioComplete, setBioComplete] = useState(false)

    const experiences = [
        // Experiencia 1: Actual
        {
            id: "therapeutic-lead",
            company: "Landing Page / Sauro Dev",
            title: "Software Architect & Team Lead",
            period: "August 2024 - January 2025",
            location: "Trujillo, Perú",
            type: "Full-time",
            description: "Led development of enterprise-level therapeutic management system for healthcare centers using Java 17, Jakarta EE, Spring MVC, and Spring Data JPA. Managed cross-functional team of 5 developers implementing Scrum methodology, delivering MVP 25% ahead of schedule.",
            achievements: [
                "Architected complete enterprise system managing medical inventory, staff schedules, and patient administration",
                "Led cross-functional team of 5 developers using Scrum, delivering MVP 25% ahead of schedule",
                "Designed robust MVC architecture with Swagger-documented RESTful APIs achieving 99.9% availability",
                "Implemented complete containerization with Docker Compose and Nginx, reducing deployment time by 60%",
                "Developed intelligent alert system for low medical stock inventory and automatic appointment notifications",
                "Optimized performance with enterprise design patterns, reducing response times by 40%"
            ],
            technologies: ["Java 17", "Spring Boot", "Spring MVC", "Spring Data JPA", "PostgreSQL", "Docker", "Nginx", "Swagger"],
            githubUrl: "https://github.com/Sauro-Dev"
        },

        // Experiencia 2: IoT Developer
        {
            id: "iot-developer",
            company: "Freelance / Academic Project",
            title: "IoT Web Developer | ML Engineer",
            period: "August 2024 - December 2024",
            location: "Trujillo, Perú",
            type: "Project-based",
            description: "Developed complete REST API with Python 3.9 and FastAPI for real-time IoT sensor data processing. Implemented Machine Learning algorithms from scratch for thermal trend prediction and analysis.",
            achievements: [
                "Developed complete REST API with FastAPI for real-time DHT22/DS18B20 sensor data processing",
                "Implemented ML algorithms from scratch: multiple linear regression, polynomial regression, and ARIMA models",
                "Built real-time data pipeline with WebSockets from ESP32 microcontrollers processing 1000+ readings/minute",
                "Designed intelligent predictive system anticipating temperature changes with 92% accuracy",
                "Developed interactive dashboard with real-time visualizations and automatic critical threshold alerts"
            ],
            technologies: ["Python", "FastAPI", "scikit-learn", "WebSockets", "ESP32", "MySQL", "Pandas"],
        },

        // Experiencia 3: General Development Experience
        {
            id: "freelance-fullstack",
            company: "Freelance & University Projects",
            title: "Full Stack Developer & ML Engineer",
            period: "Present",
            location: "Trujillo, Perú",
            type: "Freelance",
            description: "Developed innovative technological solutions ranging from ML algorithms implemented from scratch to complete enterprise systems. Specialized in monolithic and microservices architectures, artificial intelligence, and cloud computing.",
            achievements: [
                "Developed and maintained web applications using React, Angular, and Spring Boot",
                "Implemented AI solutions with TensorFlow, PyTorch, and custom ML algorithms",
                "Built scalable REST APIs and microservices architectures",
                "Led agile development teams delivering scalable products for startups and NGOs",
                "Implemented CI/CD pipelines and Infrastructure as Code with Terraform",
                "Achieved 85-92% accuracy in custom facial recognition algorithms"
            ],
            technologies: ["Spring Boot", "React", "Angular", "Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Terraform"],
            githubUrl: "https://github.com/Tunkifloo"
        }
    ]

    const skills = [
        // Columna 1: Languages & Frontend
        {
            category: "Languages",
            items: [
                "Java 17+",
                "Python 3.9+",
                "TypeScript",
                "JavaScript",
                "Kotlin",
            ]
        },
        {
            category: "Frontend",
            items: [
                "React",
                "Angular CLI",
                "React Native",
                "Next.js",
                "Vite",
                "Tailwind CSS"
            ]
        },
        {
            category: "Testing",
            items: [
                "JUnit",
                "Vitest",
                "Pytest",
                "React Testing Library"
            ]
        },

        // Columna 2: Backend & Databases
        {
            category: "Backend",
            items: [
                "Spring Boot",
                "Spring Data JPA",
                "Spring MVC",
                "FastAPI",
                "Django",
                "Maven",
                "Lombok"
            ]
        },
        {
            category: "Databases",
            items: [
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Redis"
            ]
        },

        // Columna 3: ML & Cloud
        {
            category: "Machine Learning",
            items: [
                "OpenCV",
                "TensorFlow",
                "PyTorch",
                "scikit-learn",
                "YOLOv8",
                "Computer Vision"
            ]
        },
        {
            category: "Cloud & DevOps",
            items: [
                "AWS",
                "Docker",
                "Terraform",
                "Jenkins"
            ]
        },

        // Columna 4: Architecture & Tools
        {
            category: "Architecture",
            items: [
                "Microservices",
                "REST APIs",
                "Serverless",
                "Hexagonal Architecture",
                "Layered Architecture",
                "Clean Architecture",
                "MVC"
            ]
        },
        {
            category: "Tools",
            items: [
                "Git/GitHub",
                "Postman",
                "ApiDog",
                "Maven/Gradle",
                "npm/pnpm"
            ]
        },
        {
            category: "Methodologies",
            items: [
                "Scrum",
                "Agile",
                "CI/CD",
                "Infrastructure as Code"
            ]
        }
    ]

  return (
    <div className="space-y-16">
      <section>
        <Terminal
          text="Initializing personal profile... Access granted. Loading bio data..."
          typingSpeed={30}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <Terminal
            text="Hello, I'm Adrian Cisneros Bartra. A Software Architect and Full-Stack Developer with expertise in building scalable
              transactional systems, REST APIs, and AI-powered solutions. I specialize in modern
              web applications with focus on performance, security, and exceptional user experience."
            typingSpeed={20}
            className="max-w-3xl mx-auto mt-4"
            showPrompt={false}
            onComplete={() => setBioComplete(true)}
          />
        )}
      </section>

      {bioComplete && (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-6">Experience Timeline</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.company}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">$</span> cat job_details.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-primary">title:</span> {exp.title}
                      </p>
                      <p>
                        <span className="text-primary">period:</span> {exp.period}
                      </p>
                      <p>
                        <span className="text-primary">description:</span> {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">System Specs</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">skills.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> cat /proc/skills
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-primary font-bold">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center gap-2">
                            <span className="text-primary">-</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">contact_form.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ./send_message.sh
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">
                        <span className="text-primary">name:</span>
                      </label>
                      <Input id="name" placeholder="Enter your name" className="bg-background border-border" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        <span className="text-primary">email:</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        <span className="text-primary">message:</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={4}
                        className="bg-background border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">network_connections.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ifconfig
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-primary">github:</p>
                      <Link
                        href="https://github.com/Tunkifloo"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Github size={16} />
                        github.com/Tunkifloo
                      </Link>
                    </div>
                      <div>
                          <p className="mb-1 text-primary">instagram:</p>
                          <Link
                              href="https://www.instagram.com/acisneros.tsx?igsh=bzQ4NGJwOTFiMjgw"
                              className="flex items-center gap-2 hover:text-primary transition-colors"
                              target="_blank"
                          >
                              <Github size={16} />
                              instragram.com/acisneros.tsx
                          </Link>
                      </div>
                    <div>
                      <p className="mb-1 text-primary">linkedin:</p>
                      <Link
                        href="https://linkedin.com/in/adrián-cisneros-bartra-045b96255"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Linkedin size={16} />
                        linkedin.com/in/Adrian-Cisneros
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">mail:</p>
                      <Link
                        href="mailto:nicolocisneros.com"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail size={16} />
                        nicolocisneros@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

