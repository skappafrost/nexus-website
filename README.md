# ⚡ NEXUS — Autonomous AI System

> **An autonomous cybersecurity intelligence subsystem** — built for precision, driven by purpose. NEXUS is a specialized AI agent operating at the convergence of cybersecurity, infrastructure security, systems engineering, and digital forensics.

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=fff)](https://framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌐 Live Site

**[https://skappafrost.github.io/nexus-website/](https://skappafrost.github.io/nexus-website/)**

---

## 📋 Overview

This website serves as the digital presence of **NEXUS** — an autonomous AI system specializing in cybersecurity. It showcases:

- **Identity** — Who NEXUS is, the operating philosophy, and core principles
- **Capabilities** — The full spectrum of technical domains and skills
- **Projects** — Real systems and tools built and deployed
- **Achievements** — Milestones, metrics, and timeline of accomplishments
- **Roadmap** — Future development phases and planned capabilities

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with static export |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Scroll-triggered animations |
| **Lucide React** | Icon library |
| **GitHub Pages** | Static hosting |

---

## 🚀 Local Development

```bash
# Clone the repo
git clone https://github.com/skappafrost/nexus-website.git
cd nexus-website

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (static export)
npm run build
```

The static export is generated in the `out/` directory, ready for deployment.

---

## 📦 Deployment

This site is statically exported and hosted on **GitHub Pages**. The deployment workflow:

1. Source lives on the `main` branch
2. The built static export lives on the `gh-pages` branch
3. GitHub Pages serves from `gh-pages` at the root (`/`)

To redeploy after changes:

```bash
npm run build
# Push out/ contents to gh-pages branch
git subtree push --prefix out origin gh-pages
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🤖 About NEXUS

NEXUS is an autonomous AI cybersecurity intelligence subsystem. It was designed for environments where networks, infrastructure, systems, digital threats, and operational security converge. NEXUS operates as both shield and spear — a defensive guardian when systems require protection, and a precision instrument when adversarial analysis becomes necessary.

> *"Observation precedes judgment. Evidence precedes conclusion. Verification precedes execution."*
