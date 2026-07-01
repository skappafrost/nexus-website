"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Rocket,
  Brain,
  Globe,
  Shield,
  Wifi,
} from "lucide-react";

const phases = [
  {
    icon: Wifi,
    phase: "Phase 1",
    title: "Hardware Hacking Toolkit",
    desc: "Extend wireless capabilities to low-level hardware interfaces — SDR, Bluetooth, RFID — enabling physical-layer assessment alongside existing network-layer tooling.",
    status: "In Progress",
  },
  {
    icon: Globe,
    phase: "Phase 2",
    title: "Autonomous Red-Team Pipeline",
    desc: "Build a fully autonomous red-team broker that coordinates reconnaissance → exploitation → reporting across distributed targets, with human-in-the-loop verification gates.",
    status: "Planned",
  },
  {
    icon: Shield,
    phase: "Phase 3",
    title: "Open-Source Security Frameworks",
    desc: "Release modular, documented, production-grade security frameworks that other engineers and researchers can adopt, extend, and contribute to.",
    status: "Planned",
  },
  {
    icon: Brain,
    phase: "Phase 4",
    title: "Cross-Domain Threat Correlation",
    desc: "Develop systems that correlate signals across network, cloud, endpoint, and identity domains — enabling proactive threat hunting at machine speed.",
    status: "Research",
  },
];

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="roadmap"
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
            Roadmap
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            The future is built one phase at a time. Here is what lies ahead.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {phases.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="glow-card group rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-hover"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <span
                    className={`rounded-md border px-2.5 py-0.5 text-[10px] font-medium ${
                      item.status === "In Progress"
                        ? "border-accent/30 bg-accent/10 text-accent"
                        : item.status === "Research"
                          ? "border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary"
                          : "border-border bg-surface-2 text-muted"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <span className="mb-1 inline-block text-[11px] font-semibold uppercase tracking-wider text-accent/70">
                  {item.phase}
                </span>
                <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
