'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const detailedProjects = [
  {
    id: 'rag-enterprise',
    title: 'RAG Enterprise Integration',
    tagline: 'Turning proprietary data into conversational AI',
    tags: ['LangChain', 'Pinecone', 'LLMs', 'FastAPI'],
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
      { label: 'Accuracy', value: '94%', icon: '🎯' },
      { label: 'Response Time', value: '2.3s', icon: '⚡' },
      { label: 'Support Reduction', value: '40%', icon: '📉' },
    ],
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline Automation',
    tagline: 'Processing 10M+ records daily with zero manual intervention',
    tags: ['Apache Airflow', 'PySpark', 'PostgreSQL', 'AWS'],
    challenge: 'Manual data processing was taking 8 hours daily, with inconsistent data quality. Needed to scale processing from 2M to 10M+ daily records without adding team members.',
    solution: 'Designed Airflow-orchestrated ETL with PySpark jobs. Implemented schema validation, anomaly detection, and auto-remediation. Added monitoring and alerts for data quality issues. Containerized with Docker for easy scaling.',
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
      { label: 'Speed-up', value: '6.7x', icon: '🚀' },
      { label: 'Quality', value: '99.2%', icon: '✨' },
      { label: 'Records/Day', value: '10M+', icon: '📊' },
    ],
  },
  {
    id: 'fine-tuned-llm',
    title: 'Fine-tuned LLM Framework',
    tagline: 'Domain expertise in production models',
    tags: ['LoRA', 'Hugging Face', 'PyTorch', 'CUDA'],
    challenge: 'General LLMs performed poorly on specialized domain tasks (legal, financial). Fine-tuning required too much data and compute. Goal: 40% improvement with limited labeled data.',
    solution: 'Implemented parameter-efficient fine-tuning using LoRA (Low-Rank Adaptation). Created a training framework with active learning to maximize data efficiency. Optimized for inference with ONNX quantization.',
    results: [
      '40% accuracy improvement',
      '90% parameter reduction',
      '3x faster inference',
      'Deployed on edge devices',
    ],
    learnings: 'LoRA changed the game for us. Instead of 80GB of VRAM for fine-tuning, we needed 8GB. Quality didn\'t suffer—it actually improved because we avoided catastrophic forgetting.',
    technologies: {
      'Training': 'PyTorch, Hugging Face Transformers',
      'Optimization': 'LoRA, ONNX, CUDA',
      'Inference': 'TensorRT, ONNX Runtime',
      'MLOps': 'W&B, Airflow',
    },
    metrics: [
      { label: 'Accuracy Gain', value: '+40%', icon: '📈' },
      { label: 'Parameters', value: '90% ↓', icon: '💾' },
      { label: 'Inference', value: '3x faster', icon: '⚡' },
    ],
  },
]

export function ProjectsDetailedSection() {
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-slate-400 font-playfair">
              Featured <span className="text-slate-400">Projects</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Deep dives into real-world challenges, solutions, and measurable impact
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-16">
            {detailedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                id={project.id}
                className="border border-slate-700/50 rounded-lg overflow-hidden bg-slate-900/20 backdrop-blur-sm hover:border-slate-600 transition-colors group"
              >
                {/* Project Header */}
                <div className="p-8 border-b border-slate-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white text-display mb-2">{project.title}</h3>
                      <p className="text-slate-400">{project.tagline}</p>
                    </div>
                    <span className="text-3xl font-bold text-slate-700">#{idx + 1}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-8">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30 text-center">
                        <div className="text-2xl mb-1">{metric.icon}</div>
                        <div className="text-xl font-bold text-white">{metric.value}</div>
                        <div className="text-xs text-slate-500 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge, Solution, Results */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-red-500">▲</span>
                        The Challenge
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-blue-500">◆</span>
                        The Solution
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        The Results
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Key Learning */}
                  <div className="p-6 rounded-lg bg-slate-800/20 border-l-4 border-slate-600">
                    <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2">Key Learning</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.learnings}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 text-display">Technical Stack</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(project.technologies).map(([category, tech]) => (
                        <div key={category} className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">{category}</p>
                          <p className="text-slate-300 text-sm">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs bg-slate-800/60 text-slate-300 border border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <p className="text-slate-500 mb-6">Want to see more or discuss these projects?</p>
            <motion.a
              href="mailto:vincentayokunle@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
