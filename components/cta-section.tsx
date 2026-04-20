'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Something Amazing?</span>
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next AI/ML project. From ideation to deployment, I'm here to help bring your vision to life.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://github.com/vlex127"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-shadow"
            >
              View My GitHub
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:vincentayokunle@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
