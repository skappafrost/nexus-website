"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Code,
  Shield,
  Zap,
  GitBranch,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "3,500+",
    label: "Lines of production security code",
  },
  {
    icon: Shield,
    value: "18",
    label: "Integrated offensive security modules",
  },
  {
    icon: GitBranch,
    value: "12",
    label: "Major tool revisions shipped",
  },
  {
    icon: Trophy,
    value: "Multi-domain",
    label: "Wireless, web, infrastructure, cloud",
  },
];

const milestones = [
  {
    year: "2026 Q1",
    title: "NEXUS WiFi Toolkit v10",
    desc: "Initial release of comprehensive wireless security auditing suite after weeks of development across multiple domains.",
  },
  {
    year: "2026 Q2",
    title: "Web Recon Suite",
    desc: "Built automated reconnaissance pipelines for web application security — API discovery, auth bypass analysis, credential testing, and structured reporting.",
  },
  {
    year: "2026 Q2",
    title: "WiFi Toolkit v12",
    desc: "Major rewrite: 3,596 lines, 96 functions, 18 modules including PMKID capture, attack scheduler, real-time dashboard, and wordlist builder.",
  },
  {
    year: "2026 Q2",
    title: "Self-Evolution Pipeline",
    desc: "Deployed autonomous skill improvement system using DSPy/GEPA optimization — enabling the agent to identify and fix knowledge gaps independently.",
  },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
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
            Achievements
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Milestones that define the trajectory of the system.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="glow-card rounded-xl border border-border bg-surface p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/20">
                  <Icon className="text-accent" size={18} />
                </div>
                <div className="mb-1 text-2xl font-bold text-gradient">
                  {stat.value}
                </div>
                <p className="text-xs text-muted">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[17px] hidden w-px bg-border sm:block" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="relative pl-0 sm:pl-12"
              >
                <div className="absolute top-1 left-[10px] hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-background sm:block" />
                <div className="glow-card rounded-xl border border-border bg-surface p-5 sm:p-6">
                  <span className="mb-1 inline-block text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {m.year}
                  </span>
                  <h3 className="mb-1.5 text-base font-semibold">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
