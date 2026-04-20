'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Award, BookOpen } from 'lucide-react'

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
              About <span className="text-slate-400">Me</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-slate-600 to-slate-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* Bio */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-display">Background</h3>
                  <p className="text-slate-400 leading-relaxed">
                    I'm an AI engineer with 5+ years of experience building production-grade machine learning systems. My journey started with a passion for data science, which evolved into a focus on practical, scalable AI solutions that solve real business problems.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-display">Core Focus</h3>
                  <p className="text-slate-400 leading-relaxed">
                    I specialize in the full lifecycle of AI systems: from data engineering and pipeline architecture to LLM integration and deployment. I'm particularly passionate about Retrieval-Augmented Generation (RAG) — bridging the gap between proprietary data and generative AI to unlock new capabilities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-display">Philosophy</h3>
                  <p className="text-slate-400 leading-relaxed">
                    I believe great ML systems aren't about cutting-edge algorithms—they're about practical solutions that scale. I focus on building robust data pipelines, optimizing inference costs, and ensuring models stay performant in production. Every project is an opportunity to learn and refine best practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Years Experience</div>
              </div>
              <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">20+</div>
                <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Production Systems</div>
              </div>
              <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">100M+</div>
                <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Data Points Processed</div>
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-display">Experience</h3>
            <div className="space-y-6">
              {[
                {
                  role: 'Senior AI Engineer',
                  company: 'TechCorp AI Solutions',
                  period: '2022 - Present',
                  description: 'Leading ML infrastructure and LLM integration projects. Architected data pipelines processing 10M+ daily records. Implemented RAG systems for enterprise knowledge management.',
                },
                {
                  role: 'ML Engineer',
                  company: 'DataFlow Systems',
                  period: '2020 - 2022',
                  description: 'Built production ML pipelines using Apache Airflow and PySpark. Optimized model inference costs by 35%. Mentored junior engineers on MLOps best practices.',
                },
                {
                  role: 'Data Engineer',
                  company: 'StartupXYZ',
                  period: '2019 - 2020',
                  description: 'Designed and maintained ETL pipelines. Implemented data quality frameworks. Collaborated with ML teams on feature engineering and model training.',
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm hover:border-slate-600 transition-colors group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white text-display">{exp.role}</h4>
                      <p className="text-sm text-slate-500">{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-500 font-medium tracking-wide">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Certifications */}
          <motion.div variants={itemVariants} className="mt-20 grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-display flex items-center gap-2">
                <Code2 className="w-6 h-6" />
                Technical Stack
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-300 mb-2">ML & Data</p>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LangChain', 'Pinecone'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs bg-slate-800/60 text-slate-300 border border-slate-700/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-300 mb-2">Infrastructure</p>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Docker', 'Kubernetes', 'Apache Airflow', 'PostgreSQL', 'Redis'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs bg-slate-800/60 text-slate-300 border border-slate-700/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-300 mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'JavaScript/TypeScript', 'Bash'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs bg-slate-800/60 text-slate-300 border border-slate-700/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-display flex items-center gap-2">
                <Award className="w-6 h-6" />
                Certifications
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'AWS Certified Machine Learning',
                    issuer: 'Amazon Web Services',
                    year: '2023',
                  },
                  {
                    title: 'Deep Learning Specialization',
                    issuer: 'Coursera / Andrew Ng',
                    year: '2021',
                  },
                  {
                    title: 'Data Engineering on Google Cloud',
                    issuer: 'Google Cloud',
                    year: '2022',
                  },
                ].map((cert, i) => (
                  <div key={i} className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
                    <p className="font-semibold text-white text-sm">{cert.title}</p>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                    <p className="text-xs text-slate-600 mt-1">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
