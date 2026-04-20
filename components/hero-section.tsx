'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Brain, Zap } from 'lucide-react'
import { useRef, useEffect } from 'react'

export function HeroSection() {
  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const parallaxX = useTransform(mouseX, [-1000, 1000], [-20, 20])
  const parallaxY = useTransform(mouseY, [-1000, 1000], [-20, 20])
  
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      mouseX.set(e.clientX - rect.left - centerX)
      mouseY.set(e.clientY - rect.top - centerY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.82, 1] },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.23, 1, 0.82, 1] },
    },
    hover: {
      y: -15,
      rotateX: 5,
      rotateY: -5,
      boxShadow: '0 25px 50px rgba(99, 102, 241, 0.25)',
    },
  }

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center grain-overlay">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-black to-black" />
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute top-1/4 -left-64 w-96 h-96 bg-slate-700/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          style={{ x: useTransform(parallaxX, (v) => v * 0.5), y: useTransform(parallaxY, (v) => v * 0.5) }}
          className="absolute top-1/3 -right-64 w-96 h-96 bg-slate-700/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Premium Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-10 inline-block"
        >
          <motion.div 
            className="px-6 py-2.5 rounded-full border border-slate-600/50 bg-slate-900/30 backdrop-blur-md hover:border-slate-500 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-2.5 text-xs tracking-wide text-slate-300 font-medium">
              <span>AI ENGINEERING & ML SOLUTIONS</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight font-playfair"
        >
          Vincent Iwuno
        </motion.h1>

        {/* Bio Section */}
        <motion.div
          variants={itemVariants}
          className="mb-12 max-w-2xl mx-auto"
        >
          <p className="text-base text-slate-300 leading-relaxed mb-3">
            AI engineer with 5+ years building production ML systems. I specialize in turning raw data into intelligent systems using Generative AI, RAG architectures, and scalable data pipelines. Passionate about closing the gap between research and real-world impact.
          </p>
          <p className="text-sm text-slate-500">
            📍 Lagos, Nigeria • Remote-first
          </p>
        </motion.div>

        {/* Subtitle with better hierarchy */}
        <motion.div
          variants={itemVariants}
          className="mb-16 max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-400 mb-6 font-light leading-relaxed">
            AI Engineer specializing in production systems
          </p>
          <p className="text-sm md:text-base text-slate-500 font-light tracking-wide">
            Data Engineering • Generative AI • RAG Architectures • LLM Optimization
          </p>
        </motion.div>

        {/* Premium Feature Cards */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-5 mb-16"
        >
          {[
            {
              icon: Brain,
              title: 'Generative AI',
              description: 'LLM integration & fine-tuning',
            },
            {
              icon: Code2,
              title: 'Data Engineering',
              description: 'ETL pipelines at scale',
            },
            {
              icon: Zap,
              title: 'RAG Systems',
              description: 'Knowledge-grounded AI',
            },
          ].map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="relative p-6 rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm hover:border-slate-600 transition-colors group overflow-hidden"
              >
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 inline-block p-2.5 rounded-lg bg-slate-800/60 group-hover:bg-slate-700/60 transition-colors text-slate-300 group-hover:text-slate-100"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <h3 className="text-base font-semibold text-white mb-1 text-display">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>


        {/* Premium CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-white text-black font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border border-slate-600 text-white font-semibold hover:border-slate-500 hover:bg-slate-900/50 transition-colors"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Premium Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-slate-800"
        >
          {[
            { value: '10M+', label: 'Records Processed', link: '#data-pipeline' },
            { value: '20+', label: 'AI Projects', link: '#projects' },
            { value: '40%', label: 'Accuracy Improvement', link: '#rag-enterprise' },
          ].map((stat, i) => (
            <motion.a
              key={i}
              href={stat.link}
              whileHover={{ scale: 1.05 }}
              className="py-6 text-center cursor-pointer transition-all hover:bg-slate-800/30 rounded-lg"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">{stat.label}</div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="w-6 h-10 border border-slate-600/50 rounded-full flex justify-center p-2 hover:border-slate-500 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-2 bg-slate-500 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
