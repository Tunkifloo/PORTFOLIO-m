import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
})

export const metadata: Metadata = {
    title: "Adrian Cisneros | Software Architect & Full Stack Developer",
    description: "Software Architect and Full-Stack Developer specialized in AI, Machine Learning, and enterprise systems. Building scalable solutions with Spring Boot, React, and Python.",

    keywords: [
        "Adrian Cisneros",
        "Software Architect",
        "Full Stack Developer",
        "Machine Learning Engineer",
        "Spring Boot",
        "React",
        "Python",
        "AI Developer",
        "Peru Developer"
    ],
    authors: [{ name: "Adrian Cisneros Bartra" }],
    creator: "Adrian Cisneros Bartra",

    openGraph: {
        type: "website",
        locale: "es_PE",
        url: "https://tu-portfolio-url.vercel.app",
        title: "Adrian Cisneros | Software Architect & Full Stack Developer",
        description: "Software Architect specialized in AI and enterprise systems",
        siteName: "Adrian Cisneros Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Adrian Cisneros Portfolio"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Adrian Cisneros | Software Architect",
        description: "Software Architect specialized in AI and enterprise systems",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
        <body className={`${jetbrainsMono.variable} font-mono bg-black text-white min-h-screen flex flex-col`}>
        <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-8 relative z-10">{children}</main>
        <Footer />
        </body>
        </html>
    )
}



import './globals.css'