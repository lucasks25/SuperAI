"use client"

// Effect: Floating Interface Cards — dark glass cards with perpetual float
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FloatingCardProps {
  icon?: ReactNode
  title: string
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  duration?: number
  iconBg?: string
  iconColor?: string
}

export default function FloatingCard({
  icon,
  title,
  text,
  className = "",
  style,
  delay = 0,
  duration = 4,
  iconBg = "rgba(124,111,245,0.15)",
  iconColor = "#A5A0F8",
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      className={`glass rounded-2xl p-4 min-w-[170px] max-w-[220px] ${className}`}
      style={style}
    >
      {icon && (
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
          style={{ background: iconBg }}
        >
          <span style={{ color: iconColor, display: "flex", alignItems: "center" }}>{icon}</span>
        </div>
      )}
      <p className="text-[11px] font-semibold text-[#E8ECFF] mb-0.5">{title}</p>
      <p className="text-[11px] text-[#7D8DB8] leading-relaxed">{text}</p>
    </motion.div>
  )
}
