"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
    const { id } = useParams<{ id: string }>()

    // Todos tus proyectos con información detallada
    const projects = {
        "face-recognition-ml": {
            title: "Face Recognition Security System",
            description: "Advanced ML system for facial recognition with custom algorithms achieving 85-92% accuracy.",
            image: "/project/face-recognition.jpg",
            technologies: ["Python", "FastAPI", "OpenCV", "scikit-learn", "MySQL", "Machine Learning"],
            category: "AI & Machine Learning",
            github: "https://github.com/Tunkifloo/FR-ML-API",
            demo: "https://fr-ml-api-production.up.railway.app/docs",
            longDescription:
                "Comprehensive facial recognition system developed from scratch implementing custom Machine Learning algorithms without pre-trained models. The system features three main recognition algorithms: Eigenfaces (PCA-based approach with 150 components), Local Binary Patterns (LBP for texture analysis), and a Hybrid Fusion system that intelligently combines both algorithms. Achieved recognition accuracy between 85-92% across different lighting conditions. Built a complete API ecosystem with 25+ RESTful endpoints for user management, real-time facial recognition, and automatic model training. Includes an intelligent alert system for security applications that automatically notifies authorities when a person of interest is detected. Comprehensive test suite with 95% code coverage and extensive performance benchmarks. Deployed on scalable architecture supporting real-time facial recognition and automatic model training capabilities.",
            features: [
                "Custom ML algorithms: Eigenfaces, LBP, and Hybrid Fusion",
                "85-92% recognition accuracy in various conditions",
                "25+ RESTful API endpoints",
                "Real-time facial recognition",
                "Automatic model training on user registration",
                "Intelligent security alert system",
                "95% test coverage with extensive benchmarks",
                "Scalable architecture for production deployment"
            ],
            metrics: {
                accuracy: "85-92%",
                endpoints: "25+",
                testCoverage: "95%",
                duration: "6+ months"
            }
        },

        "alpr-system": {
            title: "CARID: Automatic License Plate Recognition",
            description: "ALPR system using YOLOv8 optimized for Peruvian plates with >90% detection accuracy.",
            image: "/project/ALRP.jpg",
            technologies: ["React", "TypeScript", "Vite", "YOLOv8", "Python", "OpenCV", "EasyOCR", "PaddleOCR"],
            category: "AI & Machine Learning",
            github: "https://github.com/GRUPO-PERCEPCION/carid-frontend",
            demo: "",
            longDescription:
                "Advanced Automatic License Plate Recognition (ALPR) system engineered specifically for Peruvian vehicle plates using YOLOv8 computer vision model. Achieved >90% detection precision through custom model training and optimization. Developed modern web interface using React and TypeScript with Vite for optimal performance, supporting three recognition modes: static image analysis, video processing, and real-time camera streaming. Integrated multiple OCR engines (EasyOCR, PaddleOCR) with intelligent preprocessing for diverse lighting and weather conditions. Implemented SUNARP integration for automatic vehicle information lookup and verification. Optimized inference time to <150ms for edge deployment on Raspberry Pi devices. The system processes images through a complete pipeline: plate detection, character segmentation, OCR recognition, and database verification.",
            features: [
                "YOLOv8 optimized for Peruvian plates (>90% accuracy)",
                "Three recognition modes: image, video, streaming",
                "Multiple OCR engines with intelligent preprocessing",
                "SUNARP integration for vehicle verification",
                "Inference time <150ms (edge-optimized)",
                "Modern React/TypeScript interface",
                "Real-time camera streaming support",
                "Raspberry Pi deployment ready"
            ],
            metrics: {
                accuracy: ">90%",
                inferenceTime: "<150ms",
                ocrEngines: "2 (EasyOCR, PaddleOCR)",
                platforms: "Web, Edge (Raspberry Pi)"
            }
        },

        "face-recognition-mobile": {
            title: "Face Recognition Mobile App",
            description: "Cross-platform mobile application with real-time facial recognition capabilities.",
            image: "/project/face-recognitionmobile.jpg",
            technologies: ["React Native", "Expo SDK 53", "TypeScript", "React Navigation", "React Native Paper", "AsyncStorage"],
            category: "Mobile Development",
            github: "https://github.com/Tunkifloo",
            demo: "https://expo.dev/accounts/tunkifloo/projects/face-recognition-app",
            longDescription:
                "Cross-platform mobile application developed with React Native and Expo for iOS and Android devices. Seamlessly integrates with the FR-ML API backend to provide comprehensive user management and real-time facial recognition capabilities. Features Material Design UI implementation with React Native Paper components for consistent, modern interface. Includes comprehensive dashboard with system statistics, user analytics, and recognition history. Implements intelligent security alert system with visual and audio notifications for persons of interest. Built with offline-capable architecture using AsyncStorage for local data persistence and robust error handling. Automated build pipeline with EAS Build for production-ready deployments and OTA (Over-The-Air) updates. Optimized camera integration for real-time image capture and processing.",
            features: [
                "Cross-platform: iOS & Android",
                "Real-time facial recognition via camera",
                "Material Design UI (React Native Paper)",
                "Comprehensive dashboard with analytics",
                "Security alert system with notifications",
                "Offline-capable with AsyncStorage",
                "OTA updates for seamless deployment",
                "Seamless FR-ML API integration"
            ],
            metrics: {
                platforms: "iOS & Android",
                framework: "React Native + Expo SDK 53",
                uiLibrary: "React Native Paper",
                deployment: "EAS Build + OTA"
            }
        },

        "therapeutic-management": {
            title: "Therapeutic Management System",
            description: "Enterprise-level system for healthcare centers with 99.9% availability.",
            image: "/project/personnel-management.png",
            technologies: ["Java 17", "Spring Boot", "Spring MVC", "Spring Data JPA", "Jakarta EE", "PostgreSQL", "Docker", "Nginx", "Swagger"],
            category: "Web Development",
            github: "https://github.com/Sauro-Dev",
            demo: "",
            longDescription:
                "Architected complete enterprise-level system for healthcare centers using Java 17, Jakarta EE, Spring MVC, and Spring Data JPA. The system comprehensively manages medical inventory with automated stock alerts, staff scheduling with appointment management, and complete patient administration with medical history tracking. Led cross-functional team of 5 developers implementing Scrum methodology, successfully delivering MVP 25% ahead of schedule with all core features functional. Designed robust MVC architecture with Swagger-documented RESTful APIs, role-based authentication, and comprehensive data validation achieving 99.9% system availability. Implemented complete containerization with Docker Compose orchestrating multiple services, Nginx as reverse proxy and load balancer, reducing deployment time by 60%. Developed intelligent alert system for low medical stock inventory and automatic appointment notifications. Optimized performance through enterprise design patterns, connection pooling, and session caching, improving response times by 40%.",
            features: [
                "Complete medical inventory management",
                "Staff scheduling & appointment system",
                "Patient administration with medical history",
                "Automated stock alerts & notifications",
                "Role-based authentication & authorization",
                "Swagger-documented RESTful APIs",
                "Docker containerization with Nginx",
                "99.9% system availability",
                "40% performance improvement"
            ],
            metrics: {
                teamSize: "5 developers",
                methodology: "Scrum/Agile",
                delivery: "MVP 25% ahead of schedule",
                availability: "99.9%",
                performanceGain: "+40%"
            }
        },

        "ong-management": {
            title: "NGO User & Volunteer Management System",
            description: "Enterprise API for NGO with Infrastructure as Code and full CI/CD pipeline.",
            image: "/project/ONGs.jpg",
            technologies: ["Spring Boot", "Terraform", "AWS", "Docker", "Jenkins", "Cloudflare", "JWT"],
            category: "Cloud & DevOps",
            github: "https://github.com/Tunkifloo",
            demo: "",
            longDescription:
                "Architected enterprise-grade API for NGO 'Make The Difference' volunteer management system featuring JWT authentication and comprehensive role-based access control. Implemented Infrastructure as Code (IaC) using Terraform to manage complete cloud infrastructure including AWS EC2 instances, Cloudflare R2 object storage, and Cloudflare D1 edge database. Built robust CI/CD pipeline with Jenkins for automated testing, building, and deployment workflows. Designed cloud-native architecture leveraging Docker containerization for consistent deployment across environments and scalable microservices architecture. Integrated multiple services including email notifications via SendGrid, secure file storage in Cloudflare R2, and comprehensive user management with profile photos and document uploads. Implemented advanced security features including password encryption, JWT token refresh, and audit logging for compliance.",
            features: [
                "JWT authentication with role-based access",
                "Infrastructure as Code with Terraform",
                "AWS EC2 + Cloudflare R2 + D1 database",
                "CI/CD pipeline with Jenkins",
                "Docker containerization",
                "Microservices architecture",
                "Email notifications (SendGrid)",
                "Secure file storage",
                "Audit logging & compliance"
            ],
            metrics: {
                infrastructure: "Terraform (IaC)",
                cloud: "AWS + Cloudflare",
                cicd: "Jenkins",
                architecture: "Microservices"
            }
        },

        "university-enrollment": {
            title: "University Enrollment System",
            description: "Full-stack enrollment management with enterprise architecture and clean code practices.",
            image: "/project/university.enrollment.png",
            technologies: ["Spring Boot", "React 19", "TypeScript", "PostgreSQL", "Flyway", "MapStruct", "Docker Compose", "Zustand"],
            category: "Web Development",
            github: "https://github.com/Tunkifloo/university-enrollment-system",
            demo: "",
            longDescription:
                "Comprehensive full-stack enrollment management system built with enterprise-grade architecture and clean code principles. Implements three-tier architecture with clear separation of concerns: Spring Boot 3.5.6 backend with RESTful APIs, React 19 frontend with TypeScript for type safety, and PostgreSQL 16 for reliable data persistence. Backend follows layered architecture pattern with Controllers, Services (interface + implementation), Repositories (Spring Data JPA), Domain models, and DTOs with MapStruct for type-safe object mapping. Frontend uses feature-based architecture with modular components, custom React hooks for business logic, and Zustand for lightweight state management. Database migrations managed with Flyway for version control and reproducible deployments. Complete containerization with Docker Compose orchestrating backend, frontend, and PostgreSQL services. Comprehensive API documentation with Swagger/OpenAPI. Implements enterprise patterns including Repository Pattern, Service Layer Pattern, DTO Pattern, Dependency Injection, and centralized Exception Handling.",
            features: [
                "Three-tier enterprise architecture",
                "Spring Boot 3.5.6 + React 19",
                "Layered backend with clean separation",
                "Feature-based frontend architecture",
                "Database migrations with Flyway",
                "MapStruct for type-safe mapping",
                "Docker Compose orchestration",
                "Swagger/OpenAPI documentation",
                "Enterprise design patterns"
            ],
            metrics: {
                architecture: "Three-tier + Layered",
                backend: "Spring Boot 3.5.6",
                frontend: "React 19 + TypeScript",
                database: "PostgreSQL 16"
            }
        },

        "iot-temperature": {
            title: "IoT Temperature Monitoring System",
            description: "ML-powered IoT monitoring with real-time data processing and predictive analytics.",
            image: "/project/temperature-monitoring-system.jpeg",
            technologies: ["Python 3.9", "FastAPI", "scikit-learn", "WebSockets", "ESP32", "MySQL", "Pandas", "NumPy"],
            category: "AI & Machine Learning",
            github: "https://github.com/Tunkifloo",
            demo: "",
            longDescription:
                "Developed complete REST API using Python 3.9 and FastAPI for real-time processing of IoT sensor data from DHT22 and DS18B20 temperature and humidity sensors. Implemented Machine Learning algorithms from scratch using scikit-learn, including multiple linear regression, polynomial regression, and ARIMA models for time series prediction of thermal trends. Built real-time data pipeline using WebSockets for continuous streaming from ESP32 microcontrollers, processing over 1000 sensor readings per minute. Designed intelligent predictive system that anticipates temperature changes with 92% accuracy using 24-hour sliding windows and seasonal pattern analysis. Developed interactive dashboard with dynamic real-time visualizations, automatic alerts for critical thresholds, and historical data export capabilities. Integrated temporal MySQL database optimized for time series with specialized indexes, storing 6+ months of historical data for predictive analysis. System provides actionable insights for environmental monitoring and HVAC optimization.",
            features: [
                "Real-time IoT data processing (1000+ readings/min)",
                "ML algorithms from scratch (regression, ARIMA)",
                "92% prediction accuracy for thermal trends",
                "WebSockets streaming from ESP32",
                "Interactive real-time dashboard",
                "Automatic critical threshold alerts",
                "Time-series optimized MySQL database",
                "6+ months historical data storage",
                "Predictive analytics with seasonal patterns"
            ],
            metrics: {
                accuracy: "92%",
                throughput: "1000+ readings/min",
                sensors: "DHT22, DS18B20",
                storage: "6+ months historical"
            }
        },

        "loan-management": {
            title: "Loan Management System",
            description: "Full-stack transactional system for comprehensive loan management.",
            image: "/project/LOAN-system.png",
            technologies: ["Spring Boot", "Angular", "PostgreSQL", "REST API", "JWT"],
            category: "Web Development",
            github: "https://github.com/CASO-PRESTAMOS",
            demo: "",
            longDescription:
                "Complete full-stack transactional system designed for loan management with secure REST API backend and responsive Angular frontend. Implements comprehensive financial transaction processing including loan applications, approvals, payment schedules, and balance tracking. Features robust authentication system with JWT tokens and role-based access control for different user types (customers, loan officers, administrators). Backend built with Spring Boot providing RESTful endpoints for all CRUD operations, transaction management, and business logic validation. Angular frontend delivers responsive, user-friendly interface with real-time updates, interactive forms, and comprehensive reporting dashboards. PostgreSQL database ensures ACID compliance for financial transactions. Includes automated payment reminders, late fee calculations, and detailed audit trails for compliance. System handles complex loan calculations including interest rates, amortization schedules, and early payment scenarios.",
            features: [
                "Complete loan lifecycle management",
                "Financial transaction processing",
                "JWT authentication + role-based access",
                "REST API with Spring Boot backend",
                "Responsive Angular frontend",
                "Real-time updates & notifications",
                "Automated payment reminders",
                "Interest & amortization calculations",
                "Comprehensive audit trails",
                "ACID-compliant transactions"
            ],
            metrics: {
                backend: "Spring Boot + REST API",
                frontend: "Angular",
                database: "PostgreSQL",
                auth: "JWT + RBAC"
            }
        },
    }

    const project = projects[id as keyof typeof projects]

    if (!project) {
        notFound()
    }

    return (
        <div className="space-y-8">
            <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft size={16} /> Back to projects
            </Link>

            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">project_details.sh</div>
                </div>
                <div className="terminal-content">
                    <p className="mb-2">
                        <span className="text-primary">$</span> cat {id}.json
                    </p>
                    <div className="mb-4">
                        <p>
                            <span className="text-primary">title:</span> {project.title}
                        </p>
                        <p>
                            <span className="text-primary">category:</span> {project.category}
                        </p>
                        <p className="flex flex-wrap gap-2 mt-2">
                            <span className="text-primary">stack:</span>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative h-80 rounded-md overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="flex flex-wrap gap-4">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
                >
                    <Github size={16} /> View on GitHub
                </a>
            </div>

            <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground">{project.longDescription}</p>
            </div>
        </div>
    )
}