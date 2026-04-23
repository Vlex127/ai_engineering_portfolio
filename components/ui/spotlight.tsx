'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface SpotlightProps {
    className?: string
    fill?: string
}

export function Spotlight({ className = '', fill = 'white' }: SpotlightProps) {
    return (
        <motion.svg
            className={`animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 0.25, y: -15 }}
            transition={{ delay: 0.2, duration: 1.2 }}
        >
            <g filter="url(#filter)">
                <ellipse
                    cx="1924.71"
                    cy="273.501"
                    rx="1924.71"
                    ry="273.501"
                    transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                    fill={fill}
                    fillOpacity="0.21"
                ></ellipse>
            </g>
            <defs>
                <filter
                    id="filter"
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        stdDeviation="151"
                        result="effect1_foregroundBlur_1065_8"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </motion.svg>
    )
}

export function MouseSpotlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
        }
        const handleMouseLeave = () => setIsVisible(false)

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [isVisible])

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            animate={{ opacity: isVisible ? 1 : 0 }}
        >
            <div
                className="absolute rounded-full"
                style={{
                    background:
                        'radial-gradient(600px at var(--x) var(--y), rgba(99, 102, 241, 0.07), transparent 70%)',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    // @ts-ignore
                    '--x': `${position.x}px`,
                    '--y': `${position.y}px`,
                }}
            />
        </motion.div>
    )
}
