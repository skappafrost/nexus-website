"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#identity", label: "Identity" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#roadmap", label: "Roadmap" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    const observers = NAV_LINKS.map(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return null;

      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
    });

    window.addEventListener("scroll", onScroll, { passive: true });

    observers.forEach((obs, i) => {
      const el = document.getElementById(NAV_LINKS[i].href.replace("#", ""));
      if (obs && el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#" className="group flex items-center gap-2" aria-label="NEXUS home">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-xs font-bold tracking-widest text-accent ring-1 ring-accent/20 transition-all group-hover:bg-accent/20 group-hover:ring-accent/40">
            N
          </span>
          <span className="text-sm font-semibold tracking-tight">NEXUS</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  active === href.replace("#", "")
                    ? "text-accent bg-accent/10"
                    : "text-muted hover:text-foreground hover:bg-surface"
                }`}
                aria-current={active === href.replace("#", "") ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop GitHub link */}
        <a
          href="https://github.com/skappafrost/nexus-website"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted transition-all hover:border-border-hover hover:text-foreground md:inline-flex"
          aria-label="View source on GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.627 0 12 0z"/>
          </svg>
          Source
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:text-foreground md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass absolute inset-x-0 top-full border-b border-border md:hidden"
          >
            <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-8">
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={closeMobile}
                      className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                        active === href.replace("#", "")
                          ? "text-accent bg-accent/10"
                          : "text-muted hover:text-foreground hover:bg-surface"
                      }`}
                      aria-current={active === href.replace("#", "") ? "page" : undefined}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-border pt-3">
                <a
                  href="https://github.com/skappafrost/nexus-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-muted transition-all hover:text-foreground"
                  aria-label="View source on GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.627 0 12 0z"/>
                  </svg>
                  View Source
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
