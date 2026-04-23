'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 80

    interface Particle {
      x: number; y: number; z: number
      vx: number; vy: number; vz: number
      size: number; color: string; life: number
    }

    class Particle implements Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = (Math.random() - 0.5) * 1.5
        this.vz = (Math.random() - 0.5) * 3
        this.size = Math.random() * 2 + 0.5
        const colors = ['#7c3aed', '#a855f7', '#3b82f6', '#06b6d4', '#8b5cf6']
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.life = Math.random() * 0.5 + 0.5
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.z += this.vz
        this.life -= 0.003
        if (this.life <= 0 || this.z <= 0 || this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
          return new Particle()
        }
        return this
      }

      draw(ctx: CanvasRenderingContext2D, mouseXVal: number, mouseYVal: number) {
        const scale = 600 / (this.z + 1)
        const x = this.x + (this.x - canvas.width / 2) * (mouseXVal / 2000)
        const y = this.y + (this.y - canvas.height / 2) * (mouseYVal / 2000)
        const alpha = this.life * 0.6
        ctx.fillStyle = this.color
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(x, y, Math.min(this.size * scale, 3), 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle())

    let mouseXVal = 0
    let mouseYVal = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseXVal = e.clientX - canvas.width / 2
      mouseYVal = e.clientY - canvas.height / 2
      mouseX.set(mouseXVal)
      mouseY.set(mouseYVal)
    }

    window.addEventListener('mousemove', handleMouseMove)

    let animId: number
    const animate = () => {
      ctx.fillStyle = 'rgba(3, 3, 3, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1

      for (let i = 0; i < particles.length; i++) {
        particles[i] = particles[i].update()
        particles[i].draw(ctx, mouseXVal, mouseYVal)
      }

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 120)})`
            ctx.globalAlpha = 0.4 * (1 - dist / 120)
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
    }
  }, [mouseX, mouseY])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
