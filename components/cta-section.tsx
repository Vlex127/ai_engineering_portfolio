'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ExternalLink, Mail } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative w-full py-20 sm:py-32 bg-[#030303] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030303_75%)]" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px]"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-violet-600/15 to-purple-600/10 blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px]"
          animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600/12 to-cyan-600/8 blur-3xl" />
        </motion.div>
      </div>

      {/* Divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Spark badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-8 sm:mb-10"
            whileHover={{ scale: 1.04 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            </motion.div>
            <span className="text-[10px] tracking-widest text-white/40 uppercase">Available for Work</span>
          </motion.div>

          {/* Heading — smaller on mobile */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 font-playfair leading-tight">
            Ready to Build{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>

          <p className="text-white/40 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed px-2">
            Let's collaborate on your next AI / ML project. From ideation to deployment, I bring real-world production experience to every engagement.
          </p>

          {/* CTA Buttons — stacked on mobile */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <motion.a
              href="https://github.com/vlex127"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 group-hover:from-violet-500 group-hover:to-blue-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <ExternalLink className="relative w-4 h-4 text-white" />
              <span className="relative text-white font-semibold text-sm">View My GitHub</span>
              <ArrowRight className="relative w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="mailto:vincentayokunle@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
              <span className="text-white/60 font-semibold text-sm group-hover:text-white transition-colors">Get in Touch</span>
            </motion.a>
          </motion.div>

          {/* Social proof stats — smaller gap on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 sm:mt-16 flex justify-center gap-6 sm:gap-10 text-center"
          >
            {[
              { value: '5+', label: 'Years Building AI' },
              { value: '20+', label: 'Projects Shipped' },
              { value: '100M+', label: 'Records Processed' },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="text-lg sm:text-xl font-bold text-white/80 group-hover:text-white transition-colors">
                  {item.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-white/25 tracking-widest uppercase mt-0.5 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
