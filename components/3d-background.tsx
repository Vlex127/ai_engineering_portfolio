'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system for AI theme
    const particles: Particle[] = []
    const particleCount = 100

    interface Particle {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      color: string
      life: number
    }

    class Particle implements Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.vz = (Math.random() - 0.5) * 4
        this.size = Math.random() * 3 + 1
        const colors = ['#3b82f6', '#a855f7', '#06b6d4', '#60a5fa']
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.life = 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.z += this.vz
        this.life -= 0.005

        // Reset if off screen or dead
        if (this.life <= 0 || this.z <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          return new Particle()
        }
        return this
      }

      draw(ctx: CanvasRenderingContext2D, mouseX: number, mouseY: number) {
        const scale = 1000 / this.z
        const x = this.x + (this.x - canvas.width / 2) * (mouseX / 1000)
        const y = this.y + (this.y - canvas.height / 2) * (mouseY / 1000)

        ctx.fillStyle = this.color
        ctx.globalAlpha = this.life * 0.8
        ctx.beginPath()
        ctx.arc(x, y, this.size * scale, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let mouseXVal = 0
    let mouseYVal = 0

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      mouseXVal = e.clientX - centerX
      mouseYVal = e.clientY - centerY
      mouseX.set(mouseXVal)
      mouseY.set(mouseYVal)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalAlpha = 1

      for (let i = 0; i < particles.length; i++) {
        particles[i] = particles[i].update()
        particles[i].draw(ctx, mouseXVal, mouseYVal)
      }

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mouseX, mouseY])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
