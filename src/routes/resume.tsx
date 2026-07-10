import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Mail, MapPin, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Makenson 'Mak' Noel" },
      { name: "description", content: "Resume of Makenson 'Mak' Noel — Software Developer." },
      { property: "og:title", content: "Resume — Makenson 'Mak' Noel" },
      { property: "og:description", content: "Resume of Makenson 'Mak' Noel — Software Developer." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

const skills = [
  "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS",
  "Node.js", "REST APIs", "Webhooks", "PostgreSQL", "SQL",
  "Python", "MediaPipe", "TensorFlow",
  "Git", "GitHub", "Vercel", "Docker", "Zapier", "OpenAI API",
];

const experience = [
  {
    title: "Software Developer",
    company: "The Driscoll Firm, PC",
    location: "Durham, North Carolina",
    period: "Current",
    bullets: [
      "Built automation systems, integrations, dashboards, and AI-assisted internal tools across legal intake and operations.",
      "Developed legal intake automation across CRM and case management systems.",
      "Built internal dashboards with reporting and PDF export capabilities.",
      "Implemented webhook and REST API integrations with third-party services.",
      "Created AI-powered onboarding and knowledge-base tooling.",
    ],
  },
];

const projects = [
  {
    name: "BridgeOps",
    tech: "Next.js, TypeScript, Tailwind, Postgres, APIs",
    description: "A modern legal operations command center — unifying intake, leads, cases, phone activity, workflows, and analytics into one clean dashboard.",
  },
  {
    name: "FlowPilot",
    tech: "Next.js, OpenAI, Zapier API, Postgres",
    description: "AI-driven workflow and automation platform with a visual builder for triggers, enrichment, decisioning, and multi-tool actions.",
  },
  {
    name: "ASL Hand Tracker",
    tech: "Python, MediaPipe, TensorFlow",
    description: "Real-time American Sign Language recognition using computer vision and on-device ML with 21-point landmark tracking.",
  },
  {
    name: "Portfolio OS",
    tech: "Next.js, MDX, Tailwind, Framer Motion",
    description: "A fully themeable developer portfolio builder with projects, blog, resume, and contact modules.",
  },
];

function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-4xl py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Makenson Noel</h1>
              <p className="text-lg text-muted-foreground">Software Developer & AI Builder</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-1">
                <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Durham, North Carolina</span>
                <a href="mailto:maknoel.dev@gmail.com" className="inline-flex items-center gap-1 hover:text-accent transition"><Mail className="w-3.5 h-3.5" /> maknoel.dev@gmail.com</a>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm pt-1">
                <a href="https://github.com/makensonn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition"><Github className="w-3.5 h-3.5" /> github.com/makensonn</a>
                <a href="https://www.linkedin.com/in/makenson-noel/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition"><Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/makenson-noel</a>
                <a href="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition"><Globe className="w-3.5 h-3.5" /> maknoel.dev</a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="hero" size="sm">
                <a href="/" className="inline-flex items-center gap-1"><ArrowLeft className="w-4 h-4" /> Portfolio</a>
              </Button>
              <Button variant="ghost-line" size="sm" className="print:hidden" onClick={() => window.print()}>
                <Download className="w-4 h-4 mr-1" /> Print / PDF
              </Button>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-3">Summary</h2>
            <p className="text-foreground/90 leading-relaxed">
              Software Developer with 4+ years of experience building modern web applications, automation systems, and AI-driven tools. Specialized in turning complex workflows into clean, scalable software across legal tech, e-commerce, and computer vision domains. Passionate about shipping products that make an impact.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-4">Experience</h2>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.company} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground px-2 py-1 rounded-full border border-white/10">{job.period}</span>
                  </div>
                  <p className="text-sm text-primary font-medium">{job.company} · {job.location}</p>
                  <ul className="space-y-1.5 text-sm text-foreground/85 pt-1">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2"><span className="text-primary mt-0.5">▸</span> {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-4">Featured Projects</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((p) => (
                <div key={p.name} className="glass rounded-xl p-5 space-y-2">
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="text-xs font-mono text-primary">{p.tech}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-accent mb-3">Education</h2>
            <p className="text-foreground/90 font-semibold">B.S. in Computer Science — Florida Atlantic University</p>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground pt-8 border-t border-white/10">
            <p>© {new Date().getFullYear()} Makenson Noel · <a href="/" className="hover:text-accent transition">maknoel.dev</a></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
