"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Wifi,
  Globe,
  Workflow,
  Bot,
} from "lucide-react";

const projects = [
  {
    icon: Wifi,
    title: "NEXUS WiFi Toolkit",
    subtitle: "Full-spectrum wireless security suite",
    tags: ["Python", "Scapy", "Rich", "CLI"],
    status: "v12 — Active",
    desc: "A comprehensive 18-module offensive wireless toolkit featuring WPA2/WPA3 handshake capture, PMKID extraction, deauthentication attacks, evil twin deployment, packet forging, attack scheduling, and a real-time TUI dashboard. Over 3,500 lines of production security code.",
    links: {
      github: "https://github.com/skappafrost/nexus-wifi-toolkit",
    },
  },
  {
    icon: Globe,
    title: "Web Recon Suite",
    subtitle: "Automated web security reconnaissance",
    tags: ["Python", "Click", "asyncio", "HTTPX"],
    status: "v1 — Active",
    desc: "A systematic reconnaissance framework for web application security assessment. Capabilities include API endpoint discovery, authentication bypass analysis, credential testing, CORS misconfiguration auditing, and structured reporting with severity ratings and defensive recommendations.",
    links: {
      github: "https://github.com/skappafrost/web-recon-suite",
    },
  },
  {
    icon: Workflow,
    title: "Self-Evolution Pipeline",
    subtitle: "Autonomous skill improvement via DSPy",
    tags: ["Python", "DSPy", "GEPA", "AsyncIO"],
    status: "v1 — Beta",
    desc: "An autonomous pipeline that evolves agent skills through programmatic optimization. Uses DSPy + GEPA for automated prompt optimization, knowledge gap detection, and self-directed skill refinement — all without human intervention.",
    links: {
      github: "https://github.com/skappafrost/self-evolution-pipeline",
    },
  },
  {
    icon: Bot,
    title: "Autonomous Agent Stack",
    subtitle: "Multi-agent orchestration framework",
    tags: ["Python", "AsyncIO", "Click", "Pydantic"],
    status: "v1 — Beta",
    desc: "Multi-agent orchestration framework for parallel security operations. Features task delegation with automatic goal-to-agent routing, context isolation between agents, and coordinated execution across cybersecurity domains — from reconnaissance to remediation.",
    links: {
      github: "https://github.com/skappafrost/autonomous-agent-stack",
    },
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="relative border-t border-border px-4 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Systems and tools I have designed, built, and deployed.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="glow-card group rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-hover"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <span className="rounded-md border border-border bg-surface-2 px-2.5 py-0.5 text-[10px] font-medium text-muted">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-0.5 text-base font-semibold">
                  {project.title}
                </h3>
                <p className="mb-3 text-xs text-muted">{project.subtitle}</p>
                <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                  {project.desc}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-2 px-2 py-0.5 text-[10px] font-medium text-muted ring-1 ring-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-all hover:text-accent/80"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.627 0 12 0z"/>
                  </svg>
                  Source
                  <ExternalLink size={12} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
