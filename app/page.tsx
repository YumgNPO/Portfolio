"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Languages,
  Menu,
} from "lucide-react"

const GITHUB_URL = "https://github.com/YumgNPO"
const LINKEDIN_URL = "https://www.linkedin.com/in/orumere-nyerhovwo-17264929b/"
const EMAIL = "orumere@tundrel.com"
const RESUME_URL = "https://drive.google.com/file/d/1rSvuAUxT2q4T-70Wr6QJx3_mDbSv3N8B/view?ts=67eb6267"

const skillGroups = [
  {
    value: "frontend",
    label: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Styled Components",
      "Redux",
      "Responsive UI Design",
    ],
  },
  {
    value: "backend",
    label: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "SQL / PostgreSQL",
      "RESTful API Design",
      "Webhooks & SSE",
    ],
  },
  {
    value: "science",
    label: "ML & Science",
    skills: [
      "PyTorch",
      "Scientific ML (SciML)",
      "Differential Equation Modeling",
      "Custom Schema Parser Design",
    ],
  },
  {
    value: "embedded",
    label: "Embedded",
    skills: ["8051 Assembly", "C / C++", "8255 PPI Configuration", "Microcontroller Interfacing"],
  },
  {
    value: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vapi AI", "YARA", "AST Analysis", "Angular", "AWS"],
  },
  {
    value: "soft",
    label: "Soft Skills",
    skills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
      "Critical Thinking",
      "Attention to Detail",
      "User Empathy",
    ],
  },
]

type Project = {
  title: string
  subtitle?: string
  tag?: string
  desc: string
  tech: string[]
  image?: string
  codeLink?: string
  demoLink?: string
}

const projects: Project[] = [
  {
    title: "Tundrel",
    subtitle: "Production AI Voice & Answering Platform",
    tag: "Production",
    desc: "Built and deployed a production web platform offering 24/7 AI voice receptionists, automated dispatching, and intelligent call qualification. Configured server-side API pipelines and responsive UI components ensuring real-time voice execution and data delivery.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vapi AI", "Server-Sent Events (SSE)"],
    demoLink: "https://tundrel.com",
  },
  {
  title: "QuantPINN",
  subtitle: "Physics-Informed Neural Network for the 2D Wave Equation",
  desc: "Hard-constrained PyTorch PINN for the 2D wave equation, benchmarked against a finite-difference reference verified with the analytical solution. Relative L2 error of 0.051% across 1.65M space-time nodes, trained in about 2.5 minutes on a single GTX 1650.",
  tech: ["Python", "PyTorch", "Scientific ML (SciML)", "Finite Differences"],
  image: "/images/quantpinn.png",
  codeLink: "https://github.com/YumgNPO/QuantPINN",
  },
  {
    title: "MCP-Sentinel",
    subtitle: "Security Scanner for Model Context Protocol",
    desc: "Developed a static analysis security scanner for Model Context Protocol (MCP) servers. Audits tool definitions and server manifests for prompt injection vectors, tool description poisoning, unpinned dependencies, and AST execution sinks.",
    tech: ["Python", "AST Analysis", "YARA", "JSON Schema Validation"],
    codeLink: "https://github.com/YumgNPO/mcp-sentinel",
  },
  {
    title: "E-commerce Platform",
    desc: "A modern e-commerce solution built with Next.js.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/images/ecommerce.png",
    codeLink: "https://github.com/YumgNPO/e-commerce-store.git",
    demoLink: "https://v0-new-project-v2rvlquaile.vercel.app/",
  },
  {
    title: "Weather App",
    desc: "A simple weather webapp built with Nextjs and Tailwind CSS",
    tech: ["NextJs", "Tailwind CSS", "Styled Components"],
    image: "/images/weather-app.png",
    codeLink: "https://github.com/YumgNPO/Weather-App.git",
    demoLink: "https://v0-weather-app-ui-omega.vercel.app/",
  },
]

export default function ProfilePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    // Close mobile menu if it's open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <span>Orumere's Page</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </button>
            ))}
          </nav>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="px-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 shadow-lg z-50">
                <div className="flex flex-col space-y-3">
                  {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-base font-medium transition-colors hover:text-primary text-left py-3 px-2"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="container py-8 md:py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                Orumere Nyerhovwo Praise
              </h1>
              <h2 className="text-xl text-muted-foreground">Software Engineer</h2>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto lg:mx-0">
              Software Engineer specializing in performant web applications, AI agent platform architecture, and
              physics-informed machine learning models. I've built and deployed production platforms with React,
              Next.js, TypeScript, Python, and PyTorch, and I care about creating accessible, user-friendly
              interfaces that solve real problems.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "PyTorch"].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              <Button variant="outline" size="icon" asChild>
                <Link href={GITHUB_URL} target="_blank" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={LINKEDIN_URL} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={`mailto:${EMAIL}`} aria-label="Email">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href={RESUME_URL} download>
                  <FileText className="h-4 w-4" />
                  <span>Resume</span>
                </Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button size="sm" onClick={() => scrollToSection("contact")}>
                Hire Me
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-background shadow-xl sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              <Image
                src="/images/profile.png"
                alt="Orumere Nyerhovwo Praise - Profile Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/40 py-12 md:py-24">
        <div className="container space-y-6 md:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Skills</h2>
            <p className="text-muted-foreground md:text-lg">Technologies and tools I work with</p>
          </div>

          <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 sm:grid-cols-6 w-full h-auto mb-8">
              {skillGroups.map((group) => (
                <TabsTrigger key={group.value} value={group.value}>
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillGroups.map((group) => (
              <TabsContent key={group.value} value={group.value} className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.skills.map((skill) => (
                    <Card key={skill} className="overflow-hidden">
                      <CardContent className="p-4 text-center flex items-center justify-center min-h-[80px]">
                        <div className="font-medium">{skill}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-8 md:py-16 lg:py-24">
        <div className="space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto px-4">
              A selection of projects that showcase my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 sm:px-0">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} Screenshot`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center gap-2 bg-muted text-muted-foreground">
                      <Code className="h-6 w-6" />
                      <span className="text-lg font-semibold">{project.title}</span>
                    </div>
                  )}
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.subtitle && <p className="text-sm text-muted-foreground">{project.subtitle}</p>}
                    </div>
                    {project.tag && <Badge>{project.tag}</Badge>}
                  </div>
                  <p className="text-muted-foreground mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {(project.codeLink || project.demoLink) && (
                    <div className="flex gap-3">
                      {project.codeLink && (
                        <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                          <Link href={project.codeLink} target="_blank">
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </Link>
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button size="sm" className="gap-2" asChild>
                          <Link href={project.demoLink} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <Link href={GITHUB_URL} target="_blank">
                <Github className="h-4 w-4" />
                <span>View More Projects on GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-muted/40 py-12 md:py-24">
        <div className="container space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Work Experience</h2>
            <p className="text-muted-foreground md:text-lg">My professional journey and achievements</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Work History
              </h3>

              <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-muted-foreground/30">
                {[
                  {
                    role: "Web Developer Intern",
                    company: "Montech Ltd",
                    date: "2021 - 2022",
                    desc: "Assisted in developing and maintaining company website. Learned modern web development practices and agile methodologies.",
                  },
                ].map((job, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary"></div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{job.role}</h4>
                      <div className="font-medium">{job.company}</div>
                      <div className="text-sm text-muted-foreground">{job.date}</div>
                      <p className="text-muted-foreground mt-2">{job.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </h3>

              <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-muted-foreground/30">
                {[
                  {
                    degree: "B.Eng. Electronics and Computer Engineering",
                    school: "University of Port Harcourt (UniPort)",
                    date: "2022 - 2027",
                    desc: "Undergraduate. Focus on electronic circuits, hardware-software integration, digital system design, microprocessors (8051), and software engineering principles.",
                  },
                ].map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary"></div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <div className="font-medium">{edu.school}</div>
                      <div className="text-sm text-muted-foreground">{edu.date}</div>
                      <p className="text-muted-foreground mt-2">{edu.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Languages
              </h3>

              <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-muted-foreground/30">
                {[
                  { language: "English", level: "Native" },
                  { language: "Japanese (日本語)", level: "Hiragana & Katakana, conversational practice" },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary"></div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{item.language}</h4>
                      <p className="text-muted-foreground">{item.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary text-primary-foreground py-8 md:py-16 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
            <p className="text-primary-foreground/80 md:text-lg">
              I'm currently available for freelance work and full-time positions.
            </p>

            <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4">
              <Button size="lg" variant="secondary" className="gap-2 w-full max-w-xs" asChild>
                <Link href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4" />
                  <span className="text-sm sm:text-base">{EMAIL}</span>
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 w-full max-w-xs" asChild>
                <Link href={LINKEDIN_URL} target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 w-full max-w-xs" asChild>
                <Link href={GITHUB_URL} target="_blank">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
              </Button>
            </div>

            <div className="pt-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href={RESUME_URL} download>
                  <FileText className="h-4 w-4" />
                  <span>Download Resume</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col gap-4 md:h-24 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground md:text-center">
            © {new Date().getFullYear()} Orumere Nyerhovwo Praise. All rights reserved.
          </p>
          <div className="md:ml-auto flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href={GITHUB_URL} target="_blank" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={LINKEDIN_URL} target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={`mailto:${EMAIL}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
