'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Brain, Zap, Database, Settings, ChevronRight } from 'lucide-react'

const cards = [
  {
    title: 'LLM Fine-tuning',
    description: 'Domain-specific model customization with parameter-efficient techniques (LoRA, QLoRA)',
    icon: Brain,
    color: 'from-violet-600 to-purple-600',
    glow: 'rgba(139,92,246,0.5)',
    tag: 'GenAI',
  },
  {
    title: 'Vector Databases',
    description: 'Optimizing semantic search and embedding infrastructure for retrieval systems',
    icon: Database,
    color: 'from-blue-600 to-cyan-600',
    glow: 'rgba(59,130,246,0.5)',
    tag: 'RAG',
  },
  {
    title: 'MLOps & Deployment',
    description: 'Production ML systems with monitoring, versioning, and continuous improvement',
    icon: Settings,
    color: 'from-emerald-600 to-teal-600',
    glow: 'rgba(16,185,129,0.5)',
    tag: 'DevOps',
  },
  {
    title: 'API Architecture',
    description: 'Designing scalable, secure interfaces for AI model serving and inference',
    icon: Zap,
    color: 'from-orange-600 to-amber-600',
    glow: 'rgba(245,158,11,0.5)',
    tag: 'Backend',
  },
  {
    title: 'Data Pipelines',
    description: 'Building robust ETL systems for data quality and model training workflows',
    icon: Database,
    color: 'from-pink-600 to-rose-600',
    glow: 'rgba(236,72,153,0.5)',
    tag: 'Data Eng',
  },
  {
    title: 'Performance Optimization',
    description: 'Reducing latency and costs through model quantization and inference tuning',
    icon: Zap,
    color: 'from-cyan-600 to-sky-600',
    glow: 'rgba(6,182,212,0.5)',
    tag: 'Infra',
  },
]

function ExpertiseCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const Icon = card.icon
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-50, 50], [5, -5]), { stiffness: 400, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-50, 50], [-5, 5]), { stiffness: 400, damping: 30 })

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="flex-shrink-0 w-72 cursor-pointer group"
    >
      <div className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-white/20 h-full">
        {/* Glow bg */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-2xl`}
        />

        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-gradient-to-r ${card.color} text-white/90`}>
            {card.tag}
          </span>
        </div>

        <div className="relative z-10">
          <div
            className={`mb-5 inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color}`}
            style={{ boxShadow: `0 4px 20px ${card.glow}` }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-sm font-semibold text-white mb-2 tracking-tight">{card.title}</h3>
          <p className="text-white/40 text-xs leading-relaxed">{card.description}</p>
        </div>

        {/* Bottom shine */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Hover arrow */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -4 }}
          whileHover={{ x: 0 }}
        >
          <ChevronRight className="w-4 h-4 text-white/30" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function InfiniteCards() {
  return (
    <div className="relative w-full overflow-hidden bg-[#030303] py-24">
      {/* Section fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

      {/* Background shimmer line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
              Technical{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-white/30 max-w-md mx-auto text-sm">
              Specialized capabilities across the full ML lifecycle
            </p>
          </motion.div>
        </div>

        {/* Marquee row 1 — left */}
        <div className="overflow-hidden mb-5">
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {[...cards, ...cards].map((card, i) => (
              <ExpertiseCard key={i} card={card} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Marquee row 2 — right (reversed) */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {[...cards.slice().reverse(), ...cards.slice().reverse()].map((card, i) => (
              <ExpertiseCard key={i} card={card} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
