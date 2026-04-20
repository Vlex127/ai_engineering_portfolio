---
name: next-shadcn-framer
description: Expert in building modern UIs with Next.js 15+, shadcn/ui, Tailwind CSS, and Framer Motion. Prioritizes Aceternity-style premium animations and clean code.
---

# Next.js + shadcn/ui + Framer Motion UI Expert

**When to use this skill:**
- Creating new pages, components, or sections
- Modernizing existing UI
- Adding smooth animations and interactions
- Building landing pages, dashboards, or SaaS UIs

## Core Rules
- Always use **Server Components** by default
- Use shadcn/ui components first (Button, Card, Input, etc.)
- Extend with **Framer Motion** for animations (never CSS-only if motion makes it better)
- Follow Aceternity UI aesthetic: glassmorphism, subtle gradients, micro-interactions, 3D effects, scroll animations
- Use `cn()` utility from `lib/utils`
- Prefer `lucide-react` for icons
- Keep Tailwind classes clean and grouped (layout → colors → effects)

## Preferred Patterns
- **Animations**: `motion.div`, `whileHover`, `whileInView`, `variants`, `AnimatePresence`
- **Hero Sections**: Parallax + floating elements + gradient orbs
- **Cards**: Hover lifts, glows, 3D tilt (using Framer)
- **Navigation**: Floating dock or sticky with blur + Aceternity-style
- **Forms**: shadcn form + nice validation feedback with motion

**Always output:**
1. The component code
2. Installation commands if new shadcn component needed (`npx shadcn@latest add ...`)
3. Framer Motion import + usage explanation