'use client'

import { motion } from 'framer-motion'
import { Code2, Mail, ExternalLink } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#', icon: null },
  { label: 'Projects', href: '#projects', icon: null },
  { label: 'About', href: '#about', icon: null },
  { label: 'GitHub', href: 'https://github.com/vlex127', icon: Code2 },
  { label: 'Contact', href: 'mailto:vincentayokunle@gmail.com', icon: Mail },
]

export function FloatingDock() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 pt-6 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.nav
          className="px-6 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl hover:border-white/40 transition-colors"
          whileHover={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Vincent Iwuno
            </motion.div>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.slice(0, 3).map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {navItems.slice(3).map((item, i) => {
                const Icon = item.icon
                return Icon ? (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white/70 hover:text-white" />
                  </motion.a>
                ) : null
              })}
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.div>
  )
}
