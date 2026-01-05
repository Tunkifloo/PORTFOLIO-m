"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Github,
    Linkedin,
    Mail,
    Building2,
    Calendar,
    FileText,
    ExternalLink,
    Award,
    Briefcase, Instagram
} from "lucide-react"
import { Terminal } from "@/components/terminal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const experiences = [
    {
        id: "therapeutic-lead",
        company: "PLENAMENTE / Sauro Dev TEAM",
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
            "Developed intelligent alert system for low stock and appointments"
        ]
    },
    {
        id: "iot-university-startup",
        company: "University Startup at UPAO",
        title: "IoT Web Developer",
        period: "August 2024 - December 2024",
        location: "Trujillo, Perú",
        type: "Part-time",
        description: "Developed a real-time temperature monitoring system driven by Linear Regression and prediction algorithms. Built a complete ecosystem integrating ESP32 microcontrollers with a Python/FastAPI backend and advanced data visualization.",
        achievements: [
            "Developed complete REST API with Python 3.9 and FastAPI for real-time processing of IoT sensor data (DHT22/DS18B20)",
            "Implemented Machine Learning algorithms from scratch using scikit-learn (Linear/Polynomial Regression, ARIMA) for thermal trend prediction",
            "Built real-time data pipeline with WebSockets streaming 1000+ readings per minute from ESP32 microcontrollers",
            "Designed intelligent predictive system anticipating temperature changes with 92% accuracy using sliding windows",
            "Integrated time-series optimized MySQL database storing 6+ months of historical data for predictive analysis"
        ]
    },
    {
        id: "make-the-difference",
        company: "Make The Difference (ONG)",
        title: "Software Architect & Backend Lead",
        period: "January 2025 - March 2025",
        location: "Trujillo, Perú (Remoto)",
        type: "Full-time",
        description: "Led the digital transformation of the NGO by architecting a distributed volunteer management system. Designed the Infrastructure as Code (IaC) using Terraform for AWS and Cloudflare, and developed the core REST API with Spring Boot Security and JWT.",
        achievements: [
            "Architected cloud infrastructure using Terraform with AWS EC2 and Cloudflare (R2 for storage, D1 for distributed DB, Zero Trust)",
            "Developed a secure REST API with Spring Boot 3.4, implementing Role-Based Access Control (RBAC) and JWT authentication",
            "Implemented CI/CD pipelines with Jenkins and Docker for automated production deployments",
            " optimized latency for users in the Americas using Cloudflare's edge network and distributed databases"
        ]
    },
]

const certifications = [
    {
        id: "pmbok-7",
        title: "Gestión de Proyectos Basado en el PMBOK® 7ª Edición",
        issuer: "Colegio de Ingenieros del Perú - CD Pasco",
        date: "Diciembre 2025",
        credentialId: "GPB25NV-12N72",
        pdfPath: "/certs/Certificación-GestiónProyectos.pdf",
        skills: ["Gestión de Proyectos", "PMBOK 7", "Liderazgo", "Estrategia"],
        logoPath: "/certs/cip-logo.png",
    },
    {
        id: "agile-methodologies",
        title: "Especialización en Metodologías Ágiles",
        issuer: "Colegio de Ingenieros del Perú & IED STRATTON",
        date: "Diciembre 2025",
        credentialId: "MAG25NV-09S5",
        pdfPath: "/certs/Certificación-MetodologíasÁgiles.pdf",
        skills: ["Scrum", "Kanban", "Design Thinking", "Lean Startup"],
        logoPath: "/certs/cip-logo.png",
    },
    {
        id: "software-architecture-tecsup",
        title: "Bootcamp de Especialización en Arquitectura de Software",
        issuer: "TECSUP",
        date: "Enero 2026",
        credentialId: "COD/CPE/25/253",
        pdfPath: "/certs/Certificación-ARQ-SOFT.pdf",
        skills: ["Microservicios", "Patrones de Diseño", "Sistemas Distribuidos", "Cloud Security"],
        logoPath: "/certs/tecsup-logo.png",
    }
]

export default function AboutPage() {
    const [introComplete, setIntroComplete] = useState(false)
    const [bioComplete, setBioComplete] = useState(false)

    return (
        <div className="space-y-8 pb-12">

            {!introComplete ? (
                // Terminal 1: Comando inicial
                <Terminal
                    text="cat about_me.txt"
                    typingSpeed={60}
                    onComplete={() => setIntroComplete(true)}
                />
            ) : !bioComplete ? (
                // Terminal 2: Segunda animación
                <Terminal
                    text="ls -l /experience/latest.txt"
                    typingSpeed={60}
                    showPrompt={true}
                    onComplete={() => setBioComplete(true)}
                />
            ) : (
                <>
                    {/* SECCIÓN 1: PERFIL / INTRODUCCIÓN */}
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shrink-0 shadow-xl">
                                <Image
                                    src="/certs/YOOO.jpeg"
                                    alt="Profile"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>

                            <div className="space-y-6 text-center md:text-left flex-1">
                                <div>
                                    <h1 className="text-4xl font-bold mb-2">
                                        Hello, I'm <span className="text-primary">Adrián Cisneros</span>
                                    </h1>
                                    <h2 className="text-2xl text-muted-foreground">Software Architect & Full-Stack Developer</h2>
                                </div>

                                {/* CV */}
                                <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                                    Software Architect and Developer with 2 years of experience building scalable solutions. Specialized in monolithic architectures, microservices, and AI.

                                    I hold professional certifications in Project Management (PMBOK 7th Ed.) and Agile Methodologies, and have successfully completed a specialization in Software Architecture at TECSUP. This background empowers me to bridge the gap between code and strategy, leading technical teams to deliver high-quality engineering products.

                                    Proven experience leading development squads, implementing cloud infrastructure, and delivering robust solutions for startups and NGOs.
                                </p>

                                {/* SKILLS CV */}
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    {["Java", "Spring Boot", "Spring Cloud","Python","FastAPI","JS/TS","Next", "React", "Angular", "MySQL", "Postgres", "Docker", "CI/CD", "REST APIs", "Hexagonal & Clean", "Microservices", "MVC", "EDA", "DDD"].map((tech) => (
                                        <Badge key={tech} variant="secondary" className="px-3 py-1">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Enlaces Sociales */}
                                <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-2">
                                    <a
                                        href="https://github.com/Tunkifloo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <Github size={20} className="group-hover:scale-110 transition-transform" />
                                        <span>github.com/Tunkifloo</span>
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/adrián-cisneros-bartra-045b96255"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                                        <span>linkedin.com/in/Adrian-Cisneros</span>
                                    </a>

                                    <a
                                        href="mailto:nicolocisneros@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <Mail size={20} className="group-hover:scale-110 transition-transform" />
                                        <span>nicolocisneros@gmail.com</span>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/acisneros.tsx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                                        <span>instagram.com/acisneros.tsx</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="border-t border-border/50 my-12" />

                    {/* SECCIÓN 2: EXPERIENCIA LABORAL */}
                    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <Briefcase className="text-primary" />
                            <span className="text-primary">#</span> Work Experience
                        </h2>

                        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-2">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="relative">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[43px] md:-left-[59px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />

                                    <div className="space-y-4">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                                                <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                                    <Building2 size={16} />
                                                    <span>{exp.company}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground bg-secondary/30 px-3 py-2 rounded-md w-fit md:w-auto">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={14} />
                                                    <span>{exp.period}</span>
                                                </div>
                                                <span className="text-xs opacity-80">{exp.location} • {exp.type}</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <ul className="space-y-2 mt-4">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="border-t border-border/50 my-12" />

                    {/* SECCIÓN 3: CERTIFICACIONES */}
                    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Award className="text-primary" />
                                <span className="text-primary">#</span> Certifications & Licenses
                            </h2>
                            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-muted-foreground bg-secondary/30 px-3 py-1 rounded">
                                <span className="text-green-500">➜</span>
                                <span>ls ./certs</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert) => (
                                <Dialog key={cert.id}>
                                    <DialogTrigger asChild>
                                        <div className="group cursor-pointer">
                                            <Card className="transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm border-muted/60">
                                                <CardContent className="p-5 md:p-6">
                                                    <div className="flex items-start gap-5">
                                                        {/* Icono Institución */}
                                                        <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-secondary to-secondary/30 flex items-center justify-center shrink-0 border border-border/50 shadow-inner relative">
                                                            {cert.logoPath ? (
                                                                <Image
                                                                    src={cert.logoPath}
                                                                    alt={cert.issuer}
                                                                    width={36}
                                                                    height={36}
                                                                    className="h-9 w-9 object-contain p-1"
                                                                />
                                                            ) : (
                                                                <Building2 className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                                            )}
                                                        </div>

                                                        {/* Contenido Texto */}
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300 truncate pr-4">
                                                                {cert.title}
                                                            </h3>
                                                            <p className="text-sm font-medium text-foreground/80 mb-1">
                                                                {cert.issuer}
                                                            </p>

                                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5" />
                                    Issued {cert.date}
                                </span>
                                                                {cert.credentialId && (
                                                                    <span className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                                    ID: <span className="font-mono text-xs">{cert.credentialId}</span>
                                  </span>
                                                                )}
                                                            </div>

                                                            {/* Skills Tags */}
                                                            <div className="flex flex-wrap gap-2 mt-4">
                                                                {cert.skills.map(skill => (
                                                                    <Badge key={skill} variant="outline" className="text-xs font-normal bg-secondary/10 hover:bg-secondary/20 border-secondary/20">
                                                                        {skill}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Botón Acción */}
                                                        <div className="self-center hidden sm:block">
                                                            <Button variant="ghost" size="icon" className="text-muted-foreground/50 group-hover:text-primary transition-colors">
                                                                <ExternalLink className="h-5 w-5" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </DialogTrigger>

                                    {/* Modal Visualizador PDF */}
                                    <DialogContent className="max-w-4xl h-[90vh] md:h-[85vh] flex flex-col p-0 overflow-hidden gap-0 bg-background/95 backdrop-blur-xl border-primary/20">
                                        <DialogHeader className="px-6 py-4 border-b bg-muted/30 shrink-0 flex flex-row items-center justify-between space-y-0">
                                            <div className="pr-12">
                                                <DialogTitle className="text-lg font-bold truncate">{cert.title}</DialogTitle>
                                                <DialogDescription className="text-xs mt-1">{cert.issuer} • {cert.date}</DialogDescription>
                                            </div>
                                            <Button variant="secondary" size="sm" asChild className="hidden md:flex gap-2">
                                                <a href={cert.pdfPath} target="_blank" rel="noopener noreferrer">
                                                    <FileText className="h-4 w-4"/>
                                                    Open External
                                                </a>
                                            </Button>
                                        </DialogHeader>

                                        <div className="flex-1 w-full h-full bg-black/5 relative group">
                                            <iframe
                                                src={`${cert.pdfPath}#toolbar=0&navpanes=0&view=FitH`}
                                                className="w-full h-full border-none"
                                                title={cert.title}
                                            />

                                            <div className="absolute bottom-6 left-0 right-0 flex justify-center md:hidden pointer-events-none">
                                                <Button size="sm" className="shadow-xl pointer-events-auto" asChild>
                                                    <a href={cert.pdfPath} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        Download / View PDF
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </div>
    )
}