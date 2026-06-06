"use client"

import Reveal from "./Reveal"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
  titleClassName?: string
  theme?: "dark" | "light"
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = "",
  align = "center",
  titleClassName = "",
  theme = "dark",
}: SectionHeaderProps) {
  const isLight = theme === "light"
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left"
  
  const colors = {
    title: isLight ? "text-[#1A1A1A]" : "text-[#E8ECFF]",
    subtitle: isLight ? "text-[#1A1A1A]/60" : "text-[#7D8DB8]",
    badgeBg: isLight ? "bg-[#1A1A1A]/5" : "rgba(124,111,245,0.12)",
    badgeText: isLight ? "text-[#1A1A1A]/60" : "#A5A0F8",
    badgeBorder: isLight ? "border-[#1A1A1A]/10" : "1px solid rgba(124,111,245,0.25)",
  }

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {badge && (
        <Reveal>
          <span
            className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${colors.badgeBg} ${colors.badgeText} border`}
            style={{ border: colors.badgeBorder }}
          >
            {badge}
          </span>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <h2
          className={`text-3xl md:text-[44px] font-bold ${colors.title} tracking-tighter leading-tight max-w-3xl ${titleClassName}`}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.2}>
          <p className={`text-lg ${colors.subtitle} max-w-2xl leading-relaxed`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
