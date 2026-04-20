'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'RAG Enterprise Integration',
    description: 'Production-ready Retrieval-Augmented Generation system integrating proprietary data with LLMs for enterprise knowledge management and customer support automation.',
    tags: ['LangChain', 'Pinecone', 'LLMs', 'FastAPI'],
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    title: 'Data Pipeline Automation',
    description: 'Scalable ETL system processing 10M+ records/day, automated data validation, transformation, and real-time indexing for AI model training.',
    tags: ['Apache Airflow', 'PySpark', 'PostgreSQL', 'AWS'],
    gradient: 'from-purple-600 to-purple-400',
  },
  {
    title: 'Fine-tuned LLM Framework',
    description: 'Custom fine-tuning pipeline for domain-specific language models. Achieved 40% improvement in accuracy on domain tasks using parameter-efficient methods.',
    tags: ['LoRA', 'Hugging Face', 'PyTorch', 'CUDA'],
    gradient: 'from-cyan-600 to-cyan-400',
  },
]

export function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Showcase of recent AI and ML projects that made a real impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60" />
                
                {/* Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors rounded-xl" />
                
                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-1 rounded text-xs bg-white/10 text-white/70 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/100 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
