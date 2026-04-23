'use client'
// @ts-nocheck

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'

const detailedProjects = [
  {
    id: 'rag-enterprise',
    title: 'RAG Enterprise Integration',
    tagline: 'Turning proprietary data into conversational AI',
    tags: ['LangChain', 'Pinecone', 'LLMs', 'FastAPI'],
    number: '01',
    gradient: 'from-violet-600 to-purple-600',
    glow: 'rgba(139,92,246,0.5)',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/30',
    challenge: 'Enterprise client had 50GB+ of unstructured documentation and wanted instant, accurate answers without training new models. Challenge: Maintaining context relevance and preventing hallucinations.',
    solution: 'Built a production RAG pipeline: document ingestion → vector embeddings (OpenAI) → semantic search via Pinecone → context-aware LLM responses. Added chunking strategies for long documents and a feedback loop to tune retrieval.',
    results: [
      '94% accuracy on domain-specific QA',
      '2.3s avg response time',
      'Reduced support tickets by 40%',
      'Scaled to 100K+ queries/month',
    ],
    learnings: 'The biggest win was realizing that retrieval quality matters more than model size. A smaller model with great data beats a large model with mediocre retrieval.',
    technologies: {
      'Backend': 'FastAPI, Python',
      'ML/AI': 'LangChain, OpenAI Embeddings, LLMs',
      'Vector DB': 'Pinecone',
      'Infrastructure': 'AWS Lambda, RDS',
    },
    metrics: [
      { label: 'Accuracy', value: '94%', icon: Target },
      { label: 'Response Time', value: '2.3s', icon: TrendingUp },
      { label: 'Support Reduction', value: '40%', icon: Lightbulb },
    ],
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline Automation',
    tagline: 'Processing 10M+ records daily with zero manual intervention',
    tags: ['Apache Airflow', 'PySpark', 'PostgreSQL', 'AWS'],
    number: '02',
    gradient: 'from-blue-600 to-cyan-600',
    glow: 'rgba(59,130,246,0.5)',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    challenge: 'Manual data processing was taking 8 hours daily with inconsistent data quality. Needed to scale from 2M to 10M+ daily records without adding team members.',
    solution: 'Designed Airflow-orchestrated ETL with PySpark jobs. Implemented schema validation, anomaly detection, and auto-remediation. Added monitoring, alerts, and containerized with Docker for easy scaling.',
    results: [
      'Processing time: 8h → 1.2h',
      'Data quality: 87% → 99.2%',
      'Zero manual interventions/month',
      '10M records/day at scale',
    ],
    learnings: 'Automation pays for itself quickly. Spent 2 weeks building → saved 30+ hours/month in operational overhead.',
    technologies: {
      'Orchestration': 'Apache Airflow',
      'Processing': 'PySpark, Python',
      'Database': 'PostgreSQL, S3',
      'Infrastructure': 'AWS, Docker, EC2',
    },
    metrics: [
      { label: 'Speed-up', value: '6.7×', icon: TrendingUp },
      { label: 'Data Quality', value: '99.2%', icon: Target },
      { label: 'Records/Day', value: '10M+', icon: Lightbulb },
    ],
  },
  {
    id: 'fine-tuned-llm',
    title: 'Fine-tuned LLM Framework',
    tagline: 'Domain expertise baked into production models',
    tags: ['LoRA', 'Hugging Face', 'PyTorch', 'CUDA'],
    number: '03',
    gradient: 'from-emerald-600 to-teal-600',
    glow: 'rgba(16,185,129,0.5)',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    challenge: 'General LLMs performed poorly on specialized domain tasks (legal, financial). Fine-tuning required too much data and compute. Goal: 40% improvement with limited labeled data.',
    solution: 'Implemented parameter-efficient fine-tuning using LoRA (Low-Rank Adaptation). Created a training framework with active learning to maximize data efficiency. Optimized for inference with ONNX quantization.',
    results: [
      '40% accuracy improvement',
      '90% parameter reduction',
      '3× faster inference',
      'Deployed on edge devices',
    ],
    learnings: "LoRA changed the game. Instead of 80GB VRAM for fine-tuning, we needed 8GB. Quality didn't suffer — it actually improved because we avoided catastrophic forgetting.",
    technologies: {
      'Training': 'PyTorch, Hugging Face Transformers',
      'Optimization': 'LoRA, ONNX, CUDA',
      'Inference': 'TensorRT, ONNX Runtime',
      'MLOps': 'W&B, Airflow',
    },
    metrics: [
      { label: 'Accuracy Gain', value: '+40%', icon: TrendingUp },
      { label: 'Parameter Reduction', value: '90%', icon: Target },
      { label: 'Inference Speed', value: '3×', icon: Lightbulb },
    ],
  },
]

export function ProjectsDetailedSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#030303]" id="projects-detail">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Deep Dives
          </h2>
          <p className="text-white/30 max-w-md mx-auto text-sm px-4">
            Real-world challenges, engineering solutions, and measurable impact
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 sm:space-y-24">
          {detailedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="group relative"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-[0.08] blur-2xl rounded-3xl transition-opacity duration-700`}
              />

              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-sm overflow-hidden group-hover:border-white/15 transition-colors duration-500">
                {/* Border beam — desktop only */}
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <BorderBeam
                    size={250}
                    duration={12}
                    colorFrom={project.glow.includes('139') ? '#a855f7' : project.glow.includes('59') ? '#3b82f6' : '#10b981'}
                    colorTo={project.glow.includes('139') ? '#3b82f6' : project.glow.includes('59') ? '#06b6d4' : '#06b6d4'}
                    borderWidth={1.5}
                  />
                </div>

                {/* Project Header */}
                <div className="relative p-5 sm:p-8 md:p-10 border-b border-white/[0.06]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Number + title — stacked on mobile */}
                      <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <span className={`text-3xl sm:text-5xl font-black ${project.accentColor} opacity-20 font-playfair flex-shrink-0 leading-none mt-1`}>
                          {project.number}
                        </span>
                        <div className="hidden sm:block w-px h-10 bg-white/[0.06] flex-shrink-0" />
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">{project.title}</h3>
                          <p className="text-white/35 text-xs sm:text-sm mt-1">{project.tagline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl border ${project.borderColor} flex items-center justify-center flex-shrink-0 group-hover:bg-white/5 transition-colors`}
                    >
                      <ArrowUpRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${project.accentColor} opacity-50`} />
                    </motion.div>
                  </div>
                </div>

                {/* Metrics — 3 col always, smaller text on mobile */}
                <div className="grid grid-cols-3 gap-0 border-b border-white/[0.06]">
                  {project.metrics.map((metric, i) => {
                    const Icon = metric.icon
                    return (
                      <div
                        key={i}
                        className={`relative p-4 sm:p-6 text-center ${i < 2 ? 'border-r border-white/[0.06]' : ''}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative">
                          <div className="text-lg sm:text-2xl md:text-3xl font-black text-white mb-0.5 sm:mb-1">{metric.value}</div>
                          <div className={`text-[9px] sm:text-[10px] ${project.accentColor} opacity-60 font-medium tracking-widest uppercase leading-tight`}>
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Body */}
                <div className="p-5 sm:p-8 md:p-10 space-y-8 sm:space-y-10">
                  {/* Challenge / Solution / Results — stacked on mobile, 3-col on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    {[
                      {
                        label: 'Challenge',
                        content: project.challenge,
                        accent: 'text-rose-400',
                        indicator: 'bg-rose-500',
                      },
                      {
                        label: 'Solution',
                        content: project.solution,
                        accent: project.accentColor,
                        indicator: `bg-gradient-to-r ${project.gradient}`,
                      },
                      {
                        label: 'Results',
                        list: project.results,
                        accent: 'text-emerald-400',
                        indicator: 'bg-emerald-500',
                      },
                    ].map((section, i) => (
                      <div key={i} className="relative">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${section.indicator}`} />
                          <h4 className={`text-[10px] font-bold tracking-widest uppercase ${section.accent}`}>
                            {section.label}
                          </h4>
                        </div>
                        {section.list ? (
                          <ul className="space-y-1.5 sm:space-y-2">
                            {section.list.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-white/40 text-xs">
                                <span className="text-emerald-400 mt-0.5 flex-shrink-0">↑</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white/35 text-xs leading-relaxed">{section.content}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Key Learning */}
                  <div className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border ${project.borderColor} bg-white/[0.02] overflow-hidden`}>
                    <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${project.gradient}`} />
                    <p className={`text-[9px] font-bold tracking-widest uppercase ${project.accentColor} mb-1.5 sm:mb-2 pl-3`}>
                      Key Learning
                    </p>
                    <p className="text-white/45 text-xs leading-relaxed pl-3">{project.learnings}</p>
                  </div>

                  {/* Tech Stack — 2 col mobile, 4 col desktop */}
                  <div>
                    <div className="flex items-center gap-2 mb-4 sm:mb-5">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/25">Technical Stack</p>
                      <div className="flex-1 h-px bg-white/[0.04]" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                      {Object.entries(project.technologies).map(([category, tech]) => (
                        <div key={category} className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors group/tech">
                          <p className={`text-[9px] font-bold tracking-widest uppercase ${project.accentColor} opacity-60 mb-1 sm:mb-1.5 group-hover/tech:opacity-100 transition-opacity`}>
                            {category}
                          </p>
                          <p className="text-white/40 text-[11px] sm:text-xs">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-white/[0.04]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 py-1 rounded-lg text-[10px] font-medium bg-white/[0.04] text-white/35 border border-white/[0.06] hover:border-white/20 hover:text-white/60 transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 text-center"
        >
          <p className="text-white/25 mb-6 text-sm">Want to see more or discuss these projects?</p>
          <motion.a
            href="mailto:vincentayokunle@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 group-hover:from-violet-500 group-hover:to-blue-500 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
            <span className="relative text-white font-semibold text-sm">Get in Touch</span>
            <ArrowRight className="relative w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
