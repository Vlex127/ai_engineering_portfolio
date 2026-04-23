'use client'
// @ts-nocheck
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'

const projects = [
  {
    title: 'RAG Enterprise Integration',
    description: 'Production-ready Retrieval-Augmented Generation system integrating proprietary data with LLMs for enterprise knowledge management and customer support automation.',
    tags: ['LangChain', 'Pinecone', 'LLMs', 'FastAPI'],
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    glow: 'rgba(139,92,246,0.4)',
    stat: '94%',
    statLabel: 'Accuracy',
    href: '#rag-enterprise',
  },
  {
    title: 'Data Pipeline Automation',
    description: 'Scalable ETL system processing 10M+ records/day with automated data validation, real-time indexing, and zero manual intervention.',
    tags: ['Apache Airflow', 'PySpark', 'PostgreSQL', 'AWS'],
    gradient: 'from-blue-600 via-cyan-600 to-sky-600',
    glow: 'rgba(59,130,246,0.4)',
    stat: '6.7×',
    statLabel: 'Faster',
    href: '#data-pipeline',
  },
  {
    title: 'Fine-tuned LLM Framework',
    description: 'Custom fine-tuning pipeline for domain-specific language models with 40% accuracy improvement using parameter-efficient methods.',
    tags: ['LoRA', 'Hugging Face', 'PyTorch', 'CUDA'],
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    glow: 'rgba(16,185,129,0.4)',
    stat: '+40%',
    statLabel: 'Accuracy',
    href: '#fine-tuned-llm',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-100, 100], [4, -4]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-4, 4]), { stiffness: 300, damping: 30 })
  const glowX = useTransform(x, [-100, 100], [0, 100])
  const glowY = useTransform(y, [-100, 100], [0, 100])

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
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden cursor-pointer block"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-700`} />

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-white/20 transition-colors duration-500" />

      {/* Dynamic cursor glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, ${project.glow} 0%, transparent 65%)`
          ),
        }}
      />

      {/* Animated border beam on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <BorderBeam
          size={150}
          duration={8}
          colorFrom={project.gradient.includes('violet') ? '#a855f7' : project.gradient.includes('blue') ? '#3b82f6' : '#10b981'}
          colorTo={project.gradient.includes('violet') ? '#3b82f6' : project.gradient.includes('blue') ? '#06b6d4' : '#06b6d4'}
          borderWidth={1}
        />
      </div>

      {/* Top stat badge */}
      <div className="absolute top-5 right-5 z-10">
        <div
          className={`px-3 py-1.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-center min-w-[70px]`}
          style={{ boxShadow: `0 0 20px ${project.glow}` }}
        >
          <div className="text-lg font-bold leading-none">{project.stat}</div>
          <div className="text-[9px] font-medium mt-0.5 opacity-80">{project.statLabel}</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-end">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-white/40 text-xs leading-relaxed line-clamp-2 group-hover:text-white/60 transition-colors">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1.5 flex-wrap">
            {project.tags.slice(0, 3).map((tag, j) => (
              <span
                key={j}
                className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-white/5 text-white/50 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <motion.div
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-white/30 group-hover:text-white/70 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.div>
        </div>
      </div>

      {/* Bottom shimmer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.a>
  )
}

export function FeaturedProjects() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#030303]" id="projects">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white/30 max-w-md mx-auto text-sm">
            Showcase of recent AI and ML projects that made a real impact
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
