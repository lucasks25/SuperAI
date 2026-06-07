"use client"

import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WHATSAPP_URL } from "@/lib/constants"

// ── Integrações com logos reais via CDN e eventos reais de simulação ──────────────────────
const INTEGRATION_NODES = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    logo: "https://cdn.jsdelivr.net/gh/nickhale/branding@main/whatsapp-icon.svg",
    color: "#25D366",
    x: -260,
    y: -110,
    event: "💬 WhatsApp: Lead qualificado e agendado com sucesso!",
    fallbackText: "WA",
  },
  {
    id: "instagram",
    name: "Instagram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    color: "#E4405F",
    x: -280,
    y: 40,
    event: "📸 Instagram: Comentário em post respondido via Direct!",
    fallbackText: "IG",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
    color: "#FF7A59",
    x: 260,
    y: -110,
    event: "📊 HubSpot: Dados do lead enriquecidos e enviados ao CRM!",
    fallbackText: "HS",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
    color: "#00A1E0",
    x: 280,
    y: 40,
    event: "☁️ Salesforce: Nova oportunidade de negócio criada!",
    fallbackText: "SF",
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    logo: "https://www.vectorlogo.zone/logos/google_calendar/google_calendar-icon.svg",
    color: "#4285F4",
    x: 200,
    y: 180,
    event: "📅 Google Calendar: Reunião agendada na agenda do vendedor!",
    fallbackText: "GC",
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
    color: "#635BFF",
    x: -200,
    y: 180,
    event: "💳 Stripe: Faturamento sincronizado e plano ativado!",
    fallbackText: "ST",
  },
  {
    id: "slack",
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    color: "#4A154B",
    x: -80,
    y: -210,
    event: "🔔 Slack: Alerta de oportunidade enviado ao canal #vendas!",
    fallbackText: "SL",
  },
  {
    id: "n8n",
    name: "n8n",
    logo: "https://www.vectorlogo.zone/logos/n8nio/n8nio-icon.svg",
    color: "#FF6D00",
    x: 80,
    y: -210,
    event: "⚡ n8n: Fluxo operacional secundário disparado via webhook!",
    fallbackText: "N8",
  },
]

export default function IntegrationsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [ripple, setRipple] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Rastreamento de responsividade para ajustar tamanho orbital
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Loop cíclico da animação das integrações
  useEffect(() => {
    const interval = setInterval(() => {
      // Dispara a colisão / ripple pouco antes de mudar o index ativo
      setTimeout(() => {
        setRipple(true)
        setTimeout(() => setRipple(false), 1000)
      }, 1100)

      setActiveIndex((prev) => (prev + 1) % INTEGRATION_NODES.length)
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  const activeNode = INTEGRATION_NODES[activeIndex]
  const mult = isMobile ? 0.55 : 1

  return (
    <section
      id="integracoes"
      className="relative py-24 md:py-32 overflow-hidden bg-[#020204]"
      aria-label="Integrações"
    >
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#7C6FF5]/10 via-transparent to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[12px] font-medium text-white/70">Ecossistema Conectado</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
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
            Sua IA se conecta nativamente às ferramentas que você já usa, automatizando tarefas e sincronizando dados sem que você precise digitar uma linha de código.
          </motion.p>
        </div>

        {/* Cinematic Hub & Spoke Animation Area */}
        <div
          ref={sectionRef}
          className="relative w-full mx-auto flex items-center justify-center"
          style={{ height: isMobile ? "320px" : "480px", maxWidth: "800px" }}
        >
          {/* SVG para linhas e partículas de energia */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="-350 -250 700 500"
          >
            {/* Linhas de conexão estáticas */}
            {INTEGRATION_NODES.map((node) => (
              <line
                key={node.id}
                x1={node.x * mult}
                y1={node.y * mult}
                x2={0}
                y2={0}
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1.5"
              />
            ))}

            {/* Linha brilhante do canal de dados ativo */}
            <motion.line
              x1={activeNode.x * mult}
              y1={activeNode.y * mult}
              x2={0}
              y2={0}
              stroke={activeNode.color}
              strokeWidth="2"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="transition-all duration-500"
            />

            {/* Partícula de energia ativa correndo em direção ao centro */}
            <motion.circle
              key={"particle-" + activeNode.id}
              cx={activeNode.x * mult}
              cy={activeNode.y * mult}
              r={isMobile ? 3 : 5.5}
              fill={activeNode.color}
              animate={{
                cx: [activeNode.x * mult, 0],
                cy: [activeNode.y * mult, 0],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeIn",
              }}
              style={{ filter: "drop-shadow(0 0 6px " + activeNode.color + ")" }}
            />
          </svg>

          {/* Central Hub (SuperAI Logo) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
            
            {/* Notificação Flutuante Realista de Eventos */}
            <div className="absolute top-[-95px] md:top-[-115px] left-1/2 -translate-x-1/2 z-40 w-[240px] md:w-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-neutral-900/95 border border-white/10 px-3.5 py-2.5 rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.6)] flex items-center justify-center gap-2 border-l-4"
                  style={{ borderLeftColor: activeNode.color }}
                >
                  <span className="text-[10px] md:text-[11.5px] font-medium text-white/95 leading-normal tracking-wide text-center">
                    {activeNode.event}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Ripple Effects na colisão de dados */}
            <AnimatePresence>
              {ripple && (
                <>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.7 }}
                    animate={{ scale: isMobile ? 1.7 : 2.2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9 }}
                    className="absolute w-[90px] h-[90px] rounded-full border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ borderColor: activeNode.color }}
                  />
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.4 }}
                    animate={{ scale: isMobile ? 2.2 : 3, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.3, delay: 0.1 }}
                    className="absolute w-[90px] h-[90px] rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ borderColor: activeNode.color }}
                  />
                </>
              )}
            </AnimatePresence>

            {/* Hub Card */}
            <div className="relative group w-[75px] h-[75px] md:w-[95px] md:h-[95px] flex items-center justify-center">
              {/* Anel neon giratório de fundo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-3px] rounded-[24px] md:rounded-[28px] bg-gradient-to-r from-[#7C6FF5] via-[#4ADE80] to-[#7C6FF5] opacity-40 blur-[4px] pointer-events-none"
              />
              
              <div className="w-full h-full rounded-[20px] md:rounded-[24px] bg-gradient-to-br from-[#9b8ff7] via-[#7C6FF5] to-[#5b4fd4] flex items-center justify-center shadow-[0_0_40px_rgba(124,111,245,0.4),0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)] relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <svg width="34" height="34" viewBox="0 0 24 24" fill="white" className="relative z-10 md:w-[44px] md:h-[44px]">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <div className="text-center mt-3.5">
              <div className="text-[14px] md:text-[16px] font-bold text-white tracking-tight">SuperAI</div>
              <div className="text-[8px] md:text-[9.5px] text-white/30 uppercase tracking-[0.15em] font-medium mt-0.5">Central Hub</div>
            </div>
          </div>

          {/* Nós periféricos (Logos) */}
          {INTEGRATION_NODES.map((node, index) => {
            const isActive = index === activeIndex
            return (
              <LogoNode
                key={node.id}
                node={node}
                isActive={isActive}
                mult={mult}
                isMobile={isMobile}
              />
            )
          })}

        </div>

        {/* Tickers de Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          <StatTicker label="Integrações Nativas" value={12} suffix="+" delay={0} />
          <StatTicker label="Mensagens Sincronizadas" value={100} suffix="%" delay={0.15} />
          <StatTicker label="Tempo de Setup" value={5} suffix=" min" delay={0.3} />
          <StatTicker label="Uptime Garantido" value={99} suffix=".9%" delay={0.45} />
        </motion.div>

        {/* CTA do rodapé da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[14px] hover:bg-white/10 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Quero integrar meus canais
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ── Nó de Logo com Tratamento de Erros e Fallback ───────────────────────────────────
function LogoNode({
  node,
  isActive,
  mult,
  isMobile,
}: {
  node: typeof INTEGRATION_NODES[0]
  isActive: boolean
  mult: number
  isMobile: boolean
}) {
  const [imgError, setImgError] = useState(false)

  const style = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(calc(-50% + " + (node.x * mult) + "px), calc(-50% + " + (node.y * mult) + "px))",
  } as CSSProperties

  return (
    <motion.div
      style={style}
      animate={isActive ? { scale: 1.12 } : { scale: 1 }}
      className="flex flex-col items-center gap-1.5 z-20"
    >
      <div
        className={"rounded-[14px] md:rounded-[18px] flex items-center justify-center border transition-all duration-500 " +
          (isMobile ? "w-[44px] h-[44px] " : "w-[58px] h-[58px] ") +
          (isActive
            ? "bg-white/10 border-white/30 shadow-[0_0_20px_var(--node-glow)]"
            : "bg-white/[0.04] border-white/10 hover:border-white/20 hover:scale-105")
        }
        style={{
          "--node-glow": node.color + "50",
          boxShadow: isActive ? "0 0 20px " + node.color + "40, inset 0 1px 0 rgba(255,255,255,0.15)" : "none",
        } as CSSProperties}
      >
        {!imgError ? (
          <img
            src={node.logo}
            alt={node.name}
            className="w-[55%] h-[55%] object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-[70%] h-[70%] rounded-lg flex items-center justify-center font-bold text-white text-[10px] md:text-xs"
            style={{ background: node.color }}
          >
            {node.fallbackText}
          </div>
        )}
      </div>
      <span
        className={"text-[8.5px] md:text-[10px] font-semibold tracking-wide transition-colors duration-500 " +
          (isActive ? "text-white" : "text-white/40")
        }
      >
        {node.name}
      </span>
    </motion.div>
  )
}

// ── Ticker com Contador Incremental Animado ─────────────────────────────────────────
function StatTicker({
  label,
  value,
  suffix,
  delay,
}: {
  label: string
  value: number
  suffix: string
  delay: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0
          const step = () => {
            start += Math.ceil(value / 35)
            if (start >= value) {
              setCount(value)
              return
            }
            setCount(start)
            requestAnimationFrame(step)
          }
          setTimeout(step, delay * 1000)
          ob.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [value, delay])

  return (
    <div ref={ref} className="text-center">
      <div className="text-[28px] md:text-[36px] font-bold text-white tracking-tight">
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="text-[12px] text-white/40 font-medium mt-1">{label}</div>
    </div>
  )
}
