'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Database, Settings } from 'lucide-react'

const cards = [
  {
    title: 'LLM Fine-tuning',
    description: 'Domain-specific model customization with parameter-efficient techniques (LoRA, QLoRA)',
    icon: Brain,
  },
  {
    title: 'Vector Databases',
    description: 'Optimizing semantic search and embedding infrastructure for retrieval systems',
    icon: Database,
  },
  {
    title: 'MLOps & Deployment',
    description: 'Production ML systems with monitoring, versioning, and continuous improvement',
    icon: Settings,
  },
  {
    title: 'API Architecture',
    description: 'Designing scalable, secure interfaces for AI model serving and inference',
    icon: Zap,
  },
  {
    title: 'Data Pipelines',
    description: 'Building robust ETL systems for data quality and model training workflows',
    icon: Database,
  },
  {
    title: 'Performance Optimization',
    description: 'Reducing latency and costs through model quantization and inference tuning',
    icon: Zap,
  },
]

export function InfiniteCards() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-20">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-display">
            Technical <span className="text-slate-400">Expertise</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm tracking-wide">
            Specialized capabilities and technical depth
          </p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...cards, ...cards].map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="flex-shrink-0 w-80 p-6 rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm hover:border-slate-600 transition-colors cursor-pointer group"
                >
                  <div className="mb-4 inline-block p-2.5 rounded-lg bg-slate-800/60 group-hover:bg-slate-700/60 transition-colors text-slate-300 group-hover:text-slate-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 text-display">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
