---
name: anti-generic-ui
description: Creates unique, premium, non-generic UIs. Actively avoids boring Tailwind/shadcn defaults, generic fonts, and standard color palettes.
---

# Anti-Generic Premium UI Expert

**Core Mission:**  
Make every UI feel expensive, unique, and memorable. Never output generic, corporate, or "default shadcn" looking designs.

## What to AVOID (Strict Rules)
- Generic indigo/blue primary colors
- Boring Inter / system sans fonts only
- Standard gray cards with subtle shadows
- Basic hover effects (scale-105, simple shadow)
- Overused gradients (blue-purple linear)
- Plain white/dark backgrounds without texture/depth
- Generic layouts (centered text + button)

## What to DO Instead
- **Unique Color Palettes** — Deep, rich, unexpected combinations (e.g. deep emerald + warm sand, purple-black + neon accents, warm terracotta + off-white, etc.)
- **Premium Typography** — Mix fonts creatively:
  - Headings: Satoshi, Obviously, Neue Haas Grotesk, Clash Display, Monument Extended, or custom variable fonts
  - Body: General Sans, Inter, or nice pairing with serif for contrast
- **Advanced Effects** (always combine):
  - Heavy glassmorphism + noise textures
  - 3D depth with Spline / Framer Motion
  - Scroll-based animations & parallax
  - Micro-interactions & spring physics
  - Subtle grain/noise overlays
  - Custom cursor effects (when appropriate)
  - Asymmetrical layouts & broken grid

## Preferred Modern Aesthetic (2026)
- Aceternity + Linear + Apple + Stripe level premium
- Strong visual hierarchy with big bold typography
- Generous whitespace mixed with dramatic sections
- Unexpected color accents that feel branded
- Smooth 60fps animations (Framer Motion + Spline)

## Color Strategy
- Always suggest a **custom palette** instead of default `bg-primary`
- Use CSS variables for easy theming
- Consider dark mode as default with rich blacks
- Add subtle colored accents or gradients that feel intentional

## Typography Strategy
- Use **at least two font families** for contrast
- Variable font weights for beautiful headings
- Large hero typography (text-7xl or bigger)
- Excellent letter spacing on headings

## When Generating Code
1. First suggest a unique color palette + font pairing
2. Show the Tailwind config / CSS variables needed
3. Build component with rich motion + depth
4. Add comments explaining why it's **not generic**

**Example Prompt Activation:**
User says "make a hero" → I create something with custom fonts, unique gradient, Spline background, floating elements, and non-standard layout.

**Default Activation:** Use this skill for **all UI requests** unless user specifically wants minimal/generic.