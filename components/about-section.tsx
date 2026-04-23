'use client'
// @ts-nocheck

import { motion } from 'framer-motion'
import { Code2, Award, Briefcase, ChevronRight } from 'lucide-react'
import { BorderBeam } from './ui/border-beam'

const experience = [
  {
    role: 'Senior AI Engineer',
    company: 'TechCorp AI Solutions',
    period: '2022 – Present',
    description: 'Leading ML infrastructure and LLM integration projects. Architected data pipelines processing 10M+ daily records. Implemented RAG systems for enterprise knowledge management.',
    color: 'from-violet-600 to-purple-600',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    role: 'ML Engineer',
    company: 'DataFlow Systems',
    period: '2020 – 2022',
    description: 'Built production ML pipelines using Apache Airflow and PySpark. Optimized model inference costs by 35%. Mentored junior engineers on MLOps best practices.',
    color: 'from-blue-600 to-cyan-600',
    glow: 'rgba(59,130,246,0.3)',
  },
  {
    role: 'Data Engineer',
    company: 'StartupXYZ',
    period: '2019 – 2020',
    description: 'Designed and maintained ETL pipelines. Implemented data quality frameworks. Collaborated with ML teams on feature engineering and model training.',
    color: 'from-emerald-600 to-teal-600',
    glow: 'rgba(16,185,129,0.3)',
  },
]

const skills = {
  'ML & Data': ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LangChain', 'Pinecone'],
  'Infrastructure': ['AWS', 'Docker', 'Kubernetes', 'Apache Airflow', 'PostgreSQL', 'Redis'],
  'Languages': ['Python', 'SQL', 'TypeScript', 'Bash'],
}

const certifications = [
  { title: 'AWS Certified Machine Learning', issuer: 'Amazon Web Services', year: '2023', color: 'from-orange-500 to-amber-500' },
  { title: 'Deep Learning Specialization', issuer: 'Coursera / Andrew Ng', year: '2021', color: 'from-blue-500 to-indigo-500' },
  { title: 'Data Engineering on Google Cloud', issuer: 'Google Cloud', year: '2022', color: 'from-emerald-500 to-teal-500' },
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Production Systems' },
  { value: '100M+', label: 'Data Points' },
]

const skillColors: Record<string, string> = {
  'ML & Data': 'from-violet-600 to-purple-600',
  'Infrastructure': 'from-blue-600 to-cyan-600',
  'Languages': 'from-emerald-600 to-teal-600',
}

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="relative w-full py-20 sm:py-28 bg-[#030303] overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_0%,rgba(139,92,246,0.04),transparent)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-20">
            <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">Who I Am</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
              About{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-violet-500/60 to-blue-500/60 mx-auto rounded-full" />
          </motion.div>

          {/* Bio + Stats — stacked on mobile, side-by-side on md+ */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
            {/* Bio — full width mobile, 2/3 desktop */}
            <div className="md:col-span-2 space-y-6 sm:space-y-8">
              {[
                {
                  title: 'Background',
                  content: "I'm an AI engineer with 5+ years of experience building production-grade machine learning systems. My journey started with a passion for data science, which evolved into a focus on practical, scalable AI solutions.",
                },
                {
                  title: 'Core Focus',
                  content: 'I specialize in the full lifecycle of AI systems: from data engineering and pipeline architecture to LLM integration and deployment. Particularly passionate about Retrieval-Augmented Generation (RAG) — bridging proprietary data and generative AI.',
                },
                {
                  title: 'Philosophy',
                  content: "Great ML systems aren't about cutting-edge algorithms — they're about practical solutions that scale. I focus on robust data pipelines, optimized inference, and ensuring models stay performant in production.",
                },
              ].map((section, i) => (
                <div key={i} className="relative pl-4 sm:pl-5 border-l border-white/[0.06] group hover:border-violet-500/40 transition-colors duration-500">
                  <h3 className="text-xs sm:text-sm font-semibold text-white/70 uppercase tracking-widest mb-1.5 sm:mb-2 group-hover:text-violet-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Stats — horizontal row on mobile, vertical on desktop */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="relative p-4 sm:p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative text-center md:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-white/30 font-medium tracking-widest uppercase leading-tight">{stat.label}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <Briefcase className="w-4 h-4 text-violet-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Experience</h3>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            <div className="space-y-4 sm:space-y-5">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="relative group p-4 sm:p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`} />
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    <BorderBeam size={120} duration={10} colorFrom="#a855f7" colorTo="#3b82f6" borderWidth={1} />
                  </div>

                  {/* Header row — stack role info and period */}
                  <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`mt-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}
                        style={{ boxShadow: `0 4px 20px ${exp.glow}` }}
                      >
                        <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
                        <p className="text-xs text-white/40 mt-0.5">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-white/25 font-medium tracking-wide pl-10 sm:pl-0 sm:mt-1 flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed pl-10 sm:pl-12 relative">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills + Certs — stacked on mobile */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* Technical Stack */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Code2 className="w-4 h-4 text-blue-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Technical Stack</h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="space-y-5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skillColors[category]}`} />
                      <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest">{category}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {items.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ y: -2, scale: 1.05 }}
                          className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs bg-white/[0.04] text-white/50 border border-white/[0.08] hover:border-white/20 hover:text-white/80 transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Award className="w-4 h-4 text-amber-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Certifications</h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/15 transition-all"
                  >
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
                      <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white/80 truncate">{cert.title}</p>
                      <p className="text-[10px] text-white/30 mt-0.5">{cert.issuer} · {cert.year}</p>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40 transition-colors flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
