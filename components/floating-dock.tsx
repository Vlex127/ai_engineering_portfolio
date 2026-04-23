'use client'

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Code2, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
]

const socialItems = [
  { label: 'GitHub', href: 'https://github.com/vlex127', icon: Code2 },
  { label: 'Contact', href: 'mailto:vincentayokunle@gmail.com', icon: Mail },
]

export function FloatingDock() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
    // Close mobile menu when scrolling
    if (latest > 100 && mobileOpen) setMobileOpen(false)
  })

  return (
    <>
      {/* Nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-6">
        <motion.nav
          animate={{
            backgroundColor: isScrolled ? 'rgba(3,3,3,0.90)' : 'rgba(3,3,3,0.3)',
            borderColor: isScrolled ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
            boxShadow: isScrolled
              ? '0 0 0 0.5px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.5)'
              : 'none',
          }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-4xl px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border backdrop-blur-2xl"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a href="#" whileHover={{ scale: 1.02 }} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-violet-500/30">
                V
              </div>
              <span className="text-sm font-semibold font-plus-jakarta bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent hidden xs:block sm:block">
                Vincent Iwuno
              </span>
            </motion.a>

            {/* Nav Items — Desktop only */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onHoverStart={() => setActiveItem(item.label)}
                  onHoverEnd={() => setActiveItem(null)}
                  className="relative px-4 py-1.5 rounded-full text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  {activeItem === item.label && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/[0.08] rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Right side: social icons + mobile toggle */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              {socialItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="p-2 rounded-full hover:bg-white/[0.08] text-white/40 hover:text-white/90 transition-colors"
                    title={item.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}

              {/* Mobile hamburger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-full hover:bg-white/[0.08] text-white/40 hover:text-white/90 transition-colors ml-0.5"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile dropdown — AnimatePresence for smooth enter/exit */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-[72px] left-3 right-3 z-40 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl p-3 shadow-2xl md:hidden overflow-hidden"
          >
            {/* Subtle gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 to-transparent rounded-2xl pointer-events-none" />

            <div className="relative space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="w-1 h-1 rounded-full bg-violet-500/60" />
                  {item.label}
                </motion.a>
              ))}

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mx-2 my-1" />

              {/* Social links in mobile menu too */}
              <div className="flex gap-2 px-4 py-2">
                {socialItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-white/40 hover:text-white/80 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.label}
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}