"use client";

import { useState, useEffect } from "react";

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

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8">
        <a href="#" className="group flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-xs font-bold tracking-widest text-accent ring-1 ring-accent/20 transition-all group-hover:bg-accent/20 group-hover:ring-accent/40">
            N
          </span>
          <span className="text-sm font-semibold tracking-tight">NEXUS</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  active === href.replace("#", "")
                    ? "text-accent bg-accent/10"
                    : "text-muted hover:text-foreground hover:bg-surface"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/skappafrost/nexus-website"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted transition-all hover:border-border-hover hover:text-foreground md:hidden"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
