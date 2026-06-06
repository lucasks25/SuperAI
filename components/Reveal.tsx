"use client"

// Effect: Fade Up Reveal — elements enter with opacity 0→1 and y 40px→0
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  x?: number
  once?: boolean
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  y = 36,
  x = 0,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
