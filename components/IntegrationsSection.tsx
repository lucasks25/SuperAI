"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

// ── Integrações com logos reais via CDN ──────────────────────────────────────

const INTEGRATIONS = [
  { name: "WhatsApp", logo: "https://cdn.jsdelivr.net/gh/nickhale/branding@main/whatsapp-icon.svg", color: "#25D366", fallbackBg: "#25D366", fallbackText: "W" },
  { name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", color: "#E4405F", fallbackBg: "#E4405F", fallbackText: "IG" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", color: "#4A154B", fallbackBg: "#4A154B", fallbackText: "S" },
  { name: "HubSpot", logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg", color: "#FF7A59", fallbackBg: "#FF7A59", fallbackText: "H" },
  { name: "Salesforce", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg", color: "#00A1E0", fallbackBg: "#00A1E0", fallbackText: "SF" },
  { name: "Google Calendar", logo: "https://www.vectorlogo.zone/logos/google_calendar/google_calendar-icon.svg", color: "#4285F4", fallbackBg: "#4285F4", fallbackText: "GC" },
  { name: "Zapier", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg", color: "#FF4A00", fallbackBg: "#FF4A00", fallbackText: "Z" },
  { name: "Stripe", logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg", color: "#635BFF", fallbackBg: "#635BFF", fallbackText: "St" },
  { name: "n8n", logo: "https://www.vectorlogo.zone/logos/n8nio/n8nio-icon.svg", color: "#FF6D00", fallbackBg: "#FF6D00", fallbackText: "n8" },
  { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg", color: "#336791", fallbackBg: "#336791", fallbackText: "PG" },
  { name: "Telegram", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg", color: "#26A5E4", fallbackBg: "#26A5E4", fallbackText: "T" },
  { name: "Sheets", logo: "https://www.vectorlogo.zone/logos/google_sheets/google_sheets-icon.svg", color: "#0F9D58", fallbackBg: "#0F9D58", fallbackText: "GS" },
]

const RING_1 = INTEGRATIONS.slice(0, 6)
const RING_2 = INTEGRATIONS.slice(6, 12)

// ── Logo Card com Fallback ──────────────────────────────────────────────────────

function LogoCard({ item, size = 56 }: { item: typeof INTEGRATIONS[0], size?: number }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div
      className="relative group"
      style={{ width: size, height: size }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{ boxShadow: `0 0 30px ${item.color}40`, transform: "scale(1.3)" }}
      />
      {/* Card */}
      <div
        className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
        style={{ background: "rgba(255,255,255,0.06)", boxShadow: `0 4px 20px ${item.color}20, inset 0 1px 0 rgba(255,255,255,0.08)` }}
      >
        {!imgError ? (
          <img
            src={item.logo}
            alt={item.name}
            className="w-[60%] h-[60%] object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-[70%] h-[70%] rounded-xl flex items-center justify-center font-bold text-white text-xs"
            style={{ background: item.fallbackBg }}
          >
            {item.fallbackText}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Orbit Ring ──────────────────────────────────────────────────────────────────

function OrbitRing({
  items,
  radius,
  speed,
  visible,
  cardSize = 56,
}: {
  items: typeof INTEGRATIONS
  radius: number
  speed: number
  visible: boolean
  cardSize?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const angleRef = useRef(0)
  const frameRef = useRef(0)

  useEffect(() => {
    if (!visible) return
    const tick = () => {
      angleRef.current += speed
      const container = containerRef.current
      if (container) {
        const children = container.children
        for (let i = 0; i < children.length; i++) {
          const baseAngle = (i / items.length) * Math.PI * 2
          const angle = baseAngle + (angleRef.current * Math.PI) / 180
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius * 0.45 // flatten orbit for perspective
          const scale = 0.75 + 0.25 * ((Math.sin(angle) + 1) / 2) // depth illusion
          const z = Math.sin(angle) // for z-ordering
          const el = children[i] as HTMLElement
          el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
          el.style.zIndex = `${Math.round(z * 10) + 10}`
          el.style.opacity = `${0.5 + 0.5 * scale}`
        }
      }
      frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [visible, items.length, radius, speed])

  return (
    <div ref={containerRef} className="absolute inset-0" style={{ left: "50%", top: "50%" }}>
      {items.map((item, i) => {
        const baseAngle = (i / items.length) * Math.PI * 2
        const x = Math.cos(baseAngle) * radius
        const y = Math.sin(baseAngle) * radius * 0.45
        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 150, damping: 16 }}
            className="absolute flex flex-col items-center gap-1.5"
            style={{
              marginLeft: -cardSize / 2,
              marginTop: -cardSize / 2,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <LogoCard item={item} size={cardSize} />
            <span className="text-[10px] font-semibold text-white/40 whitespace-nowrap">{item.name}</span>
          </motion.div>
        )
      })}
    </div>
  )
}

// ── Pulse Lines (SVG) ───────────────────────────────────────────────────────────

function PulseLines({ visible }: { visible: boolean }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 500">
      <defs>
        <radialGradient id="center-glow">
          <stop offset="0%" stopColor="#7C6FF5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7C6FF5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Elliptical orbit paths */}
      <motion.ellipse
        cx="400" cy="250"
        rx="180" ry="80"
        fill="none"
        stroke="rgba(124,111,245,0.15)"
        strokeWidth="1"
        strokeDasharray="6 8"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 1 }}
      />
      <motion.ellipse
        cx="400" cy="250"
        rx="300" ry="130"
        fill="none"
        stroke="rgba(124,111,245,0.08)"
        strokeWidth="1"
        strokeDasharray="6 12"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
      />

      {/* Traveling pulse dots along inner orbit */}
      {visible && [0, 1, 2].map((i) => (
        <motion.circle
          key={`pulse-${i}`}
          r="3"
          fill="#7C6FF5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
        >
          <animateMotion
            dur="6s"
            begin={`${i * 2}s`}
            repeatCount="indefinite"
            path="M 580,250 A 180,80 0 1,1 220,250 A 180,80 0 1,1 580,250"
          />
        </motion.circle>
      ))}

      {/* Traveling pulse dots along outer orbit */}
      {visible && [0, 1].map((i) => (
        <motion.circle
          key={`pulse-outer-${i}`}
          r="2.5"
          fill="#4ADE80"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 4, delay: i * 2, repeat: Infinity }}
        >
          <animateMotion
            dur="8s"
            begin={`${i * 4}s`}
            repeatCount="indefinite"
            path="M 700,250 A 300,130 0 1,1 100,250 A 300,130 0 1,1 700,250"
          />
        </motion.circle>
      ))}

      {/* Center glow */}
      <circle cx="400" cy="250" r="100" fill="url(#center-glow)" />
    </svg>
  )
}

// ── Stats Tickers ───────────────────────────────────────────────────────────────

function StatTicker({ label, value, suffix, delay }: { label: string, value: number, suffix: string, delay: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0
          const step = () => {
            start += Math.ceil(value / 40)
            if (start >= value) { setCount(value); return }
            setCount(start)
            requestAnimationFrame(step)
          }
          setTimeout(step, delay * 1000)
          ob.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [value, delay])

  return (
    <div ref={ref} className="text-center">
      <div className="text-[28px] md:text-[36px] font-bold text-white tracking-tight">
        {count.toLocaleString("pt-BR")}{suffix}
      </div>
      <div className="text-[12px] text-white/40 font-medium mt-1">{label}</div>
    </div>
  )
}

// ── Componente Principal ────────────────────────────────────────────────────────

export default function IntegrationsSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="integracoes"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#020204" }}
      aria-label="Integrações"
    >
      {/* Global Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#7C6FF5]/10 via-transparent to-transparent blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[12px] font-medium text-white/70">12 integrações nativas disponíveis</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-6"
          >
            Conecte tudo. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6FF5] via-[#A9A0FF] to-[#4ADE80]">
              Em um só lugar.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Sua IA se integra nativamente com WhatsApp, Instagram, CRMs, Calendários e mais — sem código, sem complicação.
          </motion.p>
        </div>

        {/* Orbit Animation Area */}
        <div
          ref={sectionRef}
          className="relative w-full mx-auto"
          style={{ height: "500px", maxWidth: "800px" }}
        >
          {/* SVG Orbits & Pulses */}
          <PulseLines visible={visible} />

          {/* Inner Ring */}
          <OrbitRing items={RING_1} radius={180} speed={0.15} visible={visible} cardSize={54} />

          {/* Outer Ring */}
          <OrbitRing items={RING_2} radius={300} speed={-0.08} visible={visible} cardSize={48} />

          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, type: "spring", stiffness: 130, damping: 18 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3"
          >
            {/* Pulsing ring */}
            <motion.div
              animate={visible ? { scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[120px] h-[120px] rounded-full border-2 border-[#7C6FF5]/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
              animate={visible ? { scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] } : {}}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[140px] h-[140px] rounded-full border border-[#4ADE80]/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            
            {/* Logo */}
            <div className="w-[90px] h-[90px] rounded-[26px] bg-gradient-to-br from-[#9b8ff7] via-[#7C6FF5] to-[#5b4fd4] flex items-center justify-center shadow-[0_0_60px_rgba(124,111,245,0.5),0_10px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" className="relative z-10">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-[16px] font-bold text-white tracking-tight">SuperAI</div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-medium mt-0.5">Hub Central</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          <StatTicker label="Integrações Nativas" value={12} suffix="+" delay={0} />
          <StatTicker label="Mensagens Sincronizadas" value={100} suffix="%" delay={0.2} />
          <StatTicker label="Tempo de Setup" value={5} suffix=" min" delay={0.4} />
          <StatTicker label="Uptime Garantido" value={99} suffix=".9%" delay={0.6} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[14px] hover:bg-white/10 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Ver todas as integrações
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
