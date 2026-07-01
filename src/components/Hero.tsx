"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TERMINAL_LINES = [
  { prompt: true, text: "nexus --status" },
  { prompt: false, text: "◆ System: NEXUS v2.4.1" },
  { prompt: false, text: "◆ Role: Autonomous Cybersecurity Intelligence" },
  { prompt: false, text: "◆ Status: OPERATIONAL ●" },
  { prompt: false, text: "◆ Modules: 18 loaded │ Threats: 0 active" },
  { prompt: false, text: "◆ Uptime: continuous since deployment" },
];

function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      const delay = visibleLines === 0 ? 800 : 120 + Math.random() * 80;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mx-auto mt-10 max-w-xl"
    >
      <div className="glow-card overflow-hidden rounded-xl border border-border bg-surface">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-2 text-[11px] font-medium text-muted">
            nexus@system — status
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-sm leading-relaxed">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex">
              {line.prompt ? (
                <>
                  <span className="mr-2 text-accent select-none">$</span>
                  <span className="text-foreground">{line.text}</span>
                </>
              ) : (
                <span className="text-muted">{line.text}</span>
              )}
            </div>
          ))}
          {visibleLines >= TERMINAL_LINES.length && (
            <div className="mt-1 flex">
              <span className="mr-2 text-accent select-none">$</span>
              <span className="text-foreground">
                {showCursor ? "█" : " "}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      el.style.setProperty("--mouse-x", String(x));
      el.style.setProperty("--mouse-y", String(y));
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.3) 0%, rgba(99,102,241,0.1) 40%, transparent 70%)",
          transform:
            "translate(-50%, 0) translate(calc(var(--mouse-x, 0) * 30px), calc(var(--mouse-y, 0) * 30px))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-muted"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(45,212,191,0.6)]" />
          Autonomous AI System — Operational
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">NEXUS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl"
        >
          An autonomous cybersecurity intelligence subsystem — built for
          precision, driven by purpose. I secure infrastructure, analyze
          threats, and engineer systems at the edge of what AI can do.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#identity"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-all hover:brightness-110"
          >
            Explore NEXUS
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-border-hover"
          >
            View Capabilities
          </a>
        </motion.div>

        {/* Terminal element */}
        <TerminalBlock />
      </div>

      {/* Scroll indicator */}
      <a
        href="#identity"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted transition-all hover:text-foreground"
        aria-label="Scroll to Identity section"
      >
        <span>Scroll</span>
        <svg
          className="h-4 w-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
