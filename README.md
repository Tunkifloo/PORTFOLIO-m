# Personal Portfolio - Adrián Cisneros

This repository contains the source code for my personal professional portfolio. It is a modern, responsive web application built with **Next.js** and **TypeScript**, designed to showcase software architecture projects, technical skills, and professional experience using a developer-centric "terminal" aesthetic combined with clean UI principles.

## Project Overview

The application serves as a central hub for my professional identity, bridging the gap between a traditional CV and an interactive showcase. The design philosophy integrates a command-line interface (CLI) simulation to reflect a backend/engineering focus, transitioning into rich media content for project details.

### Key Features

* **Terminal Simulation:** A custom React component that simulates typing effects, command execution, and system status updates, providing an immersive entry point for users.
* **Dynamic Project Showcase:** A filterable project directory classified by technology domain (AI, Web, Mobile, Cloud), implemented with responsive grid layouts.
* **Detailed Case Studies:** Individual dynamic routes for each project (`/projects/[id]`) offering in-depth technical breakdowns, architectural decisions, and metrics.
* **Professional Timeline:** An interactive chronological display of work experience and career progression.
* **Certificate Verification:** Integration for viewing and validating professional certifications (PMBOK, Agile, etc.) directly within the application.
* **Responsive Design:** Fully adaptive layout ensuring consistency across desktop, tablet, and mobile devices.

## Technology Stack

The project relies on a modern frontend ecosystem to ensure performance, type safety, and scalability:

* **Framework:** Next.js (App Router architecture)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** Shadcn/UI (based on Radix Primitives)
* **Icons:** Lucide React
* **Package Manager:** pnpm

## Project Structure

The codebase follows the standard Next.js App Router structure:

```text
.
├── app/                    # Application routes and pages
│   ├── about/              # Professional experience page
│   ├── projects/           # Projects directory and dynamic details pages
│   ├── globals.css         # Global styles and custom animations
│   ├── layout.tsx          # Root layout and metadata
│   └── page.tsx            # Landing page (Home)
├── components/             # Reusable UI components
│   ├── ui/                 # Atomic UI elements (buttons, cards, badges)
│   ├── terminal.tsx        # Custom terminal emulation component
│   ├── project-card.tsx    # Project summary display component
│   └── navigation.tsx      # Main navigation bar
├── public/                 # Static assets (images, certificates, icons)
└── lib/                    # Utility functions and helpers