'use client'

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Code2, Mail } from 'lucide-react'
import { useRef, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#', icon: null },
  { label: 'Projects', href: '#projects', icon: null },
  { label: 'About', href: '#about', icon: null },
  { label: 'GitHub', href: 'https://github.com/vlex127', icon: Code2 },
  { label: 'Contact', href: 'mailto:vincentayokunle@gmail.com', icon: Mail },
]

export function FloatingDock() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll state to toggle sharper borders/backgrounds
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Transformations as the user scrolls
  // [0, 150] means the transition completes after 150px of scrolling
  const navY = useTransform(scrollY, [0, 150], [0, 20]) // Moves it 20px down from top
  const navScale = useTransform(scrollY, [0, 150], [1, 0.95])
  const navWidth = useTransform(scrollY, [0, 150], ["100%", "90%"])

  return (
    <motion.div
      style={{
        y: navY,
        width: navWidth,
      }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4 px-6 flex justify-center"
    >
      <motion.nav
        style={{ scale: navScale }}
        animate={{
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.2)",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
        }}
        className="w-full max-w-4xl px-6 py-3 rounded-full border backdrop-blur-xl transition-colors duration-300 origin-top"
        whileHover={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)' }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-lg font-bold font-plus-jakarta bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Vincent Iwuno
          </motion.div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(0, 3).map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-plus-jakarta font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ) : null
            })}
          </div>
        </div>
      </motion.nav>
    </motion.div>
  )
}