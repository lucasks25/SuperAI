"use client"

// Reusable dark glass device frame for product mockups
import { ReactNode } from "react"

interface MockupCardProps {
  children: ReactNode
  className?: string
  title?: string
  showBar?: boolean
}

export default function MockupCard({ children, className = "", title, showBar = true }: MockupCardProps) {
  return (
    <div
      className={`glass rounded-3xl overflow-hidden ${className}`}
      style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)" }}
    >
      {showBar && (
        <div
          className="flex items-center gap-1.5 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          {title && <span className="ml-2 text-[10px] text-[#7D8DB8] font-medium">{title}</span>}
        </div>
      )}
      {children}
    </div>
  )
}
