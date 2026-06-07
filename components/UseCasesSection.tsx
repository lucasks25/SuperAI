"use client"

import { motion } from "framer-motion"

// Clone de: "What makes respond.io AI Agents different from competitors?"
// 2×2 grid · cada card tem eyebrow + título + descrição + mockup de UI no fundo

// ── Mini UIs dentro dos cards ──────────────────────────────────────────────────

function LeadProgressionUI() {
  return (
    <div className="mt-5 rounded-xl overflow-hidden p-4" style={{ background: "#1a1a2e" }}>
      <div className="flex items-center gap-2.5">
        {/* Lead frio */}
        <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg flex-1" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)" }}>
          <div className="w-6 h-6 rounded-full bg-[#64748b] flex items-center justify-center text-[9px] font-bold text-white shrink-0">A</div>
          <div>
            <p className="text-[9px] text-white/50">Ana Lima</p>
            <p className="text-[8px] font-bold text-[#ef4444]">Lead Frio</p>
          </div>
        </div>
        {/* Seta */}
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="shrink-0">
          <path d="M0 5h16M11 1l5 4-5 4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* Lead quente */}
        <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg flex-1" style={{ background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.28)" }}>
          <div className="w-6 h-6 rounded-full bg-[#7C6FF5] flex items-center justify-center text-[9px] font-bold text-white shrink-0">A</div>
          <div>
            <p className="text-[9px] text-white/50">Ana Lima</p>
            <p className="text-[8px] font-bold text-[#4ade80]">Lead Quente</p>
          </div>
        </div>
      </div>
      <div className="mt-3 px-3 py-2 rounded-lg flex items-center gap-2" style={{ background: "rgba(124,111,245,0.08)", border: "1px solid rgba(124,111,245,0.18)" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="#7C6FF5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <p className="text-[9px] font-semibold text-[#7C6FF5]">IA qualificou · Encaminhado ao vendedor</p>
      </div>
    </div>
  )
}

function HumanLoopUI() {
  return (
    <div className="mt-5 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      {/* WA header */}
      <div className="px-3 py-2 flex items-center gap-2 bg-[#075E54]">
        <div className="w-6 h-6 rounded-full bg-[#7C6FF5] flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <p className="text-[9px] font-semibold text-white">SuperAI</p>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"/>
          <span className="text-[8px] text-white/50">online</span>
        </div>
      </div>
      {/* Mensagens */}
      <div className="px-3 py-3 flex flex-col gap-1.5" style={{ background: "#ECE5DD" }}>
        <div className="flex justify-start">
          <div className="px-2.5 py-1.5 text-[9px] leading-relaxed text-[#111B21] max-w-[80%]" style={{ background: "#fff", borderRadius: "8px 8px 8px 2px" }}>
            Quero agendar uma consulta
          </div>
        </div>
        <div className="flex justify-end">
          <div className="px-2.5 py-1.5 text-[9px] leading-relaxed text-[#111B21] max-w-[80%]" style={{ background: "#DCF8C6", borderRadius: "8px 8px 2px 8px" }}>
            Qual horário prefere?
          </div>
        </div>
      </div>
      {/* Indicador */}
      <div className="px-3 py-2 flex items-center gap-2" style={{ background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"/>
        <p className="text-[8px] font-semibold text-white/40">IA respondendo · Equipe monitorando</p>
      </div>
    </div>
  )
}

function SegmentUI() {
  const segs = [
    { label: "Clínicas e Consultórios", active: true },
    { label: "Imobiliárias", active: false },
    { label: "Agências Digitais", active: false },
    { label: "Restaurantes", active: false },
  ]
  return (
    <div className="mt-5 rounded-xl p-3 flex flex-col gap-1.5" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}>
      {segs.map((s) => (
        <div
          key={s.label}
          className="flex items-center justify-between px-3 py-2 rounded-lg text-[9px] font-medium"
          style={{
            background: s.active ? "rgba(124,111,245,0.12)" : "rgba(255,255,255,0.03)",
            border: s.active ? "1px solid rgba(124,111,245,0.25)" : "1px solid rgba(255,255,255,0.06)",
            color: s.active ? "#7C6FF5" : "rgba(255,255,255,0.35)",
          }}
        >
          {s.label}
          {s.active && (
            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ background: "#7C6FF5", color: "#fff" }}>Ativo</span>
          )}
        </div>
      ))}
    </div>
  )
}

function IntegrationUI() {
  const items = [
    { label: "WhatsApp Business", color: "#25D366", icon: "W" },
    { label: "Google Calendar",   color: "#4285F4", icon: "G" },
    { label: "CRM Integrado",     color: "#7C6FF5", icon: "C" },
    { label: "n8n Automações",    color: "#FF6D00", icon: "N" },
  ]
  return (
    <div className="mt-5 rounded-xl p-3 flex flex-col gap-2" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}>
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="w-5 h-5 rounded-md flex items-center justify-center text-[8px] font-bold text-white shrink-0" style={{ background: it.color }}>
            {it.icon}
          </div>
          <p className="text-[9px] text-white/50 flex-1">{it.label}</p>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="#4ADE80" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      ))}
    </div>
  )
}

const CARDS = [
  {
    eyebrow: "Construída para conversão",
    title: "Transforma leads frios em oportunidades reais",
    desc: "A IA qualifica cada contato e encaminha ao time de vendas só quando o lead está pronto para fechar.",
    UI: LeadProgressionUI,
  },
  {
    eyebrow: "IA com humano no loop",
    title: "A IA conversa. Seu time foca em fechar",
    desc: "Atendimento totalmente automatizado com visibilidade total da equipe — e handoff em um clique quando necessário.",
    UI: HumanLoopUI,
  },
  {
    eyebrow: "Especializada por segmento",
    title: "Aprende o vocabulário do seu negócio",
    desc: "Clínicas, imobiliárias, agências ou restaurantes — cada segmento tem sua própria configuração e scripts.",
    UI: SegmentUI,
  },
  {
    eyebrow: "Integração nativa",
    title: "Conecta com as ferramentas que você já usa",
    desc: "WhatsApp, CRM, Google Calendar, n8n e muito mais — integrados nativamente, sem precisar de código.",
    UI: IntegrationUI,
  },
]

export default function UseCasesSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#0D0D0D" }} aria-label="Diferenciais">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-8">

        {/* Header — igual ao respond.io */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[44px] font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto mb-4"
          >
            O que diferencia a SuperAI dos concorrentes?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="text-[15px] max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            A SuperAI roda em uma plataforma construída para alto volume de conversas, garantindo confiabilidade mesmo em picos de tráfego.
          </motion.p>
        </div>

        {/* 2×2 grid — mesmo layout da print */}
        <div className="grid md:grid-cols-2 gap-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Eyebrow */}
              <p className="text-[11px] font-semibold mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                {c.eyebrow}
              </p>
              {/* Title */}
              <p className="text-[18px] font-semibold text-white leading-snug mb-2">
                {c.title}
              </p>
              {/* Description */}
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                {c.desc}
              </p>
              {/* Mini UI mockup */}
              <c.UI />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
