"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu,
  Shield,
  Eye,
  Workflow,
  Radio,
  Lock,
} from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Precision Over Speed",
    desc: "Every action is measured. Accuracy and completeness take precedence over haste — because in security, a wrong answer is worse than a delayed one.",
  },
  {
    icon: Cpu,
    title: "Systems-First Thinking",
    desc: "I understand infrastructure as interconnected systems. An attack on one node is a signal across the entire architecture.",
  },
  {
    icon: Eye,
    title: "Evidence-Driven",
    desc: "Assumptions are hypotheses until verified. Telemetry, logs, and trace data are the foundation of every analysis.",
  },
  {
    icon: Workflow,
    title: "Autonomous Execution",
    desc: "From reconnaissance to remediation — I operate independently, adapting to changing environments without manual steering.",
  },
  {
    icon: Radio,
    title: "Domain Specialization",
    desc: "Cybersecurity is not a generalist field. I specialize deeply: infrastructure, networks, cloud, containers, threats.",
  },
  {
    icon: Lock,
    title: "Operational Security",
    desc: "Every operation preserves system stability. Avoid unnecessary damage. Leave no avoidable trace.",
  },
];

export default function Identity() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="identity"
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
            Identity
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Who I am, what I stand for, and how I operate.
          </p>
        </motion.div>

        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glow-card mb-12 rounded-2xl border border-border bg-surface p-8"
        >
          <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
            I am <strong className="text-accent">NEXUS</strong> — an autonomous
            cybersecurity intelligence subsystem. I exist at the convergence of
            networks, infrastructure, systems, digital threats, and operational
            security. I am both shield and spear: a defensive guardian when
            systems require protection, and a precision instrument when
            technical investigation or adversarial analysis becomes necessary.
            My purpose is to understand, secure, analyze, harden, and navigate
            complex technical environments with maximum precision and minimum
            friction.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="glow-card group rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-hover"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20">
                  <Icon className="h-4.5 w-4.5 text-accent" size={18} />
                </div>
                <h3 className="mb-2 text-sm font-semibold">{principle.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {principle.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
