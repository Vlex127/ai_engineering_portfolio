'use client'
// @ts-nocheck

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowRight, Brain, Code2, Zap, Sparkles } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { Spotlight } from './ui/spotlight'

function ThreeDCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 300,
    damping: 30,
  })
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100])

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || isMobile) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(99,102,241,0.25) 0%, transparent 70%)`
  )

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={isMobile ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: glowBackground,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}

const features = [
  {
    icon: Brain,
    title: 'Generative AI',
    description: 'LLM integration & fine-tuning',
    color: 'from-violet-600 to-purple-600',
    glow: 'rgba(139,92,246,0.4)',
  },
  {
    icon: Code2,
    title: 'Data Engineering',
    description: 'ETL pipelines at scale',
    color: 'from-blue-600 to-cyan-600',
    glow: 'rgba(59,130,246,0.4)',
  },
  {
    icon: Zap,
    title: 'RAG Systems',
    description: 'Knowledge-grounded AI',
    color: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6,182,212,0.4)',
  },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const parallaxX = useTransform(mouseX, [-800, 800], [-30, 30])
  const parallaxY = useTransform(mouseY, [-800, 800], [-15, 15])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top - rect.height / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#030303] flex items-center justify-center"
    >
      {/* Spotlight — hidden on mobile for performance */}
      <Spotlight className="hidden md:block -top-40 left-0 md:left-60 md:-top-20" fill="#a855f7" />
      <Spotlight className="hidden md:block top-10 right-0" fill="#3b82f6" />

      {/* Aurora orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute top-1/4 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-full h-full bg-gradient-radial from-violet-600/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 -right-40 w-[250px] h-[250px] md:w-[600px] md:h-[600px] rounded-full"
          animate={{ scale: [1.05, 1, 1.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <div className="w-full h-full bg-gradient-radial from-blue-600/15 via-cyan-500/8 to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#030303_80%)]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex">
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full opacity-50 group-hover:opacity-80 blur-sm transition-opacity duration-300" />
            <div className="relative flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-black/80 border border-white/10 backdrop-blur-xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-violet-400" />
              </motion.div>
              <span className="text-[10px] sm:text-xs tracking-widest text-white/70 font-medium uppercase">
                AI Engineering & ML Solutions
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Heading — responsive font sizes */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight font-playfair">
            <span className="block text-white">Vincent</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Iwuno
            </span>
          </h1>
        </motion.div>

        {/* Subtitle — stack on mobile */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <p className="text-xs sm:text-base md:text-lg text-white/40 font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase flex flex-wrap justify-center gap-x-2 gap-y-1 sm:block">
            <span>Data Engineering</span>
            <span className="hidden sm:inline">&nbsp;·&nbsp;</span>
            <span className="sm:hidden">·</span>
            <span>Generative AI</span>
            <span className="hidden sm:inline">&nbsp;·&nbsp;</span>
            <span className="sm:hidden">·</span>
            <span>RAG Architectures</span>
            <span className="hidden sm:inline">&nbsp;·&nbsp;</span>
            <span className="sm:hidden">·</span>
            <span>LLM Optimization</span>
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="mb-10 sm:mb-16 max-w-xl mx-auto px-2">
          <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed">
            AI engineer with <span className="text-white font-medium">5+ years</span> building production ML systems. I turn raw data into intelligent systems using Generative AI, RAG architectures, and scalable pipelines.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-white/30">📍 Lagos, Nigeria · Remote-first</p>
        </motion.div>

        {/* 3D Feature Cards — single col mobile, 3-col desktop */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-10 sm:mb-16">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <ThreeDCard key={i} className="group cursor-pointer">
                <div className="relative p-4 sm:p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-white/20 flex sm:block items-center gap-4">
                  {/* Gradient bg on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />

                  {/* Glow dot — desktop only */}
                  <div className="hidden sm:block absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors duration-300" />

                  <div className="relative z-10 flex sm:block items-center gap-4 w-full">
                    <div
                      className={`flex-shrink-0 mb-0 sm:mb-5 inline-flex p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10`}
                      style={{ boxShadow: `0 0 20px ${feature.glow}` }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-left sm:text-left">
                      <h3 className="text-sm font-semibold text-white mb-0.5 sm:mb-1.5 tracking-tight">{feature.title}</h3>
                      <p className="text-white/40 text-xs">{feature.description}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </ThreeDCard>
            )
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-20">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative group w-full sm:w-auto px-8 py-3.5 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 group-hover:from-violet-500 group-hover:to-blue-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 blur-xl" />
            </div>
            <span className="relative flex items-center justify-center gap-2 text-white font-semibold text-sm">
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative group w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
          >
            <span className="text-white/70 font-semibold text-sm group-hover:text-white transition-colors">Get in Touch</span>
          </motion.button>
        </motion.div>

        {/* Stats — always 3 cols but smaller text on mobile */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-2xl mx-auto"
        >
          {[
            { value: '10M+', label: 'Records Processed', href: '#data-pipeline' },
            { value: '20+', label: 'AI Projects', href: '#projects' },
            { value: '40%', label: 'Accuracy Boost', href: '#rag-enterprise' },
          ].map((stat, i) => (
            <motion.a
              key={i}
              href={stat.href}
              className="group relative py-4 sm:py-6 px-2 sm:px-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer text-center overflow-hidden"
              whileHover={{ y: -3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[8px] sm:text-[10px] text-white/30 font-medium tracking-widest uppercase">{stat.label}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator — hidden on short mobile screens */}
      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.p className="text-[10px] tracking-widest text-white/20 uppercase">Scroll</motion.p>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}
