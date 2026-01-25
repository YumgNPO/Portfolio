"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, FileText, ExternalLink, Code, Briefcase, GraduationCap, Menu } from "lucide-react"

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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">Orumere Praise</h1>
              <h2 className="text-xl text-muted-foreground">Frontend Developer</h2>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto lg:mx-0">
              I craft elegant, efficient, and user-friendly web experiences with modern JavaScript frameworks. My
              passion lies in creating accessible, performant interfaces that solve real problems.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/YumgNPO/Profile-Page" target="_blank" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/orumere-nyerhovwo-17264929b/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:orumerenyerhovwo@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <Link
                  href="https://drive.google.com/file/d/1rSvuAUxT2q4T-70Wr6QJx3_mDbSv3N8B/view?ts=67eb6267"
                  download
                >
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
                alt="Orumere Praise - Profile Image"
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
            <TabsList className="grid grid-cols-3 w-full mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Styled Components",
                ].map((skill) => (
                  <Card key={skill} className="overflow-hidden">
                    <CardContent className="p-4 text-center flex items-center justify-center min-h-[80px]">
                      <div className="font-medium">{skill}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tools" className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {["Git", "GitHub", "VS Code", "Angular", "AWS"].map((skill) => (
                  <Card key={skill} className="overflow-hidden">
                    <CardContent className="p-4 text-center flex items-center justify-center min-h-[80px]">
                      <div className="font-medium">{skill}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="soft" className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Problem Solving",
                  "Communication",
                  "Team Collaboration",
                  "Time Management",
                  "Adaptability",
                  "Critical Thinking",
                  "Attention to Detail",
                  "User Empathy",
                ].map((skill) => (
                  <Card key={skill} className="overflow-hidden">
                    <CardContent className="p-4 text-center flex items-center justify-center min-h-[80px]">
                      <div className="font-medium">{skill}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
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
            {[
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
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} Screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <Link href={project.codeLink} target="_blank">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Link>
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
                      <Link href={project.demoLink} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <Link href="https://github.com/YumgNPO" target="_blank">
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
                    degree: "Bachelor of Electronics and Computer Engineering",
                    school: "",
                    date: "2022 - 2027",
                    desc: "Currently in 4th year",
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
                <Link href="mailto:orumerenyerhovwo@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm sm:text-base">orumerenyerhovwo@gmail.com</span>
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 w-full max-w-xs" asChild>
                <Link href="https://www.linkedin.com/in/orumere-nyerhovwo-17264929b/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 w-full max-w-xs" asChild>
                <Link href="https://github.com/YumgNPO/Profile-Page" target="_blank">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
              </Button>
            </div>

            <div className="pt-4">
              <Button size="lg" className="gap-2" asChild>
                <Link
                  href="https://drive.google.com/file/d/1rSvuAUxT2q4T-70Wr6QJx3_mDbSv3N8B/view?ts=67eb6267"
                  download
                >
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
            © {new Date().getFullYear()} Orumere Praise. All rights reserved.
          </p>
          <div className="md:ml-auto flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/YumgNPO/Profile-Page" target="_blank" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/orumere-nyerhovwo-17264929b/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:orumerenyerhovwo@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
