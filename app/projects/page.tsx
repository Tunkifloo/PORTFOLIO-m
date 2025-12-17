"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<string>("all")

    const projects = [
        // Proyecto 1: Reconocimiento Facial
        {
            id: "face-recognition-ml",
            title: "Face Recognition Security System",
            description: "Advanced ML system for facial recognition with custom algorithms (Eigenfaces, LBP, hybrid fusion) achieving 85-92% accuracy. Complete API ecosystem with 25+ endpoints and real-time alert system.",
            image: "/project/face-recognition.jpg",
            technologies: ["Python", "FastAPI", "OpenCV", "scikit-learn", "MySQL", "ML"],
            category: "ai",
        },

        // Proyecto 2: ALPR System
        {
            id: "alpr-system",
            title: "CARID: License Plate Recognition",
            description: "ALPR system using YOLOv8 optimized for Peruvian plates with >90% detection accuracy. Modern React/TypeScript interface supporting image, video, and real-time streaming. Inference <150ms.",
            image: "/project/ALRP.jpg",
            technologies: ["React", "TypeScript", "YOLOv8", "Python", "OpenCV"],
            category: "ai",
        },

        // Proyecto 3: App Móvil
        {
            id: "face-recognition-mobile",
            title: "Face Recognition Mobile App",
            description: "Cross-platform mobile application with real-time facial recognition and camera integration. Material Design UI with dashboard, analytics, and security alert systems.",
            image: "/project/face-recognitionmobile.jpg",
            technologies: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
            category: "mobile",
        },

        // Proyecto 4: Sistema Terapéutico
        {
            id: "therapeutic-management",
            title: "Therapeutic Management System",
            description: "Enterprise-level system for healthcare centers managing medical inventory, schedules, and patient records with 99.9% availability. Led team of 5 developers delivering MVP 25% ahead of schedule.",
            image: "/project/personnel-management.png",
            technologies: ["Java 17", "Spring Boot", "PostgreSQL", "Docker", "Nginx"],
            category: "web",
        },

        // Proyecto 5: ONG System
        {
            id: "ong-management",
            title: "NGO Management System",
            description: "Enterprise API for NGO volunteer management with JWT authentication and role-based access. Infrastructure as Code with Terraform managing AWS EC2, Cloudflare R2, and D1 database.",
            image: "/project/ONGs.jpg",
            technologies: ["Spring Boot", "Terraform", "AWS", "Docker", "Jenkins"],
            category: "cloud",
        },

        // Proyecto 6: Universidad
        {
            id: "university-enrollment",
            title: "University Enrollment System",
            description: "Full-stack enrollment management system with enterprise architecture. Three-tier architecture with Spring Boot backend, React frontend, Flyway migrations, and MapStruct object mapping.",
            image: "/project/university.enrollment.png",
            technologies: ["Spring Boot", "React", "PostgreSQL", "Flyway", "MapStruct"],
            category: "web",
        },

        // Proyecto 7: IoT Temperature
        {
            id: "iot-temperature",
            title: "IoT Temperature Monitoring",
            description: "REST API with FastAPI for real-time IoT sensor data processing. ML algorithms from scratch for thermal trend prediction with 92% accuracy. WebSockets processing 1000+ readings/minute.",
            image: "/project/temperature-monitoring-system.jpeg",
            technologies: ["Python", "FastAPI", "scikit-learn", "WebSockets", "ESP32"],
            category: "ai",
        },

        // Proyecto 8: Préstamos
        {
            id: "loan-management",
            title: "Loan Management System",
            description: "Full-stack transactional system for loan management with REST API backend and responsive Angular frontend. Complete financial transaction processing with secure authentication.",
            image: "/project/LOAN-system.png",
            technologies: ["Spring Boot", "Angular", "PostgreSQL", "REST API"],
            category: "web",
        },

        // Proyecto 9: Sistema Matrículas de Estudiantes
        {
            id: "university-enrollment-msvc",
            title: "University Enrollment System (Microservices) CI/CD",
            description: "Enterprise distributed system on AWS EC2 using Self-Hosted GitHub Runners. Microservices architecture with Spring Cloud, Kafka, RabbitMQ, and centralized monitoring.",
            image: "/project/university.enrollment.png",
            technologies: ["Spring Cloud", "AWS EC2", "GitHub Actions", "Kafka", "Docker", "React"],
            category: "cloud",
        },

        // Proyecto 10: Sistema control de Asistencias
        {
            id: "iot-attendance-system",
            title: "IoT Biometric Access & Attendance API",
            description: "Enterprise-grade REST API built with Java 21 and Hexagonal Architecture. Orchestrates IoT devices (ESP32) via Firebase for real-time biometric access control and attendance tracking.",
            image: "/project/access_control.jpg",
            technologies: ["Java 21", "Spring Boot 3.5", "Hexagonal Arch", "Firebase", "PostgreSQL", "Docker"],
            category: "web",
        },

        // Proyecto 11: Demand Batch prediction API
        {
            id: "therapeutic-demand-prediction",
            title: "Therapeutic Demand Prediction API",
            description: "High-performance ML API (FastAPI) for forecasting medical inventory. Implements Lasso Regression with <20ms inference time and robust Pydantic validation.",
            image: "/project/prediction.jpg",
            technologies: ["Python", "FastAPI", "Scikit-learn", "Docker", "Pandas"],
            category: "ai",
        },
    ]

    const categories = [
        { id: "all", name: "All Projects" },
        { id: "ai", name: "AI & Machine Learning" },
        { id: "web", name: "Web Development" },
        { id: "mobile", name: "Mobile Development" },
        { id: "cloud", name: "Cloud & DevOps" },
    ]

    const filteredProjects =
        activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

    return (
        <div className="space-y-8">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">projects.sh</div>
                </div>
                <div className="terminal-content">
                    <p className="mb-4">
                        <span className="text-primary">$</span> Displaying projects directory. Select category to filter results.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                            activeFilter === category.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    )
}