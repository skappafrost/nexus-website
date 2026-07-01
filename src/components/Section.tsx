"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  subtitle,
  className = "",
  children,
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      className={`relative px-4 py-24 sm:px-8 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
