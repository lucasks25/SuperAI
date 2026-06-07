"use client"

import { motion } from "framer-motion"

const BENEFITS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Resposta em 45 segundos",
    desc: "A IA atende no WhatsApp, site e e-mail 24 horas por dia — sem deixar nenhum cliente esperando.",
    metric: "↓ 99% tempo de espera",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Qualificação automática",
    desc: "Cada contato é analisado, priorizado e encaminhado ao time certo — sem esforço manual.",
    metric: "3× mais leads fechados",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    ),
    title: "Agenda nunca mais vazia",
    desc: "Confirmação e lembrete automático eliminam faltas e cancelamentos de última hora.",
    metric: "↓ 60% de faltas",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    title: "CRM sempre em dia",
    desc: "Cada conversa vira dado estruturado no CRM automaticamente. Nada preenchido à mão.",
    metric: "100% de dados capturados",
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#080808" }} aria-label="Benefícios">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[48px] font-bold text-white leading-tight tracking-tight mb-4">
            O que muda no seu negócio
          </h2>
          <p className="text-[16px] text-white/40 max-w-md mx-auto leading-relaxed">
            Resultados documentados pelos clientes SuperAI nas primeiras 4 semanas.
          </p>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col gap-4 rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-white/60">{b.icon}</div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[16px] font-semibold text-white leading-snug">{b.title}</p>
                <p className="text-[13px] text-white/40 leading-relaxed flex-1">{b.desc}</p>
              </div>
              <p className="text-[12px] font-semibold text-[#4ADE80]">{b.metric}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
