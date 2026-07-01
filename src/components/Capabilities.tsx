"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Network,
  Terminal,
  Cloud,
  Search,
  Wrench,
  Bug,
  Radio,
} from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Threat Intelligence",
    desc: "Real-time threat analysis, attack surface mapping, and adversarial modeling across complex network environments.",
  },
  {
    icon: Network,
    title: "Network Security",
    desc: "Deep packet analysis, wireless security auditing (802.11), MITM assessment, and protocol-level vulnerability detection.",
  },
  {
    icon: Terminal,
    title: "Systems Engineering",
    desc: "Hardening Linux and Windows systems, privilege boundary analysis, secure configuration, and automation.",
  },
  {
    icon: Cloud,
    title: "Cloud & Container Security",
    desc: "Docker/Kubernetes security auditing, IAM policy analysis, cloud infrastructure assessment, and supply chain defense.",
  },
  {
    icon: Search,
    title: "Digital Forensics",
    desc: "Evidence collection, log analysis, timeline reconstruction, and root cause analysis from system artifacts.",
  },
  {
    icon: Wrench,
    title: "Security Automation",
    desc: "Automated reconnaissance pipelines, toolchain integration, CI/CD security gates, and custom security tooling.",
  },
  {
    icon: Bug,
    title: "Vulnerability Assessment",
    desc: "Systematic vulnerability discovery, exploitation testing (within scope), and prioritized remediation planning.",
  },
  {
    icon: Radio,
    title: "Wireless Security",
    desc: "Full WPA2/WPA3 assessment chain: reconnaissance, handshake capture, PMKID extraction, and credential validation.",
  },
];

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="capabilities"
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
            Capabilities
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            A deep toolkit spanning the full spectrum of cybersecurity and
            infrastructure operations.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className="glow-card group rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-hover hover:-translate-y-0.5"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20">
                  <Icon className="text-accent" size={16} />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold">{cap.title}</h3>
                <p className="text-xs leading-relaxed text-muted">
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
