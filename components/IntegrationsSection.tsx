"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

// ── Brand icons ──────────────────────────────────────────────────────────────
const Icons = {
  WhatsApp: () => (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path d="M22.5 19.3c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.18.2-.35.22-.65.07a8.2 8.2 0 01-2.4-1.48 9 9 0 01-1.67-2.07c-.17-.3 0-.46.13-.6.13-.13.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.7-1.7-.96-2.32-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.27.3-1.03 1-1.03 2.45s1.06 2.84 1.2 3.04c.16.2 2.08 3.17 5.03 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.73-.7 1.97-1.39.25-.68.25-1.27.18-1.39-.07-.12-.27-.2-.57-.34z" fill="white" />
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="white" />
      <rect x="8" y="9" width="16" height="15" rx="2" fill="none" stroke="#4285F4" strokeWidth="1.5" />
      <rect x="11" y="7" width="2.5" height="4" rx="1.2" fill="#EA4335" />
      <rect x="18.5" y="7" width="2.5" height="4" rx="1.2" fill="#EA4335" />
      <rect x="8" y="14" width="16" height="1.5" fill="#4285F4" />
      <rect x="11" y="17" width="4" height="4" rx="0.8" fill="#0F9D58" />
    </svg>
  ),
  N8N: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="#FF6D00" />
      <circle cx="9" cy="16" r="3.5" fill="white" />
      <circle cx="23" cy="16" r="3.5" fill="white" />
      <line x1="12.5" y1="16" x2="19.5" y2="16" stroke="white" strokeWidth="2" />
      <circle cx="16" cy="9" r="3" fill="white" />
      <line x1="16" y1="12" x2="16" y2="15" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  CRM: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="#7C6FF5" />
      <circle cx="16" cy="12" r="4.5" fill="white" opacity="0.95" />
      <path d="M7 25c0-5 4-8 9-8s9 3 9 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Postgres: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="#336791" />
      <ellipse cx="16" cy="11" rx="6.5" ry="3" fill="white" opacity="0.9" />
      <rect x="9.5" y="11" width="13" height="10" fill="#336791" />
      <ellipse cx="16" cy="21" rx="6.5" ry="3" fill="white" opacity="0.7" />
      <ellipse cx="16" cy="16" rx="6.5" ry="2.5" fill="white" opacity="0.45" />
    </svg>
  ),
  Webhook: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="#0EA5E9" />
      <path d="M9 16 C9 9.5 23 9.5 23 16 C23 22.5 9 22.5 9 16" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="9" cy="16" r="2.5" fill="white" />
      <circle cx="23" cy="16" r="2.5" fill="white" />
    </svg>
  ),
  Sheets: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="#0F9D58" />
      <rect x="8" y="9" width="16" height="14" rx="1.5" fill="white" opacity="0.15" />
      <rect x="8" y="9" width="16" height="4" rx="1.5" fill="white" opacity="0.85" />
      <line x1="16" y1="9" x2="16" y2="23" stroke="white" strokeWidth="1" opacity="0.55" />
      <line x1="8" y1="16" x2="24" y2="16" stroke="white" strokeWidth="1" opacity="0.55" />
      <line x1="8" y1="20" x2="24" y2="20" stroke="white" strokeWidth="1" opacity="0.55" />
    </svg>
  ),
  Email: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="#64748B" />
      <rect x="6" y="10" width="20" height="13" rx="2" fill="none" stroke="white" strokeWidth="1.8" />
      <path d="M6 12l10 7 10-7" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Evolution: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="#1a1a2e" />
      <circle cx="16" cy="16" r="6.5" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="3" fill="white" />
      <line x1="16" y1="7" x2="16" y2="9.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="22.5" x2="16" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="16" x2="9.5" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="22.5" y1="16" x2="25" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Dashboard: () => (
    <svg viewBox="0 0 32 32" width="24" height="24">
      <rect width="32" height="32" rx="7" fill="#4F46E5" />
      <rect x="8" y="18" width="4.5" height="6" rx="1" fill="white" opacity="0.65" />
      <rect x="14" y="14" width="4.5" height="10" rx="1" fill="white" opacity="0.82" />
      <rect x="20" y="9" width="4.5" height="15" rx="1" fill="white" />
      <path d="M9 16 L14 12 L19 14 L24 8" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

const INNER_ITEMS = [
  { name: "WhatsApp",  Icon: Icons.WhatsApp, color: "#25D366" },
  { name: "CRM",       Icon: Icons.CRM,      color: "#7C6FF5" },
  { name: "n8n",       Icon: Icons.N8N,      color: "#FF6D00" },
  { name: "Agenda",    Icon: Icons.Calendar, color: "#4285F4" },
  { name: "Evolution", Icon: Icons.Evolution,color: "#a78bfa" },
]

const OUTER_ITEMS = [
  { name: "PostgreSQL", Icon: Icons.Postgres, color: "#336791" },
  { name: "Webhooks",   Icon: Icons.Webhook,  color: "#0EA5E9" },
  { name: "Planilhas",  Icon: Icons.Sheets,   color: "#0F9D58" },
  { name: "E-mail",     Icon: Icons.Email,    color: "#64748B" },
  { name: "Dashboard",  Icon: Icons.Dashboard,color: "#4F46E5" },
]

const INNER_R = 130
const OUTER_R = 230

function useOrbit(items: typeof INNER_ITEMS, radius: number, speed: number) {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const frame = useRef(0)

  useEffect(() => {
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000
      items.forEach((_, i) => {
        const el = refs.current[i]
        if (!el) return
        const baseAngle = (i / items.length) * Math.PI * 2
        const angle = baseAngle + elapsed * speed
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
      })
      frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [items, radius, speed])

  return refs
}

function OrbitLayer({
  items,
  radius,
  speed,
  visible,
}: {
  items: typeof INNER_ITEMS
  radius: number
  speed: number
  visible: boolean
}) {
  const refs = useOrbit(items, radius, speed)

  return (
    <>
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          ref={(el) => { refs.current[i] = el }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 120, damping: 16 }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(calc(-50% + ${Math.cos((i / items.length) * Math.PI * 2) * radius}px), calc(-50% + ${Math.sin((i / items.length) * Math.PI * 2) * radius}px))`,
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              inset: -10,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${item.color}25 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          {/* Icon card */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${item.color}35`,
              boxShadow: `0 4px 20px ${item.color}30, inset 0 1px 0 rgba(255,255,255,0.08)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <item.Icon />
          </div>
          {/* Name label */}
          <div
            style={{
              marginTop: 6,
              fontSize: 10,
              fontWeight: 600,
              color: "rgba(255,255,255,0.45)",
              textAlign: "center",
              whiteSpace: "nowrap",
              letterSpacing: "0.02em",
            }}
          >
            {item.name}
          </div>
        </motion.div>
      ))}
    </>
  )
}

// Animated SVG lines + pulses
function ConnectionLines({ visible }: { visible: boolean }) {
  const W = 700
  const H = 420
  const cx = W / 2
  const cy = H / 2

  const allItems = [...INNER_ITEMS, ...OUTER_ITEMS]
  const allRadii = [...Array(5).fill(INNER_R), ...Array(5).fill(OUTER_R)]

  return (
    <svg
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", width: "100%", height: "100%" }}
      viewBox={`0 0 ${W} ${H}`}
    >
      <defs>
        {allItems.map((item, i) => (
          <linearGradient key={i} id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={item.color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={item.color} stopOpacity="0.05" />
          </linearGradient>
        ))}
      </defs>

      {/* Static dashed orbit rings */}
      <circle cx={cx} cy={cy} r={INNER_R} fill="none" stroke="rgba(124,111,245,0.12)" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx={cx} cy={cy} r={OUTER_R} fill="none" stroke="rgba(124,111,245,0.08)" strokeWidth="1" strokeDasharray="4 8" />

      {/* Lines from center to each item (static, approximate positions) */}
      {allItems.map((item, i) => {
        const angle = (i < 5)
          ? (i / 5) * Math.PI * 2
          : ((i - 5) / 5) * Math.PI * 2
        const r = allRadii[i]
        const x2 = cx + Math.cos(angle) * r
        const y2 = cy + Math.sin(angle) * r
        return (
          <motion.line
            key={i}
            x1={cx} y1={cy} x2={x2} y2={y2}
            stroke={item.color}
            strokeWidth="0.8"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={visible ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
          />
        )
      })}
    </svg>
  )
}

export default function IntegrationsSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="integracoes"
      className="bg-[#F2F2F2] py-20 md:py-32 overflow-hidden"
      aria-label="Integrações"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] rounded-2xl overflow-hidden"
          style={{ clipPath: "inset(0 round 16px)", background: "#0A0A14" }}
        >
          {/* Header */}
          <div className="flex min-h-[72px] items-center justify-between gap-4 border-b border-white/[0.06] px-5 md:px-8">
            <Reveal>
              <h2 className="text-[24px] font-medium leading-tight text-white/90 md:text-[28px]">
                Integrações
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="hidden text-[13px] text-white/30 md:block">
                Conecte sua IA às ferramentas do negócio
              </p>
            </Reveal>
          </div>

          {/* Orbit animation */}
          <div
            ref={sectionRef}
            className="relative w-full overflow-hidden"
            style={{ height: "420px" }}
          >
            {/* Ambient gradient */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 500,
                height: 500,
                marginLeft: -250,
                marginTop: -250,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(124,111,245,0.08) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* SVG orbit rings + lines */}
            <ConnectionLines visible={visible} />

            {/* Orbit layers */}
            <OrbitLayer items={INNER_ITEMS} radius={INNER_R} speed={0.35} visible={visible} />
            <OrbitLayer items={OUTER_ITEMS} radius={OUTER_R} speed={-0.2} visible={visible} />

            {/* Central hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, type: "spring", stiffness: 130, damping: 18 }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                zIndex: 20,
              }}
            >
              {/* Outer glow ring */}
              <div
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(124,111,245,0.18) 0%, transparent 65%)",
                  top: -30,
                  left: -30,
                }}
              />
              {/* Pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  border: "1px solid rgba(124,111,245,0.4)",
                  top: -5,
                  left: -5,
                }}
              />
              {/* Icon */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 22,
                  background: "linear-gradient(135deg, #9b8ff7 0%, #7C6FF5 60%, #5b4fd4 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 40px rgba(124,111,245,0.45), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.18)",
                  position: "relative",
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div style={{ textAlign: "center", marginTop: 2 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.02em" }}>SuperAI</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 1, letterSpacing: "0.06em", textTransform: "uppercase" }}>Hub Central</div>
              </div>
            </motion.div>
          </div>

          {/* Footer bar */}
          <div className="border-t border-white/[0.05] px-6 py-3.5 md:px-8 flex items-center justify-between gap-4">
            <p className="text-[11px] text-white/20 uppercase tracking-wider font-medium">
              10 integrações nativas · dados em tempo real
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[10px] text-white/25 font-medium uppercase tracking-wider">ao vivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
